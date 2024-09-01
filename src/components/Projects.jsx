import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Inset,
  Link,
  Spinner,
  Strong,
  Text,
} from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import client from "../../lib/client";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    async function getProjects() {
      const res = await client.getEntries({ content_type: "projects" });

      const items = res.items;

      const projects = items.map(({ fields: item }) => {
        return {
          title: item.title,
          description: item.description,
          coverImg: item.coverImg.fields.file.url,
          techStack: item.techStack,
          liveurl: item.liveUrl,
        };
      });
      setProjects(projects);
    }

    getProjects();
  }, []);

  console.log(projects);

  if (projects === null) {
    return (
      <div id="projects">
        <Heading size="9" className="text-center mt-40 mb-8">
          Projects
        </Heading>
        <Flex gap={"8"} justify={"center"} wrap={"wrap"}>
          <Spinner />
        </Flex>
      </div>
    );
  }

  return (
    <div id="projects">
      <Heading size="9" className="text-center mt-40 mb-8">
        Projects
      </Heading>
      <Flex gap={"8"} justify={"center"} wrap={"wrap"}>
        {projects.map((project, index) => {
          return (
            <Box width="300px" flexShrink={"0"} key={index}>
              <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src={"https:" + project.coverImg}
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 200,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
                <Flex justify={"between"} align={"center"} p={"1"}>
                  <Heading>{project.title}</Heading>
                  <Badge color="green">
                    <Flex align={"center"} gap={"2"}>
                      <ArrowTopRightIcon />
                      <a href={project.liveurl} target="_blank">
                        Live Link
                      </a>
                    </Flex>
                  </Badge>
                </Flex>
                <Text as="p" size="3">
                  {project.description}
                </Text>
                <Flex gap="2" className="mt-2" wrap={"wrap"}>
                  {project.techStack.map((technology, index) => {
                    return (
                      <Badge
                        variant="solid"
                        radius="full"
                        color="indigo"
                        key={index}
                      >
                        {technology}
                      </Badge>
                    );
                  })}
                </Flex>
              </Card>
            </Box>
          );
        })}
      </Flex>
    </div>
  );
};

export default Projects;
