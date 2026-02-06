import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PasswordGateProps = {
  children: ReactNode;
  storageKey: string;
  title: string;
  description: string;
};

const PasswordGate = ({ children, storageKey, title, description }: PasswordGateProps) => {
  const expectedPassword = import.meta.env.VITE_MEDIA_PARTNERS_PASSWORD as string | undefined;
  const passwordConfigured = Boolean(expectedPassword && expectedPassword.trim().length > 0);

  const [isUnlocked, setIsUnlocked] = useState(!passwordConfigured);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!passwordConfigured) {
      setIsUnlocked(true);
      return;
    }

    const stored = localStorage.getItem(storageKey);
    setIsUnlocked(stored === "true");
  }, [passwordConfigured, storageKey]);

  const warningMessage = useMemo(() => {
    if (passwordConfigured) {
      return null;
    }

    return "Warning: VITE_MEDIA_PARTNERS_PASSWORD is not configured. Access is open in this environment.";
  }, [passwordConfigured]);

  const unlock = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!passwordConfigured) {
      setIsUnlocked(true);
      return;
    }

    if (password === expectedPassword) {
      localStorage.setItem(storageKey, "true");
      setIsUnlocked(true);
      setError("");
      setPassword("");
      return;
    }

    setError("Incorrect password");
  };

  const logout = () => {
    localStorage.removeItem(storageKey);
    setIsUnlocked(false);
    setPassword("");
  };

  if (!isUnlocked) {
    return (
      <main className="min-h-screen aurora-bg py-20">
        <div className="section-container">
          <div className="max-w-md mx-auto surface-elevated border border-border/50 rounded-lg p-6 md:p-7 space-y-5">
            <div className="space-y-2">
              <h1 className="heading-subsection">{title}</h1>
              <p className="body-default text-sm">{description}</p>
            </div>

            <form onSubmit={unlock} className="space-y-3">
              <Input
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (error) {
                    setError("");
                  }
                }}
                placeholder="Enter password"
                className="bg-background/60"
              />
              {error ? <p className="text-xs text-destructive">{error}</p> : null}
              <Button type="submit" className="w-full">
                Unlock
              </Button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen aurora-bg py-16 md:py-20">
      <div className="section-container space-y-4">
        {warningMessage ? (
          <div className="surface-elevated border border-amber-400/40 rounded-lg px-4 py-3 text-xs md:text-sm text-amber-100">
            {warningMessage}
          </div>
        ) : null}
        <div className="flex justify-end">
          <Button type="button" size="sm" variant="outline" onClick={logout}>
            Log out
          </Button>
        </div>
        {children}
      </div>
    </main>
  );
};

export default PasswordGate;
