import * as React from "react";
import { Field, FieldArray, FormikProps } from "formik";
import { Button, Tabs } from "antd";

export const TabArrayEditor = ({
  name,
  itemEditor
}: {
  name: string;
  itemEditor: any;
}) => (
  <Field>
    {({ form }: { form: FormikProps<any> }) => {
      const data = form.values[name];
      return (
        <FieldArray
          name={name}
          render={arrayHelpers => (
            <div
              style={{
                display: "grid",
                gridGap: 3,
                gridAutoRows: "auto"
              }}
            >
              <Tabs defaultActiveKey="1">
                {data.map((item: any, index: number) => (
                  <Tabs.TabPane tab="Tab 1" key={"" + index}>
                    {React.cloneElement(itemEditor, {
                      name: `${name}.${index}`
                    })}
                  </Tabs.TabPane>
                ))}
                <Tabs.TabPane tab="Tab 1" key="1">
                  Content of Tab Pane 1
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">
                  Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3">
                  Content of Tab Pane 3
                </Tabs.TabPane>
              </Tabs>
              ,
              {data && data.length > 0 ? (
                data.map((item: any, index: number) => (
                  <div
                    key={index}
                    style={{
                      display: "grid",
                      gridGap: 3,
                      gridTemplateColumns: "1fr 40px 40px"
                    }}
                  >
                    {React.cloneElement(itemEditor, {
                      name: `${name}.${index}`
                    })}
                    <Button onClick={() => arrayHelpers.remove(index)}>
                      -
                    </Button>
                    <Button
                      htmlType="submit"
                      onClick={() => arrayHelpers.insert(index, "")}
                    >
                      +
                    </Button>
                  </div>
                ))
              ) : (
                <Button htmlType="submit" onClick={() => arrayHelpers.push("")}>
                  Add
                </Button>
              )}
            </div>
          )}
        />
      );
    }}
  </Field>
);

export const ArrayEditor = ({
  name,
  itemEditor
}: {
  name: string;
  itemEditor: any;
}) => (
  <Field>
    {({ form }: { form: FormikProps<any> }) => {
      const data = form.values[name];

      return (
        <FieldArray
          name={name}
          render={arrayHelpers => (
            <div
              style={{
                display: "grid",
                gridGap: 3,
                gridAutoRows: "auto"
              }}
            >
              {data && data.length > 0 ? (
                data.map((item: any, index: number) => (
                  <div
                    key={index}
                    style={{
                      display: "grid",
                      gridGap: 3,
                      gridTemplateColumns: "1fr 40px 40px"
                    }}
                  >
                    {React.cloneElement(itemEditor, {
                      name: `${name}.${index}`
                    })}
                    <Button onClick={() => arrayHelpers.remove(index)}>
                      -
                    </Button>
                    <Button
                      htmlType="submit"
                      onClick={() => arrayHelpers.insert(index, "")}
                    >
                      +
                    </Button>
                  </div>
                ))
              ) : (
                <Button htmlType="submit" onClick={() => arrayHelpers.push("")}>
                  Add
                </Button>
              )}
              <Button htmlType="submit" onClick={() => arrayHelpers.push("")}>
                +
              </Button>
            </div>
          )}
        />
      );
    }}
  </Field>
);
