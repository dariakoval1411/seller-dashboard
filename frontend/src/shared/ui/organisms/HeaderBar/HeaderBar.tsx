import { useNavigate } from "react-router-dom";
import { IconButton, Text } from "@/shared/ui/atoms";
import { LanguageToggle, ThemeToggle, NavItem } from "@/shared/ui/molecules";
import { useAuth } from "@/features/auth/model/AuthContext";
import { useLanguage } from "@/features/i18n/model/LanguageContext";

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
        <Text className="header-logo">{t("Dashboard")}</Text>
      </div>

      <nav className="header-nav">
        <NavItem to="/dashboard" label={t("navDashboard")} />
        <NavItem to="/orders" label={t("navOrders")} />
        <NavItem to="/reviews" label={t("navReviews")} />
        <NavItem to="/quality" label={t("navQuality")} />
      </nav>

      <div className="header-right">
        <LanguageToggle />
        <ThemeToggle />
        <IconButton icon="⇦" ariaLabel={t("logout")} onClick={handleLogout} />
      </div>
    </header>
  );
};