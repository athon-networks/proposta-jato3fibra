const foundations = [
  {
    number: '01',
    title: 'Segurança da rede',
    description: 'Proteção, análise de tráfego e resposta para reduzir exposição a ataques, indisponibilidade e decisões reativas.',
    icon: 'fa-diagram-project',
  },
  {
    number: '02',
    title: 'Suporte especialista',
    description: 'Atendimento técnico com disponibilidade combinada, sem depender de improviso quando a operação fica pressionada.',
    icon: 'fa-layer-group',
  },
  {
    number: '03',
    title: 'Maturidade operacional',
    description: 'Engenharia, acompanhamento e assessoria para conduzir a evolução do provedor com mais previsibilidade.',
    icon: 'fa-arrow-trend-up',
  },
]

function CurrentScenarioCard() {
  const limitations = [
    'Depende de acionamento quando o problema já está acontecendo.',
    'Não tem um time especializado dedicado a redes de provedor.',
    'A configuração de equipamentos fica centralizada demais na rotina do provedor.',
    'Ataques DDoS e incidentes de segurança geram pressão operacional e perda de previsibilidade.',
    'Não entrega visão clara de tráfego, anomalias e pontos críticos.',
    'Não mantém uma rotina estruturada de monitoramento, Flow e acompanhamento.',
    'Não cria um plano técnico para aumentar a maturidade do provedor.',
    'Deixa a Jato 3 Fibra carregando uma responsabilidade técnica que pode ser compartilhada com especialistas.',
  ]

  return (
    <div className="current-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="eyebrow text-white/50">Cenário atual</span>
          <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-white">Operação sob pressão técnica</h3>
        </div>
        <div className="card-icon card-icon-muted"><i className="fa-solid fa-server" /></div>
      </div>

      <p className="comparison-intro comparison-intro-dark">
        Resolve parte da configuração, mas não entrega a segurança, o monitoramento e a previsibilidade que a rede precisa.
      </p>

      <div className="difference-list difference-list-dark">
        {limitations.map((item) => (
          <div className="difference-item" key={item}>
            <span className="difference-icon difference-icon-negative"><i className="fa-solid fa-xmark" /></span>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="comparison-summary comparison-summary-dark">
        <span>Resultado</span>
        <strong>Risco elevado, resposta reativa e responsabilidade excessiva dentro do provedor.</strong>
      </div>
    </div>
  )
}

function SpecialistCard() {
  const advantages = [
    'Implanta uma rotina de segurança, monitoramento e Flow para aumentar visibilidade.',
    'Dá suporte com equipe especializada e escopo claro.',
    'Acompanha indicadores, alertas, anomalias e prioridades técnicas.',
    'Ajuda a Jato 3 Fibra a sair do modo reativo para uma gestão mais previsível.',
    'Organiza decisões de engenharia conforme o plano contratado.',
    'Apoia incidentes, mudanças e troubleshooting com mais segurança.',
    'Cria um ciclo bimestral de acompanhamento nos planos de evolução.',
    'Entrega o método da Athon Networks aplicado à realidade do provedor.',
  ]

  return (
    <div className="specialist-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="eyebrow text-[var(--cobalt)]">O que a Jato 3 Fibra precisa</span>
          <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-[var(--navy)]">Equipe especialista em redes</h3>
        </div>
        <div className="card-icon"><i className="fa-solid fa-people-group" /></div>
      </div>

      <p className="comparison-intro comparison-intro-light">
        Assume uma atuação estruturada, conecta segurança, monitoramento, suporte e engenharia e conduz a evolução da rede.
      </p>

      <div className="difference-list difference-list-light">
        {advantages.map((item) => (
          <div className="difference-item" key={item}>
            <span className="difference-icon difference-icon-positive"><i className="fa-solid fa-check" /></span>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="comparison-summary comparison-summary-light">
        <span>Resultado</span>
        <strong>Rede mais segura, suporte previsível e evolução técnica acompanhada.</strong>
      </div>
    </div>
  )
}

export default function ScenarioSection() {
  return (
    <section id="cenario" className="scenario-section">
      <div className="page-container py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-label section-label-light">
              <span>02</span>
              O ponto de virada
            </div>
            <h2 className="section-title mt-7 text-white">
              Hoje a rede precisa reduzir risco.
              <span> O próximo passo é previsibilidade.</span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <div className="scenario-client-logo">
              <strong>Jato 3 Fibra</strong>
            </div>
            <p className="text-lg leading-[1.75] text-white/70">
              A Jato 3 Fibra precisa reduzir a exposição a ataques DDoS, ganhar leitura técnica da rede e diminuir a dependência interna sobre configuração e resposta a incidentes.
              <strong className="font-semibold text-white"> Isso exige um time especializado acompanhando a operação.</strong>
            </p>
            <p className="mt-5 text-lg leading-[1.75] text-white/70">
              Para mudar o nível do provedor, a base precisa combinar segurança de redes, monitoramento, Flow, engenharia e uma rotina clara de evolução.
            </p>
          </div>
        </div>

        <div className="comparison-grid mt-16 lg:mt-20">
          <CurrentScenarioCard />
          <div className="comparison-arrow" aria-hidden="true">
            <span><i className="fa-solid fa-arrow-right" /></span>
            <small>Evolução</small>
          </div>
          <SpecialistCard />
        </div>

        <div className="mt-20 border-t border-white/10 pt-14">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <span className="eyebrow text-[var(--cobalt-soft)]">A base para o próximo nível</span>
              <h3 className="mt-4 max-w-[500px] text-3xl font-bold leading-tight tracking-[-0.045em] text-white md:text-4xl">
                Maturidade exige visibilidade antes de exigir velocidade.
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {foundations.map((item) => (
                <article key={item.number} className="foundation-card">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/30">{item.number}</span>
                    <i className={`fa-solid ${item.icon} text-[var(--cobalt-soft)]`} />
                  </div>
                  <h4 className="mt-8 text-base font-bold text-white">{item.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-white/60">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
