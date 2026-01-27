import { LoginForm } from "@/features/auth/ui/LoginForm";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { Text } from "@/shared/ui/atoms/Text";

export function LoginPage() {
  const { t } = useLanguage();

  return (
    <div className="login-page">
      <div className="login-card">
        <Text as="h1" className="login-title">
          {t("loginTitle")}
        </Text>
        <LoginForm />
      </div>
    </div>
  );
}