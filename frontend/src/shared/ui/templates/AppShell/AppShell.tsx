import { Outlet } from "react-router-dom";
import { HeaderBar } from "@/shared/ui/organisms";
import { useAuth } from "@/features/auth/model/AuthContext";

export const AppShell = () => {
  const { user } = useAuth();

  return (
    <div className="app-shell">
      {user ? <HeaderBar /> : null}
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};