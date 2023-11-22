import { NavItems } from "../types/nav-item";
import { IoHomeSharp } from "react-icons/io5";
import { PiWrenchFill } from "react-icons/pi";

const useMainNav = () => {
  const navList: NavItems[] = [
    {
      url: "/",
      text: "Home",
      icon: IoHomeSharp,
      iconAlt: "Home link icon"
    },
    {
      url: "https://newsletter.techishiring.com/",
      text: "Newsletter",
      icon: PiWrenchFill,
      iconAlt: "Test link icon",
      externalLink: true,
      externalLinkAlt: "external link for TechIsHiring Newsletter"
    }
  ];

  return navList;
};

export default useMainNav;