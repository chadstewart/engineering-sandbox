import { type NavItemProps } from "@/lib/types/nav-item-props";
import Icon from "../icon/icon";

export const NavItemDropdown = ({ text, icon, iconAlt }: NavItemProps) => {
	return (
		<div className="flex gap-2 w-full m-2">
			{icon && <Icon Icon={icon} iconAlt={iconAlt} />}
			<div className="font-bold">{text}</div>
		</div>
	);
};
