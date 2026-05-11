import { motion } from "motion/react";
import { User, Code2, Layers, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

/**
 * Side Navigation Component
 * A vertical, docked navbar that expands from icons to text labels on hover.
 */
const Navigation = () => {
  const navItems = [
    { name: "Work", href: "#work", icon: <Layers className="w-5 h-5" /> },
    { name: "About", href: "#about", icon: <User className="w-5 h-5" /> },
    { name: "Tools", href: "#tools", icon: <Code2 className="w-5 h-5" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 top-0 h-full z-50 flex items-center pl-6 pointer-events-none"
    >
      <div className="flex flex-col gap-4 bg-black/40 backdrop-blur-xl p-3 rounded-2xl border border-white/10 pointer-events-auto shadow-2xl">
        {navItems.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            whileHover="hover"
            initial="initial"
            className="flex items-center gap-0 overflow-hidden rounded-xl group transition-all duration-300"
          >
            <div className="flex items-center justify-center min-w-[44px] h-[44px] bg-white/5 group-hover:bg-white group-hover:text-black transition-colors duration-300 rounded-xl">
              {item.icon}
            </div>
            
            <motion.span
              variants={{
                initial: { width: 0, opacity: 0, x: -10 },
                hover: { width: "auto", opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="whitespace-nowrap px-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white pr-6"
            >
              {item.name}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

/**
 * Hero Section
 * High-impact introduction with large typography and staggered entrance.
 * 
 * MODIFY TIP: 
 * - Change the h1 text for your personal headline.
 * - Adjust the 'duration' and 'delay' values to speed up/slow down entries.
 * - Use 'tracking-tighter' for that modern high-fashion editorial look.
 */
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-brand-muted uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-8">
            Digital Experiences Architect
          </span>
          <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-display font-medium leading-[0.85] tracking-tighter mb-12">
            DESIGN THAT <br />
            <span className="text-brand-muted">SPEAKS.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-8 items-center"
        >
          <p className="max-w-md text-brand-muted leading-relaxed text-sm sm:text-base">
            Crafting premium digital interfaces where aesthetics meet technical precision. 
            Focused on building high-performance websites for the next generation of brands.
          </p>
          <div className="flex gap-4">
             <a href="#work" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-white transition-all duration-500 group">
                <Layers className="w-4 h-4 text-brand-muted group-hover:text-white transition-colors" />
             </a>
             <a href="#contact" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-white transition-all duration-500 group">
                <Mail className="w-4 h-4 text-brand-muted group-hover:text-white transition-colors" />
             </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="absolute bottom-0 left-6 lg:left-24 w-px bg-gradient-to-b from-white/0 to-white/40 hidden sm:block"
      />
    </section>
  );
};

/**
 * Projects Section
 * Showcasing work with a clean grid and refined hover states.
 * 
 * MODIFY TIP:
 * - Add/Remove items in the 'projects' array to update your portfolio.
 * - Change 'aspect-[16/10]' to 'aspect-square' if you prefer square tiles.
 * - Toggle 'grayscale' class to remove the black and white filter.
 */
const Projects = () => {
  const projects = [
    {
      title: "Vortex Platform",
      category: "SAAS / PRODUCT",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200",
      link: "#"
    },
    {
      title: "Lumina Studio",
      category: "CREATIVE AGENCY",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200",
      link: "#"
    },
    {
      title: "Ethos App",
      category: "MOBILE / FINTECH",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      link: "#"
    },
    {
      title: "Nova Dashboard",
      category: "SYSTEM DESIGN",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200",
      link: "#"
    }
  ];

  return (
    <section id="work" className="py-32 px-6 lg:px-24">
      <div className="flex flex-col sm:flex-row justify-between items-end mb-24 gap-8">
        <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight">SELECTED <br />WORK</h2>
        <div className="text-right">
           <span className="text-[10px] uppercase tracking-widest text-brand-muted italic">Scroll to explore</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-white/5 rounded-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-black" />
                 </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium mb-1">{project.title}</h3>
                <p className="text-xs uppercase tracking-widest text-brand-muted">{project.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/**
 * About Section
 * Minimal narrative section with strong focus on simplicity.
 */
const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-24 bg-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12 sm:gap-24">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="sticky top-32 h-fit"
          >
             <h2 className="text-xs uppercase tracking-[0.4em] text-brand-muted font-bold mb-8">Background</h2>
             <div className="w-24 h-24 rounded-full overflow-hidden grayscale brightness-75 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
             </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
          >
             <p className="text-2xl sm:text-4xl leading-snug font-light text-white/90 mb-12">
               I believe that every digital touchpoint is an opportunity to create a lasting impression. 
               By balancing <span className="italic">aesthetic intent</span> with <span className="italic text-brand-muted">functional clarity</span>, 
               I build systems that grow with complexity while remaining effortless to use.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-brand-muted leading-relaxed">
                <p>
                  With nearly a decade of experience in the design field, I have assisted numerous global brands 
                  in scaling their digital presence. My approach is rooted in understanding user psychology 
                  and translating that into pixel-perfect code.
                </p>
                <p>
                  Today, I focus on the intersection of WebGL, React, and Motion, pushing the boundaries 
                  of what is possible within a browser window. Every line of code is as considered as 
                  the visual design itself.
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * Skills Section
 * Systematic representation of technical capabilities.
 */
const Skills = () => {
  const tools = [
    { name: "React / Next.js", level: "Advanced" },
    { name: "TypeScript", level: "Expert" },
    { name: "WebGL / Three.js", level: "Intermediate" },
    { name: "Figma", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "Framer Motion", level: "Expert" },
    { name: "Node.js / Express", level: "Advanced" },
    { name: "UI Design", level: "Expert" },
  ];

  return (
    <section id="tools" className="py-32 px-6 lg:px-24">
       <div className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-muted font-bold mb-4">Tech Stack</h2>
          <h3 className="text-4xl font-display font-medium">Tools of the Trade</h3>
       </div>

       <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-2xl">
          {tools.map((tool, i) => (
            <motion.div 
               key={i}
               whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
               className="bg-brand-bg p-8 flex flex-col justify-between aspect-square transition-all duration-300"
            >
               <span className="text-[10px] uppercase tracking-widest text-brand-muted">{tool.level}</span>
               <span className="text-lg font-medium">{tool.name}</span>
            </motion.div>
          ))}
       </div>
    </section>
  );
};

/**
 * Contact Section
 * Large call to action with social links.
 */
const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-24">
       <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             className="mb-12"
          >
             <h2 className="text-5xl sm:text-7xl font-display font-medium tracking-tighter mb-8 italic">
                LETS START <br />SOMETHING.
             </h2>
             <a 
               href="mailto:contact@elysian.dev" 
               className="text-xl sm:text-2xl font-mono text-brand-muted hover:text-white transition-colors underline underline-offset-8 decoration-white/20"
             >
               hello@elysian.dev
             </a>
          </motion.div>

          <div className="flex gap-8 mt-12">
             <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-muted hover:text-white transition-all group">
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
             </a>
             <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-muted hover:text-white transition-all group">
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
             </a>
          </div>
       </div>
    </section>
  );
};

/**
 * App Component
 * Orchestrating the portfolio layout with layout persistence.
 */
export default function App() {
  return (
    <div className="relative selection:bg-white selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-12 px-6 lg:px-24 border-t border-white/5 text-[10px] uppercase tracking-[0.4em] text-brand-muted flex flex-col sm:flex-row justify-between items-center gap-4">
         <span>© 2026 ELYSIAN ARCHITECT</span>
         <div className="flex gap-8">
            <span className="italic">BUILT WITH INTENT</span>
            <span>PRIVACY</span>
         </div>
      </footer>
    </div>
  );
}
