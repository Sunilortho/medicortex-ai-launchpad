import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";

const FooterCTA = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Get in touch to explore how our AI platforms can deliver results for your organization.
            </p>
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
                placeholder="Your Name"
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
              />
              <Input
                placeholder="Organization"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
              />
            </div>
            <Input
              type="email"
              placeholder="Email Address"
              required
              className="mb-4 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
            />
            <Textarea
              placeholder="Tell us about your needs..."
              rows={4}
              className="mb-6 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90"
              disabled={submitted}
            >
              {submitted ? "Message Sent! ✓" : (
                <>
                  Send Inquiry
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
