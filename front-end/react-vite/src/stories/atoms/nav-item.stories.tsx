import { NavItem } from "@/components/atoms/nav-item/nav-item";
import { PiTestTubeFill } from "react-icons/pi";

const storyConfig = {
  title: "Design System/Atoms/Nav Item"
};

export default storyConfig;

export const NavItemStory = () => <NavItem text="test" iconAlt="test" icon={PiTestTubeFill} />;
