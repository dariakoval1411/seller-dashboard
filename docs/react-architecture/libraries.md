## 1. Podstawowe biblioteki

### React
- **Opis:** Biblioteka do budowy interfejsu użytkownika w oparciu o komponenty.
- **Rola w projekcie:** Podstawa całej aplikacji (komponenty stron, layout, widgetów).

### React DOM
- **Opis:** Warstwa integrująca React z przeglądarką.
- **Rola w projekcie:** Montowanie aplikacji w elemencie `#root` w pliku `main.tsx`

### TypeScript
- **Opis:** Nadzbiór JavaScriptu z typowaniem statycznym.
- **Rola w projekcie:** Zwiększa bezpieczeństwo i czytelność kodu (typy komponentów, kontekstów, hooków).
  
---

## 2. Narzędzia build / dev

### Vite
- **Opis:** Lekki bundler i dev-server do aplikacji front-endowych.
- **Rola w projekcie:** Służy do uruchamiania aplikacji w trybie deweloperskim (`npm run dev`) oraz budowania wersji produkcyjnej.

---

## 3. Routing

### react-router-dom
- **Opis:** Biblioteka do nawigacji w aplikacjach React (SPA).
- **Rola w projekcie:**
  - Definiowanie tras (`/login`, `/dashboard`, `/orders`, `/reviews`, `/quality`).
  - Przekierowania (`Navigate`).
  - Ochrona tras (komponent `ProtectedRoute`).
  - Linki nawigacyjne w nagłówku (`<Link>`).

---

## 4. Zarządzanie stanem i konteksty


W projekcie nie jest używany zewnętrzny framework do zarządzania stanem (np. Redux).  
Stan globalny realizowany jest przy pomocy **React Context API**:

- `ThemeContext` – zarządzanie motywem kolorystycznym (light / dark).
- `LanguageContext` – dwujęzyczność interfejsu (PL / EN).

---

## 5. Inne

### CSS (globalne style)
- **Opis:** Własne style w pliku `src/styles/global.css`.
- **Rola w projekcie:** Definicje wyglądu:
  - układ strony (`.app-layout`, siatka widgetów),
  - nagłówek (`.app-header`, `.header-nav`),
  - wygląd kart widgetów (`.card`),
  - styl przycisków oraz motywów (light/dark).