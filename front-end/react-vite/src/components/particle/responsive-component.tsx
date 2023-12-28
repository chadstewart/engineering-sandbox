import React, { ReactNode } from "react";
import { ScreenSize } from "@/lib/util/screen-size-type";
import { useScreenSize } from "@/lib/hooks/use-screen-size";

interface ResponsiveComponentProps {
  children: (props: { size: ScreenSize }) => ReactNode;
}

const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
