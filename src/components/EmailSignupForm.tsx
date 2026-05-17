'use client'

/*
  MailerLite Integration Placeholder
  ------------------------------------
  Replace this form with your MailerLite embedded form code.

  Steps:
  1. Log in to MailerLite → Forms → Embedded Forms
  2. Create or select a form and click "Get code"
  3. Add the <script> tag once in layout.tsx
  4. Replace the <form> below with MailerLite's embed snippet

  Account ID: [REPLACE_WITH_YOUR_ACCOUNT_ID]
  Form ID:    [REPLACE_WITH_YOUR_FORM_ID]
*/

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EmailSignupFormProps {
  variant?: 'light' | 'dark'
  showName?: boolean
  buttonText?: string
  placeholder?: string
  successMessage?: string
  successSubtext?: string
  className?: string
}

export function EmailSignupForm({
  variant = 'light',
  showName = false,
  buttonText = 'Send My Free Guide',
  placeholder = 'Your email address',
  successMessage = "You're in.",
  successSubtext = 'Your guide is on its way.',
  className = '',
}: EmailSignupFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const isLight = variant === 'light'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Replace with MailerLite API call or embed
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-6"
          >
            <div className={`w-11 h-11 mx-auto mb-4 flex items-center justify-center border rounded-full ${isLight ? 'border-gold' : 'border-white/40'}`}>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-5 h-5 ${isLight ? 'text-gold' : 'text-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            </div>
            <p className={`font-elegant text-2xl mb-1 ${isLight ? 'text-charcoal' : 'text-white'}`}>
              {successMessage}
            </p>
            <p className={`font-sans text-body-sm ${isLight ? 'text-charcoal/55' : 'text-white/55'}`}>
              {successSubtext}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              {showName && (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={[
                    'flex-1 font-sans text-body-sm px-5 py-4 rounded-luxury border',
                    'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/40',
                    isLight
                      ? 'bg-white border-taupe text-charcoal placeholder:text-charcoal/35 focus:border-gold'
                      : 'bg-white/10 border-white/20 text-white placeholder:text-white/35 focus:border-white/50 focus:bg-white/15',
                  ].join(' ')}
                />
              )}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                className={[
                  'flex-1 font-sans text-body-sm px-5 py-4 rounded-luxury border',
                  'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/40',
                  isLight
                    ? 'bg-white border-taupe text-charcoal placeholder:text-charcoal/35 focus:border-gold'
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/35 focus:border-white/50 focus:bg-white/15',
                ].join(' ')}
              />
              <motion.button
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                className={[
                  'font-sans font-medium uppercase tracking-widest text-xs',
                  'bg-gold text-white px-8 py-4 rounded-luxury',
                  'transition-colors duration-300 hover:bg-gold-600',
                  'disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap',
                  showName ? 'sm:basis-full sm:w-full' : '',
                ].join(' ')}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Sending
                  </span>
                ) : buttonText}
              </motion.button>
            </div>
            <p className={`font-sans text-caption mt-3 text-center ${isLight ? 'text-charcoal/35' : 'text-white/35'}`}>
              No spam, ever. Unsubscribe any time.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
