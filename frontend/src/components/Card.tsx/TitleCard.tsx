"use client";

import { TBlog } from "@/types/blogs";
import { For, HStack, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { TiArrowRight } from "react-icons/ti";
import { useRouter } from "next/navigation";

const TitleCard = ({ tags, title, brief, publishedAt, readTimeInMinutes, coverImage, slug }: TBlog["node"]) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`mt-6 border-2 border-gray-900 rounded-md flex overflow-hidden cursor-pointer relative`}
      onClick={() => router.push(`/blog/${slug}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        //@ts-expect-error image url exists
        style={{ "--image-url": `url(${coverImage?.url ? coverImage.url : "/rock.png"})` }}
        className={`absolute inset-0 bg-cover bg-center blur-[200px] brightness-75 bg-[image:var(--image-url)]`}
      ></div>
      <div className={`pl-12 ${coverImage?.url ? "w-[68%]" : "w-[100%]"} pb-8`}>
        {tags && (
          <HStack className="pt-8">
            <For each={tags}>
              {(tag) => (
                <VStack key={tag.name}>
                  <IconButton aria-label="Blog tag" variant="surface" size={"md"} padding={2}>
                    <Text textStyle={"md"}>{tag.name}</Text>
                  </IconButton>
                </VStack>
              )}
            </For>
          </HStack>
        )}

        <Text textStyle={"3xl"} className="font-bold mt-8 w-[90%]">
          {title}
        </Text>
        <Text textStyle={"md"} className="mt-4 text-gray-300 w-[85%] text-clip">
          {brief.substring(0, 110) + "..."}
        </Text>
        <div className="flex justify-between">
          <Text textStyle={"sm"} className="mt-4 text-gray-500">
            {publishedAt + " . " + readTimeInMinutes + " mins"}
          </Text>
          <Icon
            fontSize={"30px"}
            color={"gray.500"}
            className={`mr-16 transition duration-200 ease-in ${isHovered ? "translate-x-2" : "translate-x-0"}`}
          >
            <TiArrowRight />
          </Icon>
        </div>
      </div>
      {coverImage?.url !== undefined && (
        <Image src={coverImage?.url} alt={title} width={220} height={200} className="w-[32%] brightness-90 object-cover" unoptimized />
      )}
    </div>
  );
};

export default TitleCard;
