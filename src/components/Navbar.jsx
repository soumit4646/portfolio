import {
  CaretDownIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import {
  Button,
  DropdownMenu,
  Flex,
  Heading,
  Link,
  Popover,
} from "@radix-ui/themes";
import { NavLink } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const changeTheme = () => {
    if (theme === "dark") setTheme("light");
    if (theme === "light") setTheme("dark");
  };

  return (
    <div className="p-3 flex items-center justify-around navbar sticky top-0 bg-transparent z-50 backdrop-blur-3xl">
      <Heading size="7">soumit</Heading>
      <div className="md:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">
              <HamburgerMenuIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <div className="flex flex-col gap-3">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/education"}>Education</NavLink>
              <NavLink to={"/skills"}>Skills</NavLink>
              <NavLink to={"/projects"}>Projects</NavLink>
              <NavLink to={"/contact"}>Contact Me</NavLink>
            </div>
            <DropdownMenu.Separator />
            <div>
              <div className="flex gap-3 items-center">
                <Link href="#" color="gray">
                  Blog
                </Link>
                <Button variant="ghost">
                  <Link href="https://github.com/soumit4646" target="_blank">
                    <GitHubLogoIcon />
                  </Link>
                </Button>
                <Button variant="ghost" onClick={changeTheme}>
                  {theme === "dark" ? (
                    <SunIcon color="gray" />
                  ) : (
                    <MoonIcon color="gray" />
                  )}
                </Button>
              </div>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <div className="items-center gap-6 hidden md:flex">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/education"}>Education</NavLink>
        <NavLink to={"/skills"}>Skills</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/contact"}>Contact Me</NavLink>
        <Popover.Root>
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
              <Link href="https://linkedin.com/in/soumit4646" target="_blank">
                <LinkedInLogoIcon />
              </Link>
              <Link href="https://x.com/soumitsatiar" target="_blank">
                <TwitterLogoIcon />
              </Link>
            </Flex>
          </Popover.Content>
        </Popover.Root>
      </div>

      <div className="gap-8 items-center hidden md:flex">
        <Link href="#" color="gray">
          Blog
        </Link>
        <Button variant="ghost">
          <Link href="https://github.com/soumit4646" target="_blank">
            <GitHubLogoIcon />
          </Link>
        </Button>
        <Button variant="ghost" onClick={changeTheme}>
          {theme === "dark" ? (
            <SunIcon color="gray" />
          ) : (
            <MoonIcon color="gray" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
