import { RiExternalLinkLine } from "react-icons/ri";
import Icon from "../icon/icon";
import { NavItemProps } from "@/lib/types/nav-item";
import { Link } from "@tanstack/react-router";
import { FaLock } from "react-icons/fa";

export const NavItem = ({ url, params, text, icon, iconAlt, externalLinkAlt, isProtectedLink }: NavItemProps) => {
  return (
    <Link
      className="flex gap-2 items-center w-full m-2"
      to={url}
      params={params ? params : {}}
      target={externalLinkAlt ? "_blank" : "_self"}
    >
      {icon && <Icon Icon={icon} iconAlt={iconAlt} />}
      <div className="font-bold">{text}</div>
      {externalLinkAlt && <Icon Icon={RiExternalLinkLine} iconAlt={externalLinkAlt} />}
      {isProtectedLink === true && (
        <Icon Icon={FaLock} iconAlt="You need to be signed in to view this link" size={16} />
      )}
    </Link>
  );
};
