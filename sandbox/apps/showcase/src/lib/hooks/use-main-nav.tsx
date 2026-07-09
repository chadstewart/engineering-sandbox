import { IoIosInformationCircle } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { RiGalleryView } from "react-icons/ri";
import type { NavItemProps } from "../types/nav-item-props";

const useMainNav = () => {
	const navList: NavItemProps[] = [
		{
			id: 1,
			url: "/",
			text: "Home",
			icon: IoHomeSharp,
			iconAlt: "Home page link icon",
		},
		{
			id: 2,
			url: "/",
			text: "About",
			icon: IoIosInformationCircle,
			iconAlt: "About page link icon",
		},
		{
			id: 3,
			url: "/",
			text: "Showcase",
			icon: RiGalleryView,
			iconAlt: "Showcase page link icon",
		},
	];

	return navList;
};

export default useMainNav;
