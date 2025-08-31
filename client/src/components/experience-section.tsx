import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Users, Database } from "lucide-react";

export default function ExperienceSection() {
  const achievements = [
    {
      icon: TrendingUp,
      text: "Improved overall web application performance by 25% by effectively managing state using Context API and optimizing data flow.",
      highlight: "25%",
    },
    {
      icon: Database,
      text: "Optimized database queries, reducing data retrieval time and implemented efficient data storage schemas in MongoDB.",
    },
    {
      icon: Users,
      text: "Developed and integrated real-time chat functionality using Socket.IO, increasing user engagement by 40%.",
      highlight: "40%",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-card/30"
      data-testid="experience-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="experience-title"
          >
            Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism" data-testid="experience-card">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary" data-testid="job-title">
                        Full Stack Developer
                      </h3>
                      <h4 className="text-xl font-semibold mb-2" data-testid="company-name">
                        Markvision
                      </h4>
                      <div className="flex items-center text-muted">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span data-testid="job-duration">January 2025 – June 2025</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30" data-testid="current-role-badge">
                        Current Role
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        data-testid={`achievement-${index}`}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <achievement.icon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-muted">
                          {achievement.text.split(achievement.highlight || "").map((part, i) => (
                            <span key={i}>
                              {part}
                              {i === 0 && achievement.highlight && (
                                <span className="text-primary font-semibold">
                                  {achievement.highlight}
                                </span>
                              )}
                            </span>
                          ))}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
