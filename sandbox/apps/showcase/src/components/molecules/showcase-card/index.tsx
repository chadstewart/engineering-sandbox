import type { projectDataSchemaBaseType } from "@engineering-sandbox/project-data/project-data-types";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@engineering-sandbox/ui/components/card.tsx";
import { cn } from "@engineering-sandbox/ui/lib/utils";
import { FaGlobe } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import Icon from "../../atoms/icon/icon";

type ShowcaseCardProps = projectDataSchemaBaseType;

export const ShowcaseCard = ({
	title,
	description,
	liveAddress,
	githubAddress,
	imageLocation,
}: ShowcaseCardProps) => (
	<Card className={cn("max-md:w-full min-w-[32%]")}>
		<CardHeader className={cn("")}>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</CardHeader>
		{imageLocation && (
			<CardContent className={cn("min-h-42")}>
				<img src={imageLocation} alt={`Display for ${title}`} />
			</CardContent>
		)}
		<CardFooter className={cn("flex justify-end gap-2")}>
			{liveAddress && (
				<a
					className="flex gap-1"
					href={liveAddress}
					rel="noopener noreferrer"
					target="_blank"
				>
					<Icon Icon={FaGlobe} iconAlt="Live Project" />

					<Icon
						Icon={RiExternalLinkLine}
						iconAlt="External Link to GitHub repo"
					/>
				</a>
			)}
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
