import { Fragment } from "react";
import { NavItem } from "@/components/atoms/nav-item/nav-item";
import { NavItems } from "@/lib/types/nav-item";

interface NavProps {
  navItems: NavItems[];
}

export const Nav = ({ navItems }: NavProps) => {
  return (
    <nav aria-label="Main" className="w-full px-2">
      <ul className="flex flex-col gap-2">
        {navItems.map((navItem, index) => (
          <Fragment key={index}>
            <li className={`flex items-center h-12 rounded-md hover:bg-sky-100`}>
              <NavItem
                url={navItem.url}
                params={navItem.params}
                text={navItem.text}
                icon={navItem.icon}
                iconAlt={navItem.iconAlt}
                externalLink={navItem.externalLink}
                externalLinkAlt={navItem.externalLinkAlt}
              />
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};
