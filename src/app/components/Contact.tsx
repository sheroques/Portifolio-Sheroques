import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen bg-background py-20 md:py-32 px-6 md:px-12" id="contato">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <p
              className="text-[clamp(4rem,8vw,8rem)] leading-none text-accent-blue"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              04
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mt-4">Contato</p>
          </div>
          <div className="md:col-span-9">
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-foreground mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              VAMOS TRABALHAR JUNTOS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Tem um projeto em mente? Entre em contato e vamos transformar suas ideias em realidade.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Email</h3>
              <a
                href="mailto:luiz@exemplo.com"
                className="text-2xl md:text-3xl text-foreground hover:text-accent-blue transition-colors duration-300"
              >
                luiz@exemplo.com
              </a>
            </div>

            <div>
              <h3 className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Telefone</h3>
              <a
                href="tel:+5511999999999"
                className="text-2xl md:text-3xl text-foreground hover:text-accent-blue transition-colors duration-300"
              >
                +55 11 99999-9999
              </a>
            </div>

            <div>
              <h3 className="text-muted-foreground uppercase tracking-wider text-sm mb-6">Redes Sociais</h3>
              <div className="space-y-3">
                {['LinkedIn', 'GitHub', 'Dribbble', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="block text-xl text-foreground hover:text-accent-blue hover:translate-x-2 transition-all duration-300"
                  >
                    → {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <p className="text-muted-foreground text-sm">
                Baseado em São Paulo, Brasil
                <br />
                Disponível para projetos remotos e presenciais
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm uppercase tracking-wider mb-3 transition-colors duration-300 ${
                    focusedField === 'name' ? 'text-accent-blue' : 'text-muted-foreground'
                  }`}
                >
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-border text-foreground text-xl py-3 outline-none focus:border-accent-blue transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm uppercase tracking-wider mb-3 transition-colors duration-300 ${
                    focusedField === 'email' ? 'text-accent-blue' : 'text-muted-foreground'
                  }`}
                >
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-border text-foreground text-xl py-3 outline-none focus:border-accent-blue transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm uppercase tracking-wider mb-3 transition-colors duration-300 ${
                    focusedField === 'message' ? 'text-accent-blue' : 'text-muted-foreground'
                  }`}
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-border text-foreground text-xl py-3 outline-none focus:border-accent-blue transition-colors duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-12 py-5 bg-accent-blue text-white font-medium uppercase tracking-wider hover:bg-primary-blue transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
