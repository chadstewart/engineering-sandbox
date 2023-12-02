import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Icon from "../atoms/icon/icon";
import { RiExternalLinkLine, RiTwitterXFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex flex-wrap w-full p-4">
      <Card className="w-full">
        <CardHeader>
          This is the Engineering Sandbox
        </CardHeader>
        <CardDescription>
          This is a production-like application built for educational purposes.
          Technologies and Techniques used were chosen to learn on to use them or how well they worked in a production environment.
          Feel free to look through the repo to learn how this project works.
        </CardDescription>
        <CardContent className="flex flex-col gap-2 pt-3">
          <a className="flex w-44 justify-between" href="https://www.github.com/chadstewart/engineering-sandbox" target="_blank">
            <div className="flex gap-2">
              <Icon Icon={IoLogoGithub} iconAlt="Engineering Sandbox GitHub Repo" />
              GitHub Repo
            </div>
            <Icon Icon={RiExternalLinkLine} iconAlt="External Link to GitHub repo" />
          </a>
          <a className="flex w-44 justify-between" href="https://www.linkedin.com/in/ChadRStewart" target="_blank">
            <div className="flex gap-2">
              <Icon Icon={IoLogoLinkedin} iconAlt="Chad's LinkedIn" />
              Chad's LinkedIn
            </div>
            <Icon Icon={RiExternalLinkLine} iconAlt="External Link to Chad's Linkedin" />
          </a>
          <a className="flex w-44 justify-between" href="https://www.github.com/chadstewart/engineering-sandbox" target="_blank">
            <div className="flex gap-2">
              <Icon Icon={RiTwitterXFill} iconAlt="Chad's Twitter / X" />
              Chad's Twitter / X
            </div>
            <Icon Icon={RiExternalLinkLine} iconAlt="External Link to Chad's Twitter / X" />
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;