import { useState } from 'react'
import { motion } from 'framer-motion'

const initial = { name:'', phone:'', company:'', email:'', eventName:'', requirement:'', preferredDate:'', preferredTime:'' }
export default function BookingForm() {
 const [form, setForm] = useState(initial); const [state, setState] = useState('idle'); const [message, setMessage] = useState('')
 const change = e => setForm({...form, [e.target.name]: e.target.value})
 const submit = async e => { e.preventDefault(); setState('loading'); setMessage(''); try { const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://127.0.0.1:5001'}/api/book-call`, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)}); const data=await res.json(); if(!res.ok) throw new Error(data.message); setState('success'); setMessage('Request received. We’ll be in touch shortly.'); setForm(initial) } catch(err) { setState('error'); setMessage(err.message || 'Something went wrong. Please try again.') } }
 return <form className="booking-form" onSubmit={submit} noValidate><div className="form-grid">
  {[['name','Name','text'],['phone','Phone number','tel'],['company','Company name','text'],['email','Email','email'],['eventName','Event name','text'],['preferredDate','Preferred date','date'],['preferredTime','Preferred time','time']].map(([name,label,type])=><label key={name}>{label}<input required name={name} type={type} value={form[name]} onChange={change}/></label>)}
  <label className="requirement">Requirement<textarea required name="requirement" rows="4" value={form.requirement} onChange={change} placeholder="A few words about the event, audience, or idea."/></label>
 </div><motion.button whileTap={{scale:.98}} className="button dark" disabled={state==='loading'}>{state==='loading'?'Sending…':'Submit request'} <i>→</i></motion.button>{message && <p role="status" className={`form-message ${state}`}>{message}</p>}</form>
}
