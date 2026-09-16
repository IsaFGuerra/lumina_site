import { useEffect, useState } from 'react'

import './App.css'
import { LANGS, copy, readLang, storeLang, whatsappLink } from './copy'

import luminaLogo from './assets/figma/lumina-logo.png'
import luminaDevice from './assets/figma/hardwareImage.png'
import phoneWelcome from './assets/figma/phone-map-overview.png'
import phoneDocuments from './assets/figma/phone-home.png'
import phoneMap from './assets/figma/phone-rights.png'
import phoneRights from './assets/figma/phone-documents.png'
import teamGiovana from './assets/figma/team-giovana.png'
import teamRodrigo from './assets/figma/team-rodrigo.png'
import teamIsadora from './assets/figma/team-isadora.png'
import starImg from './assets/figma/Star 21.png'
import phoneMockup from './assets/figma/NFC 6.png'
import iconFolha from './assets/figma/Folha.png'
import iconPhone from './assets/figma/Phone.png'
import iconWarning from './assets/figma/Warning.png'




const heroPhones = [
  { src: phoneDocuments, className: 'phone-fan__item phone-fan__item--back-left' },
  { src: phoneWelcome, className: 'phone-fan__item phone-fan__item--back-right' },
  { src: phoneMap, className: 'phone-fan__item phone-fan__item--front-left' },
  { src: phoneRights, className: 'phone-fan__item phone-fan__item--front-right' },
]

const stepNumbers = ['01', '02', '03']

const featureIcons = [iconFolha, iconPhone, iconWarning]

const screenImages = [phoneMap, phoneDocuments, phoneMockup, phoneRights]

const planStyles = [
  {
    price: 'R$299,99',
    tone: 'blue',
    buttonClass: 'price-card__button price-card__button--primary',
    external: true,
  },
  {
    price: 'R$19,99',
    tone: 'pink',
    buttonClass: 'price-card__button',
    external: false,
  },
]

const teamMembers = [
  {
    name: 'Giovana Hossein',
    image: teamGiovana,
    linkedin: 'https://www.linkedin.com/in/giovanahrebello/',
  },
  {
    name: 'Rodrigo Sandler',
    image: teamRodrigo,
    linkedin: 'https://www.linkedin.com/in/rodrigo-sandler-1945a9220/',
  },
  {
    name: 'Isadora Guerra',
    image: teamIsadora,
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
  const [lang, setLang] = useState(readLang)
  const t = copy[lang]
  const waitlistHref = whatsappLink(lang)

  useEffect(() => {
    storeLang(lang)
    document.documentElement.lang = t.htmlLang
    document.title = t.documentTitle
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.documentDescription)
  }, [lang, t])

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

        <nav className="nav-links" aria-label={t.navAriaLabel}>
          {t.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="lang-switch" role="group" aria-label={t.langSwitchLabel}>
          {LANGS.map((option) => (
            <button
              key={option}
              type="button"
              className="lang-switch__option"
              aria-pressed={option === lang}
              onClick={() => setLang(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>

        <a
          className="pill-button navbar__cta"
          href={waitlistHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.ctaWaitlist}
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="section__inner hero__inner">
            <div className="hero__copy">
              <h1>Lumina</h1>
              <p className="eyebrow">{t.heroEyebrow}</p>
              <p>{t.heroText}</p>
              <a
                className="pill-button"
                href={waitlistHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.ctaWaitlist}
              </a>
            </div>

            <div className="phone-fan" aria-label={t.heroPhonesLabel}>
              {heroPhones.map((phone, index) => (
                <img
                  key={phone.className}
                  className={phone.className}
                  src={phone.src}
                  alt={t.heroPhoneAlts[index]}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="section__inner">
            <div className="section-heading section-heading--left">
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
            </div>

            <figure className="quote">
              <img src={luminaLogo} alt="" />
              <blockquote>
                {t.quote}
                <span>{t.quoteAuthor}</span>
              </blockquote>
            </figure>
          </div>
        </section>

        <section className="section how-it-works" id="funcionalidades">
          <div className="section__inner">
            <div className="section-heading">
              <h2>{t.stepsTitle}</h2>
            </div>

            <div className="steps-grid">
              {t.steps.map((step, index) => (
                <article className="step-card" key={stepNumbers[index]}>
                  <span className="step-card__number">{stepNumbers[index]}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  {index < t.steps.length - 1 && <span className="step-card__arrow" aria-hidden>&rarr;</span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section device-section">
          <div className="section__inner device-grid">
            <div className="device-photo">
              <img src={luminaDevice} alt={t.deviceAlt} />
            </div>

            <div className="device-copy">
              <span className="soft-badge">{t.deviceBadge}</span>
              <h2>{t.deviceTitle}</h2>
              <p>{t.deviceText}</p>
              <ul className="feature-list">
                {t.features.map((feature, index) => (
                  <li key={feature}>
                    <div className="feature-icon">
                      <img src={featureIcons[index]} alt="" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section app-section">
          <div className="section__inner">
            <div className="section-heading">
              <h2>{t.appTitle}</h2>
              <p>{t.appSubtitle}</p>
            </div>

            <div className="screens-grid">
              {t.appScreens.map((screen, index) => (
                <figure className="screen-card" key={screen.label}>
                  <img src={screenImages[index]} alt={screen.alt} />
                  <figcaption>{screen.label}</figcaption>
                </figure>
              ))}
            </div>

            <p className="screen-note">{t.screenNote}</p>
          </div>
        </section>

        <section className="section pricing-section" id="precos">
          <div className="section__inner">
            <div className="section-heading">
              <h2>{t.pricingTitle}</h2>
            </div>

            <div className="pricing-grid">
              {t.plans.map((plan, index) => {
                const style = planStyles[index]
                const href = style.external ? waitlistHref : '#precos'

                return (
                  <article className={`price-card price-card--${style.tone}`} key={plan.title}>
                    <h3>{plan.title}</h3>
                    <p className="price-card__price">
                      {style.price}
                      <span>{plan.priceSuffix}</span>
                    </p>
                    {plan.billing && <p className="price-card__billing">{plan.billing}</p>}
                    <ul>
                      {plan.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a
                      href={href}
                      className={style.buttonClass}
                      target={style.external ? '_blank' : undefined}
                      rel={style.external ? 'noopener noreferrer' : undefined}
                    >
                      {plan.button}
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section team-section" id="criadores">
          <div className="section__inner">
            <div className="section-heading">
              <h2>{t.teamTitle}</h2>
              <p>{t.teamText}</p>
            </div>

            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <a
                  key={member.name}
                  className="person-card__link"
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.teamLinkedinLabel(member.name)}
                >
                  <article className="person-card">
                    <img src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p className="person-card__role">{t.team[index].role}</p>
                    <p>{t.team[index].description}</p>
                  </article>
                </a>
              ))}
            </div>

            <blockquote className="closing-quote">{t.closingQuote}</blockquote>
          </div>
        </section>

        <section className="section terms-section" id="termos">
          <div className="section__inner terms-section__inner">
            <h2>{t.termsTitle}</h2>
            <a href="https://sandlerrodrigo.github.io/lumina-terms-and-conditions/">{t.termsLink}</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{t.footer(new Date().getFullYear())}</p>
      </footer>
    </div>
  )
}

export default App
