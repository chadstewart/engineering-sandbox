import { Outlet } from "@tanstack/react-router";
import { Sidebar } from "@/components/organisms/sidebar/sidebar";
import { Footer } from "@/components/organisms/footer/footer";
import { MobileHeader } from "@/components/organisms/mobile-header/mobile-header";

export const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full min-h-screen">
        <MobileHeader />
        <Outlet />
        <Footer />
      </main>
    </div>
  )
};