import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // пока просто редирект на /dashboard
    navigate("/dashboard");
  };

  return (
    <div className="app-layout">
      <h1>{t("loginTitle")}</h1>
      <form onSubmit={handleLogin} style={{ marginTop: 16 }}>
        <label>
          ID użytkownika:
          <input
            type="text"
            style={{
              display: "block",
              padding: "4px 8px",
              marginTop: 4,
              marginBottom: 12,
            }}
          />
        </label>
        <button className="btn-primary" type="submit">
          {t("loginButton")}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;