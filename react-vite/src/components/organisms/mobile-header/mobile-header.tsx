import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { SidebarContent } from "../../molecules/sidebar-content/sidebar-content";
import Icon from "@/components/atoms/icon/icon";
import { SidebarHeader } from "@/components/molecules/sidebar-header";

export const MobileHeader = () => {
  return (
    <aside className="block lg:hidden">
      <Sheet>
        <SheetTrigger className="flex justify-start">
          <Icon Icon={IoMdMenu} iconAlt="Main Menu open / close button"/>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SidebarHeader />
          </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </aside>
  );
};