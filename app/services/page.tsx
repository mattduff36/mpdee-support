import Link from "next/link";
import { SUPPORT_SERVICES, CONTACT_INFO } from "@/lib/constants/services";

export const metadata = {
  alternates: { canonical: "/services" },
  title: "IT Support Services - MPDEE Support",
  description:
    "Comprehensive IT support services including remote helpdesk, on-site support, hardware services, and software solutions for businesses and consumers.",
  keywords:
    "IT support services, remote helpdesk, on-site support, hardware installation, software troubleshooting, technical support, computer repair",
};

function Arrow() {
  return (
    <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <header className="page-intro container">
        <p className="eyebrow">Services</p>
        <h1>Support that stays with the problem.</h1>
        <p>
          Professional IT support from remote assistance to on-site technical work, hardware and software.
        </p>
      </header>

      <section className="section container" style={{ paddingTop: 12 }}>
        <div className="service-list">
          {SUPPORT_SERVICES.map((service, index) => (
            <article className="service-row" id={service.id} key={service.id}>
              <p className="service-index">0{index + 1}</p>
              <div>
                <h2>{service.title}</h2>
                <p className="lede" style={{ marginTop: 12 }}>
                  {service.description}
                </p>
              </div>
              <div>
                <p className="eyebrow">Included</p>
                <ul className="feature-list">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link className="text-link" href="/contact" style={{ marginTop: 22 }}>
                  Request this service <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="section-label">Hours</p>
            <h2>When the team is available.</h2>
          </div>
          <p>{CONTACT_INFO.supportHours}.</p>
        </div>
        <div className="hours-grid">
          <article>
            <p className="eyebrow">Standard hours</p>
            <strong>Monday – Friday</strong>
            <p>8:00 AM – 6:00 PM</p>
            <p>Full support team available for all service types.</p>
          </article>
          <article>
            <p className="eyebrow">Extended hours</p>
            <strong>Evenings & weekends</strong>
            <p>By appointment</p>
            <p>Emergency support and scheduled maintenance available.</p>
          </article>
        </div>
        <div className="hero-actions" style={{ marginTop: 36 }}>
          <Link className="button button-dark" href="/contact">
            Schedule support <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
