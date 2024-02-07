import Icon from "@/components/atoms/icon/icon";
import { PiTestTubeFill } from "react-icons/pi";

const storyConfig = {
  title: "Design System/Atoms/Icon"
};

export default storyConfig;

export const IconStory = () => <Icon iconAlt="test" Icon={PiTestTubeFill} />;
