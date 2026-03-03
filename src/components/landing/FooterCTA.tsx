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
    <section id="contact" className="py-24 gradient-teal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
          <circle cx="100" cy="200" r="200" stroke="white" strokeWidth="0.5" />
          <circle cx="1100" cy="100" r="150" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-primary-foreground/80 text-lg">{t("cta.sub")}</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-card/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/20 max-w-2xl mx-auto"
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
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
              />
              <Input
                placeholder={t("cta.org")}
                maxLength={100}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
              />
            </div>
            <Input
              type="email"
              placeholder={t("cta.email")}
              required
              maxLength={255}
              className="mb-4 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
            />
            <Textarea
              placeholder={t("cta.message")}
              rows={4}
              maxLength={1000}
              className="mb-4 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
            />

            {/* DSGVO Consent */}
            <div className="flex items-start gap-3 mb-6">
              <Checkbox
                id="gdpr-consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked === true)}
                className="mt-0.5 border-primary-foreground/40 data-[state=checked]:bg-primary-foreground data-[state=checked]:text-primary"
                required
              />
              <Label htmlFor="gdpr-consent" className="text-sm text-primary-foreground/80 cursor-pointer leading-relaxed">
                {t("cta.consent")}
              </Label>
            </div>

            {/* EU badge */}
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Shield className="h-4 w-4 text-primary-foreground/60" />
              <span className="text-xs text-primary-foreground/60">{t("footer.gdpr")}</span>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90"
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
