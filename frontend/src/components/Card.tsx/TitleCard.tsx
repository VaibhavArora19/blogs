"use client";

import { For, HStack, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { TiArrowRight } from "react-icons/ti";

type TProps = {
  tags?: string[];
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
};

const TitleCard = ({ tags, title, description, date, readTime, imageUrl }: TProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`mt-6 border-2 border-gray-900 rounded-md flex overflow-hidden cursor-pointer relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-cover bg-center blur-[200px] brightness-75 bg-[url('/rock.png')]`}></div>
      <div className="pl-12 w-[73%]">
        {tags && (
          <HStack className="pt-8">
            <For each={tags}>
              {(tag) => (
                <VStack key={tag}>
                  <IconButton aria-label="Blog tag" variant="surface" size={"md"} padding={2}>
                    <Text textStyle={"md"}>{tag}</Text>
                  </IconButton>
                </VStack>
              )}
            </For>
          </HStack>
        )}

        <Text textStyle={"3xl"} className="font-bold mt-8">
          {title}
        </Text>
        <Text textStyle={"md"} className="mt-4 text-gray-300">
          {description}
        </Text>
        <div className="flex justify-between">
          <Text textStyle={"sm"} className="mt-4 text-gray-500">
            {date + " . " + readTime}
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
      <Image src={imageUrl} alt={title} width={220} height={200} className="w-[27%] shadow-inner brightness-90" />
    </div>
  );
};

export default TitleCard;
