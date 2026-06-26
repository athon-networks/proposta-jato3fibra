function NetworkVisual() {
  return (
    <div className="network-visual" aria-label="Representação visual da evolução da rede Vcom Telecom">
      <div className="network-grid" />
      <div className="network-glow" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 600" fill="none" aria-hidden="true">
        <path className="network-path path-one" d="M76 444C151 413 152 327 231 308C307 290 311 210 391 191C448 178 494 139 548 76" />
        <path className="network-path path-two" d="M56 505C137 479 212 498 250 424C290 345 369 374 417 309C453 261 486 251 570 236" />
        <path className="network-path path-three" d="M104 110C156 164 163 223 238 239C310 255 355 300 377 372C399 444 476 464 557 481" />
      </svg>

      <div className="network-node node-main">
        <div className="node-core"><i className="fa-solid fa-network-wired" /></div>
        <div><span>CORE</span><strong>Vcom Telecom</strong></div>
      </div>

      <div className="network-node node-top">
        <span className="node-dot" />
        <div><span>CAPACIDADE</span><strong>Escalável</strong></div>
      </div>
      <div className="network-node node-right">
        <span className="node-dot" />
        <div><span>OPERAÇÃO</span><strong>Previsível</strong></div>
      </div>
      <div className="network-node node-bottom">
        <span className="node-dot" />
        <div><span>CRESCIMENTO</span><strong>Estruturado</strong></div>
      </div>

      <div className="diagnostic-card">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-white/50">Status do diagnóstico</span>
          <span className="status-dot"><i /></span>
        </div>
        <div className="mt-5 flex items-end justify-between gap-6">
          <div>
            <strong className="block text-3xl font-extrabold tracking-[-0.05em] text-white">Visibilidade limitada</strong>
            <span className="mt-1 block text-sm text-white/60">Próximo passo: operação monitorada</span>
          </div>
          <div className="signal-bars" aria-hidden="true"><span /><span /><span /><span /></div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="diagnostico" className="hero-section">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="page-container grid min-h-[760px] items-center gap-16 pb-20 pt-32 lg:grid-cols-[1.02fr_.98fr] lg:pb-24">
        <div className="relative z-10 max-w-[700px]">
          <div className="section-label">
            <span>01</span>
            <p className="text-lg">Diagnóstico Vcom Telecom</p>
          </div>

          <h1 className="hero-title mt-8">
            Sua rede precisa ganhar
            <span> visibilidade e controle.</span>
          </h1>

          <p className="mt-7 max-w-[610px] text-lg leading-[1.7] text-[var(--navy)]/70 md:text-xl">
            Uma proposta estratégica para transformar a operação da Vcom Telecom em uma base
            <strong className="font-semibold text-[var(--navy)]"> monitorada, responsiva e mais madura.</strong>
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#cenario" className="button">
              Conhecer o diagnóstico
              <i className="fa-solid fa-arrow-right text-xs" />
            </a>
            <div className="flex items-center gap-3 px-1">
              <div className="percentage-seal">99%</div>
              <div className="text-sm font-semibold leading-6 text-[var(--navy)]/60">
                Método Provedor 99%
                <span className="block font-normal">Estratégia para provedores</span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid max-w-[620px] grid-cols-3 border-t border-[var(--navy)]/12 pt-7">
            {[
              ['Monitoramento', 'Visão da rede'],
              ['Suporte', 'Resposta especializada'],
              ['Execução', 'Time especialista'],
            ].map(([title, subtitle], index) => (
              <div key={title} className={index ? 'border-l border-[var(--navy)]/12 pl-5 md:pl-8' : ''}>
                <strong className="block text-sm font-bold text-[var(--navy)]">{title}</strong>
                <span className="mt-1 block text-sm leading-5 text-[var(--navy)]/50">{subtitle}</span>
              </div>
            ))}
          </div>
        </div>

        <NetworkVisual />
      </div>

      <div className="scroll-indicator">
        <span>Continue</span>
        <i className="fa-solid fa-arrow-down" />
      </div>
    </section>
  )
}
