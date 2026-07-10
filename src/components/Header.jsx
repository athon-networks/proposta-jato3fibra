const navigation = [
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Cenário atual', href: '#cenario' },
  { label: 'Método 99%', href: '#metodo' },
  { label: 'Implantação', href: '#implantacao' },
  { label: 'Quem somos', href: '#sobre' },
  { label: 'Investimento', href: '#investimento' },
  { label: 'Preparação', href: '#preparacao' },
]

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/assets/logo.webp"
        alt="Jato 3 Fibra"
        className="h-10 w-10 rounded-md"
      />
      <div>
        <div className="text-[17px] font-extrabold leading-none tracking-[-0.04em] text-[var(--navy)]">
          JATO 3 FIBRA
        </div>
        <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.28em] text-[var(--cobalt)]">
          Diagnóstico estratégico
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--navy)]/10 bg-[var(--ice)]">
      <div className="page-container flex h-[76px] items-center justify-between">
        <a href="#diagnostico" aria-label="Jato 3 Fibra - início">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#cenario" className="button button-small">
          Ver diagnóstico
          <i className="fa-solid fa-arrow-down text-[10px]" />
        </a>
      </div>
    </header>
  )
}
