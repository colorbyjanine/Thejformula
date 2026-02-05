'use client';

import Link from 'next/link';

const businessTypes = [
  { id: 'creator', title: 'Content Creator', subtitle: 'Influencers & Personal Brands', icon: '🎬' },
  { id: 'ecommerce', title: 'E-Commerce', subtitle: 'Online Shops & Products', icon: '🛍️' },
  { id: 'beauty', title: 'Beauty & Wellness', subtitle: 'Salons, Spas & Aestheticians', icon: '💇‍♀️' },
  { id: 'service', title: 'Service Provider', subtitle: 'Consultants & Professionals', icon: '💼' },
  { id: 'restaurant', title: 'Restaurant & Food', subtitle: 'Cafes, Restaurants & Catering', icon: '🍽️' },
  { id: 'creative', title: 'Creative & Artist', subtitle: 'Photographers, Designers & Artists', icon: '🎨' },
  { id: 'coach', title: 'Coach & Educator', subtitle: 'Courses, Coaching & Consulting', icon: '📚' },
  { id: 'fitness', title: 'Fitness & Health', subtitle: 'Trainers, Studios & Wellness', icon: '💪' },
  { id: 'realestate', title: 'Real Estate', subtitle: 'Agents, Brokers & Properties', icon: '🏠' },
];

export default function StartPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header */}
      <header className="glass fixed top-0 left-0 right-0 z-50 border-b border-[#E8DDD4]/50">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-xl">
            <span className="font-light">the</span>
            <span className="font-semibold gradient-text">canvas</span>
            <span className="font-light">co</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center mb-16">
          <p className="text-[#B87D5E] text-sm uppercase tracking-[0.2em] mb-4">Get Started</p>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            What are you <span className="gradient-text font-semibold italic">building?</span>
          </h1>
          <p className="text-[#6B635A] max-w-xl mx-auto">
            Select your industry and we'll ask the right questions to capture 
            everything your perfect website needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessTypes.map((type) => (
            <Link
              key={type.id}
              href={`/start/${type.id}`}
              className="group p-6 rounded-2xl bg-white border border-[#E8DDD4] hover:border-[#B87D5E] hover:shadow-lg transition-all"
            >
              <span className="text-3xl block mb-3">{type.icon}</span>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-[#B87D5E] transition-colors">
                {type.title}
              </h3>
              <p className="text-sm text-[#6B635A]">{type.subtitle}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#6B635A]">
            Don't see your industry?{' '}
            <Link href="/start/service" className="text-[#B87D5E] hover:underline">
              Start with our general questionnaire
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
