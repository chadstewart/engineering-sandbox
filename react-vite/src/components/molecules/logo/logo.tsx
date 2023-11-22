import Icon from "@/components/atoms/icon/icon";
import { PiCodesandboxLogoFill } from "react-icons/pi";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Icon Icon={PiCodesandboxLogoFill} iconAlt="Engineering Sandbox Logo" size={48}/>
      <div className="font-extrabold">
        The Engineering Sandbox
      </div>
    </div>
  )
};