import { Nav } from "@/components/molecules/nav/nav";
import { NavItemProps } from "@/lib/types/nav-item";
import { PiTestTubeFill } from "react-icons/pi";

const storyConfig = {
  title: "Design System/Molecules/Nav"
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

export default storyConfig;

export const NavStory = () => <Nav navItems={navItems} />;
