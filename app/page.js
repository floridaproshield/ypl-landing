'use client'

import { useState, useEffect, useRef } from 'react'

const PHONE = '(205) 946-7649'
const PHONE_HREF = 'tel:2059467649'
const EMAIL = 'info@yplservices.com'
const LOGO = '/images/logo.png'

const VIDEOS = [
  'https://res.cloudinary.com/dxdmqizxw/video/upload/v1778173762/2165b68c63204b1b94138a654f5ed98f_lkdivz.mp4',
  'https://res.cloudinary.com/dxdmqizxw/video/upload/v1778173761/c8237ee421954de8a4c6530dbab2cc09_krveim.mp4',
  'https://res.cloudinary.com/dxdmqizxw/video/upload/v1778173755/549f1617fb394471b60290a6e3a11266_htgypq.mp4',
  'https://res.cloudinary.com/dxdmqizxw/video/upload/v1778173752/4b6ff8cf09ca4971b39b45d3da7857f8_qcnbgp.mp4',
  'https://res.cloudinary.com/dxdmqizxw/video/upload/v1778173739/b3547609dd614c0eb4023aa540e13192_aamisc.mp4',
]

const SITE_IMAGES = [
  'https://yplservices.com/wp-content/uploads/2024/07/IMG_1181-scaled.jpg',
  'https://yplservices.com/wp-content/uploads/2024/07/IMG_1355-scaled.jpg',
  'https://yplservices.com/wp-content/uploads/2024/07/IMG_7143-scaled.jpg',
  'https://yplservices.com/wp-content/uploads/2024/07/IMG_1551.jpg',
  'https://yplservices.com/wp-content/uploads/2024/07/c9265b9e-9fbb-44fd-965d-f5788c8ed2f0.jpg',
  'https://yplservices.com/wp-content/uploads/2024/06/g30decb88ea3ab23ad46cb7dcbcf4ee6683da079a66c6e1b46860990dbb7c1f60c2f4eee510fc8bfff32f4ce8cec5043bff89560e1eb7d1bc529eda281722326b_1280-3098477.jpg',
  'https://yplservices.com/wp-content/uploads/2024/06/g46738af3bae748ed4e85ef5f9db184e6faf7c2ae553829e93de973c09b010e280b0a4259ac38d4e011e5c846e3bdd1d2_1280-998265.jpg',
  'https://yplservices.com/wp-content/uploads/2024/06/g9aa54d994ff1fd4a9ca26e4acdafeb8053283da0b7e625168a77a636f68a417abd78634c1a535d4395c45ea04f1fbc7f37566edf1e1641adb7a4a48e25e8ce6d_1280-1867187.jpg',
  'https://yplservices.com/wp-content/uploads/2024/07/pexels-photo-1643384-1643384.jpg',
]

const SERVICES = [
  {
    icon: '🖌️',
    title: 'Interior Painting',
    desc: 'Transform your interiors with precision and care. Residential & commercial spaces.',
  },
  {
    icon: '🏠',
    title: 'Exterior Painting',
    desc: 'Boost your curb appeal with a fresh, durable coat that stands up to any weather.',
  },
  {
    icon: '💧',
    title: 'Pressure Washing',
    desc: 'Deep clean driveways, decks, siding, and more. Restore surfaces to like-new condition.',
  },
  {
    icon: '🪵',
    title: 'Carpentry',
    desc: 'Custom woodwork, trim, repairs, and installations done with craftsmanship.',
  },
  {
    icon: '🪜',
    title: 'Deck Staining',
    desc: 'Protect and beautify your deck with premium stains from top brands.',
  },
  {
    icon: '🔨',
    title: 'General Renovation',
    desc: 'From post-construction cleaning to full room renovations — we handle it all.',
  },
]

const TRUST = [
  { icon: '⏰', label: 'On-Time Arrivals' },
  { icon: '💬', label: 'Consistent Communication' },
  { icon: '💵', label: 'Fair Pricing' },
  { icon: '🛡️', label: 'Licensed & Insured' },
  { icon: '✅', label: 'Guaranteed Workmanship' },
  { icon: '📋', label: 'Simple & Transparent Process' },
]

const BRANDS = [
  { name: 'Sherwin-Williams', color: '#003087' },
  { name: 'Benjamin Moore', color: '#C8102E' },
  { name: 'PPG', color: '#00539F' },
  { name: 'Behr', color: '#E31837' },
  { name: '3M', color: '#FF0000' },
  { name: 'Cabot', color: '#2E5339' },
]

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [galleryIdx, setGalleryIdx] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleVideoEnded = () => {
    setCurrentVideo((prev) => (prev + 1) % VIDEOS.length)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [currentVideo])

  const prevImg = () => setGalleryIdx((p) => (p === 0 ? SITE_IMAGES.length - 1 : p - 1))
  const nextImg = () => setGalleryIdx((p) => (p + 1) % SITE_IMAGES.length)

  return (
    <div className="min-h-screen bg-white text-[#111]">

      {/* TOP BAR */}
      <div className="bg-[#111] text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <span>📞 <a href={PHONE_HREF} className="hover:text-red-400 transition">{PHONE}</a></span>
            <span>✉️ <a href={`mailto:${EMAIL}`} className="hover:text-red-400 transition">{EMAIL}</a></span>
          </div>
          <span className="text-gray-400">Mon – Fri: 8am – 5pm</span>
        </div>
      </div>

      {/* NAVBAR */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="bg-[#111] rounded-xl p-1.5">
              <img src={LOGO} alt="YPL Services LLC" className="h-10 w-auto" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-lg text-[#111]">YPL Services</div>
              <div className="text-xs text-gray-500">Painting & Home Services</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-gray-700 hover:text-[#CC1F1F] transition">
                {l.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="bg-[#CC1F1F] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition shadow">
              Free Quote
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg">
            <div className={`w-6 h-0.5 bg-[#111] transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#111] my-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#111] transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700">
                {l.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="bg-[#CC1F1F] text-white text-center px-5 py-3 rounded-full text-sm font-semibold">
              Free Quote — {PHONE}
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Fallback background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://yplservices.com/wp-content/uploads/2024/07/IMG_1355-scaled.jpg')` }}
        />
        {/* Video overlay — videos served locally or via CDN */}
        {VIDEOS.length > 0 && (
          <video
            ref={videoRef}
            key={currentVideo}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
          >
            <source src={VIDEOS[currentVideo]} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-[#CC1F1F] text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Birmingham, Alabama
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
            Where Craftsmanship<br />
            <span className="text-[#CC1F1F]">Meets Commitment</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Professional painting, pressure washing, carpentry & renovation services — residential & commercial. Licensed, insured, and built on trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="bg-[#CC1F1F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition shadow-xl">
              📞 Call {PHONE}
            </a>
            <a href="#services" className="bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition">
              See Our Services
            </a>
          </div>
        </div>

        {/* Video dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentVideo(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentVideo ? 'bg-white w-6' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-[#CC1F1F] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '500+', label: 'Projects Completed' },
            { num: '5★', label: 'Average Rating' },
            { num: '10+', label: 'Years Experience' },
            { num: '100%', label: 'Satisfaction Guarantee' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black">{s.num}</div>
              <div className="text-sm text-red-200 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#CC1F1F] font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl font-black mt-2">Our Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              From a fresh coat of paint to full renovations — YPL Services delivers quality you can see and trust you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#CC1F1F] transition">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={PHONE_HREF} className="inline-block bg-[#CC1F1F] text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition shadow-lg">
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-24 bg-[#111] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#CC1F1F] font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
              <h2 className="text-4xl font-black mt-2 mb-4">What You Should Expect</h2>
              <p className="text-gray-400 mb-8">
                Our mission is shaped by a commitment to provide the highest level of customer service and value to everyone who touches our business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TRUST.map((t) => (
                  <div key={t.label} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                    <span className="text-2xl">{t.icon}</span>
                    <span className="font-medium text-sm">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://yplservices.com/wp-content/uploads/2024/07/IMG_1355-scaled.jpg"
                alt="YPL Services team at work"
                className="rounded-2xl w-full object-cover h-96 shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#CC1F1F] text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-3xl font-black">Licensed</div>
                <div className="text-sm text-red-200">& Fully Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#CC1F1F] font-semibold text-sm uppercase tracking-widest">Our Work</span>
            <h2 className="text-4xl font-black mt-2">Recent Projects</h2>
            <p className="text-gray-500 mt-3">Real work. Real results. See what we've done for our customers.</p>
          </div>

          {/* Featured slider */}
          <div className="relative rounded-3xl overflow-hidden mb-6 shadow-2xl" style={{ height: '500px' }}>
            <img
              src={SITE_IMAGES[galleryIdx]}
              alt={`Project ${galleryIdx + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#111] w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg shadow transition">
              ‹
            </button>
            <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#111] w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg shadow transition">
              ›
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {SITE_IMAGES.map((_, i) => (
                <button key={i} onClick={() => setGalleryIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === galleryIdx ? 'bg-white w-6' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {SITE_IMAGES.slice(0, 5).map((img, i) => (
              <button key={i} onClick={() => setGalleryIdx(i)} className={`rounded-xl overflow-hidden h-20 transition-all ${galleryIdx === i ? 'ring-2 ring-[#CC1F1F] ring-offset-2' : 'opacity-70 hover:opacity-100'}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-[#CC1F1F] font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl font-black mt-2 mb-12">What Our Customers Say</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'James R.', text: 'YPL Services did an amazing job painting the exterior of my home. On time, professional, and the results were beyond my expectations!', stars: 5 },
              { name: 'Maria T.', text: 'They pressure washed my driveway and deck — looks brand new. Fair pricing and great communication throughout the whole job.', stars: 5 },
              { name: 'Derek M.', text: 'Hired them for interior painting and carpentry work. Absolutely flawless finish. Will definitely use them again for my next project.', stars: 5 },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-8 shadow-sm text-left border border-gray-100">
                <div className="flex mb-4">
                  {Array(r.stars).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#CC1F1F] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-gray-400">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-widest mb-10">Trusted Brands We Use</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {BRANDS.map((b) => (
              <div key={b.name} className="px-5 py-2.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-md">
                <span className="font-bold text-sm md:text-base tracking-tight" style={{ color: b.color }}>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 bg-[#111] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#CC1F1F] font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Ready to Transform<br/>Your Space?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Get a free, no-obligation estimate. We serve Birmingham, AL and surrounding areas.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <a href={PHONE_HREF} className="bg-[#CC1F1F] hover:bg-red-700 text-white rounded-2xl p-6 transition text-center block shadow-xl">
              <div className="text-3xl mb-2">📞</div>
              <div className="font-bold">Call Us</div>
              <div className="text-red-200 text-sm mt-1">{PHONE}</div>
            </a>
            <a href={`mailto:${EMAIL}`} className="bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-2xl p-6 transition text-center block">
              <div className="text-3xl mb-2">✉️</div>
              <div className="font-bold">Email Us</div>
              <div className="text-gray-400 text-sm mt-1">{EMAIL}</div>
            </a>
            <div className="bg-white/10 border border-white/10 text-white rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">🕐</div>
              <div className="font-bold">Business Hours</div>
              <div className="text-gray-400 text-sm mt-1">Mon – Fri: 8am – 5pm</div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/yplservices/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#CC1F1F] border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold transition">
              Facebook
            </a>
            <a href="https://www.instagram.com/yplservices/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#CC1F1F] border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold transition">
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/12059467649"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:bg-[#1ebe57] hover:scale-105 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
          <path d="M12.004 2C6.457 2 2 6.457 2 12.004c0 1.773.465 3.486 1.349 4.994L2 22l5.174-1.323A10.004 10.004 0 0 0 12.004 22C17.55 22 22 17.543 22 12.004 22 6.457 17.55 2 12.004 2zm0 18.18a8.18 8.18 0 0 1-4.17-1.141l-.299-.178-3.07.786.813-2.986-.194-.308A8.18 8.18 0 1 1 12.004 20.18zm4.49-6.126c-.246-.123-1.456-.718-1.682-.8-.225-.082-.389-.123-.553.123-.163.246-.634.8-.778.964-.143.164-.286.185-.532.062-.246-.123-1.038-.383-1.977-1.22-.73-.652-1.223-1.457-1.367-1.703-.143-.246-.015-.38.108-.502.11-.11.246-.287.369-.43.123-.144.164-.246.246-.41.082-.163.041-.307-.02-.43-.062-.123-.554-1.334-.758-1.826-.2-.48-.402-.415-.553-.423l-.472-.008a.905.905 0 0 0-.655.307c-.225.246-.86.84-.86 2.05s.88 2.378 1.003 2.542c.123.163 1.732 2.644 4.196 3.706.587.253 1.044.404 1.4.517.588.187 1.124.16 1.547.097.472-.07 1.456-.595 1.661-1.17.205-.574.205-1.067.143-1.17-.061-.103-.225-.164-.47-.287z"/>
        </svg>
        <span className="text-sm font-semibold">{PHONE}</span>
      </a>

      {/* FOOTER */}
      <footer className="bg-black text-gray-500 py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <img src={LOGO} alt="YPL Services" className="h-10 mx-auto mb-4 opacity-80" />
          <p className="font-semibold text-white">YPL Services LLC</p>
          <p className="mt-1">Paint · Pressure Wash · Carpentry · Renovation · Deck Staining · Post-Construction Cleaning</p>
          <p className="mt-4 text-xs text-gray-600">© {new Date().getFullYear()} YPL Services LLC — Birmingham, AL. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}
