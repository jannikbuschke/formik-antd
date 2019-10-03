import "@testing-library/jest-dom/extend-expect";
import React, { ReactNode } from "react";
import { Formik } from "formik";
import { render, fireEvent, waitForDomChange } from "@testing-library/react";
import FormItem from ".";
import Input from "../input";
import Form from "../form/form";
import Select from "../select";
import SubmitButton from "../submit-button";
const { Option } = Select;

const Test = ({
  children,
  validate
}: {
  children: ReactNode;
  validate?: () => object;
}) => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}} validate={validate}>
      <Form>
        <FormItem name="test">{children}</FormItem>
        <SubmitButton data-testid="submit" />
      </Form>
    </Formik>
  );
};

test("displays validation result", async () => {
  const validate = () => ({ test: "error" });
  const { getByTestId, queryByText } = render(
    <Test validate={validate}>
      <Input name="test" data-testid="input" />
    </Test>
  );
  expect(queryByText("error")).not.toBeInTheDocument();
  fireEvent.change(getByTestId("input"), {
    target: { name: "test", value: "test" }
  });
  fireEvent.click(getByTestId("submit"));
  await waitForDomChange();
  expect(queryByText("error")).toBeInTheDocument();
});

test("handles changes on multiselect without prop-types error", async () => {
  const { getByTestId, queryByText, getByText } = render(
    <Test>
      <Select name="test" data-testid="input" mode="multiple">
        <Option value="1">1</Option>
        <Option value="2">2</Option>
      </Select>
    </Test>
  );
  expect(queryByText("error")).not.toBeInTheDocument();
  fireEvent.click(getByTestId("input"));
  fireEvent.click(getByText("1"));
  console.error = jest.fn();
  fireEvent.click(getByTestId("submit"));
  await waitForDomChange();
  expect(console.error).not.toHaveBeenCalled();
  //@ts-ignore
  console.error.mockRestore();
});

test("displays validation result on nested input", async () => {
  const validate = () => "error";
  const { getByTestId, queryByText } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <FormItem name="test" validate={validate}>
          <Input name="test" data-testid="input" />
        </FormItem>
        <SubmitButton data-testid="submit" />
      </Form>
    </Formik>
  );
  expect(queryByText("error")).not.toBeInTheDocument();
  fireEvent.change(getByTestId("input"), {
    target: { name: "test", value: "test" }
  });
  fireEvent.blur(getByTestId("input"));
  fireEvent.click(getByTestId("submit"));
  await waitForDomChange();
  expect(queryByText("error")).toBeInTheDocument();
});

test("displays validation success ", async () => {
  const validate = () => undefined;
  const { getByTestId, queryByLabelText } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <FormItem name="test" validate={validate} showValidateSuccess>
          <Input name="test" data-testid="input" />
        </FormItem>
      </Form>
    </Formik>
  );
  expect(queryByLabelText("icon: check-circle")).not.toBeInTheDocument();
  fireEvent.change(getByTestId("input"), {
    target: { name: "test", value: "test" }
  });
  fireEvent.blur(getByTestId("input"));
  expect(queryByLabelText("icon: check-circle")).toBeInTheDocument();
});
