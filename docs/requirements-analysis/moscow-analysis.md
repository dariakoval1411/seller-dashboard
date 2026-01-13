## 1. Wprowadzenie

Analiza została wykonana zgodnie z metodyką **MoSCoW** w celu określenia priorytetów funkcjonalnych oraz zakresu prac przewidzianych na pierwszy kamień milowy projektu **Panelu Sprzedawcy**.  
Uwzględniono zarówno elementy implementacyjne (React), jak i dokumentacyjne (UML, koncepcja, Figma).

---

## 2. Klasyfikacja MoSCoW

### 2.1. MUST HAVE

Funkcje absolutnie wymagane, aby projekt został uznany za kompletny na pierwszy kamień milowy.

| ID   | Opis | Szacowany czas [h] | Ryzyka / Uwagi |
|------|------|--------------------|----------------|
| M-01 | Uproszczone logowanie użytkownika | 1–2 | Logowanie bez backendu; mock danych |
| M-02 | Przełączanie i wybór kont sprzedawcy (wielokontowość – podstawowa wersja) | 1–2 | Bez realnych danych; prezentacja statyczna |
| M-03 | Statyczny widok dashboardu z 6 widgetami | 2–3 | Spójność layoutu z Figmą |
| M-04 | Podstawowe treści w widgetach (nagłówki, struktura, placeholdery) | 2–3 | Dane mock lub puste stany |
| M-05 | Podstawowe podstrony: Zamówienia, Opinie, Jakość | 2–3 | Tylko nagłówki + wybrana kategoria |
| M-06 | Dwujęzyczność (PL/EN) – przełącznik i podstawowe tłumaczenia | 3–4 | Rozbieżności językowe w komponentach |
| M-07 | Tryb light/dark – przełącznik oraz podstawowe style | 3–4 | Ujednolicenie kolorów z Figmy |
| M-08 | Pełen zestaw wymaganych diagramów UML | 2–3 | Zgodność z UCD i Figmą |
| M-09 | Abstrakcyjny model UI (2 diagramy) | 1–2 | Odwzorowanie layoutu dashboardu |
| M-10 | Projekt w Figma: dashboard + mini design system + 1–2 podstrony | 4–6 | Musi być zgodny z implementacją |
| M-11 | UML architektury implementacji w React | 1–2 | Uzgodnić strukturę komponentów |
| M-12 | Szkielet aplikacji w React (routing, layout, widgety statyczne, język, motyw) | 4–6 | Kluczowy element milestone’u |

---

### 2.2. SHOULD HAVE

Funkcje istotne, ale niewymagane do minimalnego działania prototypu.

| ID   | Opis | Szacowany czas [h] | Ryzyka / Uwagi |
|------|------|--------------------|----------------|
| S-01 | Filtrowanie opinii (wszystkie / pozytywne / negatywne) | 2–3 | Działanie na mock danych |
| S-02 | Przełączanie miary na wykresie (obrót / liczba sztuk) | 2–3 | Wymaga dwóch zestawów danych mock |
| S-03 | Zakres czasu na wykresie (dziś / obecny tydzień / poprzedni tydzień) | 2–3 | Niejasność: „poprzedni tydzień / miesiące” |
| S-04 | 3 najsłabsze aspekty jakości sprzedaży | 2–3 | Dane statyczne, bez logiki wyliczeń |
| S-05 | Wyróżnienie punktów z niepełnego okresu na wykresie | 1–2 | Zmiana stylu wystarczy |

---

### 2.3. COULD HAVE

Dodatki poprawiające prezentację i UX — realizowane tylko, jeśli wystarczy czasu.

| ID   | Opis | Szacowany czas [h] | Ryzyka / Uwagi |
|------|------|--------------------|----------------|
| C-01 | Dummy data zbliżone do realistycznych | 2–3 | Zwiększa wiarygodność prototypu |
| C-02 | Animacje podstawowe (hover, transition, motyw) | 2–3 | Wpływa na UX, ale opcjonalne |
| C-03 | Responsywność układu (widok mobilny) | 3–4 | Wydłuża pracę nad stylami |

---

### 2.4. WON’T HAVE (na ten kamień milowy)

Elementy wykraczające poza zakres pierwszego milestone’u.

| ID   | Opis | Powód wykluczenia |
|------|------|-------------------|
| W-01 | Integracja z backendem / API | Brak backendu; za duży zakres |
| W-02 | Pełna logika wyliczenia jakości sprzedaży | Zbyt skomplikowane na prototyp |
| W-03 | Zaawansowane sortowanie, filtrowanie, paginacja | Nie jest wymagane |
| W-04 | Pełna obsługa sesji, bezpieczeństwa i autoryzacji | Poza zakresem prototypu |
| W-05 | Zaawansowane wykresy z wieloma seriami dynamicznymi | Wersja mock wystarczy |