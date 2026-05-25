import './UnderConstruction.css'

export function UnderConstruction() {
  return (
    <div className="construction">
      <div className="construction__glow construction__glow--one" aria-hidden />
      <div className="construction__glow construction__glow--two" aria-hidden />
      <div className="construction__grid" aria-hidden />

      <main className="construction__card">
        <div className="construction__badge">
          <span className="construction__pulse" aria-hidden />
          Em breve
        </div>

        <p className="construction__brand">Lumina</p>

        <h1 className="construction__title">Site em construção</h1>

        <p className="construction__text">
          Estamos preparando uma experiência nova para apresentar o Lumina —
          segurança e tranquilidade para famílias, em um só lugar.
        </p>

        <div className="construction__progress" role="progressbar" aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso do lançamento">
          <span className="construction__progress-fill" />
        </div>

        <p className="construction__hint">Volte em breve. Obrigado pela paciência.</p>
      </main>

      <footer className="construction__footer">
        © {new Date().getFullYear()} Lumina
      </footer>
    </div>
  )
}
