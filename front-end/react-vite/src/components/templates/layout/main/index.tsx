import { lazy, Suspense } from "react";
import { Outlet } from "@tanstack/react-router";
import { Footer } from "@/components/organisms/footer/footer";

const Sidebar = lazy(() => import("@/components/organisms/sidebar/sidebar"));
const MobileHeader = lazy(() => import("@/components/organisms/mobile-header/mobile-header"));

export const MainLayout = () => {
  return (
    <div className="flex">
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar />
      </Suspense>
      <main className="w-full p-4 min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <MobileHeader />
        </Suspense>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
