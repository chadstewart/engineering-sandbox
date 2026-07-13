import { Link } from "@tanstack/react-router";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import Icon from "@/components/atoms/icon/icon";

interface LinkProps {
	link?: boolean;
}

const LogoTemplate = () => <h1 className="font-extrabold text-3xl">The Engineering Sandbox</h1>;

export const Logo = ({ link }: LinkProps) => {
	return (
		<div className="flex items-center gap-2">
			<Icon
				Icon={PiCodesandboxLogoFill}
				iconAlt="Engineering Sandbox Logo"
				size={32}
			/>
			{link && (
				<Link to="/">
					<LogoTemplate />
				</Link>
			)}
			{!link && <LogoTemplate />}
		</div>
	);
};
