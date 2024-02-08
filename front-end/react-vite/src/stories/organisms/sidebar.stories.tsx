import Sidebar from "@/components/organisms/sidebar/sidebar";
import { NavItemProps } from "@/lib/types/nav-item";
import { PiTestTubeFill } from "react-icons/pi";

const storyConfig = {
  title: "Design System/Organisms/Sidebar"
};

const navItems: NavItemProps[] = [
  {
    text: "test",
    icon: PiTestTubeFill,
    iconAlt: "test"
  },
  {
    text: "test",
    icon: PiTestTubeFill,
    iconAlt: "test"
  }
];

const userName = "test";
const emptyFunc = async () => {};

const storybook = {
  displayLoginContent: {
    handleLogin: emptyFunc,
    handleLogout: emptyFunc,
    handleSignUp: emptyFunc,
    isAuthenticated: false,
    userName
  },
  navItems
};

export default storyConfig;

export const SidebarStory = () => <Sidebar storybook={storybook} />;
