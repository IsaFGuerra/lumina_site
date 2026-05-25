import './App.css'
import { SafeAreaRevealSection } from './sections/SafeAreaStorySection'

function App() {
  return (
    <main>
      <header className="navbar">
        <h2 className="logo">Minha Landing</h2>

        <nav className="navLinks">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section id="inicio" className="section hero">
        <div>
          <h1>Uma landing page simples e bonita</h1>
          <p>
            Aqui entra a chamada principal do teu site, explicando rapidamente
            o que ele oferece.
          </p>
          <a href="#contato" className="button">
            Começar agora
          </a>
        </div>
      </section>

      <section id="sobre" className="section">
        <h2>Sobre</h2>
        <p>
          Essa seção explica melhor o produto, serviço ou ideia da landing page.
        </p>
      <SafeAreaRevealSection />
      </section>

      <section id="beneficios" className="section">
        <h2>Benefícios</h2>
        <p>
          Aqui tu pode listar os principais diferenciais da tua solução.
        </p>
      </section>

      <section id="contato" className="section">
        <h2>Contato</h2>
        <p>
          Aqui pode entrar um formulário, botão de WhatsApp ou chamada final.
        </p>
      </section>
    </main>
  )
}

export default App