import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";



interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="py-4 px-3 rounded bg-gray-800 flex gap-3 items-center w-full outline-none  focus:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

//function TextInputIcon() {}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400' {...props} />;
}
