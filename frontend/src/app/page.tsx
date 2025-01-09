"use client";

import Header from "@/components/(ui)/Header";
import TitleCard from "@/components/Card.tsx/TitleCard";
import { useFetchBlogs } from "@/hooks/useFetchBlogs";

export default function Home() {
  const { data } = useFetchBlogs();

  return (
    <>
      <Header />
      {data &&
        data.map((data) => {
          return (
            <TitleCard
              key={data.id}
              id={data.id}
              tags={data.tags}
              url={data.url}
              title={data.title}
              brief={data.brief}
              publishedAt={data.publishedAt}
              readTimeInMinutes={data.readTimeInMinutes}
              coverImage={data.coverImage}
              slug={data.slug}
            />
          );
        })}
    </>
  );
}
