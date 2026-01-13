import { ReactNode } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="app-header">
        <div className="app-header-inner">
          <Header />
        </div>
      </div>

      <div className="app-layout">{children}</div>
    </>
  );
};