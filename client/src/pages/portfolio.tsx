import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";

export default function Portfolio() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroContent = document.querySelector("#home .relative");
      if (heroContent) {
        (heroContent as HTMLElement).style.transform = `translateY(${
          scrolled * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
      
    </div>
  );
}
