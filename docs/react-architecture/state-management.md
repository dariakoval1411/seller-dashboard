## 1. Podejście do zarządzania stanem

Aplikacja korzysta z prostego podejścia opartego na:
- **React Context API** – do stanu globalnego,
- **Lokalnego stanu komponentów** – tam, gdzie logika jest specyficzna dla danego widoku.

Nie jest używany Redux ani inne zewnętrzne biblioteki do zarządzania stanem, ponieważ zakres projektu (szkielet + prototyp) tego nie wymaga.

---

## 2. Stan globalny (Context)

### 2.1. `ThemeContext`

- **Plik:** `src/context/ThemeContext.tsx`
- **Odpowiada za:**
  - Przechowywanie aktualnego motywu: `light` lub `dark`.
  - Udostępnienie funkcji `toggleTheme()`.
- **Zakres obowiązywania:**  
  Obejmuje całą aplikację poprzez `ThemeProvider` opakowujący komponent `App`.
- **Wpływ na UI:**  
  `ThemeProvider` dodaje klasę CSS (`theme-light` lub `theme-dark`) na elemencie głównym (`div.app-root`), co powoduje zmianę kolorów tła i tekstu oraz kart widgetów.

---

### 2.2. `LanguageContext`

- **Plik:** `src/context/LanguageContext.tsx`
- **Odpowiada za:**
  - Aktualny język interfejsu (`"pl"` lub `"en"`).
  - Funkcję `setLanguage(lang)` do zmiany języka.
  - Funkcję `t(key)` do pobierania tekstów z obiektu `translations`.
- **Zakres obowiązywania:**  
  Cała aplikacja (Layout, Header, strony, widgety).
- **Wpływ na UI:**  
  Zmiana języka powoduje przeładowanie nagłówków, nazw widgetów, elementów nawigacji itp.  
  Przykład: `t("appTitle")`, `t("navDashboard")`, `t("widgetOrders")`.

---