import Link from "next/link";
import type { HTMLProps } from "react";

export const NextLink = (props: HTMLProps<HTMLAnchorElement>) => {
  const { href, ...rest } = props;
  if (!href) return null;
  const isAnchorLink = href.startsWith("#");

  if (isAnchorLink) {
    return <a aria-label={props["aria-label"]} title={href.replace("#", "")} href={href} {...rest} />;
  }
  return (
    <Link href={href} className={"text-blue-800 underline underline-offset-4"} target={props.target} title={props.target} rel={props.rel}>
      {props.children}
    </Link>
  );
};
