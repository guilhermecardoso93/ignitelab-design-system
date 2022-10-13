import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextInputProps {
  children: ReactNode;
  asChild: boolean;
}

export function TextInput({ children, asChild }: TextInputProps) {
  return (
    <input
      className={clsx(
        ""
      )}
    />
  );
}
