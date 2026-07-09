import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@engineering-sandbox/ui/components/ui/accordion.tsx";
import { cn } from "@engineering-sandbox/ui/lib/utils";
import { Fragment } from "react";
import { NavItem } from "@/components/atoms/nav-item/nav-item";
import { NavItemDropdown } from "@/components/atoms/nav-item-dropdown/nav-item-dropdown";
import type { NavItemProps } from "@/lib/types/nav-item-props";

interface NavProps {
	navItems: NavItemProps[];
}

export const Nav = ({ navItems }: NavProps) => {
	return (
		<nav aria-label="Main" className="w-full px-2">
			<ul className="flex flex-col gap-2">
				{navItems.map((navItem) => (
					<Fragment key={navItem.id}>
						<li className={`flex items-center min-h-12`}>
							{navItem.children ? (
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem value="item-1" className={cn("border-none")}>
										<AccordionTrigger className={cn("py-0")}>
											<NavItemDropdown
												id={navItem.id}
												text={navItem.text}
												icon={navItem.icon}
												iconAlt={navItem.iconAlt}
											/>
										</AccordionTrigger>
										<AccordionContent className="pl-8">
											{navItem.children.map((navItemChild) => (
												<div
													key={navItemChild.id}
													className={`pt-3 min-h-12 ${navItemChild.id !== navItem.children?.length && "border-b"}`}
												>
													<NavItem {...navItemChild} />
												</div>
											))}
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							) : (
								<NavItem {...navItem} />
							)}
						</li>
					</Fragment>
				))}
			</ul>
		</nav>
	);
};
