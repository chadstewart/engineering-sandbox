import { LinkOptions } from "@tanstack/react-router";
import { IconType } from "react-icons";

export type NavItemProps = {
  text: string;
  icon: IconType;
  children?: NavItemChildren[];
  url?: LinkOptions["to"];
  params?: object;
  iconAlt: string;
  activeLink?: boolean;
  externalLinkAlt?: string;
  isProtectedLink?: boolean;
};

type NavItemChildren = {
  text: string;
  icon: IconType;
  url: LinkOptions["to"];
  params?: object;
  iconAlt: string;
  activeLink?: boolean;
  externalLinkAlt?: string;
  isProtectedLink?: boolean;
};
