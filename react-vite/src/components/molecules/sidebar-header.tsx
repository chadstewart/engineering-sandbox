import { PiCodesandboxLogoFill } from "react-icons/pi";
import Icon from "../atoms/icon/icon";

export const SidebarHeader = () => {
  return (
    <header className="flex items-center gap-2 pt-4 pb-16">
      <Icon Icon={PiCodesandboxLogoFill} iconAlt="Engineering Sandbox Logo" size={48}/>
      <div className="font-extrabold">
        The Engineering Sandbox
      </div>
    </header>
  )
}