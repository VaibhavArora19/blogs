import { Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-8">
      <Text textStyle="2xl" className="font-bold cursor-pointer">
        Vaibhav&apos;s Blog
      </Text>
      <div className="flex gap-4">
        <Text textStyle={"md"} className="p-2 cursor-pointer">
          About
        </Text>
        <Text textStyle={"md"} className="p-2 cursor-pointer">
          Archive
        </Text>
      </div>
    </div>
  );
};

export default Navbar;
