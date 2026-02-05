'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const businessTypes = [
  { 
    id: 'creator', 
    title: 'Content Creator',
    subtitle: 'Influencers & Personal Brands',
    desc: 'Showcase your content, grow your audience, monetize your influence',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
    color: 'from-rose-200 to-orange-100'
  },
  { 
    id: 'ecommerce', 
    title: 'E-Commerce',
    subtitle: 'Online Shops & Product Brands',
    desc: 'Beautiful storefronts that convert browsers into buyers',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    color: 'from-amber-100 to-yellow-50'
  },
  { 
    id: 'service', 
    title: 'Service Provider',
    subtitle: 'Consultants & Professionals',
    desc: 'Establish authority, showcase expertise, book clients',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    color: 'from-slate-200 to-stone-100'
  },
  { 
    id: 'beauty', 
    title: 'Beauty & Wellness',
    subtitle: 'Salons, Spas & Aestheticians',
    desc: 'Stunning portfolios with seamless booking integration',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    color: 'from-pink-100 to-rose-50'
  },
  { 
    id: 'restaurant', 
    title: 'Restaurant & Food',
    subtitle: 'Cafes, Restaurants & Catering',
    desc: 'Menus, reservations, and ambiance that makes mouths water',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    color: 'from-orange-100 to-amber-50'
  },
  { 
    id: 'creative', 
    title: 'Creative & Artist',
    subtitle: 'Photographers, Designers & Artists',
    desc: 'Portfolio-focused designs that let your work shine',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    color: 'from-violet-100 to-purple-50'
  },
  { 
    id: 'coach', 
    title: 'Coach & Educator',
    subtitle: 'Courses, Coaching & Consulting',
    desc: 'Sell programs, book sessions, build your movement',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    color: 'from-emerald-100 to-teal-50'
  },
  { 
    id: 'fitness', 
    title: 'Fitness & Health',
    subtitle: 'Trainers, Studios & Wellness',
    desc: 'Class schedules, memberships, and transformation stories',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    color: 'from-cyan-100 to-sky-50'
  },
  { 
    id: 'realestate', 
    title: 'Real Estate',
    subtitle: 'Agents, Brokers & Properties',
    desc: 'Listings, virtual tours, and lead generation',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    color: 'from-stone-200 to-neutral-100'
  },
];

export default function Home() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1a1814]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#E8DDD4]/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl tracking-tight">
            <span className="font-light">the</span>
            <span className="font-semibold gradient-text">canvas</span>
            <span className="font-light">co</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm text-[#6B635A]">
            <a href="#types" className="hover:text-[#1a1814] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#1a1814] transition-colors">Process</a>
            <a href="#pricing" className="hover:text-[#1a1814] transition-colors">Pricing</a>
          </div>
          <Link 
            href="/start"
            className="bg-[#1a1814] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#6B635A] transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </nav>

      {/* Hero with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://cdn.coverr.co/videos/coverr-woman-working-on-laptop-in-cafe-1584/1080p.mp4" type="video/mp4" />
          </video>
          {/* Overlay to blend with cream background */}
          <div className="absolute inset-0 bg-[#FDFBF7]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-transparent to-[#FDFBF7]" />
        </div>

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#B87D5E]/20 to-transparent rounded-full blur-3xl float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-[#C9A66B]/15 to-transparent rounded-full blur-3xl float float-delay" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-[#7D8B72]/15 to-transparent rounded-full blur-3xl float float-slow" />
        </div>

        {/* Geometric line elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Concentric circles top right */}
          <svg className="absolute -top-20 -right-20 w-96 h-96 text-[#B87D5E]/10" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          
          {/* Organic arches bottom */}
          <svg className="absolute -bottom-10 left-1/4 w-[500px] h-48 text-[#C9A66B]/10" viewBox="0 0 500 200" fill="none">
            <path d="M0 200 Q125 20 250 200" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M50 200 Q175 50 300 200" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M100 200 Q225 80 350 200" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>

          {/* Diagonal lines */}
          <div className="absolute top-1/4 right-1/4 w-px h-40 bg-gradient-to-b from-[#B87D5E]/20 to-transparent rotate-45" />
          <div className="absolute bottom-1/3 left-1/6 w-px h-32 bg-gradient-to-b from-[#C9A66B]/20 to-transparent -rotate-45" />
          
          {/* Floating dots */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[#B87D5E]/30 float" />
          <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-[#C9A66B]/20 float float-delay" />
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-[#7D8B72]/30 float float-slow" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <div 
            ref={addToRefs}
            className="reveal inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#B87D5E]/30 text-[#B87D5E] text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#B87D5E] pulse"></span>
            Now accepting new projects
          </div>
          
          <h1 
            ref={addToRefs}
            className="reveal delay-1 text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8"
          >
            Websites that feel like
            <br />
            <span className="gradient-text font-semibold italic">works of art</span>
          </h1>
          
          <p 
            ref={addToRefs}
            className="reveal delay-2 text-xl md:text-2xl text-[#6B635A] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We craft bespoke digital experiences for brands that demand excellence. 
            Designed with intention. Delivered in days.
          </p>
          
          <div 
            ref={addToRefs}
            className="reveal delay-3 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#types"
              className="group inline-flex items-center justify-center gap-3 bg-[#1a1814] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#6B635A] transition-all"
            >
              Explore Our Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div 
            ref={addToRefs}
            className="reveal delay-4 flex justify-center gap-16 mt-20 pt-12 border-t border-[#E8DDD4]"
          >
            {[
              { num: '150+', label: 'Websites Launched' },
              { num: '7', label: 'Day Delivery' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-light gradient-text">{stat.num}</div>
                <div className="text-sm text-[#6B635A] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B635A]">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#6B635A] to-transparent" />
        </div>
      </section>

      {/* Marquee */}
      <section className="py-6 border-y border-[#E8DDD4] overflow-hidden bg-[#F5F1EB]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {['Beauty', 'E-Commerce', 'Creators', 'Wellness', 'Food', 'Creative', 'Fitness', 'Real Estate', 'Coaches'].map((item) => (
                <span key={item} className="flex items-center gap-12 text-[#6B635A]/60 text-sm uppercase tracking-[0.2em]">
                  {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B87D5E]/40" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Website Types Grid */}
      <section id="types" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={addToRefs}
            className="reveal text-center mb-20"
          >
            <p className="text-[#B87D5E] text-sm uppercase tracking-[0.2em] mb-4">What We Create</p>
            <h2 className="text-4xl md:text-6xl font-light">
              Choose your <span className="gradient-text font-semibold italic">canvas</span>
            </h2>
            <p className="text-[#6B635A] mt-6 max-w-xl mx-auto text-lg">
              Select your industry and we'll guide you through a tailored questionnaire 
              to capture everything your perfect website needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((type, i) => (
              <Link
                key={type.id}
                href={`/start/${type.id}`}
                ref={addToRefs}
                className={`reveal delay-${(i % 5) + 1} group relative overflow-hidden rounded-3xl aspect-[4/3] hover-lift card-shine`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${type.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${type.color} opacity-80 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1814]/80 via-[#1a1814]/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <p className="text-white/70 text-sm mb-1">{type.subtitle}</p>
                  <h3 className="text-2xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{type.desc}</p>
                  
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Start Questionnaire
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-32 px-6 bg-[#1a1814] text-white">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={addToRefs}
            className="reveal grid lg:grid-cols-2 gap-16 items-center mb-20"
          >
            <div>
              <p className="text-[#B87D5E] text-sm uppercase tracking-[0.2em] mb-4">Our Process</p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                From vision to reality
                <br />
                <span className="gradient-text font-semibold italic">in one week</span>
              </h2>
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              We've refined our process to deliver exceptional results without the typical 
              agency timeline. No endless meetings. No scope creep. Just beautiful work, fast.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Questionnaire', desc: 'Answer tailored questions about your brand, goals, and vision. Takes about 15 minutes.', icon: '◯' },
              { num: '02', title: 'Strategy', desc: 'We analyze your responses and create a custom plan within 24 hours.', icon: '◐' },
              { num: '03', title: 'Design & Build', desc: 'Our team brings your vision to life with meticulous attention to detail.', icon: '◑' },
              { num: '04', title: 'Launch', desc: 'Review, refine, and go live. Your new website ready to make an impact.', icon: '●' },
            ].map((step, i) => (
              <div 
                key={step.num}
                ref={addToRefs}
                className={`reveal delay-${i + 1}`}
              >
                <div className="text-5xl text-[#B87D5E]/30 mb-4">{step.icon}</div>
                <div className="text-sm text-[#B87D5E] mb-2">{step.num}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={addToRefs}
            className="reveal text-center mb-16"
          >
            <p className="text-[#B87D5E] text-sm uppercase tracking-[0.2em] mb-4">Investment</p>
            <h2 className="text-4xl md:text-5xl font-light">
              Transparent <span className="gradient-text font-semibold italic">pricing</span>
            </h2>
            <p className="text-[#6B635A] mt-6 max-w-xl mx-auto">
              Everything included. No hidden fees. No surprises.
            </p>
          </div>

          <div 
            ref={addToRefs}
            className="reveal grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                name: 'Essential',
                price: '$497',
                desc: 'Perfect for personal brands and simple businesses',
                features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO', '7-day delivery'],
                popular: false
              },
              {
                name: 'Professional',
                price: '$997',
                desc: 'For growing brands that need more functionality',
                features: ['Up to 10 pages', 'Online booking', 'E-commerce ready', 'Blog integration', 'Advanced SEO', '5-day delivery'],
                popular: true
              },
              {
                name: 'Premium',
                price: '$1,997',
                desc: 'Complete solution with custom features & support',
                features: ['Unlimited pages', 'All Pro features', 'Custom functionality', 'Strategy session', '30-day support', 'Priority delivery'],
                popular: false
              }
            ].map((tier) => (
              <div 
                key={tier.name}
                className={`p-8 rounded-3xl hover-lift ${
                  tier.popular 
                    ? 'bg-[#1a1814] text-white ring-2 ring-[#B87D5E]' 
                    : 'bg-white border border-[#E8DDD4]'
                }`}
              >
                {tier.popular && (
                  <div className="inline-block px-3 py-1 bg-[#B87D5E] text-white text-xs font-medium rounded-full mb-4 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className={`text-sm uppercase tracking-wider mb-2 ${tier.popular ? 'text-white/60' : 'text-[#6B635A]'}`}>
                  {tier.name}
                </div>
                <div className="text-5xl font-light mb-4">{tier.price}</div>
                <p className={`mb-8 ${tier.popular ? 'text-white/60' : 'text-[#6B635A]'}`}>{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${tier.popular ? 'text-white/80' : ''}`}>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                        tier.popular ? 'bg-[#B87D5E]/30 text-[#B87D5E]' : 'bg-[#B87D5E]/10 text-[#B87D5E]'
                      }`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/start?plan=${tier.name.toLowerCase()}`}
                  className={`block w-full py-4 rounded-full text-center font-medium transition-colors ${
                    tier.popular 
                      ? 'bg-white text-[#1a1814] hover:bg-[#F5F1EB]' 
                      : 'bg-[#1a1814] text-white hover:bg-[#6B635A]'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div 
          ref={addToRefs}
          className="reveal max-w-4xl mx-auto"
        >
          <div className="relative p-16 md:p-24 rounded-[3rem] overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 animated-gradient" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#B87D5E]/10 to-[#C9A66B]/10" />
            
            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Ready to create something
                <br />
                <span className="gradient-text font-semibold italic">extraordinary?</span>
              </h2>
              <p className="text-[#6B635A] text-lg mb-10 max-w-xl mx-auto">
                Start with our tailored questionnaire and let's bring your vision to life.
              </p>
              <Link
                href="#types"
                className="group inline-flex items-center gap-3 bg-[#1a1814] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#6B635A] transition-all"
              >
                Choose Your Canvas
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#E8DDD4]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl">
            <span className="font-light">the</span>
            <span className="font-semibold gradient-text">canvas</span>
            <span className="font-light">co</span>
          </div>
          <p className="text-[#6B635A] text-sm">
            © 2026 The Canvas Co. Crafted with intention.
          </p>
          <div className="flex gap-6 text-sm text-[#6B635A]">
            <a href="#" className="hover:text-[#1a1814] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#1a1814] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#1a1814] transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
