import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Code of Fusion 2.0",
      subtitle: "Top 15 out of 920 teams",
      description:
        "Secured a position among the top 15 teams out of 920 in the national-level coding competition held at Chandigarh University, demonstrating exceptional problem-solving skills.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Star,
      title: "Coding Excellence",
      subtitle: "450+ Problems Solved",
      description:
        "Solved 450+ DSA problems on platforms like CodeChef, LeetCode, and Codestudio. Achieved 3-star rating on CodeChef, showcasing consistent competitive programming skills.",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section className="py-20 px-4" data-testid="achievements-section">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="achievements-title"
          >
            Achievements
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                data-testid={`achievement-${achievement.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Card className="glass-morphism h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-full flex items-center justify-center mr-4`}
                      >
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold" data-testid={`achievement-title-${achievement.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          {achievement.title}
                        </h3>
                        <p className="text-muted" data-testid={`achievement-subtitle-${achievement.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted leading-relaxed" data-testid={`achievement-description-${achievement.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
