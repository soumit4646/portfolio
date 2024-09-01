import { Box, Card, Flex, Heading } from "@radix-ui/themes";
import React from "react";

const Skills = () => {
    return (
        <div id="skills" className="pt-12 pb-12 w-[90vw] max-w-6xl mx-auto">
            <Heading size="9" className="text-center mb-4">
                Skills
            </Heading>

            <Flex
                className="pt-3 mx-auto max-w-4xl"
                justify={"center"}
                wrap={"wrap"}
                gap={"4"}
            >
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="html5"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="css3"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            className="rounded-md"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="typescript"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="2">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                            alt="java"
                            className="rounded-md"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                            alt="cplusplus"
                            className="rounded-md"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="postgres"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="mongo"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="mongoose"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="docker"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="reactjs"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="nodejs"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="express"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                            style={{ background: "white" }}
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="git"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="tailwind"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="vs-code"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="linux"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                        />
                    </Card>
                </Box>
                <Box width={"100px"} height={"100px"}>
                    <Card size="1" className="">
                        <img
                            alt="aws"
                            className="rounded-md"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                        />
                    </Card>
                </Box>
            </Flex>
        </div>
    );
};

export default Skills;
