import { useTranslation } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm">
          <ArrowLeft className="h-4 w-4" />
          {language === "de" ? "Zurück zur Startseite" : "Back to Home"}
        </Link>
        <h1 className="text-3xl font-bold text-foreground mb-8">{t("impressum.title")}</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-foreground">{language === "de" ? "Angaben gemäß § 5 TMG" : "Information per § 5 TMG"}</h2>
            <p>
              Medicortex UG (haftungsbeschränkt)<br />
              Berlin, Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">{language === "de" ? "Kontakt" : "Contact"}</h2>
            <p>E-Mail: info@medicortex.de</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">{language === "de" ? "Registereintrag" : "Commercial Register"}</h2>
            <p>{language === "de"
              ? "Eingetragen im Handelsregister. Registergericht: Amtsgericht Berlin-Charlottenburg"
              : "Registered in the commercial register. Registry court: Amtsgericht Berlin-Charlottenburg"
            }</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">{language === "de" ? "Haftungsausschluss" : "Disclaimer"}</h2>
            <p>{language === "de"
              ? "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich."
              : "Despite careful content control, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content."
            }</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
