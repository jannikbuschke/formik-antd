import * as React from "react";
import { Button, message, notification } from "antd";

export const Action = ({
  onExecute,
  onError,
  onSuccess,
  children,
  showSuccess = true,
  showError = true
}: {
  children: any;
  showSuccess?: boolean;
  showError?: boolean;
  onExecute: () => Promise<void>;
  onSuccess?: () => void;
  onError?: (e: any) => void;
}) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <Button
      loading={loading}
      onClick={async () => {
        try {
          setLoading(true);
          await onExecute();
          if (onSuccess) {
            onSuccess();
          } else if (showSuccess) {
            message.success("success");
          }
        } catch (E) {
          if (onError) {
            onError(E);
          } else if (showError) {
            notification.error({ message: E.toString(), duration: 0 });
          }
        } finally {
          setLoading(false);
        }
      }}
    >
      {children}
    </Button>
  );
};
