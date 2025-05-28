import { Text } from "@radix-ui/themes";
import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

const ErrorMessage: React.FC<Props> = ({ children }) => {
  if (!children) return null;
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};

export default ErrorMessage;
