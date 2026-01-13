## 1. Wprowadzenie

Dokument przedstawia listę zidentyfikowanych ryzyk, niejasności oraz potencjalnych problemów związanych z realizacją pierwszego kamienia milowego projektu **„Panel Sprzedawcy”**.  
Ryzyka dotyczą zarówno analizy wymagań, projektu interfejsu, jak i wstępnej implementacji rozwiązania.

---

## 2. Lista ryzyk i niejasności

### **R-01 — Niejasność dotycząca zakresu czasu na wykresie („poprzedni tydzień – oś podzielona na miesiące”)**

**Opis:** Specyfikacja sugeruje, że zakres „poprzedni tydzień” ma być przedstawiony na osi podzielonej na miesiące, co jest logicznie sprzeczne.  
**Skutek:** Trudność w prawidłowym odwzorowaniu wymagań, możliwa dezorientacja użytkownika.  
**Proponowane działanie:** Przyjąć uproszczenie (podział na dni) i zgłosić pytanie prowadzącemu.

---

### **R-02 — Nieokreślona logika generowania jakości sprzedaży**

**Opis:** Brak szczegółów dotyczących algorytmu liczenia punktów, wag i kategorii jakości.  
**Skutek:** Ryzyko nadmiernej komplikacji lub błędnej interpretacji.  
**Proponowane działanie:** Na milestone użyć wartości przykładowych (mock), bez rzeczywistej logiki.

---

### **R-03 — Charakter danych w widgetcie „Porady sprzedażowe”**

**Opis:** Nie wiadomo, czy porady mają być dynamiczne, kontekstowe czy mogą być statyczne.  
**Skutek:** Możliwość nadmiernego poszerzenia zakresu projektu.  
**Proponowane działanie:** Na tym etapie przyjąć statyczne porady tekstowe.

---

### **R-04 — Zakres funkcjonalny wielokontowości**

**Opis:** Wymaganie mówi o przeglądaniu danych dla powiązanych kont, ale nie określa, czy dane muszą się zmieniać dynamicznie.  
**Skutek:** Możliwa nadmierna złożoność implementacji.  
**Proponowane działanie:** Wprowadzić jedynie interfejs wyboru konta; dane mock lub statyczne.

---

### **R-05 — Dwujęzyczność (PL/EN) — poziom szczegółowości**

**Opis:** Nie określono, czy każdy element UI musi być przetłumaczony.  
**Skutek:** Ryzyko opóźnień związanych z pełnym tłumaczeniem.  
**Proponowane działanie:** Przetłumaczyć kluczowe elementy (widgety, nagłówki); reszta może pozostać uproszczona.

---

### **R-06 — Tryb dark/light — szczegółowość projektu wizualnego**

**Opis:** Wymaganie nie precyzuje, czy oba motywy mają zawierać pełen zestaw stylów i wariantów.  
**Skutek:** Możliwe niepotrzebne rozbudowanie projektu graficznego.  
**Proponowane działanie:** Ograniczyć się do podstawowej palety kolorystycznej (tło + tekst + elementy główne).

---

### **R-07 — Brak backendu**

**Opis:** Wszystkie dane muszą być mockowane lub statyczne.  
**Skutek:** Widgety nie będą prezentować faktycznej logiki biznesowej.  
**Proponowane działanie:** Przyjąć mock data i skupić się na strukturze UI oraz interakcji.

---

### **R-08 — Rozbieżność między UML, Figmą i implementacją React**

**Opis:** Diagramy abstrakcyjne, projekt Figmy i struktura komponentów muszą być ze sobą spójne.  
**Skutek:** Konieczność poprawek we wszystkich trzech częściach.  
**Proponowane działanie:** Przygotować UML → Figma → dopiero implementacja (zachować kolejność).

---

### **R-09 — Złożoność widgetu „Wykres sprzedaży”**

**Opis:** Widget wymaga wielu opcji (miary, okresy, serie danych, typy wykresów).  
**Skutek:** Ryzyko zbyt szczegółowego prototypowania.  
**Proponowane działanie:** Ograniczyć zakres funkcjonalny wykresu dla milestone (mock danych + przełączniki UI).

---

### **R-10 — Zakres treści podstron**

**Opis:** Nie sprecyzowano, jak bardzo szczegółowe mają być podstrony: Zamówienia, Opinie, Jakość.  
**Skutek:** Możliwe nieporozumienia co do zakresu implementacji.  
**Proponowane działanie:** Strony powinny być uproszczone (nagłówek + podstawowa informacja).