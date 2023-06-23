import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

Button.defaultProps = {
  disabled: false,
};
