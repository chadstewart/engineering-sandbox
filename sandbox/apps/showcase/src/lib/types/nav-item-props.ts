import type { LinkOptions } from "@tanstack/react-router";
import type { IconType } from "react-icons";

export interface NavItemProps extends NavItemBase {
	appUrl: NavItemUrlBase;
	children?: NavItemChildren[];
}

interface NavItemChildren extends NavItemBase {
	appUrl: NavItemUrlBase;
}

export type NavItemBase = {
	id?: number;
	text: string;
	icon: IconType;
	params?: object;
	iconAlt: string;
	activeLink?: boolean;
	isProtectedLink?: boolean;
};

type NavItemUrlBase = OnlyExternalUrls | OnlyInternalUrls;

interface OnlyInternalUrls {
	internalUrl: NavItemInternalUrl;
	externalUrl?: never;
	externalLinkAlt?: never;
}

interface OnlyExternalUrls {
	internalUrl?: never;
	externalUrl: NavItemExternalUrl;
	externalLinkAlt: string;
}

type NavItemExternalUrl = string;

type NavItemInternalUrl = LinkOptions["to"];
