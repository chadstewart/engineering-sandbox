import { Outlet } from "@tanstack/react-router";
import { Sidebar } from "@/components/organisms/sidebar/sidebar";
import { Footer } from "@/components/organisms/footer/footer";

export const MainLayout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="w-full min-h-screen">
        <Outlet />
        <Footer />
      </main>
    </div>
  )
};