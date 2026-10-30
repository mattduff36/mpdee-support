import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
export const metadata: Metadata = {title: 'Contact | MPDEE Support', description: 'Tell MPDEE Support about your computer, software or network problem.', alternates: {canonical: '/contact'}};
export default function ContactPage() { return <div className="support-page">
  <section className="support-intro"><span className="support-kicker">GET IN TOUCH</span><h1 id="contact-heading">Let’s get you<br/><span>back to work.</span></h1><p>Something stopped working? Tell us what happened, what device you’re using, and what you’ve tried so far.</p></section>
  <section className="support-contact-grid"><div><h2>A clear first step.</h2><p>Send a request and we’ll discuss the right next step, whether that’s remote help, a visit or a larger piece of work.</p><a className="support-email" href="mailto:sendme@mpdee.info">sendme@mpdee.info ↗</a><div className="support-note"><span className="support-kicker">BEFORE YOU SEND</span><p>Include any error message and when the problem started. Please don’t send passwords or payment details.</p></div><p className="support-small">Your details are used to respond to your support enquiry.</p></div><ContactForm/></section>
</div>; }
