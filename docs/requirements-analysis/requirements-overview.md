## 1. Cel projektu

Celem projektu jest opracowanie koncepcji oraz prototypu **Panelu Sprzedawcy** – modułu portalu zakupowego umożliwiającego sprzedawcy szybki przegląd kluczowych informacji dotyczących sprzedaży, jakości obsługi oraz opinii kupujących.  
Panel dostępny jest wyłącznie po zalogowaniu i musi wspierać:
- wielokontowość,
- dwujęzyczność (PL/EN),
- tryby kolorystyczne: light / dark.
  
---
## 2. Zakres funkcjonalny
### 2.1. Dostęp i personalizacja
- Uproszczone logowanie.
- Wielokontowość – możliwość przeglądania danych dla różnych powiązanych kont sprzedawcy.
- Zmiana języka interfejsu (PL/EN).
- Zmiana trybu kolorystycznego (light/dark).
### 2.2. Dashboard sprzedawcy – widgety
Panel składa się z sześciu widgetów:
#### Zamówienia
- Nieopłacone, niewysłane, zwroty.
- Przekierowanie do strony „Zamówienia”.
- Obsługa pustego stanu.
#### Jakość Sprzedaży
- Ocena jakości + maksymalny możliwy wynik.
- Kategoria jakości (1 z 5).
- 3 najsłabsze aspekty.
- Przejście na stronę „Jakość sprzedaży”.
- Pusty stan.
#### Opinie Kupujących
- Ostatnie 5 opinii.
- Filtry: wszystkie / pozytywne / negatywne.
- Przejście do strony opinii.
- Pusty stan.
#### Ranking Ofert
- 5 ofert według wybranego kryterium.
- Kryteria:
  - najczęściej kupowane,
  - najrzadziej kupowane.
- Dane: nazwa, miniatura, sprzedaż, obrót / wyświetlenia.
- Pusty stan.
#### Wykres sprzedaży
- Miary: obrót / liczba sprzedanych sztuk.
- Zakresy: dziś / obecny tydzień / poprzedni tydzień.
- Typy wykresu: słupkowy / liniowy.
- Dodatkowe funkcje:
  - seria poprzedniego okresu,
  - wyróżnienie punktów z niepełnego okresu.
#### Porady sprzedażowe
- Zestaw wskazówek dotyczących poprawy sprzedaży.

---

### 2.3. Podstrony


Panel zawiera uproszczone wersje stron:

- Zamówienia
- Opinie kupujących
- Jakość sprzedaży

Strony mogą prezentować wyłącznie nagłówki i podstawowe informacje.

---

## 3. User Stories
### Dostęp i personalizacja
- **US-01**: Logowanie do panelu.
- **US-02**: Wybór konta po zalogowaniu.
- **US-03**: Przełączanie kont bez ponownego logowania.
- **US-04**: Zmiana języka interfejsu (PL/EN).
- **US-05**: Zmiana trybu kolorystycznego (light/dark).

---

### Widget „Zamówienia”

- **US-06**: Podgląd liczby zamówień w trzech kategoriach.
- **US-07**: Przejście do strony „Zamówienia”.
- **US-08**: Komunikat przy braku zamówień.

---

### Widget „Jakość Sprzedaży”

- **US-09**: Wyświetlenie oceny i kategorii jakości.
- **US-10**: Wyświetlenie 3 najsłabszych aspektów.
- **US-11**: Przejście do strony jakości sprzedaży.
- **US-12**: Pusty stan, jeśli brak danych.

---

### Widget „Opinie Kupujących”

- **US-13**: Wyświetlenie 5 ostatnich opinii.
- **US-14**: Filtrowanie opinii.
- **US-15**: Przejście do pełnej strony opinii.
- **US-16**: Komunikat przy braku opinii.

---

### Widget „Ranking Ofert”
- **US-17**: Podgląd 5 najczęściej kupowanych ofert.
- **US-18**: Przełączenie na „najrzadziej kupowane”.
- **US-19**: Komunikat przy braku ofert.

---

### Widget „Wykres Sprzedaży”

- **US-20**: Wybór miary wykresu (obrót / sztuki).
- **US-21**: Wybór zakresu czasu.
- **US-22**: Wybór typu wykresu (słupkowy / liniowy).
- **US-23**: Włączenie serii z poprzedniego okresu.
- **US-24**: Wyróżnienie punktów z niepełnego okresu.

---

### Widget „Porady Sprzedażowe”

- **US-25**: Wyświetlenie porad sprzedażowych.