import {
  BookmarkIcon,
  DoubleArrowDownIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

const Hero = () => {
  return (
    <div className="w-[90vw] max-w-6xl mx-auto">
      <div className="pt-36 flex flex-col gap-5">
        <p className="text-center text-2xl md:text-2xl lg:text-4xl">
          Hi, my name is
        </p>
        <p className="text-center text-5xl md:text-4xl lg:text-6xl xl:text-9xl font-semibold">
          Soumit Satiar
        </p>
        <p className="text-center md:text-xl xl:text-3xl">
          Currently, I am looking for full-time offers in Full Stack, Backend,
          DevOps and Cloud Engineering roles.
        </p>
        <div className="flex gap-4 justify-center pt-6">
          <Button size={"3"} variant="outline">
            <FileTextIcon /> Github
          </Button>
          <Button size={"3"} variant="outline">
            <FileTextIcon /> Checkout Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
