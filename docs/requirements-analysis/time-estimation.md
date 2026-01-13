## 1. Wprowadzenie

Dokument przedstawia szacunkowy nakład pracy wymagany do realizacji pierwszego kamienia milowego projektu **„Panel Sprzedawcy”**.  
Wyliczenia obejmują zarówno prace analityczne, projektowe (UML, Figma), jak i przygotowanie szkieletu implementacji w React.

Czas podany jest w godzinach roboczych (roboczogodzinach) i dotyczy łącznie pracy całej **dwuosobowej grupy**.

---

## 2. Szacunkowy czas pracy (summary)

| Obszar prac | Szacowany czas | Uwagi |
|-------------|----------------|--------|
| Analiza wymagań + MoSCoW + dokumentacja | 3–4 h | User stories, analiza funkcji, struktura dokumentów |
| Przygotowanie kompletu diagramów UML | 2–3 h | UCD: aktorzy, przypadki użycia, aktywności, sekwencje, domena, UI |
| Projekt w Figmie (design system + dashboard + 1–2 podstrony) | 4–6 h | Layout + widgety + light/dark + PL/EN |
| Architektura implementacji (React + UML + koncepcja) | 1–2 h | Struktura komponentów, kontekst, biblioteki |
| Szkielet aplikacji React | 4–6 h | Routing, struktura plików, widgety statyczne, tryby, języki |
| **RAZEM:** | **15–20 godzin** | Czas dla zespołu (2 osoby) |

---

## 3. Szczegółowe rozbicie czasu

### 3.1. Analiza wymagań i dokumentacja (3–4 h)

- Przegląd specyfikacji.  
- Przygotowanie user stories.  
- Opracowanie analizy MoSCoW.  
- Identyfikacja ryzyk i niejasności.  
- Przygotowanie dokumentów w `/requirements-analysis`.  

---

### 3.2. Diagramy UML (2–3 h)

Zgodnie z wymaganiami należy przygotować:

- diagram aktorów,  
- diagram zadań (przypadki użycia biznesowe),  
- scenariusz biznesowy (activity),  
- diagram przypadków użycia systemowych,  
- 2 scenariusze funkcjonalne,  
- diagram obiektów dziedzinowych,  
- 2 diagramy abstrakcyjnego UI,  
- diagram sekwencji.  

---

### 3.3. Projekt interfejsu w Figmie (4–6 h)

- Mini design system (przyciski, kolory, layout).  
- Widok dashboardu (6 widgetów).  
- Podstrony: **Zamówienia**, **Opinie**, **Jakość**.  
- Obsługa jasnego i ciemnego motywu.  
- Wersja podstawowa PL/EN.  

---

### 3.4. Architektura rozwiązania w React (1–2 h)

- Struktura komponentów.  
- Diagram UML architektury.  
- Dokument opisujący podejście do stanu (Context / inne).  
- Lista bibliotek i narzędzi.  

---

### 3.5. Szkielet aplikacji React (4–6 h)

- Routing (Dashboard + 3 podstrony).  
- Layout: nagłówek, przełączniki **PL/EN**, **light/dark**.  
- Komponenty widgetów (statyczne).  
- Konfiguracja projektu (np. **Vite + TypeScript**).  
- Obsługa motywu i języka.