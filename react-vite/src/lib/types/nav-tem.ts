import { IconType } from "react-icons";

export interface NavItems {
  url: string;
  text: string;
  icon?: IconType;
  iconAlt?: string;
  activeLink?: boolean;
  externalLink?: boolean;
  externalLinkAlt?: string;
}