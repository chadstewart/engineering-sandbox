import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import Icon from "../../atoms/icon/icon";

export const Footer = () => {
  return (
    <footer className="flex justify-end items-center h-10 w-full gap-2">
      <div>© {new Date().getFullYear()} The Engineering Sandbox</div>
      <a className="flex" href="https://www.github.com/chadstewart/engineering-sandbox" target="_blank">
        <Icon Icon={IoLogoGithub} iconAlt="Engineering Sandbox GitHub Repo" />

        <Icon Icon={RiExternalLinkLine} iconAlt="External Link to GitHub repo" />
      </a>
    </footer>
  );
};
