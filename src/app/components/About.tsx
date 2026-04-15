import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section className="min-h-screen bg-background py-20 md:py-32 px-6 md:px-12" id="sobre">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left column - Number and label */}
          <div className="md:col-span-3">
            <div className="sticky top-32">
              <p
                className="text-[clamp(4rem,8vw,8rem)] leading-none text-accent-blue"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                01
              </p>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mt-4">Sobre</p>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text content */}
              <div className="space-y-6">
                <h2
                  className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  DESIGNER & DESENVOLVEDOR FULL STACK
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Sou apaixonado por criar produtos digitais que não apenas funcionam perfeitamente, mas também proporcionam experiências memoráveis aos usuários.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com expertise em design e desenvolvimento, trabalho na interseção entre estética e funcionalidade, criando soluções que fazem a diferença.
                </p>
              </div>

              {/* Profile image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-blue shadow-2xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzYyMDc3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Luiz Alexandre - Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary-blue -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}