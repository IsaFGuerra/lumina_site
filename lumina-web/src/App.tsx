import './App.css'

import luminaLogo from './assets/figma/lumina-logo.png'
import luminaDevice from './assets/figma/hardwareImage.png'
import phoneWelcome from './assets/figma/phone-map-overview.png'
import phoneDocuments from './assets/figma/phone-home.png'
import phoneProfile from './assets/figma/nfc-chip.png'
import phoneRights from './assets/figma/phone-documents.png'
import teamGiovana from './assets/figma/team-giovana.png'
import teamRodrigo from './assets/figma/team-rodrigo.png'
import teamIsadora from './assets/figma/team-isadora.png'
import starImg from './assets/figma/Star 21.png'
import phoneMockup from './assets/figma/NFC 6.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Preços', href: '#precos' },
  { label: 'Contato', href: '#criadores' },
  { label: 'Termos', href: '#termos' },
]

const heroPhones = [
  { src: phoneDocuments, alt: 'Tela de documentos do app Lumina', className: 'phone-fan__item phone-fan__item--back-left' },
  { src: phoneWelcome, alt: 'Tela de boas-vindas do app Lumina', className: 'phone-fan__item phone-fan__item--front-left' },
  { src: phoneProfile, alt: 'Tela de perfil do app Lumina', className: 'phone-fan__item phone-fan__item--front-right' },
  { src: phoneRights, alt: 'Tela de leis e direitos do app Lumina', className: 'phone-fan__item phone-fan__item--back-right' },
]

const steps = [
  {
    number: '01',
    title: 'Configure o dispositivo',
    text: 'Conecte o dispositivo ao app e cadastre a criança com foto e informações básicas.',
  },
  {
    number: '02',
    title: 'Defina a área segura',
    text: 'Desenhe no mapa a região onde a criança pode circular com segurança ou busque endereços específicos.',
  },
  {
    number: '03',
    title: 'Acompanhe e proteja em tempo real',
    text: 'Veja a localização ao vivo, receba alertas sonoros exclusivos e tenha acesso a recursos como áudio ambiente, detecção de risco com IA e contato rápido com autoridades.',
  },
]

const features = [
  'Leve e confortável de usar',
  'Conectado em tempo real com o app',
  'Pensado para situações de emergência',
]

const appScreens = [
  { src: phoneProfile, alt: 'Tela de localização em tempo real', label: 'Localização em tempo real' },
  { src: phoneDocuments, alt: 'Tela de documentos e informações', label: 'Documentos e informações' },
  { src: phoneMockup, alt: 'Tela NFC do Lumina', label: 'NFC' },
  { src: phoneRights, alt: 'Tela de leis e direitos', label: 'Leis e Direitos' },
]

const plans = [
  {
    title: 'Compra Inicial',
    price: 'R$29,99',
    billing: 'Cobrança de 299,99 por ano',
    tone: 'blue',
    highlight: 'Mais escolhido',
    items: [
      'Ativação completa do sistema',
      'Segurança desde o primeiro dia',
      'Acesso ao aplicativo',
      '1 ano de garantia',
      'Cobertura para defeitos de fábrica',
      'Cobertura para roubo (mediante apresentação de BO)',
    ],
    button: 'Em breve disponível via WhatsApp',
  },
  {
    title: 'Renovação',
    price: 'R$19,99',
    billing: 'Cobrança de 199,99 por ano',
    tone: 'pink',
    items: [
      'Ilê',
      'Cobertura contra roubo',
      'Continuidade da proteção do dispositivo',
    ],
    button: 'Disponível após o primeiro ano',
  },
]

const teamMembers = [
  {
    name: 'Giovana Hossein',
    role: 'UX/UI Designer',
    image: teamGiovana,
    description: 'Apaixonada por criar soluções que impactam positivamente a vida das pessoas.',
    linkedin: 'https://www.linkedin.com/in/giovanahrebello/',
  },
  {
    name: 'Rodrigo Sandler',
    role: 'Desenvolvedor',
    image: teamRodrigo,
    description: 'Especialista em construir dispositivos físicos discretos, eficientes e confortáveis.',
    linkedin: 'https://www.linkedin.com/in/rodrigo-sandler-1945a9220/',
  },
  {
    name: 'Isadora Guerra',
    role: 'Desenvolvedora',
    image: teamIsadora,
    description: 'Focado em desenvolver tecnologia acessível, segura e com propósito real.',
    linkedin: 'https://www.linkedin.com/in/isadoraferreiraguerra/',
  },
]

const starData = [
  { top: '2%', left: '45%', rotate: 15, size: 12 },
  { top: '4%', left: '15%', rotate: 12, size: 14 },
  { top: '6%', left: '78%', rotate: 85, size: 16 },
  { top: '8%', left: '28%', rotate: 0, size: 18 },
  { top: '10%', left: '92%', rotate: 30, size: 14 },
  { top: '12%', left: '18%', rotate: 25, size: 14 },
  { top: '14%', left: '58%', rotate: 45, size: 20 },
  { top: '15%', left: '3%', rotate: 60, size: 16 },
  { top: '17%', left: '85%', rotate: 80, size: 14 },
  { top: '19%', left: '74%', rotate: 10, size: 16 },
  { top: '21%', left: '48%', rotate: 75, size: 18 },
  { top: '22%', left: '10%', rotate: 35, size: 16 },
  { top: '24%', left: '34%', rotate: 60, size: 12 },
  { top: '26%', left: '68%', rotate: 5, size: 20 },
  { top: '28%', left: '88%', rotate: 15, size: 18 },
  { top: '29%', left: '22%', rotate: 40, size: 14 },
  { top: '31%', left: '65%', rotate: 30, size: 18 },
  { top: '33%', left: '5%', rotate: 55, size: 16 },
  { top: '34%', left: '42%', rotate: 85, size: 14 },
  { top: '36%', left: '82%', rotate: 20, size: 18 },
  { top: '38%', left: '25%', rotate: 75, size: 14 },
  { top: '39%', left: '56%', rotate: 65, size: 12 },
  { top: '41%', left: '8%', rotate: 20, size: 16 },
  { top: '42%', left: '95%', rotate: 10, size: 14 },
  { top: '44%', left: '76%', rotate: 15, size: 22 },
  { top: '45%', left: '32%', rotate: 80, size: 18 },
  { top: '47%', left: '92%', rotate: 40, size: 14 },
  { top: '49%', left: '47%', rotate: 50, size: 16 },
  { top: '51%', left: '15%', rotate: 35, size: 12 },
  { top: '53%', left: '22%', rotate: 65, size: 18 },
  { top: '55%', left: '85%', rotate: 25, size: 16 },
  { top: '56%', left: '68%', rotate: 0, size: 14 },
  { top: '58%', left: '45%', rotate: 45, size: 20 },
  { top: '59%', left: '12%', rotate: 55, size: 16 },
  { top: '61%', left: '33%', rotate: 35, size: 18 },
  { top: '62%', left: '58%', rotate: 15, size: 14 },
  { top: '64%', left: '86%', rotate: 25, size: 20 },
  { top: '66%', left: '72%', rotate: 70, size: 12 },
  { top: '67%', left: '25%', rotate: 50, size: 18 },
  { top: '69%', left: '52%', rotate: 10, size: 14 },
  { top: '71%', left: '8%', rotate: 85, size: 16 },
  { top: '73%', left: '39%', rotate: 20, size: 16 },
  { top: '74%', left: '88%', rotate: 60, size: 14 },
  { top: '76%', left: '15%', rotate: 80, size: 18 },
  { top: '78%', left: '48%', rotate: 5, size: 12 },
  { top: '79%', left: '69%', rotate: 55, size: 20 },
  { top: '81%', left: '28%', rotate: 30, size: 16 },
  { top: '82%', left: '90%', rotate: 30, size: 14 },
  { top: '84%', left: '29%', rotate: 40, size: 14 },
  { top: '85%', left: '60%', rotate: 75, size: 18 },
  { top: '87%', left: '48%', rotate: 65, size: 16 },
  { top: '88%', left: '8%', rotate: 15, size: 14 },
  { top: '89%', left: '76%', rotate: 5, size: 18 },
  { top: '91%', left: '85%', rotate: 45, size: 16 },
  { top: '92%', left: '18%', rotate: 45, size: 20 },
  { top: '94%', left: '52%', rotate: 80, size: 12 },
  { top: '95%', left: '62%', rotate: 15, size: 14 },
  { top: '96%', left: '25%', rotate: 35, size: 18 },
  { top: '97%', left: '82%', rotate: 75, size: 16 },
  { top: '98%', left: '38%', rotate: 35, size: 18 },
  { top: '99%', left: '72%', rotate: 55, size: 14 },
]

function App() {
  return (
    <div className="site-shell">
      <div className="shape shape--top-one" aria-hidden />
      <div className="shape shape--top-two" aria-hidden />
      <div className="shape shape--bottom-one" aria-hidden />
      <div className="shape shape--bottom-two" aria-hidden />

      <div className="site-stars" aria-hidden>
        {starData.map((star, i) => (
          <img
            key={i}
            className="site-star"
            src={starImg}
            alt=""
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              transform: `rotate(${star.rotate}deg)`,
            }}
          />
        ))}
      </div>

      <header className="navbar">
        <a className="brand" href="#home" aria-label="Lumina">
          <img src={luminaLogo} alt="" />
          <span>Lumina</span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="pill-button navbar__cta" href="#precos">
          Entrar na lista
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="section__inner hero__inner">
            <div className="hero__copy">
              <h1>Lumina</h1>
              <p className="eyebrow">Iluminando caminhos.</p>
              <p>
                Uma solução pensada para apoiar responsáveis por pessoas autistas, com mais segurança,
                autonomia e conexão no dia a dia.
              </p>
              <a className="pill-button" href="#precos">
                Entrar na lista
              </a>
            </div>

            <div className="phone-fan" aria-label="Prévia das telas do aplicativo Lumina">
              {heroPhones.map((phone) => (
                <img key={phone.className} className={phone.className} src={phone.src} alt={phone.alt} />
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="section__inner">
            <div className="section-heading section-heading--left">
              <h2>O que é o Lumina?</h2>
              <p>
                O Lumina é uma solução que combina um dispositivo físico e um aplicativo para oferecer
                mais segurança e apoio a pessoas autistas e seus responsáveis.
              </p>
              <p>
                Criado com base em experiências reais, o Lumina ajuda no acompanhamento, na comunicação e
                na prevenção de situações de risco de forma simples, acessível e confiável.
              </p>
            </div>

            <figure className="quote">
              <img src={luminaLogo} alt="" />
              <blockquote>
                “Ser sensível é um sinal de força, não de fraqueza.”
                <span>— Clarice Lispector</span>
              </blockquote>
            </figure>
          </div>
        </section>

        <section className="section how-it-works" id="funcionalidades">
          <div className="section__inner">
            <div className="section-heading">
              <h2>Como funciona</h2>
            </div>

            <div className="steps-grid">
              {steps.map((step, index) => (
                <article className="step-card" key={step.number}>
                  <span className="step-card__number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  {index < steps.length - 1 && <span className="step-card__arrow" aria-hidden>→</span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section device-section">
          <div className="section__inner device-grid">
            <div className="device-photo">
              <img src={luminaDevice} alt="Dispositivo físico Lumina preso à alça de uma mochila" />
            </div>

            <div className="device-copy">
              <span className="soft-badge">Conectado ao app Lumina</span>
              <h2>Mais segurança, mesmo à distância</h2>
              <p>
                Conheça o dispositivo físico que funciona junto com o app Lumina. O dispositivo ilumina
                acompanha a pessoa em tempo real e se conecta ao app para enviar alertas e permitir ações
                rápidas em qualquer situação.
              </p>
              <ul className="feature-list">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section app-section">
          <div className="section__inner">
            <div className="section-heading">
              <h2>Acompanhamento em tempo real</h2>
              <p>Veja como o app Lumina funciona na prática</p>
            </div>

            <div className="screens-grid">
              {appScreens.map((screen) => (
                <figure className="screen-card" key={screen.label}>
                  <img src={screen.src} alt={screen.alt} />
                  <figcaption>{screen.label}</figcaption>
                </figure>
              ))}
            </div>

            <p className="screen-note">
              Tudo o que você precisa para acompanhar, proteger e apoiar a criança em um só lugar.
            </p>
          </div>
        </section>

        <section className="section pricing-section" id="precos">
          <div className="section__inner">
            <div className="section-heading">
              <h2>Planos e preços</h2>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <article className={`price-card price-card--${plan.tone}`} key={plan.title}>
                  {'highlight' in plan && <span className="price-card__highlight">{plan.highlight}</span>}
                  <h3>{plan.title}</h3>
                  <p className="price-card__price">
                    {plan.price}
                    <span>/mês</span>
                  </p>
                  <p className="price-card__billing">{plan.billing}</p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href="#precos">{plan.button}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section team-section" id="criadores">
          <div className="section__inner">
            <div className="section-heading">
              <h2>Quem criou o Lumina</h2>
              <p>
                O Lumina foi desenvolvido por uma equipe multidisciplinar, unindo tecnologia, design e
                vivências reais.
              </p>
            </div>

            <div className="team-grid">
              {teamMembers.map((member) => (
                <a
                  key={member.name}
                  className="person-card__link"
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <article className="person-card">
                    <img src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p className="person-card__role">{member.role}</p>
                    <p>{member.description}</p>
                  </article>
                </a>
              ))}
            </div>

            <blockquote className="closing-quote">
              “O Lumina nasceu da vontade de criar mais segurança e apoio para crianças autistas e suas
              famílias, unindo tecnologia e cuidado humano.”
            </blockquote>
          </div>
        </section>

        <section className="section terms-section" id="termos">
          <div className="section__inner terms-section__inner">
            <h2>Baixe nossos Termos e Condições</h2>
            <a href="#termos">Link para termos →</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Lumina. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
