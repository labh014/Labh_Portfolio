import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Wanderlust",
      subtitle: "Full-Stack Platform for Seamless Location Rentals and User Engagement",
      features: [
        "15% reduction in user drop-off rate",
        "80% of listings use rating system",
        "100+ high-quality images supported",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Mapbox"],
      gradient: "from-blue-500/20 to-purple-500/20",
      buttonColor: "bg-primary hover:bg-blue-600",
      githubUrl: "https://github.com/labh014",
      liveUrl: "https://wanderlust-travelling.onrender.com/listings",
    },
    {
      title: "Gadget Galaxy",
      subtitle: "Animated Commercial Website with seamless e-commerce functionality",
      features: [
        "Smooth animations with Framer Motion",
        "Real-time content management",
        "Integrated payment system",
      ],
      technologies: ["React.js", "Framer Motion", "Sanity.io", "Stripe"],
      gradient: "from-green-500/20 to-blue-500/20",
      buttonColor: "bg-secondary hover:bg-purple-600",
      githubUrl: "https://github.com/labh014",
      liveUrl: "https://galaxygadget.vercel.app/",
    },
    {
      title: "Live Horizon",
      subtitle: "Real-time communication platform using WebRTC and Socket.io",
      features: [
        "Peer-to-peer video calls",
        "Real-time messaging",
        "Screen sharing capabilities",
      ],
      technologies: ["WebRTC", "Socket.io", "Node.js"],
      gradient: "from-red-500/20 to-orange-500/20",
      buttonColor: "bg-accent hover:bg-cyan-400 text-black",
      githubUrl: "https://github.com/labh014",
      liveUrl: "https://live-horizon.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4" data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="projects-title"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="project-card"
                data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Card className="glass-morphism h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Project screenshot placeholder */}
                    <div
                      className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center`}
                    >
                      <span className="text-2xl font-bold gradient-text">
                        {project.title}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3" data-testid={`project-title-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted mb-4" data-testid={`project-subtitle-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {project.subtitle}
                    </p>

                    <div className="space-y-2 mb-6 text-sm flex-grow">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2"
                          data-testid={`project-feature-${idx}`}
                        >
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span className="text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-primary/20 text-primary text-xs"
                          data-testid={`project-tech-${idx}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3 mt-auto">
                      <Button
                        className={`flex-1 py-2 text-sm font-medium transition-colors ${project.buttonColor}`}
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        data-testid={`button-view-live-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 py-2 border border-border hover:border-primary text-sm font-medium transition-colors"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        data-testid={`button-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
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
