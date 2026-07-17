import { Link } from "@tanstack/react-router";
import { FaLock } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import Icon from "@/components/atoms/icon/icon";
import type { NavItemProps } from "@/lib/types/nav-item-props";

export const NavItem = ({
	appUrl,
	// params,
	text,
	icon,
	iconAlt,
	isProtectedLink,
}: NavItemProps) => {
	return (
		<>
			{appUrl.internalUrl && (
				<Link
					className="flex gap-2 items-center w-full m-2"
					to={appUrl.internalUrl}
					/* params={params ? params : {}} */
				>
					{icon && <Icon Icon={icon} iconAlt={iconAlt} />}
					<div className="font-bold">{text}</div>
					{isProtectedLink === true && (
						<Icon
							Icon={FaLock}
							iconAlt="You need to be signed in to view this link"
							size={16}
						/>
					)}
				</Link>
			)}
			{appUrl.externalUrl && (
				<a
					className="flex gap-2 items-center w-full m-2"
					href={appUrl.externalUrl}
					target={"blank"}
				>
					{icon && <Icon Icon={icon} iconAlt={iconAlt} />}
					<div className="font-bold">{text}</div>
					<Icon Icon={RiExternalLinkLine} iconAlt={appUrl.externalLinkAlt} />
					{isProtectedLink === true && (
						<Icon
							Icon={FaLock}
							iconAlt="You need to be signed in to view this link"
							size={16}
						/>
					)}
				</a>
			)}
		</>
	);
};
