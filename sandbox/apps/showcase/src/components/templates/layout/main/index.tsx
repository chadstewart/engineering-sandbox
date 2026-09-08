import { Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Footer } from "@/components/organisms/footer/footer";
import ResponsiveComponent from "@/components/particles/responsive-component";

const Sidebar = lazy(() => import("@/components/organisms/sidebar/sidebar"));
const MobileHeader = lazy(
	() => import("@/components/organisms/mobile-header/mobile-header"),
);

export const MainLayout = () => {
	return (
		<div className="flex">
			<ResponsiveComponent>
				{({ size }) =>
					size > 1279 && (
						<Suspense fallback={<div>Loading...</div>}>
							<Sidebar />
						</Suspense>
					)
				}
			</ResponsiveComponent>
			<div className="flex content-between flex-wrap w-full p-4 min-h-screen">
				<ResponsiveComponent>
					{({ size }) =>
						size > 1 &&
						size < 1279 && (
							<Suspense fallback={<div>Loading...</div>}>
								<MobileHeader />
							</Suspense>
						)
					}
				</ResponsiveComponent>
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};
