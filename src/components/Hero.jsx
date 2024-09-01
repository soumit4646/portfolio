import {
  BookmarkIcon,
  DoubleArrowDownIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import { Button, Heading, Text } from "@radix-ui/themes";
import React from "react";

const Hero = () => {
  return (
    
    // h-[calc(100vh-60px)]
    <div className="h-[calc(100vh-60px)] flex flex-col pt-44 gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-4xl">Hi, my name is</p>
        <p className="text-9xl">Soumit Satiar</p>
        <p className="text-6xl">I translate ideas into</p>
        <p className="text-5xl">products.</p>
      </div>
      <p className="text-2xl max-w-2xl">
        Currently, I am looking for full-time offers in Full Stack, Backend,
        DevOps and Cloud Engineering roles.
      </p>
      <div className="flex gap-4">
        <Button size={"4"} variant="outline">
          <FileTextIcon /> Github
        </Button>
        <Button size={"4"} variant="outline">
          <FileTextIcon /> Checkout Resume
        </Button>
      </div>

      <div className="mt-24 flex justify-center gap-4">

          <DoubleArrowDownIcon height={40} width={40}/>
          <Text className="text-2xl">Scroll Down</Text>
      </div>
    </div>
  );
};

export default Hero;
