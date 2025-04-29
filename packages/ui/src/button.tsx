"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appName: string;
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps): React.ReactElement => {
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
};

Button.displayName = "Button";
