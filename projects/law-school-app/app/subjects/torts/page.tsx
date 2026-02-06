'use client';

import { useState } from 'react';
import Link from 'next/link';

// Topic data - organized for quick loading
const topics = [
  {
    id: 'battery',
    name: 'Battery',
    category: 'Intentional Torts',
    rule: 'Intentional infliction of harmful or offensive contact with another person.',
    elements: ['Act by D', 'Intent (purpose or substantial certainty)', 'Harmful or offensive contact', 'Causation'],
    mnemonic: 'Battery = Bad Touch',
    keyPoints: [
      'Intent to contact ≠ intent to harm',
      'Contact with connected objects counts (purse, cane)',
      'Plaintiff need not be aware (unconscious victim = still battery)',
      'Transferred intent applies'
    ],
    defenses: ['Consent', 'Self-defense', 'Defense of others', 'Defense of property'],
    cases: [
      { name: 'Vosburg v. Putney', year: 1891, rule: 'Intent to contact is enough; eggshell plaintiff rule' },
      { name: 'Garratt v. Dailey', year: 1955, rule: 'Substantial certainty = intent' }
    ]
  },
  {
    id: 'assault',
    name: 'Assault',
    category: 'Intentional Torts',
    rule: 'Intentional creation of reasonable apprehension of imminent harmful or offensive contact.',
    elements: ['Act by D', 'Intent to cause apprehension', 'Reasonable apprehension by P', 'Imminent contact threatened'],
    mnemonic: 'Assault = Apprehension (fear, no touch)',
    keyPoints: [
      'No contact required (that\'s battery)',
      'Words alone usually insufficient — need overt act',
      'Plaintiff must be aware of threat',
      'Apparent ability sufficient (unloaded gun counts)',
      'IMMINENT = immediate, not future'
    ],
    defenses: ['Consent', 'Self-defense'],
    cases: [
      { name: 'I de S v. W de S', year: 1348, rule: 'Swinging weapon at someone is assault even if miss' }
    ]
  },
  {
    id: 'false-imprisonment',
    name: 'False Imprisonment',
    category: 'Intentional Torts',
    rule: 'Intentional confinement of another within fixed boundaries, without consent or privilege.',
    elements: ['Act by D', 'Intent to confine', 'Confinement within bounded area', 'P aware of confinement OR harmed'],
    mnemonic: 'FI = Forced Inside',
    keyPoints: [
      'Must be bounded area (blocking one exit when another exists = not FI)',
      'Physical barriers, threats, duress, or invalid legal authority all count',
      'Shopkeeper\'s privilege: Reasonable detention of suspected shoplifter',
      'Moral pressure alone insufficient'
    ],
    defenses: ['Consent', 'Shopkeeper\'s privilege', 'Valid legal authority'],
    cases: [
      { name: 'Big Town Nursing Home v. Newman', year: 1970, rule: 'Wrongful confinement by refusing to release' }
    ]
  },
  {
    id: 'iied',
    name: 'IIED',
    category: 'Intentional Torts',
    rule: 'Intentional or reckless extreme and outrageous conduct causing severe emotional distress.',
    elements: ['Extreme and outrageous conduct', 'Intent or recklessness', 'Causation', 'Severe emotional distress'],
    mnemonic: 'IIED = Incredibly Evil + Extreme Distress',
    keyPoints: [
      'HIGH bar — conduct must exceed all bounds of decency',
      'Mere insults NOT enough',
      'Recklessness sufficient (don\'t need purpose)',
      'Bystander recovery: Present + close family + D knew of presence',
      'Position of power or knowledge of vulnerability increases outrageousness'
    ],
    defenses: ['First Amendment (some speech protected)', 'Conduct not outrageous', 'Distress not severe'],
    cases: [
      { name: 'State Rubbish v. Siliznoff', year: 1952, rule: 'Threats causing emotional distress actionable' }
    ]
  },
  {
    id: 'trespass-land',
    name: 'Trespass to Land',
    category: 'Intentional Torts',
    rule: 'Intentional physical invasion of another\'s real property.',
    elements: ['Act by D', 'Intent to enter (not intent to trespass)', 'Physical invasion', 'Of another\'s property'],
    mnemonic: 'Trespass = Touching land',
    keyPoints: [
      'Mistake about ownership is NOT a defense',
      'Includes surface, airspace (reasonable height), subsurface',
      'Particles (pollution), objects thrown on land count',
      'Nominal damages available without actual harm'
    ],
    defenses: ['Consent', 'Necessity', 'Authority of law'],
    cases: [
      { name: 'Dougherty v. Stepp', year: 1835, rule: 'Every unauthorized entry is trespass' }
    ]
  },
  {
    id: 'trespass-chattels',
    name: 'Trespass to Chattels',
    category: 'Intentional Torts',
    rule: 'Intentional interference with another\'s personal property causing damage or deprivation.',
    elements: ['Act by D', 'Intent to interfere', 'Interference with chattel', 'Damage or dispossession'],
    mnemonic: 'TTC = Touching Their Chattels',
    keyPoints: [
      'Requires ACTUAL damages (unlike trespass to land)',
      'Damage = physical harm, loss of use, or deprivation',
      'Lesser interference than conversion'
    ],
    defenses: ['Consent', 'Necessity'],
    cases: []
  },
  {
    id: 'conversion',
    name: 'Conversion',
    category: 'Intentional Torts',
    rule: 'Intentional exercise of dominion or control over another\'s chattel, seriously interfering with owner\'s rights.',
    elements: ['Act by D', 'Intent to exercise control', 'Serious interference', 'With P\'s chattel'],
    mnemonic: 'Conversion = Complete takeover',
    keyPoints: [
      'More serious than trespass to chattels',
      'Forced sale — D must pay full value',
      'Factors: Duration, extent, harm, good faith, expense',
      'Innocent buyer from thief = still liable'
    ],
    defenses: ['Consent', 'Necessity'],
    cases: []
  },
  {
    id: 'negligence',
    name: 'Negligence Overview',
    category: 'Negligence',
    rule: 'D breached a duty of care owed to P, actually and proximately causing P\'s damages.',
    elements: ['Duty', 'Breach', 'Actual Cause', 'Proximate Cause', 'Damages'],
    mnemonic: 'DBCPD = Defendant Broke Causing Plaintiff Damages',
    keyPoints: [
      'Most common tort — learn this cold',
      'Standard: Reasonable person under the circumstances',
      'Both actual AND proximate cause required',
      'Must have actual damages (unlike intentional torts)'
    ],
    defenses: ['Comparative negligence', 'Contributory negligence (minority)', 'Assumption of risk'],
    cases: [
      { name: 'Palsgraf v. Long Island RR', year: 1928, rule: 'Duty owed only to foreseeable plaintiffs' },
      { name: 'Brown v. Kendall', year: 1850, rule: 'Birth of fault-based negligence' }
    ]
  },
  {
    id: 'duty',
    name: 'Duty of Care',
    category: 'Negligence',
    rule: 'D owes duty to all foreseeable plaintiffs who might be harmed by D\'s conduct.',
    elements: ['General duty to foreseeable plaintiffs', 'Special duties in certain relationships', 'Landowner duties', 'NIED'],
    mnemonic: 'Duty = Do Unto others (if foreseeable)',
    keyPoints: [
      'No general duty to rescue (but duty not to make worse)',
      'Special relationships create affirmative duties',
      'Professionals held to standard of profession',
      'Children: Age, intelligence, experience (unless adult activity)'
    ],
    defenses: ['No duty existed', 'Not foreseeable plaintiff'],
    cases: [
      { name: 'Tarasoff v. Regents', year: 1976, rule: 'Therapist has duty to warn identifiable victims' },
      { name: 'Palsgraf', year: 1928, rule: 'Foreseeability limits duty' }
    ]
  },
  {
    id: 'breach',
    name: 'Breach of Duty',
    category: 'Negligence',
    rule: 'D failed to act as a reasonable person would under the circumstances.',
    elements: ['Reasonable person standard', 'Hand Formula (B < P × L)', 'Custom as evidence', 'Negligence per se'],
    mnemonic: 'Breach = Below reasonable standard',
    keyPoints: [
      'Hand Formula: If Burden < Probability × Loss, should have acted',
      'Custom is evidence but not conclusive',
      'Negligence per se: Violation of safety statute = breach (P in protected class, harm statute meant to prevent)',
      'Res Ipsa Loquitur: Infer negligence when (1) usually doesn\'t happen without negligence, (2) D\'s exclusive control, (3) P didn\'t contribute'
    ],
    defenses: ['Acted reasonably', 'Emergency exception'],
    cases: [
      { name: 'U.S. v. Carroll Towing', year: 1947, rule: 'Hand Formula for determining breach' },
      { name: 'Byrne v. Boadle', year: 1863, rule: 'Res Ipsa Loquitur' }
    ]
  },
  {
    id: 'causation',
    name: 'Causation',
    category: 'Negligence',
    rule: 'D\'s conduct must be both the actual (but-for) and proximate (legal) cause of P\'s harm.',
    elements: ['Actual cause (but-for)', 'Proximate cause (foreseeability)'],
    mnemonic: 'Causation = Connection (actual + proximate)',
    keyPoints: [
      'But-for: "But for D\'s conduct, P wouldn\'t be injured"',
      'Substantial factor: Use when multiple sufficient causes',
      'Proximate cause: Was the harm foreseeable?',
      'Intervening causes: Foreseeable = no break; Superseding = breaks chain',
      'Eggshell plaintiff: Take victim as you find them'
    ],
    defenses: ['Not the but-for cause', 'Superseding cause'],
    cases: [
      { name: 'Summers v. Tice', year: 1948, rule: 'Burden shifts when both negligent, one caused harm' },
      { name: 'Palsgraf', year: 1928, rule: 'Andrews dissent: Direct causation' }
    ]
  },
  {
    id: 'damages',
    name: 'Damages',
    category: 'Negligence',
    rule: 'P must prove actual damages — physical injury or property damage.',
    elements: ['Compensatory (economic + non-economic)', 'Punitive (rare in negligence)'],
    mnemonic: 'Damages = Dollar signs',
    keyPoints: [
      'Economic: Medical bills, lost wages, property damage',
      'Non-economic: Pain and suffering, emotional distress',
      'Collateral source rule: Benefits from third parties don\'t reduce D\'s liability',
      'Mitigation: P must take reasonable steps to minimize harm'
    ],
    defenses: ['No actual damages', 'Failure to mitigate'],
    cases: []
  },
  {
    id: 'defenses',
    name: 'Negligence Defenses',
    category: 'Negligence',
    rule: 'Defenses that reduce or eliminate D\'s liability.',
    elements: ['Contributory negligence', 'Comparative negligence', 'Assumption of risk'],
    mnemonic: 'Defenses = Decrease damages',
    keyPoints: [
      'Contributory (minority): Any P fault = complete bar',
      'Pure comparative: P recovers reduced by % fault',
      'Modified comparative: P barred if 50%+ at fault',
      'Express assumption of risk: Valid waiver',
      'Implied assumption: P knew risk and voluntarily encountered it'
    ],
    defenses: [],
    cases: [
      { name: 'Li v. Yellow Cab', year: 1975, rule: 'California adopts comparative negligence' }
    ]
  },
  {
    id: 'strict-liability',
    name: 'Strict Liability',
    category: 'Strict Liability',
    rule: 'Liability without fault for certain activities.',
    elements: ['Abnormally dangerous activity OR wild animal', 'Causation', 'Type of harm within risk'],
    mnemonic: 'Strict = Scary activities',
    keyPoints: [
      'Wild animals: Strictly liable for harm (domesticated = only if known dangerous propensity)',
      'Abnormally dangerous: High risk, can\'t be eliminated with reasonable care, uncommon in area',
      'No contributory negligence defense (but assumption of risk works)'
    ],
    defenses: ['Assumption of risk'],
    cases: [
      { name: 'Rylands v. Fletcher', year: 1868, rule: 'Strict liability for escaping dangerous things' }
    ]
  },
  {
    id: 'products-liability',
    name: 'Products Liability',
    category: 'Strict Liability',
    rule: 'Manufacturer/seller strictly liable for defective products causing harm.',
    elements: ['Product defect', 'D in chain of distribution', 'No substantial alteration', 'Proximate cause', 'Damages'],
    mnemonic: 'Products = Problems (3 types of defects)',
    keyPoints: [
      'Manufacturing defect: Product differs from intended design',
      'Design defect: Risk-utility test OR consumer expectations test',
      'Warning defect: Inadequate instructions/warnings',
      'All commercial sellers liable (not casual sellers)',
      'Privity not required (MacPherson)'
    ],
    defenses: ['Assumption of risk', 'Product misuse (unforeseeable)', 'Substantial alteration'],
    cases: [
      { name: 'MacPherson v. Buick', year: 1916, rule: 'Privity not required' },
      { name: 'Greenman v. Yuba Power', year: 1963, rule: 'Strict liability for defective products' }
    ]
  },
  {
    id: 'defamation',
    name: 'Defamation',
    category: 'Dignitary Torts',
    rule: 'False statement of fact, published to third party, damaging reputation.',
    elements: ['Defamatory statement', 'Of and concerning P', 'Publication', 'Damages', '(Fault if constitutional)'],
    mnemonic: 'Defamation = Damaging statements',
    keyPoints: [
      'Libel = written (damages presumed)',
      'Slander = spoken (special damages required, unless slander per se)',
      'Slander per se: Loathsome disease, business/profession, serious crime, sexual misconduct',
      'Public figures: Must prove actual malice (knowledge of falsity or reckless disregard)',
      'Private figures: Must prove negligence'
    ],
    defenses: ['Truth (complete defense)', 'Privilege (absolute/qualified)', 'Opinion'],
    cases: [
      { name: 'NYT v. Sullivan', year: 1964, rule: 'Public officials must prove actual malice' }
    ]
  },
  {
    id: 'privacy',
    name: 'Privacy Torts',
    category: 'Dignitary Torts',
    rule: 'Four distinct torts protecting privacy interests.',
    elements: ['Intrusion', 'Public disclosure', 'False light', 'Appropriation'],
    mnemonic: 'Privacy = 4 ways to violate (I-PUB-FALSE-APP)',
    keyPoints: [
      'Intrusion: Invading P\'s seclusion, highly offensive',
      'Public disclosure: Publishing private facts, highly offensive, not newsworthy',
      'False light: Publishing false impression, highly offensive (like defamation)',
      'Appropriation: Using P\'s name/likeness for commercial benefit'
    ],
    defenses: ['Consent', 'Newsworthiness', 'First Amendment'],
    cases: []
  },
  {
    id: 'vicarious',
    name: 'Vicarious Liability',
    category: 'Multiple Defendants',
    rule: 'Liability imposed on one party for torts of another.',
    elements: ['Respondeat superior', 'Independent contractor exceptions', 'Joint venture'],
    mnemonic: 'Vicarious = Vicariously liable',
    keyPoints: [
      'Respondeat superior: Employer liable for employee acting within scope of employment',
      'Scope: Type of work hired to do, during work time/place, serving employer\'s interests',
      'Frolic (personal business) vs. Detour (minor deviation)',
      'Independent contractors: Generally no liability UNLESS inherently dangerous activity or non-delegable duty',
      'Intentional torts: Included if foreseeable or serving employer'
    ],
    defenses: ['Outside scope of employment', 'Independent contractor', 'Frolic'],
    cases: []
  }
];

export default function TortsPage() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const next = new Set(expanded);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpanded(next);
  };

  const categories = [...new Set(topics.map(t => t.category))];

  return (
    <div className="min-h-screen bg-[#0d0d12] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0d0d12]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="text-white/50 hover:text-white">← Back</Link>
          <span className="text-white/20">|</span>
          <span className="text-2xl">⚖️</span>
          <h1 className="text-xl font-semibold">Torts</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {categories.map(category => (
          <section key={category} className="mb-10">
            <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">{category}</h2>
            <div className="space-y-3">
              {topics.filter(t => t.category === category).map(topic => (
                <div key={topic.id} className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                  {/* Topic Header */}
                  <button
                    onClick={() => toggle(topic.id)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition"
                  >
                    <div>
                      <h3 className="font-semibold">{topic.name}</h3>
                      <p className="text-sm text-white/50 mt-0.5">{topic.rule}</p>
                    </div>
                    <span className="text-xl text-white/30">{expanded.has(topic.id) ? '−' : '+'}</span>
                  </button>

                  {/* Expanded Content */}
                  {expanded.has(topic.id) && (
                    <div className="px-4 pb-4 border-t border-white/10 space-y-4">
                      {/* Elements */}
                      <div className="pt-4">
                        <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Elements</h4>
                        <div className="flex flex-wrap gap-2">
                          {topic.elements.map((el, i) => (
                            <span key={i} className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-lg text-sm">{el}</span>
                          ))}
                        </div>
                      </div>

                      {/* Mnemonic */}
                      {topic.mnemonic && (
                        <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                          <span className="text-purple-400 text-sm font-medium">🧠 </span>
                          <span className="text-purple-300 text-sm">{topic.mnemonic}</span>
                        </div>
                      )}

                      {/* Key Points */}
                      <div>
                        <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">Key Points</h4>
                        <ul className="space-y-1.5 text-sm text-white/80">
                          {topic.keyPoints.map((point, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-amber-400">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Defenses */}
                      {topic.defenses.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Defenses</h4>
                          <div className="flex flex-wrap gap-2">
                            {topic.defenses.map((def, i) => (
                              <span key={i} className="px-2.5 py-1 bg-green-500/10 text-green-300 rounded text-sm">{def}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Cases */}
                      {topic.cases.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Landmark Cases</h4>
                          <div className="space-y-2">
                            {topic.cases.map((c, i) => (
                              <div key={i} className="p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                                <span className="font-medium text-white">{c.name}</span>
                                <span className="text-white/40 text-sm"> ({c.year})</span>
                                <p className="text-sm text-white/60 mt-1">{c.rule}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
