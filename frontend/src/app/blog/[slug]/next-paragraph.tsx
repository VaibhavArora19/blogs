import { HTMLProps } from "react";

export const NextParagraph = (props: HTMLProps<HTMLParagraphElement>) => {
  return (
    <p {...props} className="text-[1.15rem] mt-4 leading-7 text-gray-300">
      {props.children}
    </p>
  );
};
