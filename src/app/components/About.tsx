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
          <div className="md:col-span-9 space-y-12">
            <div>
              <h2
                className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] mb-8 text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                DESENVOLVEDOR FULL STACK
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Sou apaixonado por criar produtos digitais que não apenas funcionam perfeitamente, mas também proporcionam experiências memoráveis aos usuários.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="border-l-4 border-accent-blue pl-6">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Experiência</h3>
                <p className="text-muted-foreground leading-relaxed">
                  +5 anos desenvolvendo soluções web e mobile para startups e empresas de tecnologia, com foco em interfaces modernas e performance.
                </p>
              </div>

              <div className="border-l-4 border-primary-blue pl-6">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Abordagem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acredito em design centrado no usuário, código limpo e escalável, e na importância de entender o problema antes de propor soluções.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t-2 border-border">
              <div>
                <p
                  className="text-5xl md:text-6xl text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  50+
                </p>
                <p className="text-sm uppercase tracking-wide text-muted-foreground mt-2">Projetos</p>
              </div>
              <div>
                <p
                  className="text-5xl md:text-6xl text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  5+
                </p>
                <p className="text-sm uppercase tracking-wide text-muted-foreground mt-2">Anos</p>
              </div>
              <div>
                <p
                  className="text-5xl md:text-6xl text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  30+
                </p>
                <p className="text-sm uppercase tracking-wide text-muted-foreground mt-2">Clientes</p>
              </div>
              <div>
                <p
                  className="text-5xl md:text-6xl text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  100%
                </p>
                <p className="text-sm uppercase tracking-wide text-muted-foreground mt-2">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
