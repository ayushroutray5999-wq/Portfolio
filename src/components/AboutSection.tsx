import { Badge } from '@/components/ui/badge';
import ScrollReveal from './ScrollReveal';
import MagicBento from './MagicBento';
import ClickSpark from './clickspark';
import ShinyText from './ShinyText';
// Removed SplineComponentBackground import
import './AboutSection.css';
import Particles from './Particles';
 
const AboutSection = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'PyTorch', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'Angular', level: 70 },
    { name: 'CUDA', level: 65 },
  ];

  const techStack = [
    'TensorFlow', 'Scikit-learn', 'OpenCV', 'NumPy', 'Pandas',
    'Flask', 'FastAPI', 'Docker', 'Git', 'Linux'
  ];

  return (
    <ClickSpark as="section" id="about" className="py-20 relative">
      <Particles particleCount={150} particleSpread={7} speed={0.1} alphaParticles={true} particleBaseSize={70} sizeRandomness={0.8} cameraDistance={16} particleColors={undefined} className="" />
  {/* SplineComponentBackground removed */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* FIX: Added 'text-foreground' to make the main title visible */}
          <ScrollReveal containerClassName="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            About Me
          </ScrollReveal>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
           <ShinyText text="Passionate about transforming ideas into intelligent solutions" />
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left Column - My Journey (Large) and Technologies I Love (Small) */}
          <div className="grid grid-rows-[2fr,1fr] gap-6 h-[600px]">
            {/* My Journey - Takes 2/3 of left column height */}
            <MagicBento
              enableStars={true}
              enableSpotlight={false}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              glowColor="255, 255, 255"
              particleCount={6}
            >
              <div className="p-6 h-full fade-in bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl">
                <ScrollReveal containerClassName="text-xl font-semibold mb-3 text-primary">
                  My Journey
                </ScrollReveal>
                <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
                  <p>
                    <ShinyText text="I'm a final-year BTech Computer Science Engineering student at Ajay Binay Institute of Technology driven by curiosity for AI and machine learning." />
                  </p>
                  
                  <p> 
                    <ShinyText text='My passion lies in Large Language Models and generative AI, focusing on transforming data into actionable intelligence. With Python, PyTorch, and ML frameworks, I build scalable systems that merge code and cognition.' />
                  </p>
                  <p>
                    <ShinyText text='When not coding, I explore research papers, experiment with AI models, and contribute to open-source projects.' />
                  </p>
                </div>
              </div>
            </MagicBento>

            {/* Technologies I Love - Takes 1/3 of left column height */}
            <MagicBento
              enableStars={true}
              enableSpotlight={false}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              glowColor="255, 255, 255"
              particleCount={4}
            >
              <div className="p-6 h-full slide-up bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl">
                <ScrollReveal containerClassName="text-xl font-semibold mb-4 text-primary">
                  Technologies I Love
                </ScrollReveal>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </MagicBento>
          </div>

          {/* Right Column - Core Skills (Large) and Stats (Small) */}
          <div className="grid grid-rows-[2fr,1fr] gap-6 h-[600px]">
            {/* Core Skills - Takes 2/3 of right column height */}
            <MagicBento
              enableStars={true}
              enableSpotlight={false}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              glowColor="255, 255, 255"
              particleCount={6}
            >
              <div className="p-6 h-full fade-in bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl">
                <ScrollReveal containerClassName="text-xl font-semibold mb-4 text-primary">
                  Core Skills
                </ScrollReveal>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-item"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-foreground text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out skill-bar"
                          style={{"--skill-level": `${skill.level}%`} as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MagicBento>

            {/* Stats - Takes 1/3 of right column height, arranged horizontally */}
            <div className="grid grid-cols-2 gap-4">
              <MagicBento
                enableStars={true}
                enableSpotlight={false}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="255, 255, 255"
                particleCount={3}
              >
                <div className="p-6 text-center h-full flex flex-col justify-center slide-up bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl">
                  <ScrollReveal containerClassName="text-3xl font-bold text-primary mb-2">
                    10+
                  </ScrollReveal>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </MagicBento>
              
              <MagicBento
                enableStars={true}
                enableSpotlight={false}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="255, 255, 255"
                particleCount={3}
              >
                <div className="p-6 text-center h-full flex flex-col justify-center slide-up bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl">
                  <ScrollReveal containerClassName="text-3xl font-bold text-primary mb-2">
                    3+
                  </ScrollReveal>
                  <div className="text-sm text-muted-foreground">Intern Months Experience</div>
                </div>
              </MagicBento>
            </div>
          </div>
        </div>
      </div>
  </ClickSpark>
  );
};

export default AboutSection;