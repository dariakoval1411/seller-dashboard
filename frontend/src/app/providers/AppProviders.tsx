import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/features/auth/model/AuthContext";
import { LanguageProvider } from "@/features/i18n/model/LanguageContext";
import { ThemeProvider } from "@/features/theme/model/ThemeContext";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};