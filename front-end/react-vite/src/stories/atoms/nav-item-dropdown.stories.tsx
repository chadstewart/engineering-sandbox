import { NavItemDropdown } from "@/components/atoms/nav-item-dropdown/nav-item-dropdown";
import { PiTestTubeFill } from "react-icons/pi";

const storyConfig = {
  title: "Design System/Atoms/Nav Item Dropdown"
};

export default storyConfig;

export const NavItemDropdownStory = () => <NavItemDropdown text="test" iconAlt="test" icon={PiTestTubeFill} />;
