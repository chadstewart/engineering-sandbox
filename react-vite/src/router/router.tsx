import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Test from "@/components/pages/test";
import { MainLayout } from "@/components/templates/layout/main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Test />}/>
    </Route>
  )
);

export default router;