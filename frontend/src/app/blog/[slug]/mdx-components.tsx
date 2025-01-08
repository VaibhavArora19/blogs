import { NextHeading1, NextHeading2, NextHeading3 } from "./next-heading";
import { NextImage } from "./next-image";
import { NextLink } from "./next-link";
import { NextParagraph } from "./next-paragraph";

export const MDXComponents = {
  img: NextImage,
  a: NextLink,
  h1: NextHeading1,
  h2: NextHeading2,
  h3: NextHeading3,
  p: NextParagraph,
};
