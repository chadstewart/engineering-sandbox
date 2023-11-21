import { RiExternalLinkLine } from "react-icons/ri";
import Icon from "../icon/icon";
import { NavItems } from "@/lib/types/nav-tem";

type NavItemProps = NavItems;

export const NavItem = ({
  url,
  text,
  externalLink = false,
  externalLinkAlt = ""
}: NavItemProps) => {
  return (
    <a className="flex flex-row gap-2" href={url} target={externalLink ? "_blank" : "_self"}>
      <div>
        {text}
      </div>
      {externalLink && <Icon Icon={RiExternalLinkLine} iconAlt={externalLinkAlt} />}
    </a>
  )
};