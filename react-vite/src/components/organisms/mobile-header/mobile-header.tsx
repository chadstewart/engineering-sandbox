import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { SidebarContent } from "../sidebar/sidebar-content";
import Icon from "@/components/atoms/icon/icon";

export const MobileHeader = () => {
  return (
    <aside className="block lg:hidden">
      <Sheet>
        <SheetTrigger className="flex justify-start">
          <Icon Icon={IoMdMenu} iconAlt="Main Menu open / close button"/>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </aside>
  );
};