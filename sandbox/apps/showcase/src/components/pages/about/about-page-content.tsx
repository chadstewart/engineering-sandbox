import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@engineering-sandbox/ui/components/card.tsx";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { RiExternalLinkLine, RiTwitterXFill } from "react-icons/ri";
import Icon from "../../atoms/icon/icon";

export const AboutPageContent = () => (
	<div className="flex flex-wrap w-full p-4">
		<Card className="w-full p-4">
			<CardHeader>This is the Engineering Sandbox</CardHeader>
			<CardDescription>
				This is a space to explore technlogy and product ideas. There are two
				places to view these, in the showcase which primarily shows completed
				ideas or the GitHub repo directly to view ideas currently being
				explored.
			</CardDescription>
			<CardContent className="flex flex-col gap-2 pt-3">
				<a
					className="flex w-48 justify-between"
					href="https://www.github.com/chadstewart/engineering-sandbox"
					target="_blank"
					rel="noopener"
				>
					<div className="flex gap-2">
						<Icon
							Icon={IoLogoGithub}
							iconAlt="Engineering Sandbox GitHub Repo"
						/>
						GitHub Repo
					</div>
					<Icon
						Icon={RiExternalLinkLine}
						iconAlt="External Link to GitHub repo"
					/>
				</a>
				<a
					className="flex w-48 justify-between"
					href="https://www.linkedin.com/in/ChadRStewart"
					target="_blank"
					rel="noopener"
				>
					<div className="flex gap-2">
						<Icon Icon={IoLogoLinkedin} iconAlt="Chad's LinkedIn" />
						Chad's LinkedIn
					</div>
					<Icon
						Icon={RiExternalLinkLine}
						iconAlt="External Link to Chad's Linkedin"
					/>
				</a>
				<a
					className="flex w-48 justify-between"
					href="https://www.github.com/chadstewart/engineering-sandbox"
					target="_blank"
					rel="noopener"
				>
					<div className="flex gap-2">
						<Icon Icon={RiTwitterXFill} iconAlt="Chad's Twitter / X" />
						Chad's Twitter / X
					</div>
					<Icon
						Icon={RiExternalLinkLine}
						iconAlt="External Link to Chad's Twitter / X"
					/>
				</a>
			</CardContent>
		</Card>
	</div>
);
