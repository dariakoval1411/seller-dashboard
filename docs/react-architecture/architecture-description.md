## 1. Ogólny przegląd architektury

Aplikacja front-endowa modułu **„Panel Sprzedawcy”** została zbudowana jako **SPA (Single Page Application)** w oparciu o **React + TypeScript** oraz **Vite**.  
Architektura opiera się na:

- komponentach stron (pages),
- wspólnym layoutcie z nagłówkiem,
- widgetach dashboardu,
- trzech kontekstach globalnych (motyw, język, logowanie),
- routingu realizowanym przez `react-router-dom`.

---

## 2. Główne elementy

### 2.1. Punkt wejścia: `main.tsx`

- Montuje aplikację w elemencie `#root`.
- Opakowuje aplikację w `BrowserRouter` (nawigacja po trasach).
- Ładuje globalne style CSS.

### 2.2. Komponent `App`

- Definiuje strukturę tras (`Routes`, `Route`).
- Używa `ThemeProvider`, `LanguageProvider` i `AuthProvider`, aby udostępnić stan globalny w całej aplikacji.
- Wykorzystuje komponent `ProtectedRoute` do ochrony tras wymagających logowania.

Trasy:
- `/login` – strona logowania.
- `/dashboard` – główny panel sprzedawcy (dashboard z widgetami).
- `/orders` – uproszczona strona zamówień.
- `/reviews` – uproszczona strona opinii kupujących.
- `/quality` – uproszczona strona jakości sprzedaży.

---

## 3. Layout i nagłówek

### 3.1. `Layout`

- Komponent odpowiedzialny za wspólny układ stron.
- Zawiera:
  - górny nagłówek (`Header`) w stałej pozycji,
  - kontener na treść strony (`div.app-layout`).

### 3.2. `Header`

- Prezentuje:
  - nazwę aplikacji,
  - nawigację (`Dashboard`, `Zamówienia`, `Opinie`, `Jakość sprzedaży`),
  - przycisk zmiany języka (PL/EN),
  - przycisk zmiany motywu (light/dark),
  - ikonę „wyloguj”.
- Korzysta z:
  - `useTheme()` – do zmiany motywu,
  - `useLanguage()` – do zmiany języka i pobierania tekstów,

---

## 4. Strony (routes / pages)

- **`DashboardPage`**
  - Korzysta z `Layout`.
  - Wyświetla siatkę (grid) widgetów (6 elementów):
    - `OrdersWidget`
    - `QualityWidget`
    - `ReviewsWidget`
    - `RankingWidget`
    - `SalesChartWidget`
    - `TipsWidget`
  - Dane w widgetach są statyczne (mock / placeholdery).

- **`OrdersPage`**
  - Uproszczona strona zamówień.
  - Wyświetla informację o wybranej kategorii (np. „Niewysłane”) oraz tabelę z przykładowymi zamówieniami (mock).

- **`ReviewsPage`**
  - Uproszczona strona opinii kupujących.

- **`QualityPage`**
  - Uproszczona strona jakości sprzedaży.
  
---

## 5. Widgety (komponenty dashboardu)

Każdy widget jest oddzielnym, prostym komponentem:

- `OrdersWidget` – sekcja z liczbą zamówień (placeholdery).
- `QualityWidget` – sekcja jakości sprzedaży (placeholder).
- `ReviewsWidget` – ostatnie opinie (placeholder).
- `RankingWidget` – ranking ofert (placeholder).
- `SalesChartWidget` – miejsce na wykres sprzedaży.
- `TipsWidget` – przykładowe porady sprzedażowe (statyczna lista).

Widgety korzystają z `LanguageContext`, aby wyświetlać nagłówki w wybranym języku.

---

## 6. Konteksty (Theme, Language, Auth)

- **`ThemeProvider`**
  - Odpowiada za motyw kolorystyczny.
  - Dodaje klasę `theme-light` lub `theme-dark` do korzenia aplikacji.

- **`LanguageProvider`**
  - Umożliwia przełączanie języka.
  - Udostępnia funkcję `t(key)` do pobierania tłumaczeń.
  
---