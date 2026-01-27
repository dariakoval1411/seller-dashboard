import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/model/AuthContext";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { Button } from "@/shared/ui/atoms/Button";
import { Text } from "@/shared/ui/atoms/Text";

export function LoginForm() {
  const { t } = useLanguage();
  const { login } = useAuth();
  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError(t("loginErrorRequired"));
      return;
    }

    try {
      setBusy(true);
      const ok = await login(username.trim(), password);
      if (!ok) {
        setError(t("loginErrorInvalid"));
        return;
      }
      nav("/dashboard");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, width: 360 }}>
      <div style={{ display: "grid", gap: 6 }}>
        <Text as="label" className="login-label">{t("loginUsername")}</Text>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder=""
          className="login-input"
          autoComplete="username"
        />
      </div>

      <div style={{ display: "grid", gap: 6 }}>
        <Text as="label" className="login-label">{t("loginPassword")}</Text>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=""
          className="login-input"
          type="password"
          autoComplete="current-password"
        />
      </div>

      {error && (
        <div
          style={{
            padding: 10,
            borderRadius: 10,
            border: "1px solid #ff6b6b",
            background: "rgba(255, 107, 107, 0.08)",
          }}
        >
          <Text>{error}</Text>
        </div>
      )}

      <Button type="submit" disabled={busy}>
        {busy ? t("loginLoading") : t("loginSubmit")}
      </Button>
    </form>
  );
}