const plans = [
  {
    id: 'A',
    name: 'Monitoramento essencial',
    price: '600',
    description: 'Para dar visibilidade à rede e contar com suporte especializado em horário comercial.',
    support: 'Horário comercial',
    features: [
      'Monitoramento da rede',
      'Alertas e acompanhamento de disponibilidade',
      'Suporte especializado',
      'Suporte em horário comercial',
    ],
  },
  {
    id: 'B',
    name: 'Evolução assistida',
    price: '850',
    description: 'Para avançar a maturidade com monitoramento, site, engenharia básica e acompanhamento bimestral.',
    support: 'Suporte até as 20h',
    recommended: true,
    inherited: 'Tudo do plano A',
    features: [
      'Monitoramento da rede',
      'Site para o provedor',
      'Engenharia básica',
      'Documentação de redes',
      'Acompanhamento bimestral',
      'Suporte até as 20h',
      'Atendimento após as 20h por R$ 80,00/hora',
    ],
  },
  {
    id: 'C',
    name: 'Operação avançada',
    price: '1.250',
    description: 'Para uma operação com engenharia avançada, assessoria e suporte 24/7.',
    support: 'Suporte 24 horas · 7 dias',
    inherited: 'Tudo do plano B',
    features: [
      'Site para o provedor',
      'Engenharia avançada',
      'Documentação de redes',
      'Assessoria especializada',
      'Acompanhamento bimestral',
      'Suporte especializado 24/7',
      'Monitoramento com maior cobertura operacional',
    ],
  },
]

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
              A Vcom Telecom escolhe o nível de acompanhamento mais adequado para o momento atual da operação.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--navy)]/60">
              Todos os planos partem do monitoramento e do suporte especializado. O que muda é a profundidade da engenharia, o horário de cobertura e as soluções incorporadas.
            </p>
          </div>
        </div>

        <div className="pricing-grid mt-16 lg:mt-20">
          {plans.map((plan) => (
            <article key={plan.id} className={`pricing-card ${plan.recommended ? 'pricing-card-recommended' : ''}`}>
              {plan.recommended && (
                <div className="recommended-label">
                  <i className="fa-solid fa-star" />
                  Recomendado para a Vcom
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
                <span>Investimento mensal</span>
                <strong><small>R$</small> {plan.price}</strong>
                <small>Contrato com vigência de 12 meses</small>
              </div>

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
                  <div className="pricing-feature" key={feature}>
                    <i className="fa-solid fa-check" />
                    <span>{feature}</span>
                  </div>
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
            <p>Os valores apresentados são mensais. Demandas adicionais fora do escopo serão alinhadas e aprovadas previamente. No plano B, suporte após as 20h será cobrado a R$ 80,00 por hora.</p>
          </div>
        </div>

        <div id="contato" className="scroll-anchor" />
      </div>
    </section>
  )
}
