import { HTMLProps } from "react";

export const NextParagraph = (props: HTMLProps<HTMLParagraphElement>) => {
  return (
    <p {...props} className="text-lg mt-4">
      {props.children}
    </p>
  );
};
