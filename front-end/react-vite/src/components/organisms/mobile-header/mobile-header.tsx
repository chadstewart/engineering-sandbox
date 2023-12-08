import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { SidebarContent } from "../../molecules/sidebar-content/sidebar-content";
import Icon from "@/components/atoms/icon/icon";
import { SidebarHeader } from "@/components/molecules/sidebar-header";
import { Logo } from "@/components/molecules/logo/logo";

export const MobileHeader = () => {
  return (
    <aside className="flex gap-4 justify-between lg:hidden">
      <Logo />
      <Sheet>
        <SheetTrigger className="flex justify-start items-center">
          <Icon Icon={IoMdMenu} iconAlt="Main Menu open / close button" />
        </SheetTrigger>
        <SheetContent side={"right"} className="bg-white">
          <SheetHeader>
            <SidebarHeader />
          </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </aside>
  );
};
