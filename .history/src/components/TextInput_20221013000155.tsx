import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextInputProps {}

export function TextInput({}: TextInputProps) {
  return (
    <input
      className={clsx(
        "py-4 px-3 rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400"
      )}
    />
  );
}
