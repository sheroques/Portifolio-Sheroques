export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t-2 border-accent-blue py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-5xl md:text-6xl text-foreground mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              LA.
            </h3>
            <p className="text-muted-foreground">
              Criando experiências digitais memoráveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent-blue uppercase tracking-wider text-sm mb-6">
              Links Rápidos
            </h4>
            <div className="space-y-3">
              {['Sobre', 'Projetos', 'Skills', 'Contato'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-accent-blue uppercase tracking-wider text-sm mb-6">
              Redes Sociais
            </h4>
            <div className="space-y-3">
              {['LinkedIn', 'GitHub', 'Dribbble', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Luiz Alexandre. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
