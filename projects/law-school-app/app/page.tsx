'use client';

import Link from 'next/link';

const subjects = [
  { id: 'torts', name: 'Torts', emoji: '⚖️', desc: 'Negligence, intentional torts, strict liability', mbe: true },
  { id: 'contracts', name: 'Contracts', emoji: '📝', desc: 'Formation, performance, remedies', mbe: true },
  { id: 'constitutional', name: 'Con Law', emoji: '🏛️', desc: 'Federal powers, individual rights', mbe: true },
  { id: 'criminal', name: 'Criminal Law', emoji: '🔒', desc: 'Crimes, defenses, procedure', mbe: true },
  { id: 'civpro', name: 'Civil Procedure', emoji: '⚡', desc: 'Federal court practice', mbe: true },
  { id: 'evidence', name: 'Evidence', emoji: '🔍', desc: 'What comes into court', mbe: true },
  { id: 'property', name: 'Real Property', emoji: '🏠', desc: 'Estates, interests, landlord-tenant', mbe: true },
  { id: 'community', name: 'Community Property', emoji: '💑', desc: 'Marital property (CA specific)', ca: true },
  { id: 'wills', name: 'Wills & Trusts', emoji: '📜', desc: 'Estate planning', ca: true },
  { id: 'business', name: 'Business Associations', emoji: '🏢', desc: 'Corporations, partnerships', ca: true },
  { id: 'remedies', name: 'Remedies', emoji: '💰', desc: 'Damages, equity, restitution', ca: true },
  { id: 'ethics', name: 'Professional Responsibility', emoji: '👔', desc: 'Attorney ethics', mbe: true },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d12] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0d0d12]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚖️</span>
            <span className="text-xl font-semibold">LawStudy</span>
          </div>
          <div className="text-sm text-white/50">California Bar Exam Prep</div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Master the Bar Exam</h1>
          <p className="text-lg text-white/60 mb-8">
            Comprehensive outlines, landmark cases, and memory aids for all MBE and California essay subjects.
          </p>
          <div className="flex justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">7 MBE Subjects</span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm">5 CA Essay Subjects</span>
          </div>
        </div>
      </section>

      {/* Subject Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* MBE Subjects */}
          <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">MBE Subjects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {subjects.filter(s => s.mbe).map(subject => (
              <Link
                key={subject.id}
                href={`/subjects/${subject.id}`}
                className="group p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="text-3xl mb-3">{subject.emoji}</div>
                <h3 className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">{subject.name}</h3>
                <p className="text-sm text-white/50">{subject.desc}</p>
              </Link>
            ))}
          </div>

          {/* CA Subjects */}
          <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">California Essay Subjects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {subjects.filter(s => s.ca).map(subject => (
              <Link
                key={subject.id}
                href={`/subjects/${subject.id}`}
                className="group p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 transition-all"
              >
                <div className="text-3xl mb-3">{subject.emoji}</div>
                <h3 className="font-semibold mb-1 group-hover:text-amber-400 transition-colors">{subject.name}</h3>
                <p className="text-sm text-white/50">{subject.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-white/40">
          Built for Janine 💛 • California Bar Exam 2026
        </div>
      </footer>
    </div>
  );
}
