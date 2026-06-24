import Icon from "@/components/atoms/icon/icon";
import { Link } from "@tanstack/react-router";
import { PiCodesandboxLogoFill } from "react-icons/pi";

interface LinkProps {
  link?: boolean;
}

export const Logo = ({ link }: LinkProps) => {
  return (
    <div className="flex items-center gap-2">
      <Icon Icon={PiCodesandboxLogoFill} iconAlt="Engineering Sandbox Logo" size={48} />
      {link && (
        <Link to="/">
          <h1 className="font-extrabold">The Engineering Sandbox</h1>
        </Link>
      )}
      {!link && <h1 className="font-extrabold">The Engineering Sandbox</h1>}
    </div>
  );
};
