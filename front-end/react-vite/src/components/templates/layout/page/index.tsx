import { Outlet } from "@tanstack/react-router";

export const PageLayout = () => {
  const pageName = document.location.href.split("/")[3];

  return (
    <div className="px-2 w-full">
      <header className="hidden xl:block capitalize py-2 border-b-2">
        <h2 className="font-semibold">{pageName && !pageName.includes("redirect") ? pageName : "Home"}</h2>
      </header>
      <Outlet />
    </div>
  );
};
