"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appName: string;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, className, appName, ...rest } = props;
  return (
    <button
      type="button"
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
