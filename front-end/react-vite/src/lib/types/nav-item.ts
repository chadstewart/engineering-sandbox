import { LinkOptions } from "@tanstack/react-router";
import { IconType } from "react-icons";

export type NavItemProps = {
  url: LinkOptions["to"];
  params?: object;
  text: string;
  icon: IconType;
  iconAlt: string;
  activeLink?: boolean;
  externalLinkAlt?: string;
};
