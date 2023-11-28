import { MakeLinkOptions } from "@tanstack/react-router";
import { IconType } from "react-icons";

export interface NavItems {
  url: MakeLinkOptions['to'];
  text: string;
  icon?: IconType;
  iconAlt?: string;
  activeLink?: boolean;
  externalLink?: boolean;
  externalLinkAlt?: string;
}