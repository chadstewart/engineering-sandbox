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
	mainCardClassname?: string;
	title: string;
	description: string;
	githubAddress: string;
	imageLocation?: string;
}

export const ShowcaseCard = ({
	mainCardClassname,
	title,
	description,
	githubAddress,
	imageLocation,
}: ShowcaseCardProps) => (
	<Card className={cn(mainCardClassname)}>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</CardHeader>
		{imageLocation && (
			<CardContent>
				<img src={imageLocation} alt={`Display for ${title}`} />
			</CardContent>
		)}
		<CardFooter>
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
