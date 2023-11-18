import { Outlet } from "react-router-dom";
import { Footer } from "@/components/organisms/footer/footer";
import { Header } from "@/components/organisms/header/header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-(80px+64px))]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
};