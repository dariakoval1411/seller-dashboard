import { Button, Text } from "@/shared/ui/atoms";
import { useLanguage } from "@/features/i18n/model/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggle = () => {
    setLanguage(language === "pl" ? "en" : "pl");
  };

  return (
    <Button variant="ghost" onClick={toggle}>
      <Text>{language.toUpperCase()}</Text>
    </Button>
  );
};