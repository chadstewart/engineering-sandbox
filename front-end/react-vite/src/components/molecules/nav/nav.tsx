import { Fragment } from "react";
import { NavItem } from "@/components/atoms/nav-item/nav-item";
import { NavItemProps } from "@/lib/types/nav-item";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/util";
import { NavItemDropdown } from "@/components/atoms/nav-item-dropdown/nav-item-dropdown";

interface NavProps {
  navItems: NavItemProps[];
}

export const Nav = ({ navItems }: NavProps) => {
  return (
    <nav aria-label="Main" className="w-full px-2">
      <ul className="flex flex-col gap-2">
        {navItems.map((navItem, index) => (
          <Fragment key={index}>
            <li className={`flex items-center min-h-12`}>
              {navItem.children ? (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className={cn("border-none")}>
                    <AccordionTrigger className={cn("py-0")}>
                      <NavItemDropdown text={navItem.text} icon={navItem.icon} iconAlt={navItem.iconAlt} />
                    </AccordionTrigger>
                    <AccordionContent className="pl-8">
                      {navItem.children.map((navItemChild, index) => (
                        <div className={`pt-3 min-h-12 ${index + 1 !== navItem.children?.length && "border-b"}`}>
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
