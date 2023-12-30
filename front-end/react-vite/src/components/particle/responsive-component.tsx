import React, { ReactNode } from "react";
import { useScreenSize } from "@/lib/hooks/use-screen-size";

interface ResponsiveComponentProps {
  children: (props: { size: number }) => ReactNode;
}

const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
