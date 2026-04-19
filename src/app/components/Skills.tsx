const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'REST APIs'],
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Flutter', 'Expo', 'Firebase'],
  },
];

export function Skills() {
  return (
    <section className="min-h-screen bg-background py-20 md:py-32 px-6 md:px-12" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <p
              className="text-[clamp(4rem,8vw,8rem)] leading-none text-accent-blue"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              03
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mt-4">Skills</p>
          </div>
          <div className="md:col-span-9">
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-foreground"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              TECNOLOGIAS & FERRAMENTAS
            </h2>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="border-2 border-primary-blue p-8 md:p-10 hover:bg-primary-blue hover:text-white transition-all duration-500 group"
              style={{
                animationDelay: `${categoryIndex * 100}ms`,
              }}
            >
              <h3
                className="text-3xl md:text-4xl mb-8 text-foreground group-hover:text-accent-blue transition-colors duration-500"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-primary-blue text-foreground text-sm uppercase tracking-wide group-hover:border-accent-blue group-hover:bg-accent-blue group-hover:text-primary-blue transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-accent-blue p-8 md:p-10">
            <div
              className="text-6xl md:text-7xl mb-4 text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ∞
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white">Aprendizado Contínuo</h4>
            <p className="text-white/90">
              Sempre buscando aprender novas tecnologias e me manter atualizado com as tendências do mercado.
            </p>
          </div>

          <div className="bg-primary-blue text-white p-8 md:p-10">
            <div
              className="text-6xl md:text-7xl mb-4 text-accent-blue"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ⚡
            </div>
            <h4 className="text-xl font-semibold mb-2">Performance</h4>
            <p className="text-white/90">
              Foco em criar aplicações rápidas, otimizadas e com excelente experiência de usuário.
            </p>
          </div>

          <div className="border-2 border-primary-blue p-8 md:p-10">
            <div
              className="text-6xl md:text-7xl mb-4 text-foreground"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ✓
            </div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Qualidade</h4>
            <p className="text-muted-foreground">
              Código limpo, bem documentado e testado para garantir manutenibilidade e escalabilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}