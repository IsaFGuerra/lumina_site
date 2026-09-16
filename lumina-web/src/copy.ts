export const LANGS = ['pt', 'en'] as const

export type Lang = (typeof LANGS)[number]

const whatsappMessage = {
  pt: 'Olá! Acessei o site do Lumina e achei a proposta incrível. Gostaria de garantir minha vaga na lista de lançamento e saber mais detalhes sobre quando o dispositivo estará disponível.',
  en: 'Hi! I visited the Lumina website and loved the idea. I would like to join the launch waitlist and learn more about when the device will be available.',
}

export const whatsappLink = (lang: Lang) =>
  `https://wa.me/5551996511539?text=${encodeURIComponent(whatsappMessage[lang])}`

export const copy = {
  pt: {
    htmlLang: 'pt-BR',
    documentTitle: 'Lumina — Iluminando caminhos',
    documentDescription:
      'Lumina — dispositivo e aplicativo que trazem mais segurança, autonomia e conexão para pessoas autistas e seus responsáveis.',
    langSwitchLabel: 'Idioma',
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Funcionalidades', href: '#funcionalidades' },
      { label: 'Preços', href: '#precos' },
      { label: 'Contato', href: '#criadores' },
      { label: 'Termos', href: '#termos' },
    ],
    navAriaLabel: 'Navegação principal',
    ctaWaitlist: 'Entrar na lista',
    heroEyebrow: 'Iluminando caminhos.',
    heroText:
      'Uma solução pensada para apoiar responsáveis por pessoas autistas, com mais segurança, autonomia e conexão no dia a dia.',
    heroPhonesLabel: 'Prévia das telas do aplicativo Lumina',
    heroPhoneAlts: [
      'Tela de documentos do app Lumina',
      'Tela de boas-vindas do app Lumina',
      'Tela de perfil do app Lumina',
      'Tela de leis e direitos do app Lumina',
    ],
    aboutTitle: 'O que é o Lumina?',
    aboutText1:
      'O Lumina é uma solução que combina um dispositivo físico e um aplicativo para oferecer mais segurança e apoio a pessoas autistas e seus responsáveis.',
    aboutText2:
      'Criado com base em experiências reais, o Lumina ajuda no acompanhamento, na comunicação e na prevenção de situações de risco de forma simples, acessível e confiável.',
    quote: '“Ser sensível é um sinal de força, não de fraqueza.”',
    quoteAuthor: '— Clarice Lispector',
    stepsTitle: 'Como funciona',
    steps: [
      {
        title: 'Configure o dispositivo',
        text: 'Conecte o dispositivo ao app e cadastre a criança com foto e informações básicas.',
      },
      {
        title: 'Defina a área segura',
        text: 'Desenhe no mapa a região onde a criança pode circular com segurança ou busque endereços específicos.',
      },
      {
        title: 'Acompanhe e proteja em tempo real',
        text: 'Veja a localização ao vivo, receba alertas sonoros exclusivos e tenha acesso a recursos como áudio ambiente, detecção de risco com IA e contato rápido com autoridades.',
      },
    ],
    deviceAlt: 'Dispositivo físico Lumina preso à alça de uma mochila',
    deviceBadge: 'Conectado ao app Lumina',
    deviceTitle: 'Mais segurança, mesmo à distância',
    deviceText:
      'Conheça o dispositivo físico que funciona junto com o app Lumina. O dispositivo ilumina acompanha a pessoa em tempo real e se conecta ao app para enviar alertas e permitir ações rápidas em qualquer situação.',
    features: [
      'Leve e confortável de usar',
      'Conexão em tempo real com o app',
      'Pensado para situações de emergência',
    ],
    appTitle: 'Acompanhamento em tempo real',
    appSubtitle: 'Veja como o app Lumina funciona na prática',
    appScreens: [
      { alt: 'Tela de localização em tempo real', label: 'Localização em tempo real' },
      { alt: 'Tela de documentos e informações', label: 'Documentos e informações' },
      { alt: 'Tela NFC do Lumina', label: 'NFC' },
      { alt: 'Tela de leis e direitos', label: 'Leis e Direitos' },
    ],
    screenNote:
      'Tudo o que você precisa para acompanhar, proteger e apoiar a criança em um só lugar.',
    pricingTitle: 'Planos e preços',
    plans: [
      {
        title: 'Ativação + Dispositivo',
        priceSuffix: ' à vista',
        billing: 'ou 12x de R$29,99',
        items: [
          'Dispositivo Lumina',
          'Assinatura gratuita por 1 ano',
          'Acesso ao aplicativo completo',
          'Segurança desde o primeiro dia',
          'Cobertura para defeitos de fábrica',
        ],
        button: 'Entrar na lista',
      },
      {
        title: 'Renovação',
        priceSuffix: '/mês',
        billing: '',
        items: [
          'Acesso a todas funcionalidades',
          'Cancele quando quiser',
          'Renovação simples e automática',
        ],
        button: 'Disponível após o primeiro ano',
      },
    ],
    teamTitle: 'Quem criou o Lumina',
    teamText:
      'O Lumina foi desenvolvido por uma equipe multidisciplinar, unindo tecnologia, design e vivências reais.',
    teamLinkedinLabel: (name: string) => `LinkedIn de ${name}`,
    team: [
      {
        role: 'UX/UI Designer',
        description:
          'Apaixonada por criar soluções que impactam positivamente a vida das pessoas.',
      },
      {
        role: 'Desenvolvedor',
        description:
          'Especialista em construir dispositivos físicos discretos, eficientes e confortáveis.',
      },
      {
        role: 'Desenvolvedora',
        description: 'Focado em desenvolver tecnologia acessível, segura e com propósito real.',
      },
    ],
    closingQuote:
      '“O Lumina nasceu da vontade de criar mais segurança e apoio para crianças autistas e suas famílias, unindo tecnologia e cuidado humano.”',
    termsTitle: 'Baixe nossos Termos e Condições',
    termsLink: 'Link para termos →',
    footer: (year: number) => `© ${year} Lumina. Todos os direitos reservados.`,
  },

  en: {
    htmlLang: 'en',
    documentTitle: 'Lumina — Lighting the way',
    documentDescription:
      'Lumina — a device and app that bring more safety, independence and connection to autistic people and their caregivers.',
    langSwitchLabel: 'Language',
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#sobre' },
      { label: 'Features', href: '#funcionalidades' },
      { label: 'Pricing', href: '#precos' },
      { label: 'Contact', href: '#criadores' },
      { label: 'Terms', href: '#termos' },
    ],
    navAriaLabel: 'Main navigation',
    ctaWaitlist: 'Join the waitlist',
    heroEyebrow: 'Lighting the way.',
    heroText:
      'A solution built to support caregivers of autistic people, with more safety, independence and connection every day.',
    heroPhonesLabel: 'Preview of the Lumina app screens',
    heroPhoneAlts: [
      'Documents screen of the Lumina app',
      'Welcome screen of the Lumina app',
      'Profile screen of the Lumina app',
      'Rights and laws screen of the Lumina app',
    ],
    aboutTitle: 'What is Lumina?',
    aboutText1:
      'Lumina combines a physical device and an app to bring more safety and support to autistic people and their caregivers.',
    aboutText2:
      'Built on real-life experience, Lumina helps with tracking, communication and preventing risky situations — simply, affordably and reliably.',
    quote: '“Being sensitive is a sign of strength, not weakness.”',
    quoteAuthor: '— Clarice Lispector',
    stepsTitle: 'How it works',
    steps: [
      {
        title: 'Set up the device',
        text: 'Connect the device to the app and register the child with a photo and basic information.',
      },
      {
        title: 'Define the safe area',
        text: 'Draw the area on the map where the child can move safely, or search for specific addresses.',
      },
      {
        title: 'Track and protect in real time',
        text: 'See live location, get distinctive sound alerts and use features such as ambient audio, AI risk detection and fast contact with the authorities.',
      },
    ],
    deviceAlt: 'The Lumina physical device clipped to a backpack strap',
    deviceBadge: 'Connected to the Lumina app',
    deviceTitle: 'More safety, even from a distance',
    deviceText:
      'Meet the physical device that works alongside the Lumina app. It follows the person in real time and connects to the app to send alerts and enable fast action in any situation.',
    features: [
      'Light and comfortable to wear',
      'Real-time connection with the app',
      'Designed for emergency situations',
    ],
    appTitle: 'Real-time tracking',
    appSubtitle: 'See how the Lumina app works in practice',
    appScreens: [
      { alt: 'Real-time location screen', label: 'Real-time location' },
      { alt: 'Documents and information screen', label: 'Documents and information' },
      { alt: 'Lumina NFC screen', label: 'NFC' },
      { alt: 'Rights and laws screen', label: 'Rights and Laws' },
    ],
    screenNote:
      'Everything you need to track, protect and support your child, all in one place.',
    pricingTitle: 'Plans and pricing',
    plans: [
      {
        title: 'Activation + Device',
        priceSuffix: ' one-time',
        billing: 'or 12x of R$29.99',
        items: [
          'Lumina device',
          'Free subscription for 1 year',
          'Full access to the app',
          'Safety from day one',
          'Coverage for manufacturing defects',
        ],
        button: 'Join the waitlist',
      },
      {
        title: 'Renewal',
        priceSuffix: '/month',
        billing: '',
        items: [
          'Access to every feature',
          'Cancel anytime',
          'Simple, automatic renewal',
        ],
        button: 'Available after the first year',
      },
    ],
    teamTitle: 'Who built Lumina',
    teamText:
      'Lumina was built by a multidisciplinary team, bringing together technology, design and lived experience.',
    teamLinkedinLabel: (name: string) => `${name} on LinkedIn`,
    team: [
      {
        role: 'UX/UI Designer',
        description:
          'Passionate about creating solutions that make a positive difference in people’s lives.',
      },
      {
        role: 'Developer',
        description:
          'Specialist in building discreet, efficient and comfortable physical devices.',
      },
      {
        role: 'Developer',
        description: 'Focused on building accessible, secure technology with real purpose.',
      },
    ],
    closingQuote:
      '“Lumina was born from the desire to create more safety and support for autistic children and their families, uniting technology and human care.”',
    termsTitle: 'Download our Terms and Conditions',
    termsLink: 'Go to terms →',
    footer: (year: number) => `© ${year} Lumina. All rights reserved.`,
  },
} satisfies Record<Lang, unknown>

const STORAGE_KEY = 'lumina.lang'

const isLang = (value: unknown): value is Lang => LANGS.includes(value as Lang)

/**
 * Escolha manual salva vence sempre. Sem escolha salva, varre as preferencias
 * do navegador na ordem e adota a primeira que o site suporta ('pt-BR' -> 'pt').
 * Nenhuma delas suportada -> ingles.
 */
export function detectLang(stored: string | null, preferred: readonly string[]): Lang {
  if (isLang(stored)) return stored

  for (const tag of preferred) {
    const base = tag.toLowerCase().split('-')[0]
    if (isLang(base)) return base
  }

  return 'en'
}

export function readLang(): Lang {
  let stored: string | null = null
  try {
    stored = localStorage.getItem(STORAGE_KEY)
  } catch {
    // localStorage bloqueado (modo privado): cai na detecção do navegador
  }
  return detectLang(stored, navigator.languages ?? [navigator.language])
}

export function storeLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // sem persistência; a escolha vale só para esta sessão
  }
}
