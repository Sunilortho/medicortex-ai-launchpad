import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Send, Shield } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/contexts/LanguageContext";

const FooterCTA = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground text-lg">{t("cta.sub")}</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-card/50 backdrop-blur-md rounded-2xl p-8 border border-border max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder={t("cta.name")}
                required
                maxLength={100}
                className="bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
              />
              <Input
                placeholder={t("cta.org")}
                maxLength={100}
                className="bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
              />
            </div>
            <Input
              type="email"
              placeholder={t("cta.email")}
              required
              maxLength={255}
              className="mb-4 bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Textarea
              placeholder={t("cta.message")}
              rows={4}
              maxLength={1000}
              className="mb-4 bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />

            {/* DSGVO Consent */}
            <div className="flex items-start gap-3 mb-6">
              <Checkbox
                id="gdpr-consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked === true)}
                className="mt-0.5 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                required
              />
              <Label htmlFor="gdpr-consent" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                {t("cta.consent")}
              </Label>
            </div>

            {/* EU badge */}
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">{t("footer.gdpr")}</span>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gradient-teal text-primary-foreground font-bold hover:opacity-90 glow-sm"
              disabled={submitted || !consent}
            >
              {submitted ? t("cta.sent") : (
                <>
                  {t("cta.submit")}
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
