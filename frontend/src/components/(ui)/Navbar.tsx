"use client";

import { useRouter } from "next/navigation";
import { Text } from "@chakra-ui/react";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between mt-8">
      <Text textStyle="2xl" className="font-bold cursor-pointer" onClick={() => router.push("/")}>
        Vaibhav&apos;s Blog
      </Text>
      <div className="flex gap-4">
        <Text textStyle={"md"} className="p-2 cursor-pointer" onClick={() => router.push("/https://vaibhavcodes.vercel.app/about")}>
          About
        </Text>
      </div>
    </div>
  );
};

export default Navbar;
