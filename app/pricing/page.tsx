import Link from "next/link";
import { PRICING_TIERS } from "@/lib/constants/services";

export const metadata = {
  alternates: { canonical: "/pricing" },
  title: "Pricing - MPDEE Support",
  description:
    "Transparent pricing for IT support services. Hourly rates starting at £50, monthly retainers from £120, and custom project pricing.",
  keywords: "IT support pricing, hourly rates, monthly retainer, project pricing, technical support costs",
};

function Arrow() {
  return (
    <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const faqs = [
  {
    q: "Do you charge for travel time?",
    a: "For on-site visits within our local area (within 10 miles), travel time is included. For locations beyond this, we charge £0.45 per mile for travel expenses.",
  },
  {
    q: "What's included in the first hour charge?",
    a: "The first hour includes problem diagnosis, initial troubleshooting, and up to 60 minutes of active support work. This ensures we can properly assess and address your issue.",
  },
  {
    q: "Can I cancel my monthly retainer?",
    a: "Yes, our monthly retainers have no long-term commitment. You can cancel at any time with 30 days' notice. We believe in earning your business every month.",
  },
  {
    q: "How do you handle emergency support?",
    a: "Emergency support outside of business hours incurs an additional £75 callout fee, plus our standard hourly rates. We aim to respond to emergencies within 2 hours.",
  },
];

export default function PricingPage() {
  return (
    <div>
      <header className="page-intro container">
        <p className="eyebrow">Pricing</p>
        <h1>Simple, transparent pricing.</h1>
        <p>
          Choose the support option that works best for your needs. No hidden fees, no long-term contracts required.
        </p>
      </header>

      <section className="section container" style={{ paddingTop: 20 }}>
        <div className="price-grid">
          {PRICING_TIERS.map((tier) => (
            <article className={tier.popular ? "price-card is-popular" : "price-card"} key={tier.id} id={tier.id}>
              {tier.popular ? <p className="eyebrow">Most popular</p> : <p className="eyebrow">Option</p>}
              <h2>{tier.name}</h2>
              <span className="price-figure">{tier.price}</span>
              <p>{tier.description}</p>
              <ul className="feature-list">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className={tier.popular ? "button button-dark" : "button button-line"} href="/contact" style={{ marginTop: 28, width: "100%" }}>
                {tier.id === "project" ? "Get quote" : "Get started"} <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="section-label">Details</p>
            <h2>Pricing details.</h2>
          </div>
          <p>Everything you need to know about our pricing structure.</p>
        </div>
        <div className="detail-grid">
          <article className="detail-card">
            <h2>Hourly support breakdown</h2>
            <div className="rate-table">
              <div>
                <span>First hour (minimum charge)</span>
                <strong>£50.00</strong>
              </div>
              <div>
                <span>Additional hours</span>
                <strong>£24.00/hour</strong>
              </div>
              <div>
                <span>Emergency callout (out of hours)</span>
                <strong>£75.00 + hourly</strong>
              </div>
            </div>
            <p className="example-note">
              <strong>Example:</strong> A 2.5-hour support session would cost £50 + (1.5 × £24) = £86.00
            </p>
          </article>
          <article className="detail-card">
            <h2>Monthly retainer benefits</h2>
            <ul className="feature-list">
              <li>Priority support queue</li>
              <li>Reduced hourly rates (£18/hour)</li>
              <li>Proactive system monitoring</li>
              <li>Monthly system health reports</li>
              <li>No minimum charge for support calls</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="section-label">FAQ</p>
            <h2>Pricing FAQ.</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <article className="faq-item" key={item.q}>
              <h2>{item.q}</h2>
              <p style={{ marginTop: 10 }}>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <h2>Ready to get started?</h2>
          </div>
          <p>Get professional IT support tailored to your needs and budget.</p>
        </div>
        <div className="hero-actions">
          <Link className="button button-dark" href="/contact">
            Request support <Arrow />
          </Link>
          <Link className="text-link" href="/services">
            View services <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
