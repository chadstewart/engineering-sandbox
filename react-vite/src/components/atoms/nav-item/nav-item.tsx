import { RiExternalLinkLine } from "react-icons/ri";
import Icon from "../icon/icon";
import { NavItems } from "@/lib/types/nav-item";
import { Link } from "@tanstack/react-router";

type NavItemProps = NavItems;

export const NavItem = ({
  url,
  text,
  icon,
  iconAlt = "",
  externalLink = false,
  externalLinkAlt = ""
}: NavItemProps) => {
  return (
    <Link className="flex gap-2 w-full m-2" href={url} target={externalLink ? "_blank" : "_self"}>
      {icon && <Icon Icon={icon} iconAlt={iconAlt}/>}
      <div>
        {text}
      </div>
      {externalLink && <Icon Icon={RiExternalLinkLine} iconAlt={externalLinkAlt} />}
    </Link>
  )
};