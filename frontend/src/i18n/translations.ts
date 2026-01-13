export type Language = "pl" | "en";

type Translations = Record<Language, Record<string, string>>;

export const translations: Translations = {
  pl: {
    appTitle: "Panel Sprzedawcy",
    navDashboard: "Dashboard",
    navOrders: "Zamówienia",
    navReviews: "Opinie",
    navQuality: "Jakość sprzedaży",
    loginTitle: "Logowanie",
    loginButton: "Zaloguj",
    widgetOrders: "Zamówienia",
    widgetQuality: "Jakość sprzedaży",
    widgetReviews: "Opinie kupujących",
    widgetRanking: "Ranking ofert",
    widgetSalesChart: "Wykres sprzedaży",
    widgetTips: "Porady sprzedażowe",
  },
  en: {
    appTitle: "Seller Dashboard",
    navDashboard: "Dashboard",
    navOrders: "Orders",
    navReviews: "Reviews",
    navQuality: "Sales Quality",
    loginTitle: "Login",
    loginButton: "Sign in",
    widgetOrders: "Orders",
    widgetQuality: "Sales Quality",
    widgetReviews: "Buyer Reviews",
    widgetRanking: "Offer Ranking",
    widgetSalesChart: "Sales Chart",
    widgetTips: "Sales Tips",
  },
};