import './Landing.css'
import screensMocks from '../assets/ScreensMocks.png'
import kidPhoto from '../assets/Kid.png'
import screenLocation from '../assets/location.png'
import screenInfos from '../assets/infos.png'
import screenNfc from '../assets/nfc.png'
import screenLaws from '../assets/laws.png'
import photoGiovana from '../assets/gi.png'
import photoRodrigo from '../assets/sandler.png'
import photoIsadora from '../assets/isa.png'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#precos', label: 'Preços' },
  { href: '#contato', label: 'Contato' },
  { href: '#termos', label: 'Termos' },
]

const STEPS = [
  {
    num: '01',
    title: 'Configure o dispositivo',
    text: 'Conecte o dispositivo ao app e cadastre a criança com fotos e informações importantes.',
  },
  {
    num: '02',
    title: 'Defina a área segura',
    text: 'Desenhe a zona segura no mapa e receba avisos se a criança sair dela.',
  },
  {
    num: '03',
    title: 'Acompanhe e proteja em tempo real',
    text: 'Localização ao vivo, alertas e acesso rápido às autoridades quando precisar.',
  },
]

const SAFETY_FEATURES = [
  'Aparelho confortável de usar',
  'Conexão em tempo real com o app',
  'Pensado para situações de emergência',
]

const APP_SCREENS = [
  {
    label: 'Localização em tempo real',
    src: screenLocation,
    alt: 'Tela do app Lumina mostrando localização em tempo real no mapa',
  },
  {
    label: 'Documentos e informações',
    src: screenInfos,
    alt: 'Tela do app Lumina com documentos e informações da criança',
    highlight: true,
  },
  {
    label: 'NFC',
    src: screenNfc,
    alt: 'Tela do app Lumina com funcionalidade NFC',
  },
  {
    label: 'Leis e Direitos',
    src: screenLaws,
    alt: 'Tela do app Lumina com leis e direitos',
  },
]

const PURCHASE_ITEMS = [
  'Dispositivo Lumina',
  'Case protetor',
  'Acesso ao app',
  'Cabo de carregamento',
  'Garantia',
  'Cobertura contra roubo',
]

const SUBSCRIPTION_ITEMS = [
  'Renovação de garantia',
  'Suporte no app',
  'Prioridade na substituição',
]

const TEAM = [
  {
    name: 'Giovana Hossein',
    role: 'UX/UI Designer',
    photo: photoGiovana,
  },
  {
    name: 'Rodrigo Sandler',
    role: 'Desenvolvedor',
    photo: photoRodrigo,
  },
  {
    name: 'Isadora Guerra',
    role: 'Desenvolvedora',
    photo: photoIsadora,
  },
]

const WHATSAPP_BUY =
  'https://wa.me/5511999999999?text=Olá!%20Quero%20comprar%20o%20Lumina.'
const WHATSAPP_SUB =
  'https://wa.me/5511999999999?text=Olá!%20Quero%20assinar%20a%20Proteção%20Mensal%20do%20Lumina.'

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Lumina — início">
      <span className="logo__icon" aria-hidden>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 4C10 4 6 9 6 14c0 4 2 7 5 9l-1 5 6-3 6 3-1-5c3-2 5-5 5-9 0-5-4-10-10-10z"
            fill="currentColor"
          />
          <circle cx="16" cy="14" r="3" fill="white" opacity="0.9" />
        </svg>
      </span>
      <span className="logo__text">Lumina</span>
    </a>
  )
}

function CheckIcon() {
  return (
    <svg className="check-icon" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
      <path
        d="M6 10l2.5 2.5L14 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Landing() {
  return (
    <div className="landing">
      <div className="landing__decor" aria-hidden>
        <span className="landing__plus landing__plus--1">+</span>
        <span className="landing__plus landing__plus--2">+</span>
        <span className="landing__plus landing__plus--3">+</span>
        <span className="landing__blob landing__blob--1" />
        <span className="landing__blob landing__blob--2" />
      </div>

      <header className="header">
        <div className="container header__inner">
          <Logo />
          <nav className="header__nav" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="header__link">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contato" className="btn btn--primary btn--sm">
            Entrar na área
          </a>
          <button
            type="button"
            className="header__menu-btn"
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero__grid">
            <div className="hero__content">
              <h1 className="hero__title">Lumina</h1>
              <p className="hero__tagline">Iluminando caminhos.</p>
              <p className="hero__text">
                Uma solução para trazer mais segurança para crianças autistas, com
                tecnologia que aproxima e cuida de verdade — dispositivo físico e
                app para famílias e cuidadores.
              </p>
              <a href="#sobre" className="btn btn--primary">
                Saiba mais
              </a>
            </div>
            <div className="hero__visual">
              <div className="hero__phones-glow" aria-hidden />
              <img
                src={screensMocks}
                alt="Telas do aplicativo Lumina em smartphones"
                className="hero__screens"
                width={640}
                height={480}
              />
            </div>
          </div>
        </section>

        <section id="sobre" className="about section">
          <div className="container about__inner">
            <h2 className="section__title">O que é o Lumina?</h2>
            <p className="about__text">
              O Lumina une um dispositivo físico e um aplicativo para apoiar
              pessoas autistas e seus cuidadores. Nasceu de experiências reais e
              ajuda no acompanhamento, na comunicação e na prevenção de riscos —
              para que famílias tenham mais tranquilidade no dia a dia.
            </p>
            <blockquote className="quote-card">
              <span className="quote-card__icon" aria-hidden>
                <svg viewBox="0 0 48 40" fill="none">
                  <path
                    d="M8 32V20c0-6 4-10 10-10 2 0 4 .5 5 1.5V8H8v24zm28 0V20c0-6 4-10 10-10 2 0 4 .5 5 1.5V8H36v24z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <p className="quote-card__text">
                &ldquo;Ser possível é um sinal de fogo, não de fumaça.&rdquo;
              </p>
              <cite className="quote-card__author">— Clarice Lispector</cite>
            </blockquote>
          </div>
        </section>

        <section id="funcionalidades" className="steps section">
          <div className="container">
            <h2 className="section__title section__title--center">
              Como funciona
            </h2>
            <div className="steps__grid">
              {STEPS.map((step) => (
                <article key={step.num} className="step-card">
                  <span className="step-card__num">{step.num}</span>
                  <h3 className="step-card__title">{step.title}</h3>
                  <p className="step-card__text">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="safety section">
          <div className="container safety__grid">
            <div className="safety__visual">
              <img
                src={kidPhoto}
                alt="Criança usando mochila com o dispositivo Lumina"
                className="safety__photo"
                width={400}
                height={500}
              />
            </div>
            <div className="safety__content">
              <h2 className="section__title">
                Mais segurança, mesmo à distância
              </h2>
              <p className="safety__text">
                O dispositivo Lumina vai com a criança e se conecta ao app em
                tempo real — para você saber onde ela está e agir rápido quando
                precisar.
              </p>
              <ul className="safety__list">
                {SAFETY_FEATURES.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="app-features section">
          <div className="container">
            <h2 className="section__title section__title--center">
              Acompanhamento em tempo real
            </h2>
            <p className="section__subtitle">
              Veja como o app Lumina funciona na prática
            </p>
            <div className="app-features__phones">
              {APP_SCREENS.map((screen) => (
                <figure key={screen.label} className="app-features__item">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className={`app-screen${screen.highlight ? ' app-screen--highlight' : ''}`}
                    loading="lazy"
                  />
                  <figcaption>{screen.label}</figcaption>
                </figure>
              ))}
            </div>
            <p className="app-features__footer">
              Tudo o que você precisa para acompanhar, proteger e apoiar a
              criança em um só lugar.
            </p>
          </div>
        </section>

        <section id="precos" className="pricing section">
          <div className="container">
            <h2 className="section__title section__title--center">
              Planos e preços
            </h2>
            <div className="pricing__grid">
              <article className="price-card">
                <h3 className="price-card__name">Compra inicial</h3>
                <p className="price-card__price">
                  <span className="price-card__currency">R$</span>130,00
                </p>
                <ul className="price-card__list">
                  {PURCHASE_ITEMS.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_BUY}
                  className="btn btn--outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar agora no WhatsApp
                </a>
              </article>
              <article className="price-card price-card--featured">
                <h3 className="price-card__name">Proteção Mensal</h3>
                <p className="price-card__price">
                  <span className="price-card__currency">R$</span>19,90
                  <span className="price-card__period">/mês</span>
                </p>
                <ul className="price-card__list">
                  {SUBSCRIPTION_ITEMS.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_SUB}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Assinar agora no WhatsApp
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="contato" className="team section">
          <div className="container">
            <h2 className="section__title section__title--center">
              Quem criou o Lumina
            </h2>
            <div className="team__grid">
              {TEAM.map((member) => (
                <article key={member.name} className="team-card">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-card__avatar"
                    width={120}
                    height={120}
                  />
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                </article>
              ))}
            </div>
            <p className="team__mission">
              O Lumina nasceu da vontade de criar mais segurança e apoio para
              crianças autistas e suas famílias, unindo tecnologia e cuidado
              humano.
            </p>
          </div>
        </section>
      </main>

      <footer id="termos" className="footer">
        <div className="footer__blob" aria-hidden />
        <div className="container footer__inner">
          <h2 className="footer__title">Baixe nossos Termos e Condições</h2>
          <a href="#" className="footer__link">
            Link para termos e condições
          </a>
          <p className="footer__copy">
            © {new Date().getFullYear()} Lumina. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
