import { useState } from 'react'
import { projects } from '../data/projects'
import { Check } from './Icons'

const projectOptions = projects.map((p) => (`${p.name} — ${p.city}`))

export default function EnquiryForm({ compact = false, preselect = '' }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: preselect, message: '' })
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please share your name'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Please enter a valid email'
    if (!form.phone.trim()) errs.phone = 'Please share a contact number'
    if (!form.message.trim()) errs.message = 'Tell us a little about your requirement'
    setErrors(errs)
    if (Object.keys(errs).length) return
    setSent(true)
  }

  if (sent) {
    return (
      <div className={`enquiry-success ${compact ? '' : 'enquiry-success-panel'}`}>
        <span className="enquiry-check"><Check /></span>
        <h3>Thank you.</h3>
        <p>Your enquiry has been received. Our development team will reach out within one working day. (Demo form — no data was transmitted.)</p>
        <button className="text-link" onClick={() => setSent(false)}>SUBMIT ANOTHER ENQUIRY →</button>
      </div>
    )
  }

  return (
    <form className={`enquiry-form ${compact ? 'enquiry-form-compact' : ''}`} onSubmit={submit} noValidate>
      <div className="enquiry-grid">
        <div className="form-field">
          <label htmlFor="eq-name">Full Name *</label>
          <input id="eq-name" type="text" value={form.name} onChange={set('name')} placeholder="Your name" />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="eq-email">Email *</label>
          <input id="eq-email" type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="eq-phone">Phone *</label>
          <input id="eq-phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 ..." />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="eq-project">Interested Project</label>
          <select id="eq-project" value={form.project} onChange={set('project')}>
            <option value="">Select a project</option>
            {projectOptions.map((p) => <option key={p} value={p}>{p}</option>)}
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="eq-message">Message *</label>
          <textarea id="eq-message" rows={4} value={form.message} onChange={set('message')} placeholder="Tell us about your requirement — configuration, budget, timeline…" />
          {errors.message && <span className="form-error">{errors.message}</span>}
        </div>
      </div>
      <div className="enquiry-foot">
        <p className="enquiry-note">We respond to all enquiries within one working day. *Demo form — no data is transmitted.</p>
        <button type="submit" className="btn btn-navy btn-lg">
          <span className="btn-label">SUBMIT ENQUIRY</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </form>
  )
}