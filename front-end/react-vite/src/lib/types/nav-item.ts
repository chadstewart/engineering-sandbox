import { LinkOptions } from "@tanstack/react-router";
import { IconType } from "react-icons";

export interface NavItems {
  url: LinkOptions["to"];
  params?: object;
  text: string;
  icon?: IconType;
  iconAlt?: string;
  activeLink?: boolean;
  externalLink?: boolean;
  externalLinkAlt?: string;
}
