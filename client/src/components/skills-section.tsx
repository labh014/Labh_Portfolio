import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      color: "text-primary",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 85 },
        { name: "C", level: 80 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      color: "text-secondary",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "Databases",
      color: "text-accent",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 82 },
      ],
    },
    {
      title: "Tools & Others",
      color: "text-primary",
      skills: [
        { name: "Git & GitHub", level: 93 },
        { name: "Socket.io", level: 87 },
        { name: "WebRTC", level: 80 },
      ],
    },
  ];

  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".skill-progress");
            progressBars.forEach((bar) => {
              const progressElement = bar as HTMLElement;
              const width = progressElement.style.width;
              progressElement.style.width = "0%";
              setTimeout(() => {
                progressElement.style.width = width;
              }, 200);
            });
            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      skillsObserver.observe(sectionRef.current);
    }

    return () => skillsObserver.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 bg-card/30"
      data-testid="skills-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="skills-title"
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Card className="glass-morphism h-full">
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold mb-6 ${category.color}`}>
                      {category.title}
                    </h3>
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted">{skill.level}%</span>
                          </div>
                          <div className="skill-bar h-2 bg-border/30 rounded-full">
                            <div
                              className="skill-progress rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
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
