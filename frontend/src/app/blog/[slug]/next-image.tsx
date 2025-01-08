import Image from "next/image";
import type { HTMLProps } from "react";

export function NextImage(props: HTMLProps<HTMLImageElement>) {
  const { src } = props;

  if (src) {
    if (src.startsWith("http")) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={src} width={1000} height={500} className="flex justify-center m-auto" />;
    }
    return (
      <Image
        width={1000}
        height={500}
        alt={props.alt || ""}
        title={props.alt || ""}
        crossOrigin="anonymous"
        src={src}
        placeholder="empty"
        className="flex justify-center"
      />
    );
  }
  return <p>Currently, image is not available. {src}</p>;
}
