import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@engineering-sandbox/ui/components/card.tsx";
import { cn } from "@engineering-sandbox/ui/lib/utils";
import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import Icon from "../../atoms/icon/icon";

interface ShowcaseCardProps {
	title: string;
	description: string;
	githubAddress: string;
	imageLocation?: string;
}

export const ShowcaseCard = ({
	title,
	description,
	githubAddress,
	imageLocation,
}: ShowcaseCardProps) => (
	// TODO: Storybook doesn't build stories outside of the ui package because it's a dependency.
	// This is important because components use tailwind css for styling and the classes need to be built with tailwind
	// Need to figure out how to get components from other packages to build in storybook
	<Card className={cn("w-36")}>
		<CardHeader className={cn("")}>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</CardHeader>
		{imageLocation && (
			<CardContent className={cn("")}>
				<img src={imageLocation} alt={`Display for ${title}`} />
			</CardContent>
		)}
		<CardFooter className={cn("")}>
			<a
				className="flex gap-1"
				href={githubAddress}
				rel="noopener noreferrer"
				target="_blank"
			>
				<Icon Icon={IoLogoGithub} iconAlt="Engineering Sandbox GitHub Repo" />

				<Icon
					Icon={RiExternalLinkLine}
					iconAlt="External Link to GitHub repo"
				/>
			</a>
		</CardFooter>
	</Card>
);
