import { NavItems } from "../types/nav-item";
import { IoHomeSharp } from "react-icons/io5";
import { FaCat } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { BiSolidNetworkChart } from "react-icons/bi";

const useMainNav = () => {
  const navList: NavItems[] = [
    {
      url: "/",
      text: "Home",
      icon: IoHomeSharp,
      iconAlt: "Home page link icon"
    },
    {
      url: "/cat",
      text: "Cute Animals",
      icon: FaCat,
      iconAlt: "Cat page link icon"
    },
    {
      url: "/about",
      text: "About",
      icon: IoIosInformationCircle,
      iconAlt: "About page link icon"
    },
    {
      url: "/architecture",
      text: "Architecture",
      icon: BiSolidNetworkChart,
      iconAlt: "Architecture page link icon"
    }
  ];

  return navList;
};

export default useMainNav;
