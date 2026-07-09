import type { LinkOptions } from "@tanstack/react-router";
import type { IconType } from "react-icons";

export interface NavItemProps extends NavItemBase {
	children?: NavItemChildren[];
}

interface NavItemChildren extends NavItemBase {
	url: LinkOptions["to"];
}

type NavItemBase = {
	id: number;
	text: string;
	icon: IconType;
	url?: LinkOptions["to"];
	params?: object;
	iconAlt: string;
	activeLink?: boolean;
	externalLinkAlt?: string;
	isProtectedLink?: boolean;
};
