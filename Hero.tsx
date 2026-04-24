import { useEffect, useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-6 md:px-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 right-[10%] w-[300px] h-[300px] rounded-full bg-accent-blue blur-[120px]"></div>
        <div className="absolute bottom-20 left-[15%] w-[250px] h-[250px] rounded-full bg-primary-blue blur-[100px]"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div
            className="space-y-6 md:space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="overflow-hidden">
              <p
                className="text-accent-blue uppercase tracking-[0.3em] mb-4"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                }}
              >
                Creative Developer
              </p>
            </div>

            <div className="overflow-hidden">
              <h1
                className="text-[clamp(3rem,12vw,10rem)] leading-[0.9] text-foreground tracking-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                }}
              >
                LUIZ
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1
                className="text-[clamp(3rem,12vw,10rem)] leading-[0.9] text-foreground tracking-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
                }}
              >
                ALEXANDRE
              </h1>
            </div>

            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease 0.8s',
              }}
            >
              <p className="text-muted-foreground max-w-md text-lg mb-8">
                Criando experiências digitais únicas que mesclam design inovador com código limpo e funcional.
              </p>

              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/luizalexandremartins" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-accent-blue text-white font-medium uppercase tracking-wider hover:bg-primary-blue transition-colors duration-300 flex items-center gap-3"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/sheroques" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-accent-blue text-accent-blue font-medium uppercase tracking-wider hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center gap-3"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Animated geometric shapes */}
          <div 
            className="hidden lg:flex items-center justify-center relative h-[600px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1.5s ease 0.5s',
            }}
          >
            {/* Floating shapes */}
            <div 
              className="absolute w-32 h-32 border-4 border-accent-blue"
              style={{
                top: '10%',
                right: '20%',
                animation: 'float 6s ease-in-out infinite',
                animationDelay: '0s',
              }}
            />
            <div 
              className="absolute w-24 h-24 bg-primary-blue"
              style={{
                top: '50%',
                right: '10%',
                animation: 'float 8s ease-in-out infinite',
                animationDelay: '1s',
              }}
            />
            <div 
              className="absolute w-40 h-40 border-4 border-primary-blue rounded-full"
              style={{
                top: '60%',
                right: '40%',
                animation: 'float 7s ease-in-out infinite',
                animationDelay: '2s',
              }}
            />
            <div 
              className="absolute w-20 h-20 bg-accent-blue rounded-full"
              style={{
                top: '20%',
                right: '50%',
                animation: 'float 5s ease-in-out infinite',
                animationDelay: '0.5s',
              }}
            />
            <div 
              className="absolute w-28 h-28 border-4 border-accent-blue"
              style={{
                top: '40%',
                right: '60%',
                animation: 'float 9s ease-in-out infinite',
                animationDelay: '1.5s',
                transform: 'rotate(45deg)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease 1.2s',
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-accent-blue to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}