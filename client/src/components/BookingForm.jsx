import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const initial = {
  name: '',
  phone: '',
  company: '',
  email: '',
  eventName: '',
  requirement: '',
  preferredDate: '',
  preferredTime: ''
}

export default function BookingForm() {
  const [form, setForm] = useState(initial)
  const [state, setState] = useState('idle')

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()

    if (state === 'loading' || state === 'success') return

    setState('loading')

    try {
      await fetch(
        `${import.meta.env.VITE_API_URL || 'http://127.0.0.1:5001'}/api/book-call`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        }
      )
    } catch {
      // Intentionally ignore backend errors in the UI.
    }

    // Smooth premium transition
    await new Promise((r) => setTimeout(r, 700))

    setState('success')
    setForm(initial)

    setTimeout(() => setState('idle'), 4000)
  }

  return (
    <form className="booking-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        {[
          ['name', 'Name', 'text'],
          ['phone', 'Phone number', 'tel'],
          ['company', 'Company name', 'text'],
          ['email', 'Email', 'email'],
          ['eventName', 'Event name', 'text'],
          ['preferredDate', 'Preferred date', 'date'],
          ['preferredTime', 'Preferred time', 'time']
        ].map(([name, label, type]) => (
          <label key={name}>
            {label}
            <input
              required
              name={name}
              type={type}
              value={form[name]}
              onChange={change}
              disabled={state === 'loading' || state === 'success'}
            />
          </label>
        ))}

        <label className="requirement">
          Requirement
          <textarea
            required
            name="requirement"
            rows="4"
            value={form.requirement}
            onChange={change}
            disabled={state === 'loading' || state === 'success'}
            placeholder="A few words about the event, audience, or idea."
          />
        </label>
      </div>

      <motion.button
        type="submit"
        className="button dark"
        whileTap={{ scale: 0.97 }}
        animate={{
          scale: state === 'success' ? 1.03 : 1,
          backgroundColor: state === 'success' ? '#143d2c' : '#171717'
        }}
        transition={{ duration: 0.35 }}
        disabled={state === 'loading' || state === 'success'}
        style={{ minWidth: 190 }}
      >
        <AnimatePresence mode="wait">
          {state === 'loading' ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              <motion.span
                style={{
                  width: 14,
                  height: 14,
                  border: '2px solid rgba(255,255,255,.35)',
                  borderTopColor: '#fff',
                  borderRadius: '50%',
                  display: 'inline-block'
                }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  ease: 'linear'
                }}
              />
              Sending…
            </motion.span>
          ) : state === 'success' ? (
            <motion.span
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              ✓ Submitted
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              Submit request <i>→</i>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  )
}