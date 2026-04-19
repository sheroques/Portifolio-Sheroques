import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'Plataforma completa de e-commerce com painel administrativo e integração de pagamentos.',
    year: '2025',
    color: 'blue',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    category: 'Frontend',
    description: 'Dashboard interativo para análise financeira com gráficos em tempo real.',
    year: '2025',
    color: 'light',
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'AI Image Generator',
    category: 'Frontend',
    description: 'Interface para geração de imagens com inteligência artificial.',
    year: '2026',
    color: 'blue',
    status: 'in-progress',
  },
  {
    id: 4,
    title: 'Social Media App',
    category: 'Mobile',
    description: 'Aplicativo mobile para rede social com funcionalidades de chat e stories.',
    year: '2024',
    color: 'light',
    status: 'completed',
  },
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getHoverColors = (color: string, isHovered: boolean) => {
    if (!isHovered) {
      return {
        bg: 'transparent',
        text: 'var(--color-foreground)',
        number: 'var(--color-accent-blue)',
        description: 'var(--color-muted-foreground)',
        category: 'var(--color-muted-foreground)',
      };
    }

    if (color === 'blue') {
      return {
        bg: 'var(--color-accent-blue)',
        text: '#ffffff',
        number: 'var(--color-primary-blue)',
        description: '#f1f5f9',
        category: 'var(--color-primary-blue)',
      };
    }

    return {
      bg: 'var(--color-light-blue)',
      text: 'var(--color-foreground)',
      number: 'var(--color-accent-blue)',
      description: 'var(--color-muted-foreground)',
      category: 'var(--color-primary-blue)',
    };
  };

  return (
    <section className="min-h-screen bg-background py-20 md:py-32 px-6 md:px-12" id="projetos">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <p
              className="text-[clamp(4rem,8vw,8rem)] leading-none text-accent-blue"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              02
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mt-4">Projetos</p>
          </div>
          <div className="md:col-span-9">
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-foreground"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              TRABALHOS SELECIONADOS
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-0 border-t border-border">
          {projects.map((project, index) => {
            const colors = getHoverColors(project.color, hoveredId === project.id);
            return (
              <div
                key={project.id}
                className="border-b border-border transition-all duration-500"
                style={{
                  backgroundColor: colors.bg,
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center cursor-pointer">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <div
                      className="w-4 h-4 md:w-5 md:h-5 rounded-full transition-colors duration-500"
                      style={{
                        backgroundColor: colors.number,
                      }}
                    ></div>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-5">
                    <div className="flex flex-col gap-3">
                      <h3
                        className="text-3xl md:text-5xl transition-colors duration-500"
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: colors.text,
                        }}
                      >
                        {project.title}
                      </h3>
                      {project.status === 'in-progress' && (
                        <div className="flex items-center gap-2">
                          <div className="relative flex items-center gap-2 px-3 py-1.5 bg-yellow-400/20 border-2 border-yellow-500 rounded">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-yellow-700 dark:text-yellow-400">
                              Work in Progress
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p
                      className="text-base md:text-lg transition-colors duration-500"
                      style={{
                        color: colors.description,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Category & Year */}
                  <div className="md:col-span-2 flex md:flex-col gap-4 md:gap-2 md:items-end">
                    <span
                      className="text-sm uppercase tracking-wider transition-colors duration-500"
                      style={{
                        color: colors.category,
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="text-sm transition-colors duration-500"
                      style={{
                        color: colors.description,
                      }}
                    >
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-12 py-5 border-2 border-accent-blue text-accent-blue font-medium uppercase tracking-wider hover:bg-accent-blue hover:text-white transition-all duration-300">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
}