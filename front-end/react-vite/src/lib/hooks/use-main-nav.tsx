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
      url: "/2",
      text: "Test",
      icon: PiWrenchFill,
      iconAlt: "Test link icon"
    }
  ];

  return navList;
};

export default useMainNav;