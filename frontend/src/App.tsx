import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import LoginPage from "./routes/LoginPage";
import DashboardPage from "./routes/DashboardPage";
import OrdersPage from "./routes/OrdersPage";
import ReviewsPage from "./routes/ReviewsPage";
import QualityPage from "./routes/QualityPage";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/quality" element={<QualityPage />} />
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
