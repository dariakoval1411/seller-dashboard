import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { LogOut } from "lucide-react";
export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const switchLanguage = () => {
    setLanguage(language === "pl" ? "en" : "pl");
  };

  return (
    <>
      <div className="header-left">
        <div className="app-logo">{t("appTitle")}</div>
      </div>

      <nav className="header-nav">
        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "active" : ""}
        >
          {t("navDashboard")}
        </Link>

        <Link
          to="/orders"
          className={location.pathname === "/orders" ? "active" : ""}
        >
          {t("navOrders")}
        </Link>

        <Link
          to="/reviews"
          className={location.pathname === "/reviews" ? "active" : ""}
        >
          {t("navReviews")}
        </Link>

        <Link
          to="/quality"
          className={location.pathname === "/quality" ? "active" : ""}
        >
          {t("navQuality")}
        </Link>
      </nav>

      <div className="header-controls">
        <button className="btn-outline" onClick={switchLanguage}>
          {language.toUpperCase()}
        </button>
        <button className="btn-outline" onClick={toggleTheme}>
          {theme === "light" ? "☀️" : "🌙"}
        </button>
         <button
          className="btn-outline"
          title="Wyloguj"
          style={{ padding: "4px 8px", fontSize: "1.1rem" }}
        >
       <LogOut size={18} />
        </button>
      </div>
    </>
  );
};