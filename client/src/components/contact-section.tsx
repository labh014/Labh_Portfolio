import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "labhverma551@gmail.com",
      href: "mailto:labhverma551@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9518051562",
      href: "tel:+919518051562",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Haryana, India",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/labh-b46418256/",
      label: "LinkedIn",
      color: "bg-primary hover:bg-blue-600",
    },
    {
      icon: Github,
      href: "https://github.com/labh014",
      label: "GitHub",
      color: "bg-secondary hover:bg-purple-600",
    },
    {
      icon: Mail,
      href: "mailto:labhverma551@gmail.com",
      label: "Email",
      color: "bg-accent hover:bg-cyan-400 text-black",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-card/30"
      data-testid="contact-section"
    >
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="contact-title"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism">
              <CardContent className="p-8 text-center">
                <motion.p
                  className="text-xl text-muted mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  data-testid="contact-description"
                >
                  I'm always open to discussing new opportunities,
                  collaborations, or just having a chat about technology. Let's
                  connect and build something amazing together!
                </motion.p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 bg-background/50 rounded-lg"
                      data-testid={`contact-info-${info.label.toLowerCase()}`}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <info.icon className="w-5 h-5 text-primary mr-2" />
                        <h4 className="font-semibold text-primary">
                          {info.label}
                        </h4>
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-muted hover:text-primary transition-colors"
                          data-testid={`contact-link-${info.label.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted">{info.value}</p>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="flex justify-center space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="icon"
                        className={`w-12 h-12 rounded-full transition-colors ${link.color}`}
                        onClick={() => window.open(link.href, "_blank")}
                        data-testid={`social-link-${link.label.toLowerCase()}`}
                      >
                        <link.icon className="w-5 h-5" />
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
