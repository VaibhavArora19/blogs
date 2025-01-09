"use client";

import { useRouter } from "next/navigation";
import { Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between mt-24 mb-8">
      <Text>Vaibhav&apos;s Blog . All rights reserved</Text>
      <div className="flex gap-4">
        <TbWorld onClick={() => router.replace("https://vaibhavcodes.vercel.app")} className="cursor-pointer" />
        <FaGithub onClick={() => router.replace("https://github.com/VaibhavArora19")} className="cursor-pointer" />
        <FaTwitter onClick={() => router.replace("https://twitter.com/itsz_vaibhav")} className="cursor-pointer" />
        <FaLinkedin onClick={() => router.replace("https://www.linkedin.com/in/vaibhav-arora-5234301a0/")} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
