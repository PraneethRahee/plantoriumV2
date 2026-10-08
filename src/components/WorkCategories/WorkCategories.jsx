import './WorkCategories.css'

const CATEGORIES = [
  'Residential',
  'Commercial',
  'Institutional',
  'Hospitality',
  'Healthcare',
  'Public',
]

export default function WorkCategories() {
  return (
    <section className="wc">
      <h2 className="wc-head">You bring the vision. We handle the landscape.</h2>
      <p className="wc-sub">
        Consulting, design, execution and maintenance &mdash; connected from the first site visit to
        long-term care.
      </p>

      <ul className="wc-grid">
        {CATEGORIES.map((c) => (
          <li key={c} className="wc-card">
            <span className="wc-title">{c}</span>
            <span className="wc-care">Expert care</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
