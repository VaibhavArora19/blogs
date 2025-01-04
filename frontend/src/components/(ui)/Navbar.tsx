import { Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-8">
      <div>
        <Text textStyle="3xl" className="font-bold">
          Navbar
        </Text>
      </div>
      <div className="flex gap-4">
        <Text textStyle={"md"} className="p-2">
          About
        </Text>
        <Text textStyle={"md"} className="p-2">
          Archive
        </Text>
      </div>
    </div>
  );
};

export default Navbar;
