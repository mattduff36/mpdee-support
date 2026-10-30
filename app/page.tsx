import Link from "next/link";
import { SUPPORT_SERVICES } from "@/lib/constants/services";

function Arrow() {
  return (
    <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            MPDEE Support
          </p>
          <h1>Less downtime. More getting things done.</h1>
          <p className="hero-description">
            Remote helpdesk, on-site technical support, hardware and software work for businesses and people who need the machine working again.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">
              Get support <Arrow />
            </Link>
            <Link className="text-link" href="/services">
              See services <Arrow />
            </Link>
          </div>
          <p className="hero-note">Remote and on-site · Monday–Friday 8AM–6PM · Extended hours available</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-grid" />
          <div className="workbench">
            <svg className="network" viewBox="0 0 520 180" fill="none">
              <path d="M70 120 H180 V48 H300 V120 H430" stroke="currentColor" strokeWidth="1.2" />
              <path d="M300 48 V18 H390" stroke="#dc2626" strokeWidth="1.2" />
              <circle className="node" cx="70" cy="120" r="7" />
              <circle className="node" cx="180" cy="48" r="7" />
              <circle className="node is-red" cx="300" cy="48" r="7" />
              <circle className="node" cx="390" cy="18" r="6" />
              <circle className="node" cx="430" cy="120" r="7" />
            </svg>
            <div className="monitor">
              <div className="monitor-bar">
                <span>Bench / 04</span>
                <span>Linked</span>
              </div>
              <div className="monitor-screen">
                <strong>Workbench</strong>
                <ul>
                  <li><i /> Desk session</li>
                  <li><i /> Network nodes</li>
                  <li><i className="is-red" /> Diagnostic cards</li>
                </ul>
              </div>
              <div className="monitor-stand" />
            </div>
            <ul className="diag-cards">
              <li><span>Tool 01</span>Remote access</li>
              <li><span>Tool 02</span>On-site kit</li>
              <li><span>Tool 03</span>Hardware check</li>
              <li><span>Tool 04</span>Software repair</li>
            </ul>
            <div className="bench-edge" />
          </div>
        </div>
      </section>

      <section className="section container" id="services">
        <div className="section-heading">
          <div>
            <p className="section-label">01 — Services</p>
            <h2>Four ways we keep systems moving.</h2>
          </div>
          <p>Practical help with everyday problems, from a remote diagnosis to hands-on hardware and software work.</p>
        </div>
        <div className="home-services">
          {SUPPORT_SERVICES.map((service) => (
            <Link key={service.id} href={`/services#${service.id}`}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="section-label">02 — Next</p>
            <h2>Tell us what stopped working.</h2>
          </div>
          <p>No retainers required to ask. Hourly support, a monthly retainer, or a quoted project.</p>
        </div>
        <div className="hero-actions">
          <Link className="button button-dark" href="/contact">
            Contact support <Arrow />
          </Link>
          <Link className="text-link" href="/pricing">
            View pricing <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
