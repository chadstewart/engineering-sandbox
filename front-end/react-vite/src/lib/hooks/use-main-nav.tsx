import { NavItems } from "../types/nav-item";
import { IoHomeSharp } from "react-icons/io5";
import { FaCat } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { BiSolidNetworkChart } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import { TbPackages } from "react-icons/tb";
import { PiUsersFill } from "react-icons/pi";

const useMainNav = () => {
  const navList: NavItems[] = [
    {
      url: "/",
      text: "Home",
      icon: IoHomeSharp,
      iconAlt: "Home page link icon"
    },
    {
      url: "/cute-animals",
      text: "Cute Animals",
      icon: FaCat,
      iconAlt: "Cat page link icon"
    },
    {
      url: "/orders/details/$page",
      params: { page: 1 },
      text: "Orders",
      icon: IoCart,
      iconAlt: "Order page link icon"
    },
    {
      url: "/products/details/$page",
      params: { page: 1 },
      text: "Products",
      icon: TbPackages,
      iconAlt: "Product page link icon"
    },
    {
      url: "/customers/details/$page",
      params: { page: 1 },
      text: "Customers",
      icon: PiUsersFill,
      iconAlt: "Customer page link icon"
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
