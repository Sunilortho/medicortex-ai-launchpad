import { useTranslation } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm">
          <ArrowLeft className="h-4 w-4" />
          {language === "de" ? "Zurück zur Startseite" : "Back to Home"}
        </Link>
        <h1 className="text-3xl font-bold text-foreground mb-8">{t("datenschutz.title")}</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. {language === "de" ? "Verantwortlicher" : "Data Controller"}</h2>
            <p>Medicortex UG (haftungsbeschränkt)<br />Berlin, Deutschland<br />E-Mail: datenschutz@medicortex.de</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. {language === "de" ? "Erhebung und Speicherung personenbezogener Daten" : "Collection and Storage of Personal Data"}</h2>
            <p>{language === "de"
              ? "Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst (Server-Logfiles). Diese umfassen den Browsertyp, das Betriebssystem, die Referrer-URL, die IP-Adresse und den Zeitpunkt der Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar."
              : "When you visit our website, general information is automatically collected (server log files). This includes browser type, operating system, referrer URL, IP address, and time of server request. This data cannot be attributed to specific individuals."
            }</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. {language === "de" ? "Kontaktformular" : "Contact Form"}</h2>
            <p>{language === "de"
              ? "Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail, Organisation, Nachricht) zwecks Bearbeitung und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."
              : "When you contact us via the contact form, the data you provide (name, email, organization, message) will be stored for processing your inquiry. We will not share this data without your consent."
            }</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Cookies</h2>
            <p>{language === "de"
              ? "Unsere Website verwendet nur technisch notwendige Cookies. Analyse-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt."
              : "Our website only uses technically necessary cookies. Analytics cookies are only set with your explicit consent."
            }</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. {language === "de" ? "Ihre Rechte" : "Your Rights"}</h2>
            <p>{language === "de"
              ? "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Kontaktieren Sie uns unter datenschutz@medicortex.de."
              : "You have the right to access, rectify, delete, restrict processing, data portability, and object. Contact us at datenschutz@medicortex.de."
            }</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. {language === "de" ? "Datenverarbeitung in der EU" : "Data Processing in the EU"}</h2>
            <p>{language === "de"
              ? "Alle Daten werden ausschließlich auf Servern innerhalb der Europäischen Union verarbeitet und gespeichert."
              : "All data is exclusively processed and stored on servers within the European Union."
            }</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
