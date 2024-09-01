import { Box, Flex, Heading, Text } from "@radix-ui/themes";

export default function ContactMe() {
  return (
    <div id="contact-me" className="mb-5">
      <Heading size="9" className="text-center mt-40 mb-8">
        Contact Me
      </Heading>
      <Box maxWidth={"500px"} className="mx-auto">
        <Flex gap={"9"} justify={"between"}>
          <div className="flex flex-col">
            <Text size={"6"}>Email</Text>
            <Text size={"6"}>Phone no.</Text>
          </div>
          <div className="flex flex-col">
            <Text size={"6"}>soumitsatiar@gmail.com</Text>
            <Text size={"6"}>+91-7029618073</Text>
          </div>
        </Flex>
      </Box>
    </div>
  );
}
