import { Fragment } from "react";
import { NavItem } from "@/components/atoms/nav-item/nav-item";
import { NavItems } from "@/lib/types/nav-tem";

interface NavProps {
  navItems: NavItems[];
}

export const Nav = ({ navItems }: NavProps) => {
  return (
    <nav aria-label="Main" className="w-full px-2" >
      <ul>
        {navItems.map((navItem, index) =>
          <Fragment key={index}>
            <li className={`flex items-center h-12 ${navItems.length - 1 !== index && "border-b-2"}`}>
              <NavItem
                url={navItem.url}
                text={navItem.text}
                externalLink={navItem.externalLink}
                externalLinkAlt={navItem.externalLinkAlt}
              />
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};