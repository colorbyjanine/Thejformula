'use client';

import { useState, useEffect } from 'react';

// ============== COMPREHENSIVE BAR PREP DATA ==============

const subjects = [
  {
    id: 'torts',
    name: 'Torts',
    emoji: '⚖️',
    color: '#ef4444',
    mbe: true,
    essay: true,
    weight: 'HIGH',
    description: 'Civil wrongs — negligence, intentional torts, strict liability',
    topics: [
      {
        id: 'battery',
        name: 'Battery',
        category: 'Intentional Torts',
        rule: 'Battery is the INTENTIONAL infliction of a HARMFUL OR OFFENSIVE CONTACT with the person of another.',
        elements: [
          'Act by defendant',
          'Intent to cause contact (purpose OR substantial certainty)',
          'Harmful or offensive contact results',
          'Causation'
        ],
        keyPoints: [
          'Intent to contact is enough — no need to intend harm',
          'Contact with anything connected to P counts (hat, purse, cane)',
          'P need not be aware (can batter unconscious person)',
          'Transferred intent applies across assault, battery, false imprisonment, trespass'
        ],
        examples: [
          { scenario: 'D punches P in the face', result: 'Battery ✓', why: 'Harmful contact intended' },
          { scenario: 'D spits on P', result: 'Battery ✓', why: 'Offensive contact' },
          { scenario: 'D pulls chair as P sits', result: 'Battery ✓', why: 'Substantial certainty of contact (Garratt v. Dailey)' },
          { scenario: 'Crowded subway bump', result: 'No battery', why: 'No intent; implied consent to ordinary contact' }
        ],
        defenses: ['Consent', 'Self-defense', 'Defense of others', 'Defense of property (reasonable, non-deadly force)'],
        mnemonic: '🧠 Battery = Bad Touch (requires CONTACT)',
        cases: [
          { name: 'Vosburg v. Putney (1891)', rule: 'Intent to contact sufficient; eggshell plaintiff rule applies' },
          { name: 'Garratt v. Dailey (1955)', rule: 'Substantial certainty = intent, even for children' }
        ],
        essayTip: 'Always check for transferred intent when D hits wrong person',
        mbeTip: 'Watch for "substantial certainty" — D knew contact was virtually certain'
      },
      {
        id: 'assault',
        name: 'Assault',
        category: 'Intentional Torts',
        rule: 'Assault is the INTENTIONAL creation of a REASONABLE APPREHENSION of IMMINENT harmful or offensive contact.',
        elements: [
          'Act by defendant',
          'Intent to cause apprehension',
          'Reasonable apprehension by plaintiff',
          'Of IMMINENT harmful/offensive contact'
        ],
        keyPoints: [
          'NO contact required — that\'s battery',
          'Words alone usually insufficient (need overt act)',
          'Words can negate assault ("I\'d hit you if I weren\'t so tired")',
          'P must be AWARE of the threat',
          'Apparent ability sufficient (unloaded gun still assault)',
          'IMMINENT = immediate, no significant delay'
        ],
        examples: [
          { scenario: 'D swings at P but misses', result: 'Assault ✓', why: 'Reasonable apprehension of contact' },
          { scenario: 'D points unloaded gun at P', result: 'Assault ✓', why: 'Apparent ability sufficient' },
          { scenario: '"I\'ll kill you next week"', result: 'No assault', why: 'Not imminent' },
          { scenario: 'D shakes fist at blind P', result: 'No assault', why: 'P not aware, no apprehension' }
        ],
        defenses: ['Consent', 'Self-defense'],
        mnemonic: '🧠 Assault = Apprehension (fear of touch, no actual touch)',
        cases: [],
        essayTip: 'Pair with battery analysis — assault often precedes battery',
        mbeTip: 'Future threats = NOT assault (not imminent)'
      },
      {
        id: 'false-imprisonment',
        name: 'False Imprisonment',
        category: 'Intentional Torts',
        rule: 'False imprisonment is the INTENTIONAL CONFINEMENT of another within BOUNDED AREA, without consent or legal authority.',
        elements: [
          'Act confining/restraining plaintiff',
          'Intent to confine',
          'Plaintiff confined to bounded area',
          'Plaintiff aware OR harmed by confinement',
          'No reasonable means of escape'
        ],
        keyPoints: [
          'Bounded area = no way out in ANY direction',
          'One exit open = no false imprisonment',
          'Confinement by: physical barriers, threats, invalid legal authority',
          'Moral pressure or future threats NOT sufficient',
          'Shopkeeper\'s privilege: May detain suspected shoplifters reasonably'
        ],
        examples: [
          { scenario: 'D locks P in room with no exit', result: 'FI ✓', why: 'Bounded area' },
          { scenario: '"Stay or I\'ll break your legs"', result: 'FI ✓', why: 'Threat confines' },
          { scenario: 'Store detains shoplifter 15 min', result: 'Privileged', why: 'Shopkeeper\'s privilege' }
        ],
        defenses: ['Consent', 'Shopkeeper\'s privilege', 'Legal authority'],
        mnemonic: '🧠 FI = Four walls (bounded, no way out)',
        cases: [],
        essayTip: 'Check for ANY exit route; look for shopkeeper\'s privilege in retail settings',
        mbeTip: 'Awareness OR harm required — sleeping P needs harm'
      },
      {
        id: 'iied',
        name: 'Intentional Infliction of Emotional Distress',
        category: 'Intentional Torts',
        rule: 'IIED requires EXTREME AND OUTRAGEOUS conduct causing SEVERE EMOTIONAL DISTRESS.',
        elements: [
          'Extreme and outrageous conduct',
          'Intent or recklessness',
          'Causation',
          'Severe emotional distress'
        ],
        keyPoints: [
          'Outrageous = exceeds all bounds of civilized society',
          'Mere insults NOT sufficient',
          'Higher protection for vulnerable persons, abuse of power',
          'Severe = substantial, more than ordinary upset',
          'Physical manifestation NOT required (most jurisdictions)',
          'Third party can recover if: present, D knew, closely related'
        ],
        examples: [
          { scenario: 'D falsely tells P her child died', result: 'IIED ✓', why: 'Outrageous cruel hoax' },
          { scenario: 'D calls P an idiot at work', result: 'No IIED', why: 'Mere insult' },
          { scenario: 'Debt collector daily threatens elderly widow', result: 'IIED ✓', why: 'Abuse of power, vulnerable victim' }
        ],
        defenses: [],
        mnemonic: '🧠 IIED = Incredibly Insane Extreme Deeds',
        cases: [],
        essayTip: 'Look for power imbalance or known vulnerability',
        mbeTip: 'Insults alone rarely qualify — need truly outrageous conduct'
      },
      {
        id: 'negligence-overview',
        name: 'Negligence Overview',
        category: 'Negligence',
        rule: 'Negligence is conduct falling below the standard of care, causing unreasonable risk of harm.',
        elements: [
          '1. DUTY — owed to foreseeable plaintiffs',
          '2. BREACH — fell below standard of care',
          '3. CAUSATION — actual + proximate',
          '4. DAMAGES — actual harm'
        ],
        keyPoints: [
          'Must prove ALL four elements',
          'Objective standard — reasonable person',
          'Different from intentional torts — no intent required'
        ],
        examples: [],
        defenses: [],
        mnemonic: '🧠 D-B-C-D: Duty, Breach, Causation, Damages',
        cases: [],
        essayTip: 'Analyze each element separately — don\'t skip any',
        mbeTip: 'Causation has two parts (actual + proximate) — address both'
      },
      {
        id: 'duty',
        name: 'Duty',
        category: 'Negligence',
        rule: 'Defendant owes duty to all FORESEEABLE PLAINTIFFS who might be injured.',
        elements: [
          'Foreseeable plaintiff (zone of danger)',
          'Foreseeable type of harm'
        ],
        keyPoints: [
          'CARDOZO (majority): Duty only to foreseeable Ps in zone of danger',
          'ANDREWS (minority): Duty to world; proximate cause limits',
          'General rule: NO duty to rescue strangers',
          'Exceptions: Special relationship, D created peril, D undertook to help'
        ],
        landowners: [
          { status: 'Trespasser', duty: 'No duty except: no willful harm, warn discovered/anticipated trespassers, attractive nuisance for children' },
          { status: 'Licensee (social guest)', duty: 'Warn of KNOWN hidden dangers' },
          { status: 'Invitee (business)', duty: 'Warn + reasonably DISCOVER dangers' }
        ],
        examples: [],
        defenses: [],
        mnemonic: '🧠 T-L-I: Trespassers (least), Licensees, Invitees (most)',
        cases: [
          { name: 'Palsgraf v. Long Island RR (1928)', rule: 'Duty only to foreseeable plaintiffs — P outside zone = no duty' }
        ],
        essayTip: 'For premises liability, identify plaintiff\'s status FIRST',
        mbeTip: 'Check for special relationships creating affirmative duties'
      },
      {
        id: 'breach',
        name: 'Breach',
        category: 'Negligence',
        rule: 'Breach is failure to exercise care that a REASONABLE PERSON would under the circumstances.',
        elements: [
          'Standard of care (what was required)',
          'D\'s conduct fell below that standard'
        ],
        standards: [
          { type: 'Reasonable Person', rule: 'Objective. Physical disabilities considered; mental disabilities NOT' },
          { type: 'Professionals', rule: 'Standard of reasonably competent professional. Specialists → specialist standard' },
          { type: 'Children', rule: 'Child of similar age/intelligence. Exception: Adult activity = adult standard' }
        ],
        provingBreach: [
          { method: 'Hand Formula', rule: 'B < P × L. Breach if burden of precaution < probability × loss' },
          { method: 'Res Ipsa Loquitur', rule: '(1) Doesn\'t normally happen w/o negligence, (2) D had exclusive control, (3) P didn\'t contribute. Creates inference of negligence.' },
          { method: 'Negligence Per Se', rule: 'Violating statute = breach IF P in protected class AND harm type statute prevents' }
        ],
        examples: [],
        defenses: [],
        mnemonic: '🧠 RIL = "Really, It\'s Logical" — accident speaks for itself',
        cases: [
          { name: 'United States v. Carroll Towing (1947)', rule: 'Hand Formula: B < P × L' }
        ],
        essayTip: 'Look for statutory violations → negligence per se',
        mbeTip: 'Physical disabilities = considered; mental = NOT'
      },
      {
        id: 'causation',
        name: 'Causation',
        category: 'Negligence',
        rule: 'Must prove ACTUAL CAUSE (but-for) and PROXIMATE CAUSE (foreseeability).',
        elements: [
          'ACTUAL CAUSE: "But for" D\'s conduct, harm wouldn\'t occur',
          'PROXIMATE CAUSE: Harm was foreseeable consequence'
        ],
        actualCause: [
          { test: 'But-For', rule: 'Would harm have occurred but for D\'s negligence?' },
          { test: 'Substantial Factor', rule: 'When multiple causes each sufficient. D liable if substantial factor.' },
          { test: 'Alternative Liability', rule: 'Two negligent Ds, can\'t tell which caused harm → burden shifts to Ds (Summers v. Tice)' }
        ],
        proximateCause: [
          { rule: 'Direct cause → usually satisfied' },
          { rule: 'Foreseeable intervening causes → D still liable (e.g., medical malpractice after injury)' },
          { rule: 'Superseding causes (unforeseeable) → break chain, D NOT liable' }
        ],
        keyPoints: [
          'EGGSHELL PLAINTIFF: Take victim as you find them — liable for full injury even if unusually severe'
        ],
        examples: [],
        defenses: [],
        mnemonic: '🧠 Actual = "A" for "Actually caused?" | Proximate = "P" for "Predictable?"',
        cases: [
          { name: 'Palsgraf (1928)', rule: 'Unforeseeable P = no proximate cause' },
          { name: 'Summers v. Tice (1948)', rule: 'Alternative liability — burden shifts when can\'t identify cause' }
        ],
        essayTip: 'Analyze BOTH actual and proximate cause separately',
        mbeTip: 'Intervening cause: Was it foreseeable?'
      },
      {
        id: 'damages',
        name: 'Damages',
        category: 'Negligence',
        rule: 'Plaintiff must prove ACTUAL DAMAGES — physical injury or property damage.',
        types: [
          { type: 'Compensatory', rule: 'Make P whole — medical, lost wages, pain/suffering' },
          { type: 'Nominal', rule: 'NOT available in negligence (unlike intentional torts)' },
          { type: 'Punitive', rule: 'Only for reckless/willful misconduct' }
        ],
        keyPoints: [
          'Negligence REQUIRES actual damages — no "near miss" recovery',
          'Economic loss rule: Generally no pure economic loss without physical harm',
          'Mitigation: P must minimize damages'
        ],
        examples: [],
        defenses: [],
        mnemonic: '',
        cases: [],
        essayTip: 'Remember: Actual harm REQUIRED for negligence',
        mbeTip: 'Near miss with no injury = no negligence claim'
      },
      {
        id: 'defenses-negligence',
        name: 'Negligence Defenses',
        category: 'Defenses',
        rule: 'Defenses reduce or eliminate plaintiff\'s recovery.',
        elements: [],
        defenseTypes: [
          { 
            name: 'Contributory Negligence', 
            rule: 'ANY negligence by P = COMPLETE BAR (traditional rule)',
            note: 'Only used in: MD, VA, NC, DC, AL'
          },
          { 
            name: 'Pure Comparative', 
            rule: 'P recovers minus % of fault. Can recover even if 99% at fault.',
            note: 'States: CA, NY, FL'
          },
          { 
            name: 'Modified Comparative', 
            rule: 'P recovers only if fault < 50%/51%. If P is 50%+ at fault = NO recovery.',
            note: 'Most states'
          },
          { 
            name: 'Assumption of Risk', 
            rule: 'P voluntarily assumed KNOWN risk. Express (waiver) or implied (sports).',
            note: 'Often merged into comparative fault'
          }
        ],
        keyPoints: [
          'California uses PURE comparative negligence',
          'Last Clear Chance: Exception to contributory negligence'
        ],
        examples: [],
        defenses: [],
        mnemonic: '',
        cases: [],
        essayTip: 'Check which system the question uses',
        mbeTip: 'CA = pure comparative. Know the difference.'
      },
      {
        id: 'strict-liability',
        name: 'Strict Liability',
        category: 'Strict Liability',
        rule: 'Liability WITHOUT FAULT — D liable regardless of care exercised.',
        applies: [
          'Wild animals',
          'Abnormally dangerous activities',
          'Products liability'
        ],
        abnormallyDangerous: [
          'High risk that can\'t be eliminated with due care',
          'Activity not common in community',
          'Examples: Blasting, storing toxic chemicals, fumigation'
        ],
        keyPoints: [
          'No need to prove negligence',
          'D\'s utmost care NOT a defense',
          'Comparative fault may still apply'
        ],
        examples: [],
        defenses: [],
        mnemonic: '',
        cases: [
          { name: 'Rylands v. Fletcher (1868)', rule: 'Strictly liable if dangerous thing escapes and causes damage' }
        ],
        essayTip: 'Check if activity qualifies as abnormally dangerous',
        mbeTip: 'Driving is NOT abnormally dangerous (common activity)'
      },
      {
        id: 'products-liability',
        name: 'Products Liability',
        category: 'Strict Liability',
        rule: 'Manufacturers/sellers strictly liable for DEFECTIVE PRODUCTS causing harm.',
        defectTypes: [
          { 
            type: 'Manufacturing Defect', 
            rule: 'Product DIFFERS from intended design — something went wrong in production',
            test: 'Product different from others in same line'
          },
          { 
            type: 'Design Defect', 
            rule: 'Design ITSELF is unreasonably dangerous',
            tests: ['Consumer expectations: More dangerous than ordinary consumer expects', 'Risk-utility: Risk > benefits; reasonable alternative existed']
          },
          { 
            type: 'Failure to Warn', 
            rule: 'Inadequate warnings or instructions',
            note: 'Learned intermediary: For Rx drugs, warning to doctor may suffice'
          }
        ],
        defendants: ['Manufacturers', 'Distributors', 'Retailers', 'Anyone in distribution chain'],
        defenses: ['Comparative fault', 'Unforeseeable misuse', 'Product alteration after leaving D'],
        examples: [],
        mnemonic: '🧠 Products: M-D-W = Manufacturing, Design, Warning',
        cases: [
          { name: 'MacPherson v. Buick (1916)', rule: 'Manufacturer owes duty to ultimate consumer (no privity required)' },
          { name: 'Greenman v. Yuba (1963)', rule: 'Strict products liability established' }
        ],
        essayTip: 'Identify which TYPE of defect is alleged',
        mbeTip: 'Manufacturing = one product different; Design = all products defective'
      },
      {
        id: 'defamation',
        name: 'Defamation',
        category: 'Dignitary Torts',
        rule: 'FALSE STATEMENT of FACT, published to third party, damaging reputation.',
        elements: [
          'Defamatory statement',
          'False statement of FACT (not opinion)',
          '"Of and concerning" plaintiff',
          'Publication to third party',
          'Fault (varies by plaintiff type)',
          'Damages (varies by libel/slander)'
        ],
        types: [
          { type: 'Libel', rule: 'Written/recorded. Damages PRESUMED.' },
          { type: 'Slander', rule: 'Spoken. Must prove SPECIAL DAMAGES unless slander per se.' }
        ],
        slanderPerSe: [
          'Business/profession',
          'Serious crime',
          'Loathsome disease',
          'Sexual misconduct'
        ],
        faultStandards: [
          { plaintiff: 'Public official/figure', standard: 'ACTUAL MALICE — knowledge of falsity OR reckless disregard (NYT v. Sullivan)' },
          { plaintiff: 'Private figure, public concern', standard: 'At least NEGLIGENCE' },
          { plaintiff: 'Private figure, private concern', standard: 'Some states allow strict liability' }
        ],
        defenses: ['Truth (complete defense)', 'Absolute privilege (judicial/legislative)', 'Qualified privilege', 'Opinion'],
        examples: [],
        mnemonic: '🧠 Defamation = Damage to Fame',
        cases: [
          { name: 'NYT v. Sullivan (1964)', rule: 'Public officials must prove actual malice' }
        ],
        essayTip: 'First: libel or slander? Then: public or private figure?',
        mbeTip: 'Public figures need actual malice — very hard to prove'
      },
      {
        id: 'vicarious-liability',
        name: 'Vicarious Liability',
        category: 'Vicarious Liability',
        rule: 'Employer liable for employee\'s torts WITHIN SCOPE OF EMPLOYMENT.',
        elements: [
          'Employer-employee relationship',
          'Acting within SCOPE of employment',
          'Conduct of the kind hired to perform'
        ],
        keyPoints: [
          'FROLIC (major departure) = employer NOT liable',
          'DETOUR (minor deviation) = employer liable',
          'Independent contractors: Generally employer NOT liable',
          'Intentional torts: Usually outside scope UNLESS force inherent in job'
        ],
        examples: [
          { scenario: 'Driver hits someone during delivery', result: 'Employer liable', why: 'Within scope' },
          { scenario: '50-mile detour for personal errand', result: 'Employer NOT liable', why: 'Frolic' },
          { scenario: 'Bouncer punches patron', result: 'Employer liable', why: 'Force is part of job' }
        ],
        defenses: [],
        mnemonic: '🧠 Frolic = Far off; Detour = Deviation okay',
        cases: [],
        essayTip: 'First: Employee or independent contractor? Then: within scope?',
        mbeTip: 'Frolic breaks liability; detour doesn\'t'
      }
    ]
  },
  {
    id: 'contracts',
    name: 'Contracts',
    emoji: '📝',
    color: '#3b82f6',
    mbe: true,
    essay: true,
    weight: 'HIGH',
    description: 'Formation, performance, breach, and remedies',
    topics: [
      {
        id: 'formation',
        name: 'Formation',
        category: 'Formation',
        rule: 'Contract requires MUTUAL ASSENT (offer + acceptance) + CONSIDERATION.',
        elements: [
          'Valid offer',
          'Valid acceptance',
          'Consideration',
          'No defenses to formation'
        ],
        keyPoints: [],
        examples: [],
        defenses: [],
        mnemonic: '🧠 Formation = O + A + C (Offer, Acceptance, Consideration)',
        cases: [],
        essayTip: 'Check each element separately',
        mbeTip: 'Missing any element = no contract'
      },
      {
        id: 'offer',
        name: 'Offer',
        category: 'Formation',
        rule: 'Offer is MANIFESTATION of willingness to bargain, creating POWER OF ACCEPTANCE.',
        elements: [
          'Intent to be bound',
          'Definite terms',
          'Communication to offeree'
        ],
        termination: [
          'Rejection/counter-offer',
          'Lapse of time',
          'Revocation (before acceptance)',
          'Death/incapacity of offeror',
          'Destruction of subject matter'
        ],
        keyPoints: [
          'Ads usually NOT offers (invitations to negotiate)',
          'Exception: Specific ad with quantity can be offer (Lefkowitz)',
          'Option contracts: Offer irrevocable if supported by consideration',
          'UCC Firm Offer: Merchant\'s written signed offer stays open up to 3 months'
        ],
        examples: [],
        defenses: [],
        mnemonic: '',
        cases: [
          { name: 'Lefkowitz v. Great Minneapolis (1957)', rule: 'Specific ad with quantity = offer' }
        ],
        essayTip: 'Check if offer has been terminated before acceptance',
        mbeTip: 'Ads = usually not offers. Look for specificity.'
      },
      {
        id: 'acceptance',
        name: 'Acceptance',
        category: 'Formation',
        rule: 'Acceptance is manifestation of ASSENT to terms of offer.',
        rules: [
          { rule: 'Mirror Image (Common Law)', desc: 'Acceptance must match offer exactly. Any change = counter-offer.' },
          { rule: 'UCC 2-207', desc: 'Additional terms don\'t prevent contract between merchants; become part unless material or objected to.' },
          { rule: 'Mailbox Rule', desc: 'Acceptance effective when SENT (if proper manner). Rejection effective when RECEIVED.' },
          { rule: 'Silence', desc: 'Generally NOT acceptance unless prior course of dealing or retained benefit.' }
        ],
        keyPoints: [
          'Unilateral contract: Accepted by PERFORMANCE',
          'Bilateral contract: Accepted by PROMISE'
        ],
        examples: [],
        defenses: [],
        mnemonic: '🧠 Mailbox Rule: Acceptance = Sent; Rejection = Received',
        cases: [],
        essayTip: 'UCC 2-207 is heavily tested — additional terms between merchants',
        mbeTip: 'Mailbox rule only applies to acceptance, not rejection'
      },
      {
        id: 'consideration',
        name: 'Consideration',
        category: 'Formation',
        rule: 'Consideration is BARGAINED-FOR EXCHANGE of legal value.',
        elements: [
          'Something of legal value (benefit or detriment)',
          'Bargained for (given in exchange)'
        ],
        notConsideration: [
          'Past consideration (already done)',
          'Pre-existing duty',
          'Illusory promises',
          'Gifts (no bargained exchange)'
        ],
        substitutes: [
          { name: 'Promissory Estoppel', rule: 'Promise + foreseeable reliance + actual reliance + injustice without enforcement' },
          { name: 'Moral Obligation + Material Benefit', rule: 'Some courts enforce promise to pay for past benefit received' }
        ],
        keyPoints: [
          'Courts don\'t inquire into ADEQUACY',
          'Modification: Common law requires new consideration; UCC does NOT'
        ],
        examples: [],
        defenses: [],
        mnemonic: '🧠 Consideration = Something for Something (bargain)',
        cases: [
          { name: 'Hamer v. Sidway (1891)', rule: 'Forbearance from legal right = valid consideration' }
        ],
        essayTip: 'If no consideration, check for promissory estoppel',
        mbeTip: 'Past consideration = NOT consideration'
      },
      {
        id: 'statute-of-frauds',
        name: 'Statute of Frauds',
        category: 'Defenses',
        rule: 'Certain contracts MUST be in writing to be enforceable.',
        contracts: [
          'M — Marriage (promises in consideration of marriage)',
          'Y — Year (cannot be performed within 1 year)',
          'L — Land (interests in real property)',
          'E — Executor (promises to pay estate debts)',
          'G — Goods $500+ (UCC)',
          'S — Surety (answering for another\'s debt)'
        ],
        exceptions: [
          'Part performance (land)',
          'Specially manufactured goods',
          'Merchant\'s confirming memo',
          'Admission in court',
          'Promissory estoppel'
        ],
        keyPoints: [
          'Writing must: Identify parties, subject matter, essential terms, be signed by party to be charged'
        ],
        examples: [],
        defenses: [],
        mnemonic: '🧠 MY LEGS = Marriage, Year, Land, Executor, Goods, Surety',
        cases: [],
        essayTip: 'If contract falls within SOF, check for exceptions',
        mbeTip: 'Part performance for land: Payment + possession + improvements'
      },
      {
        id: 'parol-evidence',
        name: 'Parol Evidence Rule',
        category: 'Interpretation',
        rule: 'Prior/contemporaneous evidence cannot CONTRADICT integrated written agreement.',
        integration: [
          'Complete integration: All terms in writing → no outside evidence',
          'Partial integration: Some terms in writing → can ADD consistent terms, can\'t contradict'
        ],
        exceptions: [
          'Ambiguity',
          'Fraud, duress, mistake',
          'Condition precedent to effectiveness',
          'Collateral agreements',
          'Subsequent modifications'
        ],
        keyPoints: [],
        examples: [],
        defenses: [],
        mnemonic: '',
        cases: [],
        essayTip: 'Check: Is it integrated? Completely or partially?',
        mbeTip: 'Can explain ambiguous terms even in complete integration'
      },
      {
        id: 'breach',
        name: 'Breach',
        category: 'Performance',
        rule: 'Failure to perform as promised.',
        types: [
          { type: 'Material Breach', effect: 'Non-breaching party DISCHARGED; can sue for total damages' },
          { type: 'Minor Breach', effect: 'Must still perform; can sue for partial damages' },
          { type: 'Anticipatory Repudiation', effect: 'Unequivocal statement of intent not to perform before due = immediate breach' }
        ],
        substantialPerformance: [
          'Good faith effort',
          'Minor defects only',
          'Can recover contract price minus cost to fix defects',
          'NOT available for sale of goods'
        ],
        keyPoints: [],
        examples: [],
        defenses: [],
        mnemonic: '🧠 Material = Major problem; Minor = Small issue',
        cases: [
          { name: 'Jacob & Youngs v. Kent (1921)', rule: 'Substantial performance allows recovery with deduction for defects' }
        ],
        essayTip: 'Determine if breach is material or minor — affects remedies',
        mbeTip: 'Anticipatory repudiation must be unequivocal'
      },
      {
        id: 'remedies',
        name: 'Remedies',
        category: 'Remedies',
        rule: 'Contract remedies aim to put non-breaching party in position had contract been performed.',
        types: [
          { 
            type: 'Expectation Damages', 
            rule: 'Benefit of the bargain — what P expected to receive',
            limits: ['Foreseeable (Hadley v. Baxendale)', 'Certain (not speculative)', 'Unavoidable (mitigation)']
          },
          { type: 'Reliance Damages', rule: 'Out-of-pocket costs incurred in reliance on contract' },
          { type: 'Restitution', rule: 'Value of benefit conferred on D' },
          { type: 'Specific Performance', rule: 'Court orders performance; available when legal remedy inadequate (land, unique goods)' }
        ],
        keyPoints: [
          'Punitive damages NOT available in contract',
          'Consequential damages must be foreseeable'
        ],
        examples: [],
        defenses: [],
        mnemonic: '',
        cases: [
          { name: 'Hadley v. Baxendale (1854)', rule: 'Consequential damages must be foreseeable at contract formation' }
        ],
        essayTip: 'Always address foreseeability and mitigation',
        mbeTip: 'Specific performance for land and unique goods'
      }
    ]
  },
  {
    id: 'criminal',
    name: 'Criminal Law & Procedure',
    emoji: '🔒',
    color: '#8b5cf6',
    mbe: true,
    essay: true,
    weight: 'HIGH',
    description: 'Crimes, defenses, and constitutional protections',
    topics: []
  },
  {
    id: 'constitutional',
    name: 'Constitutional Law',
    emoji: '🏛️',
    color: '#f59e0b',
    mbe: true,
    essay: true,
    weight: 'HIGH',
    description: 'Federal powers, individual rights, and constitutional interpretation',
    topics: []
  },
  {
    id: 'civpro',
    name: 'Civil Procedure',
    emoji: '⚡',
    color: '#ec4899',
    mbe: true,
    essay: true,
    weight: 'HIGH',
    description: 'How civil cases move through the court system',
    topics: []
  },
  {
    id: 'evidence',
    name: 'Evidence',
    emoji: '🔍',
    color: '#10b981',
    mbe: true,
    essay: true,
    weight: 'HIGH',
    description: 'Rules governing what can be admitted in court',
    topics: []
  },
  {
    id: 'property',
    name: 'Real Property',
    emoji: '🏠',
    color: '#06b6d4',
    mbe: true,
    essay: true,
    weight: 'HIGH',
    description: 'Estates, land interests, landlord-tenant law',
    topics: []
  },
  {
    id: 'community',
    name: 'Community Property',
    emoji: '💍',
    color: '#f43f5e',
    mbe: false,
    essay: true,
    weight: 'MEDIUM',
    description: 'California-specific marital property rules',
    topics: [],
    caSpecific: true
  },
  {
    id: 'wills',
    name: 'Wills & Succession',
    emoji: '📜',
    color: '#84cc16',
    mbe: false,
    essay: true,
    weight: 'MEDIUM',
    description: 'California-specific testamentary rules',
    topics: [],
    caSpecific: true
  },
  {
    id: 'trusts',
    name: 'Trusts',
    emoji: '🏦',
    color: '#14b8a6',
    mbe: false,
    essay: true,
    weight: 'MEDIUM',
    description: 'Trust creation, duties, and administration',
    topics: []
  },
  {
    id: 'business',
    name: 'Business Associations',
    emoji: '🏢',
    color: '#6366f1',
    mbe: false,
    essay: true,
    weight: 'MEDIUM',
    description: 'Agency, partnerships, corporations, LLCs',
    topics: []
  },
  {
    id: 'remedies',
    name: 'Remedies',
    emoji: '💰',
    color: '#eab308',
    mbe: false,
    essay: true,
    weight: 'MEDIUM',
    description: 'Legal and equitable remedies',
    topics: []
  },
  {
    id: 'profres',
    name: 'Professional Responsibility',
    emoji: '⚖️',
    color: '#a855f7',
    mbe: false,
    essay: true,
    weight: 'MEDIUM',
    description: 'Attorney ethics and professional conduct',
    topics: [],
    caSpecific: true
  }
];

const STORAGE_KEY = 'janine-bar-prep-v2';

export default function BarPrepApp() {
  const [selectedSubject, setSelectedSubject] = useState<typeof subjects[0] | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  const saveProgress = (subjectId: string, topicId: string) => {
    const key = `${subjectId}-${topicId}`;
    const newProgress = { ...progress, [key]: 100 };
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  // Days until July 2026 bar
  const daysUntil = Math.ceil((new Date('2026-07-28').getTime() - Date.now()) / 86400000);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-72' : 'w-0'} bg-white border-r border-gray-200 flex flex-col transition-all overflow-hidden`}>
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">Janine's Bar Prep</h1>
          <p className="text-sm text-gray-500 mt-1">California Bar 2026</p>
          <div className="mt-4 flex gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#2d5a45]">{daysUntil}</p>
              <p className="text-xs text-gray-500">days left</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#c9a962]">1,390</p>
              <p className="text-xs text-gray-500">to pass</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Subjects</p>
          <div className="space-y-1">
            {subjects.map(subject => (
              <button
                key={subject.id}
                onClick={() => {
                  setSelectedSubject(subject);
                  setSelectedTopic(null);
                }}
                className={`w-full nav-item flex items-center gap-3 text-left ${
                  selectedSubject?.id === subject.id ? 'active' : ''
                }`}
              >
                <span className="text-xl">{subject.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate text-sm">{subject.name}</p>
                  <div className="flex gap-1 mt-0.5">
                    {subject.mbe && <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded">MBE</span>}
                    {subject.caSpecific && <span className="text-[10px] px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded">CA</span>}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {!selectedSubject ? (
          /* Dashboard */
          <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, Janine! 👋</h1>
            <p className="text-gray-600 mb-8">Let's crush the California Bar Exam.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card p-6">
                <p className="text-4xl font-bold text-[#2d5a45]">{daysUntil}</p>
                <p className="text-gray-500">Days until exam</p>
              </div>
              <div className="card p-6">
                <p className="text-4xl font-bold text-[#c9a962]">13</p>
                <p className="text-gray-500">Subjects to master</p>
              </div>
              <div className="card p-6">
                <p className="text-4xl font-bold text-[#ef4444]">34%</p>
                <p className="text-gray-500">Pass rate (tough!)</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Start Studying</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map(subject => (
                <button
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject)}
                  className="card card-hover p-5 text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{subject.emoji}</span>
                    <div>
                      <h3 className="font-semibold">{subject.name}</h3>
                      <div className="flex gap-1">
                        {subject.mbe && <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded">MBE</span>}
                        {subject.essay && <span className="text-[10px] px-1.5 py-0.5 bg-purple-100 text-purple-600 rounded">Essay</span>}
                        {subject.caSpecific && <span className="text-[10px] px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded">CA</span>}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{subject.description}</p>
                  <p className="text-sm text-gray-400 mt-2">{subject.topics.length} topics</p>
                </button>
              ))}
            </div>
          </div>
        ) : !selectedTopic ? (
          /* Subject View */
          <div className="p-8">
            <button 
              onClick={() => setSelectedSubject(null)}
              className="text-gray-500 hover:text-gray-900 mb-4 flex items-center gap-2"
            >
              ← All Subjects
            </button>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{selectedSubject.emoji}</span>
              <div>
                <h1 className="text-3xl font-bold">{selectedSubject.name}</h1>
                <p className="text-gray-500">{selectedSubject.description}</p>
                <div className="flex gap-2 mt-2">
                  {selectedSubject.mbe && <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">MBE</span>}
                  {selectedSubject.essay && <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded">Essay</span>}
                  {selectedSubject.caSpecific && <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">CA Specific</span>}
                </div>
              </div>
            </div>

            {selectedSubject.topics.length === 0 ? (
              <div className="card p-8 text-center">
                <p className="text-4xl mb-4">🚧</p>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-500">I'm building detailed content for {selectedSubject.name}. Check back soon!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {/* Group by category */}
                {Array.from(new Set(selectedSubject.topics.map(t => t.category))).map(category => (
                  <div key={category} className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{category}</h3>
                    <div className="space-y-2">
                      {selectedSubject.topics.filter(t => t.category === category).map(topic => (
                        <button
                          key={topic.id}
                          onClick={() => setSelectedTopic(topic)}
                          className="card card-hover w-full p-4 text-left flex items-center justify-between"
                        >
                          <div>
                            <h4 className="font-medium">{topic.name}</h4>
                            <p className="text-sm text-gray-500 truncate max-w-lg">{topic.rule?.slice(0, 80)}...</p>
                          </div>
                          <span className="text-gray-400">→</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Topic Detail View */
          <div className="p-8 max-w-4xl mx-auto">
            <button 
              onClick={() => setSelectedTopic(null)}
              className="text-gray-500 hover:text-gray-900 mb-4 flex items-center gap-2"
            >
              ← Back to {selectedSubject.name}
            </button>

            <h1 className="text-3xl font-bold mb-2">{selectedTopic.name}</h1>
            <p className="text-gray-500 mb-6">{selectedTopic.category}</p>

            <div className="space-y-6">
              {/* Rule Statement */}
              <div className="rule-box">
                <p className="text-sm font-semibold text-white/70 mb-2">📌 RULE</p>
                <p className="text-lg">{selectedTopic.rule}</p>
              </div>

              {/* Elements */}
              {selectedTopic.elements?.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">📋 Elements</h3>
                  <div className="space-y-2">
                    {selectedTopic.elements.map((el: string, i: number) => (
                      <div key={i} className="element-box">{el}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Points */}
              {selectedTopic.keyPoints?.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">💡 Key Points</h3>
                  <ul className="space-y-2">
                    {selectedTopic.keyPoints.map((point: string, i: number) => (
                      <li key={i} className="flex gap-2 text-gray-700">
                        <span className="text-[#2d5a45]">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Examples */}
              {selectedTopic.examples?.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">📝 Examples</h3>
                  <div className="space-y-3">
                    {selectedTopic.examples.map((ex: any, i: number) => (
                      <div key={i} className="example-box">
                        <p className="font-medium text-gray-900">{ex.scenario}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          <span className={ex.result?.includes('✓') ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                            {ex.result}
                          </span>
                          {ex.why && <span className="text-gray-500"> — {ex.why}</span>}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Defenses */}
              {selectedTopic.defenses?.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🛡️ Defenses</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTopic.defenses.map((def: string, i: number) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm">{def}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Mnemonic */}
              {selectedTopic.mnemonic && (
                <div className="mnemonic-box">
                  <p className="font-semibold text-indigo-700">{selectedTopic.mnemonic}</p>
                </div>
              )}

              {/* Cases */}
              {selectedTopic.cases?.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">⚖️ Key Cases</h3>
                  <div className="space-y-3">
                    {selectedTopic.cases.map((c: any, i: number) => (
                      <div key={i} className="case-box">
                        <p className="font-semibold text-red-700">{c.name}</p>
                        <p className="text-sm text-gray-700 mt-1">{c.rule}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tips */}
              <div className="grid md:grid-cols-2 gap-4">
                {selectedTopic.essayTip && (
                  <div className="card p-4">
                    <p className="text-sm font-semibold text-purple-600 mb-1">✍️ Essay Tip</p>
                    <p className="text-sm text-gray-700">{selectedTopic.essayTip}</p>
                  </div>
                )}
                {selectedTopic.mbeTip && (
                  <div className="card p-4">
                    <p className="text-sm font-semibold text-blue-600 mb-1">📊 MBE Tip</p>
                    <p className="text-sm text-gray-700">{selectedTopic.mbeTip}</p>
                  </div>
                )}
              </div>

              {/* Mark Complete */}
              <button
                onClick={() => saveProgress(selectedSubject.id, selectedTopic.id)}
                className="w-full py-3 bg-[#2d5a45] text-white rounded-lg font-medium hover:bg-[#1e3d2f] transition-colors"
              >
                ✓ Mark as Studied
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
