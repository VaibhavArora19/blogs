import { For, HStack, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { TiArrowRight } from "react-icons/ti";

type TProps = {
  tags?: string[];
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl?: string;
};

const TitleCard = ({ tags, title, description, date, readTime, imageUrl }: TProps) => {
  return (
    <div className="mt-6 border-2 border-gray-900 rounded-md pl-12 pb-8">
      <div>
        {tags && (
          <HStack className=" pt-8 ">
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
          <Icon fontSize={"40px"} color={"gray.500"}>
            <TiArrowRight />
          </Icon>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TitleCard;
