const plans = [
  {
    id: 'A',
    name: 'Base assistida',
    price: '2.250,00',
    description: 'Para organizar a base técnica com segurança, monitoramento e apoio especializado em horário comercial.',
    support: 'Horário comercial',
    features: [
      'Segurança de redes',
      'Monitoramento',
      'Engenharia de redes básica',
      'Documentação de redes',
      'Suporte em horário comercial',
      'Relatório semestral',
      'Visita técnica cobrada adicionalmente',
    ],
  },
  {
    id: 'B',
    name: 'Operação previsível',
    price: '2.859,00',
    recurringPrice: '3.450,00',
    description: 'O plano indicado para tirar responsabilidade técnica da operação e trazer segurança, Flow, engenharia e suporte 24/7.',
    support: 'Suporte 24 horas · 7 dias',
    recommended: true,
    promo: 'Promoção fechando até quarta-feira: R$ 2.859,00 nos primeiros 6 meses.',
    features: [
      'Segurança de redes',
      'Monitoramento',
      'Flow',
      'Engenharia de redes premium',
      'Suporte 24/7',
      'Reunião bimestral',
      'Relatório semestral',
      'Documentação de redes',
      'Visita técnica cobrada adicionalmente',
    ],
  },
  {
    id: 'C',
    name: 'Crescimento completo',
    price: '8.300,00',
    description: 'Para unir toda a operação técnica do plano B com estrutura de produto, presença digital, marketing e capacidade dedicada.',
    support: 'Suporte 24 horas · 7 dias',
    inherited: 'Tudo do plano B',
    features: [
      'Body shop',
      'APP de provedor',
      'Site',
      'Marketing',
      'DNS',
      'Tudo do plano B',
    ],
  },
]

const premiumEngineeringDetails = [
  'Configuração de equipamentos',
  'Projeto topológico',
  'Diagnóstico da estrutura',
  'ACL',
  'Troubleshooting',
  'Implementações',
  'Engenharia de tráfego',
  'Planejamento IPv4 e IPv6',
  'Projetos e melhorias de disponibilidade',
  'Desenho e evolução de topologia',
  'Capacity planning da infraestrutura',
  'Acompanhamento na aquisição de equipamentos',
]

const basicEngineeringDetails = [
  'Diagnóstico inicial da estrutura',
  'Ajustes básicos de configuração',
  'Validação de equipamentos críticos',
  'Troubleshooting básico',
  'Recomendações de boas práticas',
  'Apoio em pequenas implementações',
  'Orientação técnica em horário comercial',
  'Registro dos principais pontos de melhoria',
]

function PricingFeature({ feature }) {
  const isPremiumEngineering = feature === 'Engenharia de redes premium'
  const isBasicEngineering = feature === 'Engenharia de redes básica'
  const isEngineeringFeature = isPremiumEngineering || isBasicEngineering

  if (!isEngineeringFeature) {
    return (
      <div className="pricing-feature">
        <i className="fa-solid fa-check" />
        <span>{feature}</span>
      </div>
    )
  }

  const modalId = isPremiumEngineering ? 'premium-engineering-modal' : 'basic-engineering-modal'
  const planLabel = isPremiumEngineering ? 'Plano B' : 'Plano A'
  const title = isPremiumEngineering ? 'Engenharia premium' : 'Engenharia básica'
  const details = isPremiumEngineering ? premiumEngineeringDetails : basicEngineeringDetails

  return (
    <div className="pricing-feature pricing-feature-premium">
      <i className="fa-solid fa-check" />
      <span className="premium-engineering-wrap">
        <button
          type="button"
          className="premium-engineering-trigger"
          aria-describedby={modalId}
        >
          {feature}
          <i className="fa-solid fa-circle-info" />
        </button>

        <span id={modalId} className="premium-engineering-modal" role="dialog" aria-label={`Entregas da ${feature}`}>
          <span className="premium-engineering-modal-header">
            <span>
              <span className="eyebrow text-[var(--cobalt-soft)]">{planLabel}</span>
              <strong>{title}</strong>
            </span>
            <i className="fa-solid fa-diagram-project" />
          </span>

          <span className="premium-engineering-modal-list">
            {details.map((item) => (
              <span key={item}>
                <i className="fa-solid fa-check" />
                {item}
              </span>
            ))}
          </span>
        </span>
      </span>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section id="investimento" className="pricing-section">
      <div className="pricing-orb pricing-orb-one" />
      <div className="pricing-orb pricing-orb-two" />

      <div className="page-container relative py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-label">
              <span>06</span>
              Investimento
            </div>
            <h2 className="section-title mt-7 text-[var(--navy)]">
              Três níveis de parceria.
              <span> Uma rede preparada para evoluir.</span>
            </h2>
          </div>

          <div className="max-w-[600px] lg:justify-self-end">
            <p className="text-lg leading-[1.75] text-[var(--navy)]/70">
              A Jato 3 Fibra escolhe o nível de acompanhamento mais adequado para reduzir risco, ganhar previsibilidade e mudar o nível da operação.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--navy)]/60">
              O plano B é a recomendação principal: combina segurança, monitoramento, Flow, engenharia, suporte 24/7 e rotina executiva de acompanhamento.
            </p>
          </div>
        </div>

        <div className="pricing-grid mt-16 lg:mt-20">
          {plans.map((plan) => (
            <article key={plan.id} className={`pricing-card ${plan.recommended ? 'pricing-card-recommended' : ''}`}>
              {plan.recommended && (
                <div className="recommended-label">
                  <i className="fa-solid fa-star" />
                  Recomendado para a Jato 3 Fibra
                </div>
              )}

              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="pricing-option">Opção {plan.id}</span>
                  <h3>{plan.name}</h3>
                </div>
                <span className="pricing-letter">{plan.id}</span>
              </div>

              <p className="pricing-description">{plan.description}</p>

              <div className="pricing-value">
                <span>{plan.recurringPrice ? 'Investimento promocional' : 'Investimento mensal'}</span>
                <strong><small>R$</small> {plan.price}</strong>
                <small>{plan.recurringPrice ? `Após 6 meses: R$ ${plan.recurringPrice}/mês` : 'Contrato com vigência de 12 meses'}</small>
              </div>

              {plan.promo && (
                <div className="inherited-plan">
                  <i className="fa-solid fa-bolt" />
                  {plan.promo}
                </div>
              )}

              <div className="pricing-support">
                <i className="fa-regular fa-clock" />
                <div><span>Cobertura de suporte</span><strong>{plan.support}</strong></div>
              </div>

              {plan.inherited && (
                <div className="inherited-plan">
                  <i className="fa-solid fa-layer-group" />
                  {plan.inherited}
                </div>
              )}

              <div className="pricing-features">
                {plan.features.map((feature) => (
                  <PricingFeature feature={feature} key={feature} />
                ))}
              </div>

              <a href="#contato" className={`pricing-button ${plan.recommended ? 'pricing-button-primary' : ''}`}>
                Escolher opção {plan.id}
                <i className="fa-solid fa-arrow-right" />
              </a>
            </article>
          ))}
        </div>

        <div className="pricing-note">
          <div className="pricing-note-icon"><i className="fa-solid fa-circle-info" /></div>
          <div>
            <strong>Condições da proposta</strong>
            <p>Os valores apresentados são mensais. Demandas adicionais fora do escopo serão alinhadas e aprovadas previamente. Visitas técnicas são cobradas adicionalmente. A condição promocional do plano B vale para fechamento até quarta-feira.</p>
          </div>
        </div>

        <div id="contato" className="scroll-anchor" />
      </div>
    </section>
  )
}
