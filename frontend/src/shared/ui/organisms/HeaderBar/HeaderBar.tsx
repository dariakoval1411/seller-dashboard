import { useNavigate } from "react-router-dom";
import { IconButton, Text } from "@/shared/ui/atoms";
import { LanguageToggle, ThemeToggle, NavItem } from "@/shared/ui/molecules";
import { useAuth } from "@/features/auth/model/AuthContext";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { LogOut } from "lucide-react";

export const HeaderBar = () => {
  const nav = useNavigate();
  const { logout } = useAuth();
  const { t } = useLanguage();

  const handleLogout = () => {
    logout();
    nav("/login");
  };

  return (
    <header className="header-bar">
      <div className="header-left">
        <Text className="header-logo">{t("appTitle")}</Text>
      </div>

      <nav className="header-nav">
        <NavItem to="/dashboard" label={t("nav.dashboard")} />
        <NavItem to="/orders" label={t("nav.orders")} />
        <NavItem to="/reviews" label={t("nav.reviews")} />
        <NavItem to="/quality" label={t("nav.quality")} />
      </nav>

      <div className="header-right">
        <LanguageToggle />
        <ThemeToggle />
        <IconButton
          ariaLabel={t("actions.logout")}
          onClick={handleLogout}
          icon={<LogOut size={18} />}
        />
      </div>
    </header>
  );
};