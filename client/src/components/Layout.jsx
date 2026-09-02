import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Fade = ({ children, className = '' }) => <motion.div className={className} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, ease: [.2,.65,.3,1] }}>{children}</motion.div>

export function Header() { return <header className="site-header"><Link className="wordmark" to="/" aria-label="XYZ home">XYZ<span>®</span></Link><nav aria-label="Main navigation"><a href="/#what-we-do">What we do</a><a href="/#ideation">Ideas</a><a href="/#contact">Contact</a></nav><a className="header-cta" href="#schedule">Schedule a call <i>↗</i></a></header> }

export function Footer() { return <footer><div className="wordmark">XYZ<span>®</span></div><p>College-first Offline Advertising</p><p>Designed for brands that want real-world visibility.</p><small>© {new Date().getFullYear()} XYZ. Built for the room, not the feed.</small></footer> }
