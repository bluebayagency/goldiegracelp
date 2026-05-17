'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { TextReveal } from '@/components/TextReveal'
import { ImageReveal } from '@/components/ImageReveal'
import { EmailSignupForm } from '@/components/EmailSignupForm'



export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ALERT BANNER */}
      <div className="w-full bg-charcoal py-2.5 px-4 text-center">
        <p className="font-sans text-caption uppercase tracking-[0.25em] text-white/70">
          Launching soon. <span className="text-gold">Join the waitlist</span> and be first to know.
        </p>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden" style={{ background: '#f6f3ee' }}>

        {/* Glow gradient background */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 75% 50%, rgba(217,183,109,0.18) 0%, rgba(239,230,219,0.35) 35%, transparent 65%), radial-gradient(ellipse at 90% 15%, rgba(255,248,242,0.7) 0%, transparent 50%), radial-gradient(ellipse at 60% 90%, rgba(195,179,173,0.25) 0%, transparent 55%)' }} />

        {/* Full-bleed background image */}
        <motion.div
          className="absolute inset-0 md:right-[38%] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/gallery/goldie-grace-hero-left.png"
            alt="Goldie Grace"
            fill
            sizes="100vw"
            className="object-cover object-[center_15%]"
            priority
          />
        </motion.div>

        {/* Two-column layout overlay */}
        <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">

          {/* LEFT — image column */}
          <motion.div
            className="hidden lg:block lg:w-1/2 shrink-0 relative overflow-hidden"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.07 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/gallery/goldie-grace-3N3A0239.jpg"
                alt="Goldie Grace"
                fill
                sizes="50vw"
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </motion.div>

          {/* RIGHT — content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col shrink-0 px-10 sm:px-14 xl:px-16 pb-40 sm:pb-52 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo — 30% from top */}
            <motion.div
              className="flex justify-center pt-8 lg:pt-[45%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9, ease: 'easeOut' }}
            >
              <div className="relative">
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 1.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src="/goldie-grace-logo-stacked.png"
                    alt="Goldie Grace"
                    width={200}
                    height={80}
                    className="w-[13.8rem] sm:w-[18rem] h-auto"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Box — bottom */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full bg-white/70 backdrop-blur-sm border border-white/60 rounded-luxury shadow-luxury-lg px-8 py-10">
                <p className="font-sans text-caption uppercase tracking-[0.35em] text-charcoal/50 mb-4 italic">Coming Soon</p>
                <h1 className="font-elegant text-5xl sm:text-6xl xl:text-7xl text-charcoal leading-[1.08] mb-8">
                  A better way to learn makeup.
                </h1>
                <EmailSignupForm
                  showName
                  variant="light"
                  buttonText="Alert Me at Launch"
                  successMessage="You're on the list."
                  successSubtext="One email. The moment we go live, you will know first."
                />
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* MARQUEE STRIP */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 overflow-hidden bg-charcoal/90 backdrop-blur-sm py-3 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.2, ease: 'easeOut' }}
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            style={{ willChange: 'transform' }}
          >
            {[0, 1].map((copy) => (
              <span key={copy} className="flex shrink-0">
                {['Live Coaching', 'Expert Technique', 'Your Look', 'Personalized Sessions', 'From Anywhere', 'Real Results'].map((text) => (
                  <span key={text} className="flex items-center">
                    <span className="font-sans text-caption uppercase tracking-[0.28em] text-white/55 px-8">{text}</span>
                    <span className="text-gold/60 text-xs">&#9679;</span>
                  </span>
                ))}
              </span>
            ))}
          </motion.div>
        </motion.div>

      </section>

      {/* FEATURES */}
      <section className="relative py-20 lg:py-28 bg-cream overflow-visible">
        <div className="px-5 sm:px-8 max-w-5xl mx-auto">

          <AnimateIn>
            <p className="font-sans text-caption uppercase tracking-[0.35em] text-gold text-center mb-6">What's Coming</p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="font-serif text-xl sm:text-2xl text-charcoal/70 text-center leading-relaxed max-w-2xl mx-auto mb-14 italic">
              Imagine sitting across from the artist who finally just <em>gets</em> it. Your skin, your style, the products already on your shelf. No new routine to buy into. No tutorial to pause and rewind. Just real eyes on your real face, and the kind of guidance that actually sticks.
            </p>
          </AnimateIn>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                src: '/gallery/goldie-grace-box-2.jpg',
                label: 'Live Coaching',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14" />
                    <rect x="3" y="6" width="12" height="12" rx="2" />
                  </svg>
                ),
              },
              {
                src: '/gallery/goldie-grace-box-1.jpg',
                label: 'Expert Technique',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M12 3l1.8 5.5H19l-4.6 3.4 1.8 5.5L12 14l-4.2 3.4 1.8-5.5L5 8.5h5.2L12 3z" />
                  </svg>
                ),
              },
              {
                src: '/gallery/goldie-grace-box-3.jpg',
                label: 'Your Look',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M2 12s3.636-7 10-7 10 7 10 7-3.636 7-10 7S2 12 2 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
            ].map(({ src, label, icon }, i) => (
              <AnimateIn key={label} delay={i * 0.12}>
                <div className="group relative aspect-square rounded-luxury overflow-hidden shadow-luxury">
                  <Image
                    src={src}
                    alt={label}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col items-center text-center gap-3">
                    <span className="text-white/80">{icon}</span>
                    <p className="font-elegant text-2xl text-white">{label}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

        </div>


      </section>

      {/* THE TECHNIQUE / FOUNDER */}
      <section className="relative py-24 lg:py-32 bg-champagne overflow-visible">
        <div className="px-5 sm:px-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[5fr_3fr] gap-16 lg:gap-24 items-start">

            <div className="relative h-[520px] lg:h-[760px] rounded-luxury overflow-hidden order-2 lg:order-1 lg:-mt-48">
              <ImageReveal
                src="/gallery/goldie-grace-3N3A0141.jpg"
                alt="The technique behind Goldie Grace"
                sizes="(max-width: 1024px) 100vw, 50vw"
                wrapperClassName="absolute inset-0"
                direction="left"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent pointer-events-none" />
            </div>

            <div className="order-1 lg:order-2">
              <AnimateIn delay={0.1}>
                <p className="font-sans text-caption uppercase tracking-[0.35em] text-burgundy mb-4">The Technique Behind It</p>
                <h2 className="font-elegant text-4xl sm:text-5xl text-charcoal leading-[1.1] mb-6">
                  Expertise built over two decades.
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="font-sans text-body text-charcoal/70 leading-relaxed mb-5">
                  Goldie Grace was inspired by{' '}
                  <a
                    href="https://www.christinaaguayo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal underline underline-offset-4 decoration-gold/50 hover:decoration-gold transition-all duration-200"
                  >
                    Christina Aguayo
                  </a>
                  {' '}- a San Francisco-certified makeup artist, licensed esthetician, and certified brow specialist who spent nearly two decades mastering beauty techniques used only by her exclusive clientele.
                </p>

                <p className="font-serif text-lg text-charcoal/75 italic">
                  For the first time, that level of expertise is coming directly to you.
                </p>
              </AnimateIn>
            </div>

          </div>
        </div>

        {/* Icon overlaying the section boundary, bleeding right */}
        <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/3 z-10 pointer-events-none">
          <Image
            src="/goldie-grace-icon-transparent.png"
            alt="Goldie Grace"
            width={496}
            height={496}
            className="h-[396px] w-auto opacity-20"
          />
        </div>

      </section>

      {/* INSIDER */}
      <section className="relative py-24 lg:py-36 bg-charcoal overflow-hidden">

        <motion.div
          className="absolute top-16 right-16 w-48 h-48 rounded-full bg-gold/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-16 left-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <div className="relative z-10 px-5 sm:px-8 max-w-lg mx-auto text-center">

          <AnimateIn>
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                className="h-px bg-gold/30"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <p className="font-sans text-caption uppercase tracking-[0.3em] text-gold whitespace-nowrap">
                Coming Soon
              </p>
              <motion.div
                className="h-px bg-gold/30"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </AnimateIn>

          <TextReveal
            text="Be First To Know."
            tag="h2"
            className="font-elegant text-5xl sm:text-6xl text-white leading-none mb-5"
            delay={0.1}
          />

          <AnimateIn delay={0.4}>
            <EmailSignupForm
              showName
              variant="dark"
              buttonText="Notify Me at Launch"
              successMessage="You're on the list."
              successSubtext="We will reach out the moment we go live."
            />
          </AnimateIn>

          <AnimateIn delay={0.55}>
            <p className="font-sans text-caption text-white/25 uppercase tracking-widest mt-8">
              No spam. One email. When we are live.
            </p>
          </AnimateIn>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-cream border-t border-taupe/30 text-center">
        <Image
          src="/goldie-grace-logo-stacked.png"
          alt="Goldie Grace"
          width={200}
          height={80}
          className="h-14 w-auto mx-auto mb-4 opacity-45"
        />
        <p className="font-sans text-caption text-charcoal/35 uppercase tracking-widest">
          © {new Date().getFullYear()} Goldie Grace. All rights reserved.
        </p>
      </footer>

    </main>
  )
}
