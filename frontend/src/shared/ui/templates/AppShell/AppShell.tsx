import { Outlet } from "react-router-dom";
import { HeaderBar } from "@/shared/ui/organisms";

export const AppShell = () => {
  return (
    <div className="app-shell">
      <HeaderBar />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};