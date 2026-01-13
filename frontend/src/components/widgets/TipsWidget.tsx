import { useLanguage } from "../../context/LanguageContext";

export const TipsWidget = () => {
  const { t } = useLanguage();
  return (
    <div className="card">
      <div className="card-title">{t("widgetTips")}</div>
      <ul style={{ fontSize: "0.9rem", paddingLeft: 16 }}>
        <li>Zadbaj o dobre zdjęcia ofert.</li>
        <li>Odpowiadaj szybko na wiadomości kupujących.</li>
        <li>Monitoruj opinie i reaguj na negatywne.</li>
      </ul>
    </div>
  );
};