import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import Window, { type WindowChromeProps } from '../components/Window'

const EMAILJS_SERVICE_ID = 'service_3s86tko'
const EMAILJS_TEMPLATE_ID = 'template_3j7dsfb'
const EMAILJS_PUBLIC_KEY = 'fDTxMjz5ma0vWzFSB'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = { kind: 'idle' | 'sending' | 'sent' | 'error'; message: string }

export default function ContactWindow(chrome: WindowChromeProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>({ kind: 'idle', message: '' })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ kind: 'error', message: 'Please fill out all fields.' })
      return
    }
    if (!EMAIL_PATTERN.test(email)) {
      setStatus({ kind: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setStatus({ kind: 'sending', message: 'Sending...' })
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        EMAILJS_PUBLIC_KEY,
      )
      setName('')
      setEmail('')
      setMessage('')
      setStatus({ kind: 'sent', message: 'Thank you! Your message has been sent.' })
    } catch {
      setStatus({ kind: 'error', message: 'Failed to send message. Try again later.' })
    }
  }

  return (
    <Window
      title="Contact me Wizard"
      icon="/window-icons/contact.png"
      width={672}
      status={
        <span className={`contact-status contact-status--${status.kind}`} role="status">
          {status.message}
        </span>
      }
      className="contact-window"
      {...chrome}
    >
      <div className="contact">
        <div className="contact-art" aria-hidden="true" />
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h1 className="contact-title">Contact me</h1>
          <p className="contact-intro">
            If you wish to contact me, feel free to do so using this contact form or send an email at{' '}
            <a href="mailto:mihic.dev@gmail.com">mihic.dev@gmail.com</a>
          </p>
          <label className="contact-field">
            <span>Name:</span>
            <input type="text" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label className="contact-field">
            <span>e-Mail:</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="contact-field contact-field--message">
            <span>Message:</span>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <button type="submit" className="btn contact-send" disabled={status.kind === 'sending'}>
            Send
          </button>
        </form>
      </div>
    </Window>
  )
}
