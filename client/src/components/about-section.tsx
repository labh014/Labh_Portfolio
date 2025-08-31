import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Code, Globe } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: MapPin, label: "Location", value: "Haryana, India" },
    { icon: GraduationCap, label: "Education", value: "IIIT Una" },
    { icon: Code, label: "Experience", value: "Full Stack Developer" },
    { icon: Globe, label: "Focus", value: "Web Development" },
  ];

  return (
    <section id="about" className="py-20 px-4" data-testid="about-section">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="about-title"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl glass-morphism flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                    <img
                      src="/Labh.png"
                      alt="Labh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-muted">Labh</p>
                </div>
              </div>
            </motion.div>

            {/* About Text Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold" data-testid="about-subtitle">
                Full Stack Developer & CS Student
              </h3>
              <p
                className="text-muted text-lg leading-relaxed"
                data-testid="about-description-1"
              >
                I'm currently pursuing my Bachelor of Science in Information
                Technology at the prestigious Indian Institute of Information
                Technology (IIIT) Una, Himachal Pradesh. As a passionate Full
                Stack Developer, I specialize in creating seamless digital
                experiences using modern web technologies.
              </p>
              <p
                className="text-muted text-lg leading-relaxed"
                data-testid="about-description-2"
              >
                My journey in tech has led me to work at Markvision as a Full
                Stack Developer, where I've improved application performance by
                25% and developed real-time features that increased user
                engagement by 40%. I love solving complex problems and building
                applications that make a real impact.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="glass-morphism"
                      data-testid={`stat-${stat.label.toLowerCase()}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <stat.icon className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold text-primary">
                            {stat.label}
                          </h4>
                        </div>
                        <p className="text-sm text-muted">{stat.value}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
