import { Box, Heading, TextArea, TextField } from "@radix-ui/themes";
import { useState } from "react";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id="contact-me" className="w-[90vw] md:max-w-6xl mx-auto pt-12 pb-12">
      <Heading size="9" className="text-center mt-40 mb-8">
        Contact Me
      </Heading>
      <Box maxWidth={"500px"} className="mx-auto">
        <form
          action="https://send.pageclip.co/r8hqPsjgSrkSWS35PRcCfenYSVRsYjK6/Contact_Form"
          className="pageclip-form flex flex-col gap-3 justify-center"
          method="post"
        >
          <TextField.Root
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size={"3"}
            variant="soft"
            radius="small"
          ></TextField.Root>

          <TextField.Root
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size={"3"}
            variant="soft"
            radius="small"
          ></TextField.Root>

          <TextArea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            resize={"vertical"}
            size={"3"}
            variant="soft"
            radius="small"
          />

          <button
            type="submit"
            className="pageclip-form__submit bg-blue-500 rounded py-3 hover:bg-blue-600"
          >
            <span>Send</span>
          </button>
        </form>
      </Box>
    </div>
  );
}
