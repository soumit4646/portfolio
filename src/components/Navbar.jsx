import {
  CaretDownIcon,
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { Button, Flex, Heading, Link, Popover } from "@radix-ui/themes";

const Navbar = ({ theme, setTheme }) => {
  const changeTheme = () => {
    if (theme === "dark") setTheme("light");
    if (theme === "light") setTheme("dark");
  };

  return (
    <div className="p-3 flex items-center justify-around navbar bg-opacity-100 sticky top-0 z-50 bg-inherit">
      <Heading size="7">soumit.xyz</Heading>

      <div className="flex items-center gap-6">
        <Link href="#" color="gray" highContrast underline="none">
          About Me
        </Link>
        <Link href="#" color="gray" highContrast underline="none">
          Education
        </Link>
        <Link href="#skills" color="gray" highContrast underline="none">
          Skils
        </Link>
        <Link href="#projects" color="gray" highContrast underline="none">
          Projects
        </Link>

        <Link href="#contact-me" color="gray" highContrast underline="none">
          Contact Me
        </Link>

        {/* <Popover.Root>
          <Popover.Trigger>
            <div className="flex items-center gap-1">
              <Link href="#" color="gray" highContrast underline="none">
                Socials
              </Link>
              <CaretDownIcon />
            </div>
          </Popover.Trigger>
          <Popover.Content width="">
            <Flex gap="3" direction={"row"} justify={"center"}>
              <Link href="https://instagram.com/soumit4646" target="_blank">
                <InstagramLogoIcon />
              </Link>
              <Link href="https://discord.com/soumit4646" target="_blank">
                <DiscordLogoIcon />
              </Link>
              <Link href="https://linkedin.com/soumit4646" target="_blank">
                <LinkedInLogoIcon />
              </Link>
              <Link href="https://x.com/soumitsatiar" target="_blank">
                <TwitterLogoIcon />
              </Link>
            </Flex>
          </Popover.Content>
        </Popover.Root> */}
      </div>

      <div className="flex gap-8 items-center">
        <Link href="#" color="gray">
          Blog
        </Link>
        <Button variant="ghost">
          <Link href="https://github.com/soumit4646" target="_blank">
            <GitHubLogoIcon />
          </Link>
        </Button>
        <Button variant="ghost" onClick={changeTheme}>
          {theme === "dark" ? <SunIcon color="gray"/> : <MoonIcon color="gray"/>}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
