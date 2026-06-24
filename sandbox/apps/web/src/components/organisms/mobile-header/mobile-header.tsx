import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { SidebarContentWrapper } from "../../molecules/sidebar-content/sidebar-content-wrapper";
import Icon from "@/components/atoms/icon/icon";
import { Logo } from "@/components/molecules/logo/logo";

const MobileHeader = () => {
  return (
    <aside className="flex gap-4 justify-between">
      <Logo link />
      <Sheet>
        <SheetTrigger className="flex justify-start items-center">
          <Icon Icon={IoMdMenu} iconAlt="Main Menu open / close button" />
        </SheetTrigger>
        <SheetContent side={"right"} className="bg-white">
          <SheetHeader>
            <header className="pt-4 pb-16">
              <Logo />
            </header>
          </SheetHeader>
          <SidebarContentWrapper />
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default MobileHeader;
