import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("medicortex-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = (all: boolean) => {
    localStorage.setItem(
      "medicortex-cookie-consent",
      JSON.stringify({ necessary: true, analytics: all || analytics })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4" role="dialog" aria-label={t("cookie.title")}>
      <div className="container mx-auto max-w-2xl bg-card border border-border rounded-2xl shadow-2xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="font-bold text-card-foreground">{t("cookie.title")}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{t("cookie.desc")}</p>

        <div className="space-y-3 mb-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-card-foreground">{t("cookie.necessary")}</p>
              <p className="text-xs text-muted-foreground">{t("cookie.necessaryDesc")}</p>
            </div>
            <Switch checked disabled aria-label={t("cookie.necessary")} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-card-foreground">{t("cookie.analytics")}</p>
              <p className="text-xs text-muted-foreground">{t("cookie.analyticsDesc")}</p>
            </div>
            <Switch checked={analytics} onCheckedChange={setAnalytics} aria-label={t("cookie.analytics")} />
          </div>
        </div>

        <div className="flex gap-3">
          <Button size="sm" className="flex-1 gradient-teal border-0 text-primary-foreground" onClick={() => accept(true)}>
            {t("cookie.acceptAll")}
          </Button>
          <Button size="sm" variant="outline" className="flex-1" onClick={() => accept(false)}>
            {t("cookie.necessaryOnly")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
