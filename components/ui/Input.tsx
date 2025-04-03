"use client";

import clsx from "clsx";
import React, { forwardRef } from "react";

interface IInputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
  containerStyle?: string;
}

function Input(
  { containerStyle, icon, ...props }: IInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <label className={clsx("input", containerStyle)}>
      {icon}
      <input ref={ref} className={clsx("grow", props.className)} {...props} />
    </label>
  );
}

export default forwardRef<HTMLInputElement, IInputProps>(Input);
