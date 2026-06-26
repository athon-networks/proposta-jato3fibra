const credentials = [
  {
    number: '10+',
    label: 'anos de experiência',
    description: 'Vivência prática em redes, tecnologia e operações de provedores.',
  },
  {
    number: '90 mil',
    label: 'clientes na jornada',
    description: 'Experiência acumulada em operações de provedores em crescimento.',
  },
  {
    number: '45%',
    label: 'menos latência',
    description: 'Redução alcançada em um dos projetos apresentados no portfólio.',
  },
  {
    number: '+ R$ 2 mi',
    label: 'em receita otimizada',
    description: 'Resultado gerado com tecnologia, eficiência operacional e melhoria de processos.',
  },
  {
    number: '50%',
    label: 'de redução no fluxo de atendimento',
    description: 'Redução alcançada em provedores por meio de automações e otimizações de processo.',
  },
]

const heads = [
  { name: 'Marlon Oliveira', role: 'System Designer & Fullstack Developer', image: '/assets/marlon.avif' },
  { name: 'Oseias Cruz', role: 'CEO & Networks Specialist', image: '/assets/oseias.avif' },
  { name: 'Pablo Barros', role: 'Fullstack Developer & Growth', image: '/assets/pablo.jpeg' },
  { name: 'Bruno Saavedra', role: 'Networks Specialist', image: '/assets/bruno.avif' },
  { name: 'Rai Sousa', role: 'CTO & Monitoring Specialist', image: '/assets/rai.png' },
]

export default function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-light about-light-one" />
      <div className="about-light about-light-two" />

      <div className="page-container relative py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="section-label section-label-light">
              <span>05</span>
              Quem somos
            </div>

            <h2 className="section-title mt-7 text-white">
              Quem somos nós para
              <span> falar sobre crescimento?</span>
            </h2>

            <p className="mt-7 max-w-[560px] text-lg leading-[1.75] text-white/70">
              Somos uma consultoria formada por especialistas que vivem a realidade dos provedores e ajudam operações a sair da estagnação.
            </p>
            <p className="mt-4 max-w-[560px] text-base leading-8 text-white/60">
              Nosso trabalho é transformar redes frágeis e reativas em infraestruturas robustas, documentadas e escaláveis — prontas para acompanhar o crescimento comercial sem perder estabilidade.
            </p>

            <a href="https://athon-networks.com.br/portfolio" target="_blank" rel="noreferrer" className="about-link">
              Ver portfólio completo
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </div>

          <div>
            <article className="growth-case">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="eyebrow text-[var(--cobalt-soft)]">Case principal · Athon Telecom</span>
                  <h3 className="mt-4 max-w-[560px] text-3xl font-bold leading-tight tracking-[-0.05em] text-white md:text-4xl">
                    Participamos da construção da rede que acompanhou um provedor de
                    <span className="text-[var(--cobalt-soft)]"> 1 mil para 60 mil clientes.</span>
                  </h3>
                </div>
                <div className="growth-case-icon"><i className="fa-solid fa-arrow-trend-up" /></div>
              </div>

              <div className="growth-track">
                <div className="growth-point"><strong>1 mil</strong><span>Ponto de partida</span></div>
                <div className="growth-line"><i /><i /><i /></div>
                <div className="growth-point growth-point-end"><strong>60 mil</strong><span>Clientes atendidos</span></div>
              </div>

              <p className="mt-8 max-w-[720px] text-base leading-8 text-white/60">
                Fomos responsáveis por decisões de arquitetura, topologia, monitoramento, documentação e evolução tecnológica da Athon Telecom. Essa experiência não veio de um laboratório teórico: foi construída dentro de uma operação real e em expansão.
              </p>
            </article>

            <div className="about-proof-grid">
              <article className="about-proof about-proof-wide">
                <span className="about-proof-icon about-proof-logo">
                  <img src="/assets/logo-athonnetworks.png" alt="Athon Networks" />
                </span>
                <div>
                  <span className="eyebrow text-[var(--cobalt)]">Experiência em campo</span>
                  <h3>Provedores de diferentes estados que mudaram o jogo.</h3>
                  <p>Já atuamos em operações com realidades, tamanhos e desafios diferentes, levando planejamento, observabilidade e engenharia para redes que precisavam evoluir.</p>
                </div>
              </article>

              <article className="about-proof">
                <span className="about-proof-icon"><i className="fa-solid fa-gauge-high" /></span>
                <div>
                  <span className="eyebrow text-[var(--cobalt)]">Performance comprovada</span>
                  <h3>Latência reduzida em 45%.</h3>
                  <p>Um dos nossos projetos transformou a performance de um provedor nordestino e posicionou sua rede entre as mais eficientes da região.</p>
                </div>
              </article>

              <article className="about-proof">
                <span className="about-proof-icon"><i className="fa-solid fa-people-group" /></span>
                <div>
                  <span className="eyebrow text-[var(--cobalt)]">Time multidisciplinar</span>
                  <h3>Experiência que vai além da configuração.</h3>
                  <p>Especialistas em redes, segurança, monitoramento, dados, desenvolvimento e processos trabalhando sobre o mesmo objetivo.</p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="heads-section">
          <div className="heads-heading">
            <div>
              <span className="eyebrow text-[var(--cobalt-soft)]">Liderança técnica</span>
              <h3>Conheça nossos heads</h3>
            </div>
            <p>Cinco especialistas com experiências complementares, conectando redes, tecnologia, monitoramento, desenvolvimento e crescimento.</p>
          </div>

          <div className="heads-grid">
            {heads.map((head, index) => (
              <article className="head-card" key={head.name}>
                <div className="head-photo-wrap">
                  <img src={head.image} alt={head.name} className="head-photo" />
                  <span className="head-number">0{index + 1}</span>
                </div>
                <div className="head-info"><h4>{head.name}</h4><p>{head.role}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div className="credentials-grid">
          {credentials.map((item) => (
            <article key={item.label} className="credential-item">
              <strong>{item.number}</strong>
              <span>{item.label}</span>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
