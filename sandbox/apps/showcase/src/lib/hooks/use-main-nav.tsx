import { type NavItemProps } from "../types/nav-item-props";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { RiGalleryView } from "react-icons/ri";

const useMainNav = () => {
	const navList: NavItemProps[] = [
		{
      url: "/",
      text: "Home",
      icon: IoHomeSharp,
      iconAlt: "Home page link icon"
    },
    {
      url: "/",
      text: "About",
      icon: IoIosInformationCircle,
      iconAlt: "About page link icon"
    },
    {
      url: "/",
      text: "Showcase",
      icon: RiGalleryView,
      iconAlt: "Showcase page link icon"
    }
	];

	return navList;
};

export default useMainNav;
