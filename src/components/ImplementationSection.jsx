const steps = [
  {
    number: '01',
    title: 'Diagnóstico da rede',
    description: 'Mapeamento inicial da estrutura atual, ativos críticos, links, equipamentos, riscos de segurança e pontos que precisam ganhar visibilidade.',
    icon: 'fa-magnifying-glass-chart',
  },
  {
    number: '02',
    title: 'Cadastro dos ativos',
    description: 'Organização dos equipamentos monitorados, identificação dos pontos estratégicos e padronização das informações da operação.',
    icon: 'fa-list-check',
  },
  {
    number: '03',
    title: 'Implantação do monitoramento',
    description: 'Configuração dos indicadores, alertas e painéis para a Jato 3 Fibra acompanhar a saúde da rede com mais clareza.',
    icon: 'fa-display',
  },
  {
    number: '04',
    title: 'Ativação de Flow',
    description: 'Organização da leitura de tráfego para apoiar investigação de anomalias, ataques e decisões de capacidade.',
    icon: 'fa-water',
  },
  {
    number: '05',
    title: 'Plano de segurança',
    description: 'Definição dos primeiros ajustes de proteção, mitigação e resposta para reduzir exposição operacional.',
    icon: 'fa-shield-halved',
  },
  {
    number: '06',
    title: 'Documentação inicial',
    description: 'Registro da base técnica, ativos, acessos, topologia e informações essenciais para reduzir dependência e improviso.',
    icon: 'fa-file-lines',
  },
  {
    number: '07',
    title: 'Primeira reunião de alinhamento',
    description: 'Validação do cenário, definição de prioridades e combinação da rotina de suporte e acompanhamento com a operação.',
    icon: 'fa-people-arrows',
  },
]

export default function ImplementationSection() {
  return (
    <section id="implantacao" className="implementation-section">
      <div className="page-container py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-label section-label-light">
              <span>04</span>
              Implantação inicial
            </div>
            <h2 className="section-title mt-7 text-white">
              Como a Jato 3 Fibra começa
              <span> a ganhar segurança e previsibilidade.</span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-lg leading-[1.75] text-white/70">
              O início do projeto transforma a operação atual em uma base monitorada, documentada e pronta para resposta especializada.
            </p>
            <p className="mt-5 text-base leading-8 text-white/55">
              Antes de evoluir engenharia e suporte, a Athon estrutura o ponto de partida: entender a rede, cadastrar os ativos, ativar monitoramento e Flow, organizar segurança e alinhar prioridades.
            </p>
          </div>
        </div>

        <div className="implementation-timeline mt-16 lg:mt-20">
          {steps.map((step) => (
            <article className="implementation-step" key={step.number}>
              <div className="implementation-step-top">
                <span>{step.number}</span>
                <i className={`fa-solid ${step.icon}`} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="implementation-result">
          <div>
            <span className="eyebrow text-[var(--cobalt-soft)]">Resultado da implantação</span>
            <strong>Uma operação com ativos mapeados, monitoramento ativo, leitura de tráfego e prioridades claras para o próximo ciclo.</strong>
          </div>
          <a href="#investimento" className="button">
            Ver opções de investimento
            <i className="fa-solid fa-arrow-down text-xs" />
          </a>
        </div>
      </div>
    </section>
  )
}
