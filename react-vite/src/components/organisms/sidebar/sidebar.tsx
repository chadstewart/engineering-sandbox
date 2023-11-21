import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarContent } from "./sidebar-content";

export const Sidebar = () => {
  return (
    <>
      <aside className="block md:hidden">
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
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
      <aside className="hidden md:flex w-96 border-r-2">
        <nav>
          <SidebarContent />
        </nav>
      </aside>
    </>
  );
};