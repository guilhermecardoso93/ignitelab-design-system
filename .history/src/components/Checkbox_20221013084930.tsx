import { clsx } from "clsx";
import { ReactNode } from 'react';

export interface CheckboxProps {
  children: ReactNode;
}

export function Checkbox({  children }: CheckboxProps) {
  return (
    <div
      className={clsx("text-gray-100 font-sans", {
        
      })}
    >
      {children}
    </div>
  );
}
