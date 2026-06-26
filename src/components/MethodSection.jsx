import { useState } from 'react'

const methodServices = [
  {
    number: '01',
    title: 'Engenharia de redes',
    description: 'Arquitetura, capacidade, segurança e evolução técnica conforme o nível de maturidade contratado.',
    icon: 'fa-diagram-project',
    cadence: 'Estratégia contínua',
    deliverables: [
      'Planejamento IPv4 e IPv6',
      'Projetos e melhorias de disponibilidade',
      'Configuração de equipamentos',
      'Desenho e evolução de topologia',
      'Capacity planning da infraestrutura',
      'Acompanhamento na aquisição de equipamentos',
    ],
  },
  {
    number: '02',
    title: 'Monitoramento',
    description: 'Visão centralizada de eventos e indicadores para identificar anomalias, riscos e indisponibilidades.',
    icon: 'fa-brain',
    cadence: '24 horas por dia',
    deliverables: [
      'Detecção inteligente de anomalias',
      'Correlação de eventos e alertas',
      'Análise de disponibilidade e capacidade',
      'Alertas de degradação e indisponibilidade',
      'Dashboards operacionais em tempo real',
      'Histórico para apoio à tomada de decisão',
    ],
  },
  {
    number: '03',
    title: 'Documentação de redes',
    description: 'Topologias, ativos, padrões e histórico técnico centralizados para reduzir dependências e improvisos.',
    icon: 'fa-file-lines',
    cadence: 'Sempre atualizada',
    deliverables: [
      'Topologia física e lógica',
      'Inventário de ativos e enlaces',
      'Plano de endereçamento IP',
      'Registro de configurações e padrões',
      'Playbooks e procedimentos operacionais',
      'Histórico de mudanças da rede',
    ],
  },
  {
    number: '04',
    title: 'Suporte NOC',
    description: 'Apoio especializado para incidentes, mudanças, troubleshooting e decisões críticas dentro da cobertura contratada.',
    icon: 'fa-headset',
    cadence: 'Atuação especializada',
    deliverables: [
      'Troubleshooting avançado',
      'Apoio em incidentes críticos',
      'Análise de causa raiz',
      'Suporte em mudanças de rede',
      'Escalonamento técnico especializado',
      'Orientação para o time interno',
    ],
  },
  {
    number: '05',
    title: 'Mentoria e acompanhamento',
    description: 'Reuniões bimestrais para revisar prioridades, orientar decisões e conduzir o plano de evolução da rede.',
    icon: 'fa-people-arrows',
    cadence: 'A cada 2 meses',
    deliverables: [
      'Revisão das metas técnicas',
      'Análise da evolução da rede',
      'Definição dos próximos passos',
      'Priorização de projetos e investimentos',
      'Mentoria para o time técnico',
      'Acompanhamento do plano de ação',
    ],
  },
  {
    number: '06',
    title: 'Relatório de desempenho',
    description: 'Visão dos indicadores, riscos, avanços e próximos investimentos recomendados para a infraestrutura.',
    icon: 'fa-chart-line',
    cadence: 'A cada 6 meses',
    deliverables: [
      'Indicadores de disponibilidade',
      'Análise de latência e performance',
      'Capacidade e crescimento do tráfego',
      'Riscos e pontos de atenção',
      'Resultados das melhorias aplicadas',
      'Recomendações para o próximo semestre',
    ],
  },
  {
    number: '07',
    title: 'Suporte em tempo real',
    description: 'Canal direto com especialistas para apoiar a Vcom quando uma situação exigir resposta rápida.',
    icon: 'fa-comments',
    cadence: 'Resposta imediata',
    deliverables: [
      'Canal direto com especialistas',
      'Orientação em situações urgentes',
      'Validação antes de mudanças críticas',
      'Apoio remoto ao time da Vcom',
      'Decisões técnicas com mais segurança',
      'Comunicação contínua durante incidentes',
    ],
  },
]

export default function MethodSection() {
  const [flippedService, setFlippedService] = useState(null)

  return (
    <section id="metodo" className="method-section">
      <div className="method-orb" />
      <div className="page-container relative py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
          <div>
            <div className="section-label">
              <span>03</span>
              Método Provedor 99%
            </div>
            <h2 className="section-title mt-7 text-[var(--navy)]">
              Uma estrutura completa para levar a rede ao
              <span> próximo nível.</span>
            </h2>
          </div>

          <div className="method-intro-panel lg:justify-self-end">
            <div className="method-intro-top">
              <div className="method-intro-badge">
                <strong>99%</strong>
                <span>Provedor</span>
              </div>
              <div>
                <span className="eyebrow text-[var(--cobalt)]">Sete frentes integradas</span>
                <h3>Estratégia, execução e acompanhamento no mesmo método.</h3>
              </div>
            </div>

            <p className="method-intro-copy">
              A Vcom deixa de depender apenas de acionamentos pontuais e passa a contar com um time que monitora, apoia e conduz a evolução da rede.
            </p>

            <div className="method-intro-pillars">
              <span><i className="fa-solid fa-compass" /> Direção</span>
              <span><i className="fa-solid fa-gears" /> Execução</span>
              <span><i className="fa-solid fa-chart-line" /> Evolução</span>
            </div>
          </div>
        </div>

        <div id="servicos" className="method-grid scroll-anchor mt-16 lg:mt-20 method-grid-visual">
          {methodServices.map((service, index) => (
            <button
              type="button"
              key={service.number}
              className={`method-flip-card ${flippedService === index ? 'is-flipped' : ''}`}
              onClick={() => setFlippedService(flippedService === index ? null : index)}
              aria-pressed={flippedService === index}
              aria-label={`${flippedService === index ? 'Voltar para o resumo de' : 'Ver entregas de'} ${service.title}`}
            >
              <span className="method-flip-inner">
                <span className={`method-card method-card-front ${index === 0 ? 'method-card-featured' : ''}`}>
                  <span className="flex items-start justify-between gap-5">
                    <span className="method-number">{service.number}</span>
                    <span className="method-icon"><i className={`fa-solid ${service.icon}`} /></span>
                  </span>

                  <strong className="method-card-title">{service.title}</strong>
                  <span className="method-card-description">{service.description}</span>

                  <span className="method-cadence">
                    <span className="status-dot-small" />
                    {service.cadence}
                    <span className="method-flip-hint">
                      Ver entregas <i className="fa-solid fa-rotate" />
                    </span>
                  </span>
                </span>

                <span className="method-card method-card-back">
                  <span className="flex items-start justify-between gap-5">
                    <span>
                      <span className="eyebrow text-[var(--cobalt-soft)]">Entregas incluídas</span>
                      <strong className="method-back-title">{service.title}</strong>
                    </span>
                    <span className="method-back-icon"><i className={`fa-solid ${service.icon}`} /></span>
                  </span>

                  <span className="method-deliverables">
                    {service.deliverables.map((item) => (
                      <span className="method-deliverable" key={item}>
                        <i className="fa-solid fa-check" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </span>

                  <span className="method-back-action">
                    <i className="fa-solid fa-arrow-left" />
                    Voltar para o resumo
                  </span>
                </span>
              </span>
            </button>
          ))}

          <article className="method-result">
            <span className="eyebrow text-[var(--cobalt-soft)]">Resultado do método</span>
            <strong>
              Mais controle.<br />
              Menos improviso.<br />
              <em>99% preparada.</em>
            </strong>
            <p>Uma rede acompanhada por especialistas, orientada por dados e conectada às metas de crescimento da Vcom Telecom.</p>
          </article>
        </div>

        <div className="method-footer">
          <div className="method-seal"><strong>99%</strong><span>Provedor</span></div>
          <p>Sete frentes trabalhando juntas para transformar suporte técnico em evolução contínua.</p>
          <a href="#sobre" className="button">
            Conhecer quem executa
            <i className="fa-solid fa-arrow-down text-xs" />
          </a>
        </div>
      </div>
    </section>
  )
}
