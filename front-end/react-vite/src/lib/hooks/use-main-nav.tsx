import { NavItemProps } from "../types/nav-item";
import { IoHomeSharp } from "react-icons/io5";
import { FaCat } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { BiSolidNetworkChart } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import { TbPackages } from "react-icons/tb";
import { PiUsersFill } from "react-icons/pi";
import { BiDetail } from "react-icons/bi";
import { LuTestTube2 } from "react-icons/lu";

const useMainNav = () => {
  const navList: NavItemProps[] = [
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
      text: "Orders",
      icon: IoCart,
      iconAlt: "Order dropdown link icon",
      url: "/orders/details/$page",
      params: { page: 1 }
    },
    {
      url: "/products/details/$page",
      params: { page: 1 },
      text: "Products",
      icon: TbPackages,
      iconAlt: "Product page link icon"
    },
    {
      text: "Customers",
      icon: PiUsersFill,
      iconAlt: "Customer page link icon",
      children: [
        {
          url: "/customers/details/$page",
          params: { page: 1 },
          text: "Details",
          icon: BiDetail,
          iconAlt: "Details page link icon"
        },
        {
          url: "/customers/protected-route",
          text: "Test",
          icon: LuTestTube2,
          iconAlt: "Test page link icon"
        }
      ]
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
