import { HTMLProps } from "react";

export const NextHeading1 = (props: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1 {...props} className="text-4xl mt-10 mb-4 font-bold">
      {props.children}
    </h1>
  );
};

export const NextHeading2 = (props: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2 {...props} className="text-3xl mt-10 mb-4 font-bold">
      {props.children}
    </h2>
  );
};

export const NextHeading3 = (props: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h3 {...props} className="text-2xl mt-10 mb-6 font-bold">
      {props.children}
    </h3>
  );
};
