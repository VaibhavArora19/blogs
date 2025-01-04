import { Text, Input } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between mt-14">
        <Text textStyle={"3xl"} className="font-bold">
          Posts
        </Text>
        <Text textStyle={"md"}>Crafting engineering ✨</Text>
      </div>
      <div className="mt-14">
        <Input placeholder="Using squid's post hook" className="pl-4" variant={"subtle"} />
      </div>
    </>
  );
};

export default Header;
