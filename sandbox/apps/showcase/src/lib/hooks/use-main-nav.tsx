import { IoIosInformationCircle } from "react-icons/io";
import { IoHomeSharp, IoNewspaperOutline } from "react-icons/io5";
import { RiGalleryView } from "react-icons/ri";
import type { NavItemProps } from "../types/nav-item-props";

const useMainNav = () => {

	const navListItems: NavItemProps[] = [
		{
			url: "/",
			text: "Home",
			icon: IoHomeSharp,
			iconAlt: "Home page link icon",
		},
		{
			url: "/about",
			text: "About",
			icon: IoIosInformationCircle,
			iconAlt: "About page link icon",
		},
		{
			url: "/",
			text: "Showcase",
			icon: RiGalleryView,
			iconAlt: "Showcase page link icon",
		},
		{
			url: "/",
			text: "Newsletter",
			icon: IoNewspaperOutline,
			iconAlt: "Newsletter link icon",
			externalLinkAlt: "External link icon to Newsletter"
		},
	];
	
	const NavItemFactory = () => {
		let counter = 1;
		const navList: NavItemProps[] = [];
		
		return {
			items: navList,
			add(item: NavItemProps) {
				this.items.push({ ...item, id: counter++ });
			}
		};
	};

	const NavListManagement = NavItemFactory();

	navListItems.map(navItem =>	NavListManagement.add(navItem));

	const navList = NavListManagement.items;

	return navList;
};

export default useMainNav;
