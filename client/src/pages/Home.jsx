import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header, Footer, Fade } from '../components/Layout'
import BookingForm from '../components/BookingForm'

const services = [
  ['01', 'Campus activations', 'Events become branded experiences people want to be part of.'],
  ['02', 'On-ground promotions', 'Physical advertising people actually stop, touch, and talk about.'],
  ['03', 'Creative media ideas', 'Original formats that do more than occupy banner space.']
]

export default function Home() {
  return (
    <motion.main
      className="site-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .25 }}
    >
      <Header />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">For brands with a reason to show up</p>

          <h1>
            Brand presence where attention <em>actually</em> exists.
          </h1>

          <p className="lead">
            TrendItNow helps brands become part of college events through creative offline advertising and on-ground activations.
          </p>

          <div className="hero-actions">
            <a className="button dark" href="#schedule">
              Schedule a call <i>→</i>
            </a>

            <a className="text-link" href="#ideation">
              Explore our ideas <i>↓</i>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="TrendItNow advertising animation">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div className="trust-strip">
        <span>College Events</span>
        <i />
        <span>Campus Activations</span>
        <i />
        <span>Brand Experiences</span>
      </div>

      <section id="what-we-do" className="section services">
        <Fade>
          <p className="eyebrow">What we do</p>
          <h2>Make the moment<br />work harder.</h2>
        </Fade>

        <div className="service-list">
          {services.map(([no, title, copy]) => (
            <Fade key={no} className="service">
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <b>↗</b>
            </Fade>
          ))}
        </div>
      </section>

      <section className="section campus">
        <Fade className="campus-statement">
          <p className="eyebrow">Why campus advertising</p>

          <h2>
            The room is the<br />
            <em>real</em> medium.
          </h2>

          <blockquote>
            “The best brand moments don’t feel bought. They feel like they belonged there.”
          </blockquote>
        </Fade>

        <Fade className="observations">
          <article>
            <span>01</span>
            <p>Thousands of students gather in one place, with time to actually notice what surrounds them.</p>
          </article>

          <article>
            <span>02</span>
            <p>Physical objects stay visible longer than the average scroll—and create an easy reason to engage.</p>
          </article>

          <article>
            <span>03</span>
            <p>Shared experiences travel naturally: between friends, into photos, and beyond the day itself.</p>
          </article>

          <article>
            <span>04</span>
            <p>Every interaction can become a conversation, not just another impression.</p>
          </article>
        </Fade>
      </section>

      <section id="ideation" className="section ideation">
        <Fade>
          <div className="section-intro">
            <p className="eyebrow">Ideation</p>
            <h2>Advertising ideas that become part of the event instead of interrupting it.</h2>
          </div>
        </Fade>

        <Fade>
          <Link to="/ideation/water-label" className="idea-card">
            <div className="bottle-art">
              <div className="bottle-cap" />
              <div className="bottle-body">
                <small>TrendItNow × BRAND</small>
                <strong>STAY<br />VISIBLE.</strong>
                <span>500 ML · FESTIVAL EDITION</span>
              </div>
            </div>

            <div className="idea-info">
              <p className="eyebrow">Featured idea · 01</p>
              <h3>Custom Water Bottle<br />Label Advertising</h3>
              <p>Replace the bottle label with the sponsor’s entire visual identity. The bottle becomes the advertisement.</p>
              <span className="circle-arrow">↗</span>
            </div>
          </Link>
        </Fade>
      </section>

      <section id="schedule" className="schedule">
        <div className="schedule-title">
          <p className="eyebrow">Let’s make an appearance</p>
          <h2>Tell us where<br />the crowd is.</h2>
          <p>No presentations required. Start with the event, the audience, or a question.</p>
        </div>

        <BookingForm />
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Direct line</p>

        <div>
          <a href="tel:+917564056834">+91 7564056834</a>
          <a href="tel:+917617050650">+91 7617050650</a>
          <a href="tel:+918902968301">+91 8902968301</a>
        </div>

        <div className="contact-bottom">
          <a href="mailto:trenditnow7@gmail.com">trenditnow7@gmail.com</a>

          <span>
            <a href="#instagram" aria-label="Instagram">Instagram</a> /
            <a href="#linkedin" aria-label="LinkedIn"> LinkedIn</a>
          </span>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}