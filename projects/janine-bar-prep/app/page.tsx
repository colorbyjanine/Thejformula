'use client';

import { useState } from 'react';

// ============================================================================
// COMPREHENSIVE BAR PREP CONTENT
// ============================================================================

interface CaseInfo {
  name: string;
  holding: string;
  essay?: string;
}

interface Topic {
  id: string;
  name: string;
  rule: string;
  elements?: string[];
  keyPoints: string[];
  mnemonic?: string;
  cases: CaseInfo[];
  essayTip: string;
  mbeTip: string;
}

interface Subject {
  id: string;
  name: string;
  emoji: string;
  mbe?: boolean;
  ca?: boolean;
  desc: string;
  topics: Topic[];
}

const subjectsData: Subject[] = [
  // ============================================================================
  // 1. TORTS (MBE)
  // ============================================================================
  {
    id: 'torts',
    name: 'Torts',
    emoji: '⚖️',
    mbe: true,
    desc: 'Negligence, intentional torts, strict liability',
    topics: [
      {
        id: 'battery',
        name: 'Battery',
        rule: 'Battery is an intentional act that causes harmful or offensive contact with the plaintiff\'s person.',
        elements: [
          'Act by defendant',
          'Intent to cause contact (or apprehension of contact)',
          'Harmful or offensive contact',
          'Contact with plaintiff\'s person',
          'Causation'
        ],
        keyPoints: [
          'Intent can be transferred (transferred intent doctrine)',
          'Contact can be with anything connected to plaintiff (e.g., plate in hand)',
          '"Offensive" = would offend a reasonable person\'s sense of dignity',
          'Plaintiff need not be aware of contact (e.g., unconscious patient)',
          'No requirement of physical harm—dignitary harm suffices'
        ],
        mnemonic: '"ICHO" - Intent, Contact, Harmful/Offensive',
        cases: [
          { 
            name: 'Garratt v. Dailey', 
            holding: 'Intent satisfied if D knew with substantial certainty contact would occur (5-year-old pulling chair)',
            essay: `BATTERY ESSAY - Garratt v. Dailey Analysis

FACTS: Five-year-old Brian Dailey pulled a chair out from under Ruth Garratt as she was sitting down, causing her to fall and fracture her hip.

ISSUE: Does a minor possess the intent necessary for battery when he knows with substantial certainty that harmful contact will result from his actions?

RULE: Battery is an intentional act that causes harmful or offensive contact with another person. Intent is satisfied if the defendant knew with substantial certainty that harmful or offensive contact would result from his act.

APPLICATION:
Here, Brian pulled the chair away as Mrs. Garratt was in the process of sitting down. The key question is whether Brian, despite his young age, possessed the requisite intent.

Intent for battery does not require a desire to cause harm—it only requires that the defendant knew with substantial certainty that harmful contact would occur. A five-year-old, while young, is capable of understanding that pulling a chair from under a person who is sitting will cause them to fall.

Brian's act was volitional—he deliberately moved the chair. Given that Mrs. Garratt was already lowering herself, Brian knew with substantial certainty she would hit the ground. The fact that he may not have intended to injure her specifically is irrelevant; he intended the contact (her body hitting the ground).

The contact was clearly harmful—Mrs. Garratt fractured her hip. Under the eggshell skull rule, Brian takes his victim as he finds her.

CONCLUSION: Brian committed battery because he acted with substantial certainty that harmful contact would result. His young age does not negate his intent; it only potentially affects the damages calculation.`
          },
          { 
            name: 'Fisher v. Carrousel Motor Hotel', 
            holding: 'Contact with object closely connected to person (snatching plate) constitutes battery',
            essay: `BATTERY ESSAY - Fisher v. Carrousel Analysis

FACTS: Mr. Fisher, a Black mathematician attending a NASA conference at a hotel, was in the buffet line when an employee grabbed a plate from his hand and loudly stated that he could not be served in the club because of his race.

ISSUE: Does snatching an object from someone's hand constitute sufficient "contact" for battery, even though the defendant never touched the plaintiff's body?

RULE: Battery requires an intentional act causing harmful or offensive contact with the plaintiff's person. Contact extends to anything so closely connected to the body as to be customarily regarded as part of the person.

APPLICATION:
Here, the hotel employee grabbed the plate directly from Fisher's hands. While there was no skin-to-skin contact, the plate Fisher was holding was so closely connected to his body that it should be regarded as part of his person.

The act was intentional—the employee deliberately snatched the plate, specifically targeting Fisher because of his race. This was not accidental or inadvertent.

The contact was offensive. An offensive contact is one that would offend a reasonable person's sense of dignity. Having a plate grabbed from one's hands while being loudly told he could not be served due to his race would certainly offend a reasonable person's dignity. The racial component amplifies the offensiveness, but even absent discrimination, snatching an item from someone's hands is offensive.

Fisher did not consent to this contact. He was merely standing in line.

No damages need be proven for battery—the tort protects dignitary interests. Fisher was humiliated in front of other conference attendees.

CONCLUSION: The employee committed battery. Snatching the plate was equivalent to an offensive touching of Fisher's person. The deliberate, racially-motivated nature of the act makes it clearly offensive to a reasonable person.`
          },
          { 
            name: 'Vosburg v. Putney', 
            holding: 'Even slight contact is battery if intentional and unpermitted; eggshell skull rule applies',
            essay: `BATTERY ESSAY - Vosburg v. Putney Analysis

FACTS: In a classroom, 11-year-old Putney kicked 14-year-old Vosburg lightly on the shin. Vosburg had a pre-existing infection in his leg, and the slight kick caused the infection to spread, ultimately resulting in permanent disability.

ISSUE: Is a defendant liable for battery when his minor, intentional contact causes unexpectedly severe harm due to the plaintiff's pre-existing condition?

RULE: Battery requires an intentional, unpermitted contact that is harmful or offensive. The defendant is liable for all harm resulting from the battery under the eggshell skull rule—the defendant takes the plaintiff as he finds him.

APPLICATION:
The kick was intentional. Putney deliberately extended his foot and made contact with Vosburg's shin. This was not a reflex or involuntary movement.

The contact was unpermitted. While some physical contact might be implicitly consented to on a playground during recess, this occurred in a classroom after the teacher had called the class to order. The classroom setting changes the analysis—there is no implied consent to physical horseplay during instruction time.

The contact was harmful. While Putney's kick was slight and would not normally cause serious injury, it triggered a severe reaction in Vosburg's already-infected leg, causing permanent disability. Under the eggshell skull rule, Putney must take his victim as he finds him. It is no defense that Putney could not have anticipated Vosburg's vulnerability.

Putney need not have intended the severe harm that resulted. Intent for battery only requires intent to make contact—not intent to injure.

CONCLUSION: Putney committed battery. The light kick was an intentional, unpermitted contact in an environment where no consent could be implied. Under the eggshell skull rule, Putney is liable for all resulting damages, including the permanent disability.`
          }
        ],
        essayTip: 'Always analyze transferred intent when D intended harm to another person or intended assault but caused battery. Discuss consent as a defense.',
        mbeTip: 'Watch for fact patterns where D claims they didn\'t intend "harm"—intent to contact is sufficient. Offensive contact doesn\'t require physical injury.'
      },
      {
        id: 'assault',
        name: 'Assault',
        rule: 'Assault is an intentional act that causes the plaintiff reasonable apprehension of an imminent harmful or offensive contact.',
        elements: [
          'Act by defendant',
          'Intent to cause apprehension or contact',
          'Reasonable apprehension by plaintiff',
          'Of imminent harmful or offensive contact'
        ],
        keyPoints: [
          'Words alone are generally insufficient—must have apparent ability',
          'Apprehension ≠ fear; plaintiff must be aware of the threat',
          'Future threats are not assault ("I\'ll get you tomorrow")',
          'Unloaded gun can be assault if plaintiff doesn\'t know it\'s unloaded',
          'Conditional threats can still be assault'
        ],
        mnemonic: '"ARIA" - Apprehension, Reasonable, Imminent, Apparent ability',
        cases: [
          { name: 'I de S et ux v. W de S', holding: 'Swinging hatchet at person creates apprehension even if contact missed—first assault case' },
          { name: 'Western Union Telegraph Co. v. Hill', holding: 'Defendant must have apparent ability to complete the threatened contact' },
          { name: 'Tuberville v. Savage', holding: '"If it were not assize-time, I would run you through"—words negating intent prevent assault' }
        ],
        essayTip: 'Distinguish assault from battery. If P wasn\'t aware of the danger, it\'s not assault. Analyze whether D had apparent present ability.',
        mbeTip: 'MBE loves testing "imminence"—future threats fail. Also watch for conditional threats where condition is improper (assault) vs. proper (no assault).'
      },
      {
        id: 'false-imprisonment',
        name: 'False Imprisonment',
        rule: 'False imprisonment is an intentional act that causes confinement of the plaintiff within a bounded area.',
        elements: [
          'Act by defendant',
          'Intent to confine',
          'Actual confinement in bounded area',
          'Plaintiff aware of confinement OR harmed by it'
        ],
        keyPoints: [
          'Bounded area—must be no reasonable means of escape',
          'Moral pressure or threats can constitute confinement',
          'Leaving one reasonable exit open = no confinement',
          'Plaintiff must know of confinement unless physically harmed',
          'Shopkeeper\'s privilege: reasonable detention for investigation'
        ],
        mnemonic: '"ICAB" - Intent, Confinement, Awareness, Bounded',
        cases: [
          { name: 'Bird v. Jones', holding: 'Blocking one direction of travel is not confinement if another route exists' },
          { name: 'Coblyn v. Kennedy\'s, Inc.', holding: 'Moral pressure/implicit threats sufficient; shopkeeper\'s privilege has limits' },
          { name: 'Hardy v. LaBelle\'s Distributing Co.', holding: 'Awareness not required if plaintiff suffers actual harm during confinement' }
        ],
        essayTip: 'Analyze shopkeeper\'s privilege carefully—requires reasonable belief, reasonable manner, and reasonable time. Always check for reasonable escape routes.',
        mbeTip: 'MBE tests whether P knew of confinement. Remember: no awareness + no harm = no false imprisonment. Also test bounded area concept.'
      },
      {
        id: 'iied',
        name: 'Intentional Infliction of Emotional Distress (IIED)',
        rule: 'IIED requires extreme and outrageous conduct by the defendant, done intentionally or recklessly, that causes the plaintiff severe emotional distress.',
        elements: [
          'Extreme and outrageous conduct',
          'Intent or recklessness as to causing distress',
          'Causation',
          'Severe emotional distress'
        ],
        keyPoints: [
          '"Outrageous" = exceeds all bounds of decency, utterly intolerable in civilized society',
          'Insults and minor indignities generally insufficient',
          'Special relationships heighten duty (innkeepers, common carriers)',
          'Exploitation of known vulnerability increases outrageousness',
          'Third-party IIED: D knows P present, P is close family member, P suffers severe distress'
        ],
        mnemonic: '"ICES" - Intent, Conduct extreme, Emotional distress, Severe',
        cases: [
          { name: 'State Rubbish Collectors Ass\'n v. Siliznoff', holding: 'Threats of violence to coerce compliance constitute outrageous conduct' },
          { name: 'Taylor v. Vallelunga', holding: 'Third-party IIED requires D\'s knowledge of P\'s presence' },
          { name: 'Hustler Magazine v. Falwell', holding: 'Public figures cannot recover for parody/satire without showing actual malice and false statement of fact' }
        ],
        essayTip: 'Spend time on "extreme and outrageous"—this is the battleground. Courts are reluctant to find liability, so argue both sides thoroughly.',
        mbeTip: 'MBE tests whether conduct rises to "outrageous" level. Mere insults, annoyances, or threats of future litigation rarely qualify. Look for pattern of harassment or abuse of power.'
      },
      {
        id: 'negligence',
        name: 'Negligence',
        rule: 'Negligence requires duty, breach, causation (actual and proximate), and damages. A person must act as a reasonable person would under the circumstances.',
        elements: [
          'Duty of care owed to plaintiff',
          'Breach of that duty',
          'Actual cause (but-for or substantial factor)',
          'Proximate cause (foreseeability)',
          'Damages'
        ],
        keyPoints: [
          'General duty: reasonable person under the circumstances',
          'Special duties: landowners, professionals, common carriers, children',
          'Breach: D\'s conduct fell below standard of care',
          'Actual cause: "but for" test or substantial factor test for multiple causes',
          'Proximate cause: foreseeable plaintiff, foreseeable type of harm',
          'Egg-shell skull rule: take plaintiff as you find them',
          'Defenses: comparative negligence, assumption of risk, statutes of limitation'
        ],
        mnemonic: '"DBCD" - Duty, Breach, Causation, Damages',
        cases: [
          { 
            name: 'Palsgraf v. Long Island Railroad', 
            holding: 'Duty owed only to foreseeable plaintiffs within the zone of danger (Cardozo: foreseeability)',
            essay: `NEGLIGENCE ESSAY - Palsgraf v. Long Island Railroad Analysis

FACTS: Railroad guards helped a man board a moving train, causing him to drop a package of fireworks. The explosion knocked over scales at the other end of the platform, injuring Mrs. Palsgraf.

ISSUE: Does a defendant owe a duty of care to an unforeseeable plaintiff who is injured by an unforeseeable manner of harm?

RULE: (Cardozo majority) A defendant owes a duty of care only to foreseeable plaintiffs—those within the "zone of danger." Negligence is a relational concept; there is no negligence "in the air."

(Andrews dissent) A duty is owed to the world at large, and proximate cause determines liability. "Every one owes to the world at large the duty of refraining from those acts that may unreasonably threaten the safety of others."

APPLICATION:
Under Cardozo's majority view: The guards' conduct may have been negligent toward the man with the package (risking that he might fall) and perhaps to those in the immediate vicinity. However, Mrs. Palsgraf was standing at the other end of the platform. She was not within any foreseeable zone of danger from helping a passenger board.

The package appeared innocuous—it was small and wrapped in newspaper. Nothing suggested it contained explosives. A reasonable person could not foresee that negligent conduct toward the passenger would cause scales to fall on a woman standing far away.

Because Mrs. Palsgraf was an unforeseeable plaintiff, the railroad owed her no duty of care. Without duty, the negligence analysis fails at the first element.

Under Andrews's dissent: The guards were negligent in how they handled the boarding. Once negligence exists, we ask whether their conduct was the proximate cause of Palsgraf's injury. Andrews would consider factors like directness, natural and continuous sequence, and time/space proximity. Even under this view, the chain of causation may be too attenuated.

CONCLUSION: Following the majority rule (and the rule tested on the bar), the railroad owed no duty to Mrs. Palsgraf because she was an unforeseeable plaintiff. Her injury, caused by an unexpected chain of events, was not the type of harm the guards should have anticipated.`
          },
          { name: 'Vaughan v. Menlove', holding: 'Objective reasonable person standard applies; D\'s subjective best judgment irrelevant' },
          { name: 'Brown v. Kendall', holding: 'Plaintiff must prove defendant failed to exercise ordinary care—fault-based liability' }
        ],
        essayTip: 'Structure answer around duty → breach → causation → damages. Spend most time on contested element. Always address affirmative defenses.',
        mbeTip: 'Most tested topic. Focus on proximate cause and intervening causes. Superseding cause (unforeseeable) breaks chain. Medical malpractice by later treating doctor usually doesn\'t break chain.'
      },
      {
        id: 'strict-liability',
        name: 'Strict Liability',
        rule: 'Strict liability imposes liability without fault for certain activities: abnormally dangerous activities, wild animals, and defective products.',
        elements: [
          'Defendant engaged in strict liability activity',
          'Activity caused harm',
          'Harm was of the type the strict liability rule was designed to prevent'
        ],
        keyPoints: [
          'Abnormally dangerous activities: high risk of harm, cannot be made safe, not common in area',
          'Wild animals: strict liability regardless of precautions',
          'Domestic animals: strict liability only if known dangerous propensity',
          'No contributory negligence defense (but assumption of risk applies)',
          'Trespasser can recover if D knows of trespassing'
        ],
        mnemonic: '"AWD" - Abnormally dangerous, Wild animals, Defective products',
        cases: [
          { name: 'Rylands v. Fletcher', holding: 'Strict liability for non-natural use of land causing escape of dangerous things' },
          { name: 'Indiana Harbor Belt R.R. v. American Cyanamid', holding: 'Shippers of hazardous materials not strictly liable if activity is common and cannot be eliminated (Posner test)' },
          { name: 'Siegler v. Kuhlman', holding: 'Transporting gasoline is abnormally dangerous activity—strict liability applies' }
        ],
        essayTip: 'Apply Restatement factors for abnormally dangerous activities. Contrast with negligence. Discuss which defenses apply (assumption of risk yes, comparative negligence limited).',
        mbeTip: 'MBE tests what qualifies as "abnormally dangerous." Blasting = yes. Driving = no. Location matters—what\'s normal in industrial area may not be normal in residential.'
      },
      {
        id: 'products-liability',
        name: 'Products Liability',
        rule: 'Manufacturers and sellers can be liable for defective products under negligence, strict liability, or breach of warranty.',
        elements: [
          'Product was defective (manufacturing, design, or warning defect)',
          'Defect existed when product left defendant\'s control',
          'Defect caused plaintiff\'s harm',
          'Plaintiff was a foreseeable user'
        ],
        keyPoints: [
          'Manufacturing defect: product departs from intended design',
          'Design defect: (1) consumer expectation test OR (2) risk-utility test',
          'Warning defect: failure to warn of known or knowable risks',
          'No privity required for strict liability',
          'Commercial sellers liable; casual sellers not',
          'Defenses: misuse (unless foreseeable), assumption of risk, comparative fault'
        ],
        mnemonic: '"MDW" - Manufacturing, Design, Warning defects',
        cases: [
          { name: 'MacPherson v. Buick Motor Co.', holding: 'Manufacturer owes duty to foreseeable users, not just immediate purchaser—abolished privity' },
          { name: 'Greenman v. Yuba Power Products', holding: 'Strict liability in tort for defective products—no need to prove negligence' },
          { name: 'Barker v. Lull Engineering', holding: 'California uses consumer expectation AND risk-utility tests for design defect (plaintiff can choose)' }
        ],
        essayTip: 'Analyze all three theories (negligence, strict liability, warranty). For design defect, apply both consumer expectation and risk-utility tests. Discuss reasonable alternative design.',
        mbeTip: 'MBE frequently tests who can be sued (manufacturers yes, casual sellers no) and defect types. Manufacturing defect = strict liability even if all care was used.'
      },
      {
        id: 'defamation',
        name: 'Defamation',
        rule: 'Defamation is a false statement of fact, published to a third party, concerning the plaintiff, that damages plaintiff\'s reputation.',
        elements: [
          'False statement of fact (not opinion)',
          'Of and concerning the plaintiff',
          'Publication to third party',
          'Fault (negligence for private, actual malice for public)',
          'Damages (presumed for libel, must prove for slander unless slander per se)'
        ],
        keyPoints: [
          'Libel = written; Slander = spoken',
          'Slander per se: crime, loathsome disease, business/profession, sexual misconduct',
          'Public figures must prove "actual malice" (knowledge of falsity or reckless disregard)',
          'Truth is absolute defense',
          'Privileges: absolute (judicial, legislative) and qualified (common interest)'
        ],
        mnemonic: '"Slander Per Se: LIBD" - Loathsome disease, Incompetence in business, crime involving moral turpitude, Sexual misconduct',
        cases: [
          { 
            name: 'New York Times v. Sullivan', 
            holding: 'Public officials must prove "actual malice"—knowledge of falsity or reckless disregard for truth',
            essay: `DEFAMATION/CONSTITUTIONAL LAW ESSAY - New York Times v. Sullivan Analysis

FACTS: The New York Times published an advertisement describing police mistreatment of civil rights protesters in Montgomery, Alabama. The ad contained minor factual inaccuracies. L.B. Sullivan, the Montgomery Public Safety Commissioner, sued for libel, winning $500,000 under Alabama law that presumed damages.

ISSUE: Does the First Amendment limit a public official's ability to recover damages for defamatory statements about their official conduct?

RULE: A public official cannot recover damages for defamation relating to official conduct unless they prove "actual malice"—that the statement was made with knowledge of its falsity or with reckless disregard for whether it was true or false.

APPLICATION:
First Amendment Considerations:
The Court recognized that uninhibited debate on public issues is essential to democracy. If critics of public officials faced strict liability for every minor error, the threat of lawsuits would create a "chilling effect" on protected speech. Self-censorship would result.

Why public officials receive less protection:
• They have voluntarily entered public life
• They have access to media channels to rebut falsehoods
• Public scrutiny of their official conduct is vital to democracy
• Citizens must be able to criticize government without fear

Actual Malice Standard:
The plaintiff must prove by clear and convincing evidence that the defendant:
(1) Knew the statement was false, OR
(2) Published with reckless disregard for truth or falsity (subjective awareness of probable falsity)

Mere negligence is insufficient. Failure to investigate does not alone establish reckless disregard. The inquiry focuses on the defendant's subjective state of mind—did they actually doubt the truth?

Application to Sullivan:
The Times published an advertisement with some factual errors, but there was no evidence the Times knew the statements were false or seriously doubted their accuracy. Minor errors in a good-faith publication about public officials' conduct are protected.

The common law presumption of damages was constitutionally impermissible without proof of actual malice.

CONCLUSION: Public officials must prove actual malice to recover for defamation concerning official conduct. This First Amendment protection ensures "breathing space" for robust public debate about government officials.`
          },
          { name: 'Gertz v. Robert Welch, Inc.', holding: 'Private figures need only prove negligence, but must show actual damages for presumed/punitive damages' },
          { name: 'Milkovich v. Lorain Journal', holding: 'Statements of opinion can be defamatory if they imply false underlying facts' }
        ],
        essayTip: 'Always classify plaintiff (public figure, limited purpose public figure, or private). Then apply correct fault standard. Analyze privileges carefully.',
        mbeTip: 'MBE heavily tests public vs. private plaintiff distinction. Remember: actual malice is subjective (D\'s state of mind), not objective. Common MBE trap.'
      },
      {
        id: 'privacy-torts',
        name: 'Privacy Torts',
        rule: 'Four distinct privacy torts: (1) Intrusion upon seclusion, (2) Appropriation of likeness, (3) Public disclosure of private facts, (4) False light.',
        elements: [
          'Intrusion: intentional intrusion into private affairs, highly offensive to reasonable person',
          'Appropriation: unauthorized use of P\'s name/likeness for D\'s commercial advantage',
          'Public disclosure: publication of private facts, highly offensive, not newsworthy',
          'False light: publication placing P in false light, highly offensive, with fault'
        ],
        keyPoints: [
          'Intrusion doesn\'t require publication—the invasion itself is the harm',
          'Appropriation requires commercial benefit; news use is protected',
          'Public disclosure requires widespread publication (not just one person)',
          'False light is similar to defamation but covers non-defamatory falsehoods',
          'Truth is NOT a defense to private facts or appropriation',
          'First Amendment limits on newsworthy matters'
        ],
        mnemonic: '"IAPF" - Intrusion, Appropriation, Private facts, False light',
        cases: [
          { name: 'Nader v. General Motors', holding: 'Wiretapping and surveillance constitute intrusion upon seclusion' },
          { name: 'Zacchini v. Scripps-Howard Broadcasting', holding: 'Right of publicity protects against appropriation of entire performance' },
          { name: 'Time, Inc. v. Hill', holding: 'False light claims require actual malice when involving matters of public interest' }
        ],
        essayTip: 'Clearly distinguish which privacy tort applies. Many fact patterns trigger multiple torts. Analyze First Amendment implications for public interest matters.',
        mbeTip: 'MBE tests distinctions between privacy torts. Intrusion = no publication needed. Private facts = truth is no defense. False light = like defamation but broader.'
      }
    ]
  },

  // ============================================================================
  // 2. CONTRACTS (MBE)
  // ============================================================================
  {
    id: 'contracts',
    name: 'Contracts',
    emoji: '📝',
    mbe: true,
    desc: 'Formation, performance, remedies',
    topics: [
      {
        id: 'formation',
        name: 'Contract Formation',
        rule: 'A valid contract requires mutual assent (offer and acceptance), consideration, capacity, and legality.',
        elements: [
          'Mutual assent (offer + acceptance)',
          'Consideration',
          'Capacity of parties',
          'Legality of subject matter'
        ],
        keyPoints: [
          'Objective theory: intent measured by reasonable person standard',
          'Advertisements are generally invitations to deal, not offers',
          'Auctions: without reserve = offer by seller; with reserve = offer by bidder',
          'Missing terms may be supplied by court if parties intended to contract',
          'Option contracts: offer irrevocable if supported by consideration'
        ],
        mnemonic: '"COAL" - Consideration, Offer, Acceptance, Legal capacity',
        cases: [
          { 
            name: 'Lucy v. Zehmer', 
            holding: 'Objective manifestation of intent controls—secret subjective intent is irrelevant',
            essay: `CONTRACT FORMATION ESSAY - Lucy v. Zehmer Analysis

FACTS: After drinks at a bar, Zehmer wrote on a napkin that he agreed to sell his farm to Lucy for $50,000. Zehmer's wife also signed. Later, Zehmer claimed it was a joke.

ISSUE: Is a contract enforceable when one party claims he was joking, but his outward manifestations indicated serious intent?

RULE: Contract formation is judged by the objective theory of contracts—the relevant inquiry is what a reasonable person would understand from the parties' words and actions, not their secret, unexpressed intentions.

APPLICATION:
Applying the objective theory, we examine what Lucy reasonably understood from Zehmer's conduct:

First, the offer appeared serious. Zehmer wrote out the terms on paper, specified the price ($50,000), and described the property (the Ferguson Farm). He even had his wife sign the document—something a reasonable person would associate with a formal transaction, not a joke.

Second, the discussion lasted approximately 40 minutes. This extended negotiation suggests serious dealing, not a quick jest.

Third, Lucy's conduct shows he understood it as a real offer. He accepted, examined the agreement, took possession of the document, and began investigating the title. A reasonable offeror would expect these actions to follow a genuine agreement.

Fourth, Zehmer's claim of intoxication fails. The evidence showed he was not so intoxicated as to lack capacity, and his conduct—writing clearly, negotiating price, securing his wife's signature—demonstrated competence.

Zehmer's undisclosed belief that this was a joke is irrelevant. He manifested objective intent to sell. A party cannot escape contractual obligations by claiming secret reservations when his outward conduct indicated assent.

CONCLUSION: A valid contract was formed. Zehmer's words and conduct would lead a reasonable person (Lucy) to believe a genuine offer was made and accepted. The subjective claim that it was a joke has no legal effect.`
          },
          { name: 'Lefkowitz v. Great Minneapolis Surplus Store', holding: 'Advertisement can be offer if definite, explicit, and leaves nothing open for negotiation' },
          { name: 'Lonergan v. Scolnick', holding: 'Preliminary negotiations and expressions of interest are not offers' }
        ],
        essayTip: 'Always analyze whether communication was an offer or invitation to deal. Apply objective theory of contracts. Check for option contract if revocation is at issue.',
        mbeTip: 'MBE tests whether language constitutes an offer. "I might sell" or "I\'m asking $X" = not offer. Clear, definite terms + apparent willingness = offer.'
      },
      {
        id: 'offer',
        name: 'Offer',
        rule: 'An offer is a manifestation of present willingness to enter into a contract, creating power of acceptance in the offeree.',
        elements: [
          'Manifestation of intent to contract',
          'Definite and certain terms',
          'Communicated to offeree',
          'Creates power of acceptance'
        ],
        keyPoints: [
          'Master of the offer: offeror controls terms and manner of acceptance',
          'Termination: rejection, counter-offer, lapse, revocation, death, illegality',
          'Revocation effective when received; can be direct or indirect',
          'Counter-offer = rejection + new offer',
          'UCC: open terms okay if intent to contract clear; gap-fillers available'
        ],
        mnemonic: '"DISC" - Definite terms, Intent, Specific communication, Creates acceptance power',
        cases: [
          { name: 'Dickinson v. Dodds', holding: 'Offer can be revoked any time before acceptance unless consideration for option' },
          { name: 'Normile v. Miller', holding: 'Counter-offer terminates original offer; cannot later accept original' },
          { name: 'Petterson v. Pattberg', holding: 'Revocation effective upon receipt, even during performance of unilateral contract (now disfavored)' }
        ],
        essayTip: 'Identify the offeror carefully—whoever makes the offer controls acceptance terms. Analyze whether purported "acceptance" was actually counter-offer.',
        mbeTip: 'Watch for indirect revocation (offeree learns offeror sold to someone else). Also test whether silence constitutes acceptance (almost never, unless prior dealings).'
      },
      {
        id: 'acceptance',
        name: 'Acceptance',
        rule: 'Acceptance is an unequivocal assent to the terms of the offer, communicated in the manner authorized by the offeror.',
        elements: [
          'Manifestation of assent',
          'To the terms of the offer',
          'By authorized manner of acceptance',
          'Communicated while offer still open'
        ],
        keyPoints: [
          'Mirror image rule (common law): acceptance must match offer exactly',
          'UCC 2-207: additional/different terms don\'t prevent acceptance',
          'Mailbox rule: acceptance effective when dispatched (unless offer says otherwise)',
          'Unilateral contract: accepted by complete performance',
          'Option contracts: mailbox rule doesn\'t apply; acceptance must be received'
        ],
        mnemonic: '"MAMA" - Manner Authorized, Mirror image (common law), Assent Manifested',
        cases: [
          { name: 'Carlill v. Carbolic Smoke Ball Co.', holding: 'Offer to public can be accepted by performance; no need to notify of intent to accept' },
          { name: 'Adams v. Lindsell', holding: 'Mailbox rule: acceptance effective upon dispatch, not receipt' },
          { name: 'ProCD v. Zeidenberg', holding: 'Shrinkwrap licenses: acceptance by conduct (using software) after opportunity to review terms' }
        ],
        essayTip: 'Determine whether UCC or common law applies—this affects mirror image rule analysis. Under UCC 2-207, analyze whether additional terms become part of contract.',
        mbeTip: 'MBE loves testing mailbox rule exceptions: rejection then acceptance (first received wins), acceptance then rejection (mailbox rule applies). Options require receipt.'
      },
      {
        id: 'consideration',
        name: 'Consideration',
        rule: 'Consideration is a bargained-for exchange where each party incurs a legal detriment or receives a legal benefit.',
        elements: [
          'Bargained-for exchange',
          'Legal detriment to promisee OR benefit to promisor',
          'Detriment must induce the promise and vice versa'
        ],
        keyPoints: [
          'Past consideration is not consideration (already done)',
          'Pre-existing duty rule: doing what you\'re already obligated to do is not consideration',
          'Modification: common law requires new consideration; UCC allows good faith modification',
          'Illusory promises lack consideration (e.g., "I\'ll buy if I want to")',
          'Settlement of disputed claims is consideration',
          'Promissory estoppel: substitute for consideration when reasonable reliance occurs'
        ],
        mnemonic: '"BLADE" - Bargained for, Legal detriment, And Exchange',
        cases: [
          { 
            name: 'Hamer v. Sidway', 
            holding: 'Forbearance from legal right (drinking, smoking) is sufficient legal detriment',
            essay: `CONTRACTS ESSAY - Hamer v. Sidway Analysis

FACTS: An uncle promised his nephew $5,000 if the nephew refrained from drinking, smoking, swearing, and gambling until age 21. The nephew complied. The uncle acknowledged the debt but died before paying. The executor refused to pay, arguing there was no consideration.

ISSUE: Does forbearance from activities one has a legal right to engage in constitute valid consideration for a promise?

RULE: Consideration requires a bargained-for exchange in which the promisee incurs a legal detriment or the promisor receives a legal benefit. Legal detriment means giving up a legal right, regardless of whether it benefits the promisor or burdens the promisee in fact.

APPLICATION:
The nephew incurred a legal detriment by giving up legal rights:
• At the time, there was no legal prohibition on a teenager drinking, smoking, swearing, or gambling
• The nephew had a legal right to engage in these activities
• By refraining, he gave up something he was entitled to do

It is irrelevant whether the detriment was "bad" for the nephew:
• The executor argued the nephew actually benefited from abstaining
• But consideration doesn't require actual harm—only surrender of legal rights
• Whether abstinence improved his health or saved money doesn't matter

The uncle received the bargained-for forbearance:
• The uncle wanted his nephew to abstain from these behaviors
• The nephew's abstinence was the price of the uncle's promise
• This was a genuine bargain, not a gift

Distinguishing from gifts:
• A pure gift would be: "I'll give you $5,000 because I love you"
• Here, the uncle specifically required performance: "IF you abstain...THEN I'll pay"
• The conditional nature creates a bargain

The uncle's acknowledgment of the debt also supports the contract's validity—he clearly considered himself bound by his promise.

CONCLUSION: Valid consideration exists because the nephew surrendered legal rights (forbearance) in exchange for the uncle's promise. The nephew's abstinence was a legal detriment sufficient to support the contract, and the estate must pay.`
          },
          { name: 'Dougherty v. Salt', holding: 'Gratuitous promise (gift) lacks consideration—"I love you" is not a bargain' },
          { name: 'Wood v. Lucy, Lady Duff-Gordon', holding: 'Exclusive dealing contract implies reasonable efforts—not illusory' }
        ],
        essayTip: 'Check for pre-existing duty issues in modification scenarios. If no consideration, analyze promissory estoppel as alternative. Always distinguish gifts from bargains.',
        mbeTip: 'MBE tests adequacy of consideration (courts don\'t inquire) vs. existence of consideration (must have something). Nominal consideration ($1) generally sufficient.'
      },
      {
        id: 'statute-of-frauds',
        name: 'Statute of Frauds',
        rule: 'Certain contracts must be evidenced by a writing signed by the party to be charged: MYLEGS (Marriage, Year+, Land, Executor, Goods $500+, Surety).',
        elements: [
          'Contract falls within Statute of Frauds',
          'Writing required evidencing the agreement',
          'Signed by the party to be charged',
          'Contains essential terms'
        ],
        keyPoints: [
          'Marriage: promises in consideration of marriage',
          'Year: cannot be performed within one year from making',
          'Land: sale or transfer of interest in land',
          'Executor: promise to pay decedent\'s debts from own funds',
          'Goods: UCC requires writing for $500+ (UCC revised: $5000+)',
          'Surety: promise to answer for another\'s debt',
          'Part performance exception for land: payment + possession + improvements',
          'Merchant\'s confirmatory memo: binding on receiving merchant who doesn\'t object in 10 days'
        ],
        mnemonic: '"MYLEGS" - Marriage, Year+, Land, Executor, Goods $500+, Surety',
        cases: [
          { name: 'Crabtree v. Elizabeth Arden Sales Corp.', holding: 'Multiple writings can be combined to satisfy SOF if they clearly relate to same transaction' },
          { name: 'Beaver v. Brumlow', holding: 'Part performance of land contract (possession + improvements) removes case from SOF' },
          { name: 'DF Activities Corp. v. Brown', holding: 'Merchant\'s failure to object to confirmatory memo within 10 days satisfies SOF' }
        ],
        essayTip: 'First determine if SOF applies, then check for exceptions. Part performance is key for land. For goods, check for partial payment, part delivery, or specially manufactured goods.',
        mbeTip: 'One-year rule measured from DATE OF MAKING, not date of performance. Contract that could possibly be performed within year is outside SOF, even if performance likely takes longer.'
      },
      {
        id: 'parol-evidence',
        name: 'Parol Evidence Rule',
        rule: 'When a contract is integrated (final expression), prior or contemporaneous agreements that contradict the writing are inadmissible.',
        elements: [
          'Written contract exists',
          'Parties intended writing as final (integration)',
          'Evidence is prior or contemporaneous',
          'Evidence contradicts or varies the writing'
        ],
        keyPoints: [
          'Complete integration: excludes all prior agreements',
          'Partial integration: excludes contradictory evidence, allows consistent additional terms',
          'Exceptions: formation defects (fraud, mistake, duress), condition precedent, ambiguity, subsequent modifications',
          'Merger/integration clause suggests complete integration',
          'UCC is more liberal—course of dealing, usage of trade always admissible'
        ],
        mnemonic: '"PACES" - Prior evidence, Allowed if no Contradiction, Exception for formation defects, Subsequent mods okay',
        cases: [
          { name: 'Thompson v. Libby', holding: 'Written contract presumed complete if appears complete on its face' },
          { name: 'Masterson v. Sine', holding: 'Collateral agreement may be proven if naturally omitted from writing' },
          { name: 'Pacific Gas & Electric v. Thomas Drayage', holding: 'Extrinsic evidence admissible to determine if ambiguity exists (Traynor approach)' }
        ],
        essayTip: 'First determine if writing is completely or partially integrated. Then analyze whether proffered evidence contradicts or merely supplements. Check for fraud/mistake exceptions.',
        mbeTip: 'MBE tests what evidence is admissible. Subsequent oral modifications are OUTSIDE the rule (admissible). Course of dealing/usage of trade generally admissible to explain terms.'
      },
      {
        id: 'conditions',
        name: 'Conditions',
        rule: 'A condition is an event that must occur before a party\'s duty to perform becomes absolute.',
        elements: [
          'Express or implied condition',
          'Must be satisfied or excused',
          'Before duty to perform arises'
        ],
        keyPoints: [
          'Express conditions: strict compliance required',
          'Constructive conditions: substantial performance suffices',
          'Condition precedent: must occur before duty arises',
          'Condition subsequent: excuses duty already owed',
          'Concurrent conditions: exchange at same time',
          'Excuse: waiver, estoppel, forfeiture, impossibility',
          'Prevention doctrine: party cannot prevent condition then claim non-occurrence'
        ],
        mnemonic: '"PCS" - Precedent (before), Concurrent (same time), Subsequent (after)',
        cases: [
          { name: 'Jacob & Youngs v. Kent', holding: 'Substantial performance of constructive condition satisfies duty; minor breach doesn\'t excuse performance' },
          { name: 'Kingston v. Preston', holding: 'Constructive conditions: promises are mutually dependent even if not expressly conditional' },
          { name: 'Oppenheimer & Co. v. Oppenheim', holding: 'Express conditions require strict compliance—"satisfaction" clause' }
        ],
        essayTip: 'Distinguish express from constructive conditions. For express conditions, look for language like "if," "provided that," "on condition that." Analyze waiver and excuse doctrines.',
        mbeTip: 'MBE tests substantial performance (constructive conditions) vs. strict compliance (express conditions). Also tests order of performance—who must perform first?'
      },
      {
        id: 'breach',
        name: 'Breach of Contract',
        rule: 'A breach is a failure to perform a contractual promise when performance is due and no excuse exists.',
        elements: [
          'Valid contract exists',
          'Plaintiff performed or was excused',
          'Defendant failed to perform',
          'Plaintiff suffered damages'
        ],
        keyPoints: [
          'Material breach: excuses other party\'s performance, allows termination',
          'Minor breach: doesn\'t excuse performance, allows damages only',
          'Anticipatory repudiation: clear statement of intent not to perform before due date',
          'Retraction: repudiation can be retracted if other party hasn\'t relied',
          'Time is of the essence: makes timely performance express condition',
          'Divisible contracts: breach of one part doesn\'t discharge entire contract'
        ],
        mnemonic: '"TIMBER" - Time, Importance, Magnitude, Benefit received, Extent of cure, Reliability',
        cases: [
          { name: 'Jacob & Youngs v. Kent', holding: 'Willful vs. innocent breach factor; Reading pipe deviation was minor breach—damages only' },
          { name: 'Hochster v. De La Tour', holding: 'Anticipatory repudiation allows immediate suit; no need to wait for performance date' },
          { name: 'Truman L. Flatt & Sons v. Schupf', holding: 'Repeated delays can constitute material breach even without time-is-of-essence clause' }
        ],
        essayTip: 'Analyze materiality using Restatement factors. Consider whether breach is total (discharge) or partial (damages only). Always discuss mitigation of damages.',
        mbeTip: 'MBE tests anticipatory repudiation heavily. Non-breaching party can: (1) sue immediately, (2) wait and sue when performance due, (3) treat as offer to rescind, or (4) ignore and urge performance.'
      },
      {
        id: 'remedies',
        name: 'Contract Remedies',
        rule: 'Contract remedies aim to put the non-breaching party in the position they would have been in had the contract been performed.',
        elements: [
          'Expectation damages (benefit of bargain)',
          'Reliance damages (out-of-pocket expenses)',
          'Restitution (return of benefit conferred)',
          'Specific performance (equity)'
        ],
        keyPoints: [
          'Expectation: value of performance minus cost saved minus loss avoided',
          'Consequential damages: foreseeable special damages (Hadley v. Baxendale)',
          'Mitigation: non-breaching party must take reasonable steps to reduce loss',
          'Certainty: damages must be proven with reasonable certainty',
          'Liquidated damages: enforceable if reasonable forecast and actual damages hard to calculate',
          'Specific performance: available for unique goods, land; not for personal services'
        ],
        mnemonic: '"ERIC" - Expectation, Reliance, Interest returned (restitution), Consequential',
        cases: [
          { 
            name: 'Hadley v. Baxendale', 
            holding: 'Consequential damages recoverable only if foreseeable at contract formation',
            essay: `CONTRACT REMEDIES ESSAY - Hadley v. Baxendale Analysis

FACTS: Hadley's mill was shut down due to a broken crankshaft. He contracted with Baxendale's shipping company to deliver the shaft to manufacturers for repair. Baxendale delayed delivery by several days, extending the mill closure. Hadley sued for lost profits during the delay.

ISSUE: Can a plaintiff recover consequential damages for lost profits when the defendant was not informed that the plaintiff's business would be shut down awaiting delivery?

RULE: Consequential damages are recoverable only if they: (1) arise naturally from the breach (general damages), or (2) were reasonably within the contemplation of the parties at the time of contract formation because of special circumstances communicated to the defendant (special damages).

APPLICATION:
General damages (First Rule): Lost profits do not naturally flow from a delayed delivery. A reasonable carrier would not assume that shipping delay would cause a complete business shutdown. The mill might have had a spare shaft, or might have been closed for other reasons. Lost profits are not the "natural" consequence of late delivery.

Special damages (Second Rule): For Hadley to recover the lost profits, he needed to communicate the special circumstances to Baxendale at the time of contracting. Specifically, Baxendale needed to know that: (a) the mill was completely shut down, (b) there was no spare shaft, and (c) the mill could not operate until this specific shaft was repaired and returned.

The facts suggest this information was not conveyed. Baxendale knew only that the shaft needed repair—not that an entire business depended on timely delivery. Without this knowledge, Baxendale could not have contemplated the lost profits, and therefore could not have factored this risk into the price or taken extra precautions.

Policy rationale: This rule encourages efficient allocation of risk. If the shipper knew of special circumstances, it could charge more, insure against the risk, or take extra care. Without notice, imposing liability for unforeseeable consequences would be unfair.

CONCLUSION: Hadley cannot recover lost profits because these special damages were not foreseeable to Baxendale at contract formation. Only general damages arising naturally from the breach are recoverable.`
          },
          { name: 'Rockingham County v. Luten Bridge Co.', holding: 'Duty to mitigate—stop performance when repudiation is clear' },
          { name: 'Parker v. Twentieth Century-Fox', holding: 'Mitigation doesn\'t require accepting different or inferior substitute employment' }
        ],
        essayTip: 'Calculate damages step-by-step. Always address Hadley foreseeability for consequential damages. Discuss mitigation duty and whether substitute was available and comparable.',
        mbeTip: 'MBE loves testing Hadley rule. General damages (arise naturally) always recoverable. Special/consequential damages only if D had reason to know of special circumstances.'
      },
      {
        id: 'ucc-article-2',
        name: 'UCC Article 2 (Sales)',
        rule: 'UCC Article 2 governs contracts for the sale of goods, modifying common law rules in several important ways.',
        elements: [
          'Transaction involves goods (movable, tangible property)',
          'Mixed transaction: predominant purpose test',
          'Merchants: special rules apply'
        ],
        keyPoints: [
          'Formation: open terms okay; firm offer (merchant, signed writing, 3 months max)',
          'Battle of forms (2-207): acceptance with different terms still acceptance',
          'Between merchants: additional terms become part unless material, objected to, or offer limits',
          'Perfect tender rule: buyer can reject for any nonconformity',
          'Cure: seller can cure nonconforming tender if time remains',
          'Installment contracts: substantial impairment standard',
          'Risk of loss: follows control (shipment vs. destination contracts)',
          'Warranties: express, implied merchantability, implied fitness for particular purpose'
        ],
        mnemonic: '"SOG" - Sale Of Goods; "FIRM" - Firm offers (merchant, signed, 3 months)',
        cases: [
          { name: 'Step-Saver Data Systems v. Wyse Technology', holding: 'Shrinkwrap license terms are proposals under 2-207; don\'t necessarily become part of contract' },
          { name: 'Ramirez v. Autosport', holding: 'Buyer can reject nonconforming goods; seller\'s cure right limited' },
          { name: 'Henningsen v. Bloomfield Motors', holding: 'Implied warranty of merchantability; disclaimer limitations' }
        ],
        essayTip: 'Always state whether UCC or common law applies. If goods, apply UCC special rules. If services or land, apply common law. For mixed deals, use predominant purpose test.',
        mbeTip: 'MBE frequently tests UCC vs. common law differences. Key distinctions: modification (no consideration needed under UCC), SOF ($500), perfect tender vs. substantial performance.'
      }
    ]
  },

  // ============================================================================
  // 3. CRIMINAL LAW (MBE)
  // ============================================================================
  {
    id: 'criminal',
    name: 'Criminal Law',
    emoji: '🔒',
    mbe: true,
    desc: 'Crimes, defenses, procedure',
    topics: [
      {
        id: 'actus-reus',
        name: 'Actus Reus',
        rule: 'A crime requires a voluntary physical act or omission where there was a legal duty to act.',
        elements: [
          'Physical act',
          'Voluntary (product of conscious will)',
          'Or omission where duty exists'
        ],
        keyPoints: [
          'Involuntary acts: reflexes, convulsions, acts during unconsciousness, acts under hypnosis',
          'Status crimes unconstitutional (being addicted vs. using drugs)',
          'Omission liability requires: legal duty, knowledge, ability to perform',
          'Duties from: statute, contract, relationship, voluntary assumption, creation of peril',
          'Possession: must have control for sufficient period to terminate'
        ],
        mnemonic: '"SCRV" - Statute, Contract, Relationship, Voluntary assumption, creation of peril (duties)',
        cases: [
          { name: 'Martin v. State', holding: 'No actus reus when police dragged drunk man onto highway—not voluntary act' },
          { name: 'Robinson v. California', holding: 'Criminalization of status (addiction) violates 8th Amendment' },
          { name: 'People v. Beardsley', holding: 'No legal duty to rescue stranger; moral obligation insufficient' }
        ],
        essayTip: 'Always verify voluntary act. If omission, identify specific source of duty. Status crimes and involuntary acts are exam favorites.',
        mbeTip: 'MBE tests what constitutes "voluntary." Sleepwalking, reflexes, and hypnosis are NOT voluntary. But voluntarily becoming intoxicated and then acting IS sufficient.'
      },
      {
        id: 'mens-rea',
        name: 'Mens Rea',
        rule: 'Mens rea is the mental state required for criminal liability: purpose, knowledge, recklessness, or negligence.',
        elements: [
          'Purpose: conscious object to engage in conduct or cause result',
          'Knowledge: awareness conduct is of particular nature or result practically certain',
          'Recklessness: conscious disregard of substantial and unjustifiable risk',
          'Negligence: should have been aware of substantial and unjustifiable risk'
        ],
        keyPoints: [
          'MPC hierarchy: purpose > knowledge > recklessness > negligence',
          'Specific intent crimes: require additional intent beyond act (burglary, larceny, attempt)',
          'General intent crimes: intent to do the act (battery)',
          'Strict liability: no mens rea required (statutory rape, regulatory offenses)',
          'Transferred intent: intent transfers to unintended victim',
          'Mistake of fact: negates mens rea if it negates required mental state'
        ],
        mnemonic: '"PKRN" - Purpose, Knowledge, Recklessness, Negligence (descending culpability)',
        cases: [
          { name: 'Regina v. Cunningham', holding: 'Malice means recklessness—conscious awareness of risk—not wickedness' },
          { name: 'People v. Conley', holding: 'Intent can be inferred from circumstances; natural and probable consequences' },
          { name: 'Morissette v. United States', holding: 'Mens rea presumed required unless legislature clearly indicates strict liability' }
        ],
        essayTip: 'Identify specific vs. general intent—this affects available defenses. Voluntary intoxication is defense to specific intent only. Apply MPC mens rea levels when stated.',
        mbeTip: 'MBE often gives facts showing recklessness and asks if "knowingly" satisfied. Remember hierarchy—knowledge requires higher culpability than recklessness.'
      },
      {
        id: 'homicide',
        name: 'Homicide',
        rule: 'Homicide is the killing of a human being. Murder requires malice aforethought; manslaughter is killing without malice.',
        elements: [
          'Killing',
          'Of a human being',
          'By another human being',
          'With requisite mental state'
        ],
        keyPoints: [
          'First degree murder: premeditated and deliberate, or felony murder (BARRK: Burglary, Arson, Rape, Robbery, Kidnapping)',
          'Second degree murder: intent to kill without premeditation, intent to cause serious bodily harm, depraved heart',
          'Voluntary manslaughter: adequate provocation (heat of passion), imperfect self-defense',
          'Involuntary manslaughter: criminal negligence, misdemeanor-manslaughter',
          'Provocation: objective (reasonable person provoked) + subjective (actually provoked) + no cooling off',
          'Felony murder: inherently dangerous felony, death during commission, caused by felonious act'
        ],
        mnemonic: '"BARRK" for felony murder felonies: Burglary, Arson, Rape, Robbery, Kidnapping',
        cases: [
          { name: 'People v. Anderson', holding: 'Premeditation requires evidence of planning, motive, and manner of killing' },
          { name: 'Girouard v. State', holding: 'Words alone generally insufficient provocation for voluntary manslaughter' },
          { name: 'People v. Knoller', holding: 'Implied malice (depraved heart) requires subjective awareness of risk of death' }
        ],
        essayTip: 'Work through homicide systematically: murder 1, murder 2, voluntary manslaughter, involuntary manslaughter. Apply provocation formula carefully with timing analysis.',
        mbeTip: 'MBE tests "cooling off" period heavily. If D had time to cool and reasonable person would have, it\'s murder not manslaughter. Also test felony murder limitations.'
      },
      {
        id: 'theft-crimes',
        name: 'Theft Crimes',
        rule: 'Theft crimes include larceny, embezzlement, false pretenses, robbery, and extortion—all involving wrongful taking of property.',
        elements: [
          'Larceny: trespassory taking and carrying away of personal property of another with intent to permanently deprive',
          'Embezzlement: fraudulent conversion of property by one in lawful possession',
          'False pretenses: obtaining title through false representation of material fact',
          'Robbery: larceny from person by force or threat of immediate force',
          'Extortion: obtaining property through future threats'
        ],
        keyPoints: [
          'Larceny: taking from another\'s possession; intent to return = no larceny',
          'Continuing trespass: initial lawful taking becomes larceny when intent to steal forms',
          'Embezzlement: conversion while in lawful possession (employee, trustee)',
          'False pretenses: victim intends to pass title based on lie',
          'Robbery: force or fear, from person or presence, specific intent to steal',
          'Receiving stolen property: knowledge property is stolen + intent to deprive owner'
        ],
        mnemonic: '"LEFT" - Larceny (taking), Embezzlement (conversion), False pretenses (title), Theft by trick (possession)',
        cases: [
          { name: 'Rex v. Chisser', holding: 'Larceny requires intent to permanently deprive at time of taking' },
          { name: 'People v. Olivo', holding: 'Concealing merchandise in store is sufficient taking and carrying away' },
          { name: 'Topolewski v. State', holding: 'No larceny if owner consents to taking (consent defeats trespass)' }
        ],
        essayTip: 'Distinguish theft crimes by: manner of obtaining (taking vs. conversion), what is obtained (possession vs. title), and D\'s initial relationship to property.',
        mbeTip: 'MBE tests larceny vs. embezzlement (was D in lawful possession?) and false pretenses vs. larceny by trick (did victim intend to pass title or just possession?).'
      },
      {
        id: 'inchoate-crimes',
        name: 'Inchoate Crimes',
        rule: 'Inchoate crimes punish uncompleted criminal activity: attempt, solicitation, and conspiracy.',
        elements: [
          'Attempt: specific intent + substantial step (MPC) or dangerous proximity (common law)',
          'Solicitation: asking another to commit a crime with intent that crime be committed',
          'Conspiracy: agreement between two+ persons to commit crime + intent + overt act (majority)'
        ],
        keyPoints: [
          'Attempt: specific intent required; cannot attempt unintentional crime',
          'Attempt defenses: abandonment (voluntary and complete) in MPC jurisdictions',
          'Impossibility: legal impossibility is defense; factual impossibility is NOT',
          'Solicitation: complete when request made; merges into conspiracy/substantive crime',
          'Conspiracy: bilateral (common law) vs. unilateral (MPC) approach',
          'Pinkerton liability: co-conspirator liable for foreseeable crimes in furtherance',
          'Withdrawal: must communicate to all co-conspirators; may require neutralizing assistance'
        ],
        mnemonic: '"SCA" - Solicitation (asking), Conspiracy (agreeing), Attempt (acting)',
        cases: [
          { name: 'People v. Rizzo', holding: 'Dangerous proximity test: must be "dangerously close" to completion' },
          { name: 'United States v. Jackson', holding: 'MPC substantial step test: strongly corroborative of criminal purpose' },
          { name: 'Pinkerton v. United States', holding: 'Co-conspirator liable for all crimes committed in furtherance of conspiracy' }
        ],
        essayTip: 'For attempt, compare common law (proximity tests) with MPC (substantial step). For conspiracy, note Pinkerton liability extends to all foreseeable crimes.',
        mbeTip: 'MBE tests impossibility (factual = no defense, legal = defense) and merger (solicitation/attempt merge, conspiracy does NOT merge).'
      },
      {
        id: 'accomplice-liability',
        name: 'Accomplice Liability',
        rule: 'An accomplice is liable for crimes they aid, abet, counsel, or encourage with the intent to assist and intent that the crime be committed.',
        elements: [
          'Act of assistance, encouragement, or facilitation',
          'Intent to assist the principal',
          'Intent that the crime be committed',
          'Crime actually committed by principal'
        ],
        keyPoints: [
          'Mere presence insufficient; must have purposeful intent to assist',
          'Accomplice liable for all foreseeable crimes of principal',
          'Accessory before the fact: aids/encourages before crime',
          'Accessory after the fact: assists after crime (separate lesser offense)',
          'Principal in first degree: actually commits crime',
          'Principal in second degree: present and aids',
          'Withdrawal requires timely repudiation and attempt to neutralize assistance'
        ],
        mnemonic: '"PACE" - Principal 1st, Accessory before, Co-principal (P2), Encourage/aid',
        cases: [
          { name: 'State v. Hoselton', holding: 'Mere presence and flight insufficient without evidence of encouragement or assistance' },
          { name: 'Hicks v. United States', holding: 'Words of encouragement must actually encourage; intent must be proven' },
          { name: 'People v. Luparello', holding: 'Accomplice liable for natural and probable consequences of aided crime (now limited)' }
        ],
        essayTip: 'Analyze both actus reus (did D assist?) and mens rea (did D intend to assist and intend crime occur?). Address foreseeable crimes doctrine.',
        mbeTip: 'MBE tests when mere presence becomes complicity. Look for prior agreement, encouragement, lookout behavior, or sharing in proceeds.'
      },
      {
        id: 'defenses',
        name: 'Criminal Defenses',
        rule: 'Defenses include self-defense, defense of others, necessity, duress, insanity, and intoxication.',
        elements: [
          'Self-defense: reasonable belief of imminent unlawful force, proportional response, no duty to retreat (most jurisdictions)',
          'Insanity: M\'Naghten (didn\'t know nature/quality or wrongfulness), Irresistible Impulse, MPC/ALI test',
          'Intoxication: involuntary negates any mens rea; voluntary negates specific intent only',
          'Duress: threat of imminent death/serious bodily harm with no reasonable escape'
        ],
        keyPoints: [
          'Self-defense: deadly force only against deadly force; imperfect self-defense reduces to manslaughter',
          'Initial aggressor loses right to self-defense unless withdraws or victim escalates',
          'Retreat: majority no duty; minority must retreat if safe (never from home—castle doctrine)',
          'Defense of others: reasonable belief other entitled to self-defense',
          'Necessity: choice of lesser evil, natural forces (not human threat)',
          'Duress: not defense to murder; reasonable person standard',
          'Insanity: burden varies by jurisdiction; found not guilty by reason of insanity'
        ],
        mnemonic: '"INSIDE" - Insanity, Necessity, Self-defense, Intoxication, Duress, Entrapment',
        cases: [
          { 
            name: 'M\'Naghten\'s Case', 
            holding: 'Insanity defense: did not know nature/quality of act OR did not know it was wrong',
            essay: `CRIMINAL LAW ESSAY - M'Naghten's Case Analysis

FACTS: Daniel M'Naghten, suffering from paranoid delusions, believed the Prime Minister was conspiring against him. He shot and killed the PM's secretary, believing him to be the PM. M'Naghten was acquitted by reason of insanity.

ISSUE: What is the proper test for legal insanity as a defense to criminal charges?

RULE: Under the M'Naghten test, a defendant is legally insane if, at the time of the act, due to a disease of the mind, he either: (1) did not know the nature and quality of his act, OR (2) did not know that what he was doing was wrong.

APPLICATION:
The M'Naghten test has two alternative prongs:

First Prong - Nature and Quality: The defendant must not understand what he was physically doing. Example: A person who strangles someone believing he is squeezing a lemon does not understand the nature and quality of his act.

In M'Naghten's case, he clearly knew the physical nature of his act—he was shooting a person. He understood guns cause death. This prong likely does not apply.

Second Prong - Wrongfulness: The defendant must not understand that the act was wrong (either legally or morally, depending on jurisdiction). M'Naghten believed he was acting in self-defense against a conspiracy. His paranoid delusions convinced him that killing was necessary and justified—he did not believe he was doing something wrong.

Key requirements:
• "Disease of the mind" — M'Naghten suffered from paranoid delusions, a recognized mental illness
• Causal connection — the delusions directly caused him to not know his act was wrong
• Time of the act — the mental state must exist at the moment of the crime

This test focuses narrowly on cognitive capacity. It does not consider whether the defendant could control his actions (volitional test) or whether he could conform his conduct to law (irresistible impulse). Many criticize M'Naghten as too restrictive.

CONCLUSION: M'Naghten's paranoid delusions, a disease of the mind, prevented him from knowing his act was wrong. He believed he was justifiably defending himself against a conspiracy. Under the test bearing his name, he was legally insane.`
          },
          { 
            name: 'People v. Goetz', 
            holding: 'Self-defense requires objectively reasonable belief of necessity',
            essay: `CRIMINAL LAW ESSAY - People v. Goetz Analysis

FACTS: Bernhard Goetz, a white man, was approached by four Black youths on a New York subway. When one asked for five dollars, Goetz drew an unlicensed handgun and shot all four, paralyzing one. Goetz claimed he feared being robbed and beaten.

ISSUE: Should self-defense be judged by a purely subjective standard (defendant's actual belief) or an objective standard (what a reasonable person would believe)?

RULE: Self-defense requires a reasonable belief that: (1) deadly force is immediately necessary, (2) to protect against death or serious bodily harm. The belief must be objectively reasonable—what a reasonable person in the defendant's circumstances would believe.

APPLICATION:
New York law requires an objective standard with subjective elements:

Objective component: A reasonable person in Goetz's situation must have believed deadly force was necessary. The jury must consider:
• Were four young men asking for money objectively threatening?
• Did their words or actions indicate imminent violence?
• Was deadly force proportionate to the perceived threat?

Subjective circumstances considered: The reasonable person is placed in defendant's shoes, considering:
• Prior experiences (Goetz had been mugged before)
• Knowledge available at the time
• Physical circumstances (confined subway car, outnumbered)

What remains objective: Whether the belief was REASONABLE—not whether Goetz actually believed it. A paranoid person's unreasonable fears do not justify deadly force just because they are genuine.

The court rejected a purely subjective test. If self-defense depended only on the defendant's actual belief, any claimed fear—however unreasonable—would justify violence.

Proportionality: Even if some threat existed, shooting four people (including one in the back) may exceed reasonable defensive force. Self-defense requires proportional response.

CONCLUSION: Self-defense requires an objectively reasonable belief in the necessity of force. Goetz's subjective fear alone was insufficient—the jury must determine whether a reasonable person in his circumstances would have believed deadly force was necessary.`
          },
          { name: 'United States v. Peterson', holding: 'Initial aggressor cannot claim self-defense without withdrawal' }
        ],
        essayTip: 'Identify defense type, then apply elements carefully. For self-defense, analyze imminence, proportionality, reasonableness. Address imperfect self-defense as fallback.',
        mbeTip: 'MBE tests voluntary intoxication as defense to specific intent only. Remember: insanity results in acquittal; diminished capacity reduces degree of crime.'
      }
    ]
  },

  // ============================================================================
  // 4. CONSTITUTIONAL LAW (MBE)
  // ============================================================================
  {
    id: 'constitutional',
    name: 'Con Law',
    emoji: '🏛️',
    mbe: true,
    desc: 'Federal powers, individual rights',
    topics: [
      {
        id: 'judicial-review',
        name: 'Judicial Review',
        rule: 'Federal courts have power to review constitutionality of executive and legislative acts. Courts require case or controversy with standing.',
        elements: [
          'Case or controversy (Article III)',
          'Standing: injury, causation, redressability',
          'Ripeness and mootness',
          'No advisory opinions'
        ],
        keyPoints: [
          'Standing: concrete injury, fairly traceable to D, likely redressed by decision',
          'Taxpayer standing: only for Establishment Clause challenges to spending',
          'Third-party standing: special relationship + obstacle to suit',
          'Mootness: must be live controversy (exception: capable of repetition yet evading review)',
          'Ripeness: actual or imminent harm, not speculative',
          'Political question doctrine: non-justiciable (impeachment, foreign affairs, gerrymandering)',
          'Adequate and independent state grounds: bars SCOTUS review'
        ],
        mnemonic: '"SCAMP" - Standing, Case/controversy, Advisory (no), Mootness, Political question',
        cases: [
          { name: 'Marbury v. Madison', holding: 'Established judicial review—courts can declare laws unconstitutional' },
          { name: 'Lujan v. Defenders of Wildlife', holding: 'Standing requires concrete, particularized injury, causation, and redressability' },
          { name: 'Baker v. Carr', holding: 'Political question factors—textual commitment, judicially manageable standards' }
        ],
        essayTip: 'Always analyze justiciability before substantive issues. Standing is most frequently tested—apply three-part test methodically.',
        mbeTip: 'MBE tests standing heavily. Mere ideological opposition or generalized grievance = no standing. Taxpayer standing very limited.'
      },
      {
        id: 'federal-powers',
        name: 'Federal Powers',
        rule: 'Congress has enumerated powers including commerce, spending, and taxing. Executive has Article II powers. Powers are limited by federalism.',
        elements: [
          'Commerce power: channels, instrumentalities, substantial effect',
          'Spending power: general welfare, clear conditions, related to purpose',
          'Taxing power: revenue-raising purpose',
          'Necessary and Proper: incident to enumerated powers'
        ],
        keyPoints: [
          'Commerce: Congress can regulate (1) channels, (2) instrumentalities, (3) activities with substantial effect on interstate commerce',
          'Lopez/Morrison: non-economic activity requires jurisdictional hook or comprehensive scheme',
          'Spending: Congress can condition funds if conditions are clear and related',
          'Anti-commandeering: Congress cannot compel states to enact/enforce federal programs',
          'Taxing: broadly upheld if raises revenue, even with regulatory purpose',
          'Treaty power: can expand Congress\'s legislative authority',
          'War powers: Congress declares, President conducts'
        ],
        mnemonic: '"CST" - Commerce, Spending, Taxing (main federal powers)',
        cases: [
          { name: 'United States v. Lopez', holding: 'Gun-Free School Zones Act exceeded commerce power—possession of guns not economic activity' },
          { name: 'NFIB v. Sebelius', holding: 'Individual mandate not valid under commerce (can\'t compel activity) but upheld as tax' },
          { name: 'South Dakota v. Dole', holding: 'Spending conditions valid if related to federal interest and not coercive' }
        ],
        essayTip: 'Identify which federal power justifies the law. For commerce, use Lopez framework. For spending, apply Dole conditions. Address anti-commandeering if states involved.',
        mbeTip: 'MBE tests commerce power limits (economic vs. non-economic, aggregation). Remember: anti-commandeering prohibits forcing states to act, not preemption.'
      },
      {
        id: 'federalism',
        name: 'Federalism',
        rule: 'The Constitution creates a federal system with divided sovereignty. Federal law is supreme; states retain police powers.',
        elements: [
          'Supremacy Clause: federal law preempts conflicting state law',
          'Express preemption: statute explicitly preempts',
          'Implied preemption: field or conflict preemption',
          '10th Amendment: powers not delegated reserved to states'
        ],
        keyPoints: [
          'Dormant Commerce Clause: states cannot discriminate against or unduly burden interstate commerce',
          'Discrimination: virtually per se invalid unless necessary for important state interest',
          'Undue burden: balances state benefit against interstate commerce burden (Pike test)',
          'Market participant exception: state acting as buyer/seller can favor in-state',
          'State sovereign immunity: 11th Amendment bars suits against states in federal court',
          'Abrogation: Congress can abrogate state immunity under 14th Amendment (not commerce clause)',
          'Intergovernmental immunity: federal government immune from state regulation'
        ],
        mnemonic: '"DICE" - Discrimination, Interstate commerce, Conflict preemption, Express preemption',
        cases: [
          { name: 'McCulloch v. Maryland', holding: 'Federal supremacy; states cannot tax federal instrumentalities' },
          { name: 'Philadelphia v. New Jersey', holding: 'State cannot discriminate against out-of-state trash—dormant commerce violation' },
          { name: 'Printz v. United States', holding: 'Federal government cannot commandeer state officers to enforce federal law' }
        ],
        essayTip: 'For preemption, identify whether express or implied. For dormant commerce clause, first ask: discriminatory or merely burdensome? Apply appropriate test.',
        mbeTip: 'MBE tests dormant commerce clause frequently. Discriminatory law = strict scrutiny. Non-discriminatory = Pike balancing. Know market participant exception.'
      },
      {
        id: 'due-process',
        name: 'Due Process',
        rule: 'The 5th (federal) and 14th (state) Amendments protect against deprivation of life, liberty, or property without due process of law.',
        elements: [
          'Life, liberty, or property interest',
          'Procedural due process: what process is due?',
          'Substantive due process: is government action justified?'
        ],
        keyPoints: [
          'Procedural: Mathews v. Eldridge balancing (private interest, risk of error, government interest)',
          'Property interests: legitimate claim of entitlement (not unilateral expectation)',
          'Liberty interests: freedom from restraint, reputation plus, fundamental rights',
          'Substantive: fundamental rights get strict scrutiny; others get rational basis',
          'Fundamental rights: marriage, procreation, contraception, family, child-rearing, abortion (modified)',
          'Non-fundamental: rational basis (legitimate interest, rationally related)',
          'Incorporation: most Bill of Rights applies to states via 14th Amendment'
        ],
        mnemonic: '"MAPLE" - Marriage, Autonomy, Procreation, Liberty, Education (parental control)',
        cases: [
          { name: 'Mathews v. Eldridge', holding: 'Procedural due process requires balancing private interest, risk of error, government interest' },
          { name: 'Washington v. Glucksberg', holding: 'Substantive due process protects rights deeply rooted in history and tradition' },
          { name: 'Dobbs v. Jackson Women\'s Health', holding: 'Abortion not a fundamental right; states can regulate under rational basis' }
        ],
        essayTip: 'First identify the interest (life, liberty, property). For procedural DP, apply Mathews balancing. For substantive DP, determine if fundamental right and apply correct scrutiny.',
        mbeTip: 'MBE tests whether interest qualifies as "property" (need entitlement, not expectation) and level of scrutiny. Most regulations get rational basis.'
      },
      {
        id: 'equal-protection',
        name: 'Equal Protection',
        rule: 'The Equal Protection Clause prohibits states from denying equal protection of the laws. Level of scrutiny depends on classification.',
        elements: [
          'Government classification',
          'Level of scrutiny based on classification',
          'Strict scrutiny: necessary for compelling interest',
          'Intermediate scrutiny: substantially related to important interest',
          'Rational basis: rationally related to legitimate interest'
        ],
        keyPoints: [
          'Strict scrutiny: race, national origin, alienage (state), fundamental rights',
          'Intermediate: gender, legitimacy (illegitimacy)',
          'Rational basis: age, disability, wealth, everything else',
          'Intent required for strict/intermediate scrutiny claims',
          'Discriminatory effect alone insufficient—must show discriminatory purpose',
          'Affirmative action: strict scrutiny; diversity may be compelling (but no quotas)',
          'Alienage: state = strict; federal = rational basis (plenary power)'
        ],
        mnemonic: '"SIR" - Strict (race, national origin), Intermediate (gender), Rational (all else)',
        cases: [
          { name: 'Washington v. Davis', holding: 'Discriminatory purpose required—disparate impact alone insufficient' },
          { name: 'Craig v. Boren', holding: 'Gender discrimination gets intermediate scrutiny—substantially related to important interest' },
          { name: 'Students for Fair Admissions v. Harvard/UNC', holding: 'Race-conscious admissions violate Equal Protection—diversity interest cannot justify race preference' }
        ],
        essayTip: 'Identify the classification, determine scrutiny level, then apply that standard. For facial discrimination, classification is clear. For neutral law, prove discriminatory intent.',
        mbeTip: 'MBE tests classification and scrutiny level. Remember: age and disability only get rational basis. Gender gets intermediate. Intent required for suspect classes.'
      },
      {
        id: 'first-amendment',
        name: 'First Amendment',
        rule: 'The First Amendment protects freedom of speech, religion, press, assembly, and petition. Content-based restrictions get strict scrutiny.',
        elements: [
          'Government action (state action)',
          'Protected speech (or unprotected category)',
          'Content-based vs. content-neutral',
          'Apply appropriate scrutiny'
        ],
        keyPoints: [
          'Unprotected speech: incitement, fighting words, true threats, obscenity, child pornography',
          'Content-based: strict scrutiny (necessary to compelling interest, narrowly tailored)',
          'Content-neutral: intermediate scrutiny (significant interest, narrow tailoring, alternative channels)',
          'Public forum: strict scrutiny for content; reasonable TPM allowed',
          'Limited/designated forum: can limit by subject matter but not viewpoint',
          'Non-public forum: reasonable and viewpoint-neutral',
          'Prior restraints: presumptively unconstitutional, heavy burden on government',
          'Religion: no establishment, free exercise; neutrality and general applicability'
        ],
        mnemonic: '"FOTO" - Fighting words, Obscenity, True threats, Incitement (unprotected)',
        cases: [
          { name: 'Brandenburg v. Ohio', holding: 'Incitement requires (1) directed to producing, (2) imminent lawless action, (3) likely to produce it' },
          { name: 'Reed v. Town of Gilbert', holding: 'Sign code content-based on its face—strict scrutiny applies regardless of benign motive' },
          { name: 'Employment Division v. Smith', holding: 'Neutral, generally applicable laws don\'t violate Free Exercise even if burdening religion' }
        ],
        essayTip: 'Classify the speech first. Then determine if restriction is content-based (strict scrutiny) or content-neutral (intermediate). Always analyze TPM restrictions separately.',
        mbeTip: 'MBE tests forum analysis frequently. Know the difference between traditional public forum (sidewalks, parks) and limited public forum (school facilities).'
      }
    ]
  },

  // ============================================================================
  // 5. CIVIL PROCEDURE (MBE)
  // ============================================================================
  {
    id: 'civpro',
    name: 'Civ Pro',
    emoji: '⚡',
    mbe: true,
    desc: 'Federal court practice',
    topics: [
      {
        id: 'personal-jurisdiction',
        name: 'Personal Jurisdiction',
        rule: 'A court must have personal jurisdiction over the defendant. This requires (1) a statutory basis and (2) constitutional due process compliance.',
        elements: [
          'Statutory basis (long-arm statute)',
          'Constitutional due process: minimum contacts + fair play and substantial justice',
          'Purposeful availment',
          'Relatedness (specific) or continuous/systematic (general)',
          'Reasonableness factors'
        ],
        keyPoints: [
          'General jurisdiction: continuous and systematic contacts—"at home" (domicile, place of incorporation, principal place of business)',
          'Specific jurisdiction: minimum contacts + claim arises from those contacts',
          'Purposeful availment: D deliberately reached into forum',
          'Stream of commerce: split (O\'Connor—something more vs. Brennan—awareness sufficient)',
          'Internet: sliding scale from passive to interactive',
          'Consent: explicit, implied, waiver by not raising',
          'Tag jurisdiction: physical presence when served'
        ],
        mnemonic: '"PJ = MIC + FAIR" - Minimum contacts, Intentional/purposeful, Claim-related; Fair play factors',
        cases: [
          { name: 'International Shoe v. Washington', holding: 'Due process requires minimum contacts so suit doesn\'t offend traditional notions of fair play' },
          { name: 'World-Wide Volkswagen v. Woodson', holding: 'Foreseeability that product reaches forum insufficient—D must purposefully avail' },
          { name: 'Daimler AG v. Bauman', holding: 'General jurisdiction only where corporation is "at home"—incorporation or PPB' }
        ],
        essayTip: 'Always do two-step: (1) long-arm statute, (2) constitutional analysis. For specific jurisdiction, apply purposeful availment + relatedness + reasonableness.',
        mbeTip: 'MBE tests general vs. specific jurisdiction. For corporations, general jurisdiction is very limited after Daimler. Specific requires claim to arise from contacts.'
      },
      {
        id: 'subject-matter-jurisdiction',
        name: 'Subject Matter Jurisdiction',
        rule: 'Federal courts have limited SMJ: federal question (28 USC §1331) or diversity (28 USC §1332). Cannot be waived or consented to.',
        elements: [
          'Federal question: claim arising under federal law',
          'Diversity: complete diversity + amount in controversy > $75,000',
          'Supplemental jurisdiction: common nucleus of operative fact'
        ],
        keyPoints: [
          'Well-pleaded complaint rule: federal question must appear in plaintiff\'s claim, not defense',
          'Complete diversity: no plaintiff can be citizen of same state as any defendant',
          'Citizenship: individuals = domicile; corporations = state of incorporation AND principal place of business',
          'Amount in controversy: good faith allegation; can aggregate claims by single plaintiff against single defendant',
          'Supplemental jurisdiction (1367): related claims sharing common nucleus',
          'No supplemental jurisdiction for plaintiffs in diversity cases if destroys diversity',
          'Removal: defendant can remove from state to federal if federal SMJ exists'
        ],
        mnemonic: '"FD-AS" - Federal question, Diversity, Amount, Supplemental',
        cases: [
          { name: 'Louisville & Nashville R.R. v. Mottley', holding: 'Well-pleaded complaint rule—federal defense doesn\'t create federal question' },
          { name: 'Strawbridge v. Curtiss', holding: 'Complete diversity required—no plaintiff can share state citizenship with any defendant' },
          { name: 'United Mine Workers v. Gibbs', holding: 'Supplemental jurisdiction where claims arise from common nucleus of operative fact' }
        ],
        essayTip: 'Check both federal question and diversity. For diversity, analyze citizenship carefully (corporations have dual citizenship). Always check amount in controversy.',
        mbeTip: 'MBE loves testing corporate citizenship (TWO states) and complete diversity. Also tests supplemental jurisdiction limits under §1367(b).'
      },
      {
        id: 'venue',
        name: 'Venue',
        rule: 'Venue determines which district within a court system is proper. Different from jurisdiction—can be waived and transferred.',
        elements: [
          'District where any defendant resides (if all in same state)',
          'District where substantial events occurred',
          'Fallback: any district with personal jurisdiction'
        ],
        keyPoints: [
          'Corporate residence for venue = any district with PJ over corporation',
          'Transfer: convenience of parties and witnesses (§1404—proper to proper)',
          'Improper venue transfer: §1406—can transfer or dismiss',
          'Forum non conveniens: dismissal when adequate alternative forum exists',
          'Venue waivable—must be raised in first responsive pleading',
          'After transfer, transferee court applies transferor\'s choice of law (Van Dusen)'
        ],
        mnemonic: '"RES" - Residence, Events occurred, Substantial part',
        cases: [
          { name: 'Van Dusen v. Barrack', holding: 'Transfer under §1404 carries original court\'s choice of law with it' },
          { name: 'Atlantic Marine v. US District Court', holding: 'Forum selection clause enforced via §1404 transfer, not motion to dismiss' },
          { name: 'Piper Aircraft v. Reyno', holding: 'Forum non conveniens may dismiss even though foreign law less favorable to plaintiff' }
        ],
        essayTip: 'Venue is about convenience, not power. Analyze proper venue, then consider transfer motions. Remember forum selection clauses and their effect.',
        mbeTip: 'MBE tests venue waiver (must raise early) and transfer (1404 = proper to proper; 1406 = improper venue). Van Dusen choice of law rule is frequently tested.'
      },
      {
        id: 'erie-doctrine',
        name: 'Erie Doctrine',
        rule: 'In diversity cases, federal courts apply state substantive law and federal procedural law. Erie analysis determines classification.',
        elements: [
          'Is there a Federal Rule of Civil Procedure on point?',
          'If yes, apply FRCP if valid under REA (Hanna)',
          'If no FRCP, is state rule substantive or procedural?',
          'Apply Erie twin aims: forum shopping and inequitable administration'
        ],
        keyPoints: [
          'FRCP valid if "arguably procedural"—very deferential standard',
          'If no FRCP, apply "twin aims" test: discourage forum shopping, avoid inequitable administration',
          'Outcome-determinative: would applying federal rule cause different outcome?',
          'State law applies: statutes of limitation, burden of proof, elements of claim',
          'Federal law applies: privilege, pleading standards, summary judgment standard',
          'Substantive = bound up with rights and obligations; procedural = manner of enforcement'
        ],
        mnemonic: '"HEAP" - Hanna (FRCP valid?), Erie (substantive?), Aims (forum shopping?), Procedural (federal court procedures)',
        cases: [
          { name: 'Erie Railroad v. Tompkins', holding: 'No general federal common law; federal courts must apply state substantive law in diversity' },
          { name: 'Hanna v. Plumer', holding: 'If valid FRCP on point, apply it even if different from state rule; REA controls' },
          { name: 'Guaranty Trust v. York', holding: 'Outcome-determinative test: would choice of law affect litigation outcome?' }
        ],
        essayTip: 'Follow the decision tree: (1) Is there a FRCP? If yes, Hanna analysis. (2) If no FRCP, apply Erie twin aims. Don\'t conflate the two paths.',
        mbeTip: 'MBE tests whether to apply state or federal rule. If FRCP exists and is valid, apply it. Statutes of limitation are substantive (state law). Pleading standards are procedural (federal).'
      },
      {
        id: 'pleadings',
        name: 'Pleadings',
        rule: 'Pleadings must contain a short plain statement of the claim showing entitlement to relief (Rule 8). Heightened standard for fraud (Rule 9).',
        elements: [
          'Complaint: jurisdiction, short plain statement, demand for relief',
          'Answer: admit, deny, or lack information; affirmative defenses',
          'Reply: only if ordered by court',
          'Amendments: freely given when justice requires'
        ],
        keyPoints: [
          'Twombly/Iqbal: plausible claim, not just conceivable; court ignores conclusory statements',
          'Rule 9(b): fraud and mistake must be pled with particularity',
          'Rule 11: certification that pleading is not frivolous, well-grounded in fact',
          'Amendment as matter of right: 21 days after serving or 21 days after responsive pleading',
          'Relation back: amendment relates back if same transaction/occurrence',
          'New party: relation back requires same T/O + new party knew of suit + no prejudice',
          'Affirmative defenses: must be raised in answer or waived (statute of limitations, res judicata, etc.)'
        ],
        mnemonic: '"PITS" - Plausibility, Information showing claim, Transaction (relation back), Sanctions (Rule 11)',
        cases: [
          { name: 'Bell Atlantic v. Twombly', holding: 'Complaint must state plausible claim—facts suggesting agreement, not just parallel conduct' },
          { name: 'Ashcroft v. Iqbal', holding: 'Twombly applies to all civil cases; court ignores conclusory allegations' },
          { name: 'Conley v. Gibson', holding: 'Overruled by Twombly—"no set of facts" standard no longer applies' }
        ],
        essayTip: 'Apply Twombly/Iqbal plausibility test. Identify conclusory vs. factual allegations. For amendments, analyze timing and relation back carefully.',
        mbeTip: 'MBE tests Twombly/Iqbal plausibility standard and relation back doctrine. Remember: relation back to add parties requires mistake about identity and notice.'
      },
      {
        id: 'joinder',
        name: 'Joinder',
        rule: 'Rules 18-20 govern joinder of claims and parties. Must independently satisfy subject matter jurisdiction for each claim/party.',
        elements: [
          'Permissive joinder of parties (Rule 20): same transaction + common question',
          'Permissive joinder of claims (Rule 18): any claims once properly joined',
          'Compulsory counterclaim (Rule 13a): same transaction—must raise or waive',
          'Permissive counterclaim (Rule 13b): any claim—no waiver',
          'Crossclaim (Rule 13g): against co-party, same transaction'
        ],
        keyPoints: [
          'Rule 14 impleader: third-party defendant who may be liable to defendant',
          'Rule 19 required parties: complete relief impossible or would harm absentee\'s interests',
          'Rule 24 intervention: as of right (interest + impaired) or permissive (common question)',
          'Interpleader: statutory (minimal diversity, $500) vs. rule (complete diversity)',
          'Class actions: numerosity, commonality, typicality, adequacy; plus 23(b) category'
        ],
        mnemonic: '"COUNT" - Compulsory (same T/O), Optional claims, U = unlimited (Rule 18), New parties (Rule 20), Third-party (Rule 14)',
        cases: [
          { name: 'United States v. Union Gas', holding: 'Supplemental jurisdiction allows joinder but must check §1367(b) limits' },
          { name: 'Provident Bank v. Patterson', holding: 'Rule 19 required party analysis: prejudice factors, shaping relief' },
          { name: 'Wal-Mart v. Dukes', holding: 'Class certification requires significant proof that common question predominates' }
        ],
        essayTip: 'Map out the parties and claims. For each, check: (1) joinder rule requirements, (2) independent SMJ or supplemental jurisdiction. §1367(b) limits plaintiffs in diversity.',
        mbeTip: 'MBE heavily tests compulsory vs. permissive counterclaims. Compulsory = same transaction = must raise now or waive. Also tests supplemental jurisdiction limits.'
      },
      {
        id: 'discovery',
        name: 'Discovery',
        rule: 'Parties may discover any non-privileged matter relevant to a claim or defense, proportional to the needs of the case (Rule 26).',
        elements: [
          'Scope: relevant to claim/defense, proportional',
          'Privilege: attorney-client, work product',
          'Required disclosures: initial, expert, pretrial',
          'Discovery devices: depositions, interrogatories, requests for production, admissions'
        ],
        keyPoints: [
          'Attorney-client privilege: communication with lawyer for legal advice',
          'Work product: documents prepared in anticipation of litigation; qualified protection',
          'Fact work product: discoverable on showing substantial need and hardship',
          'Opinion work product: almost absolute protection',
          'Interrogatories: limited to 25 without leave',
          'Depositions: 10 per side, 7 hours each without leave',
          'Sanctions (Rule 37): motion to compel, then sanctions for non-compliance'
        ],
        mnemonic: '"RAPID" - Relevance, Attorney privilege, Proportionality, Initial disclosures, Depositions/documents',
        cases: [
          { name: 'Hickman v. Taylor', holding: 'Work product doctrine protects materials prepared in anticipation of litigation' },
          { name: 'Upjohn v. United States', holding: 'Attorney-client privilege covers communications with corporate employees' },
          { name: 'Zubulake v. UBS Warburg', holding: 'Duty to preserve electronically stored information once litigation reasonably anticipated' }
        ],
        essayTip: 'For privilege issues, identify the privilege and who holds it. Work product has two tiers—fact vs. opinion. Address proportionality for ESI discovery.',
        mbeTip: 'MBE tests work product vs. attorney-client privilege. Work product can be overcome by showing need; attorney-client is absolute unless waived.'
      },
      {
        id: 'summary-judgment',
        name: 'Summary Judgment',
        rule: 'Summary judgment is granted when there is no genuine dispute of material fact and movant is entitled to judgment as a matter of law (Rule 56).',
        elements: [
          'No genuine dispute',
          'Material fact (affects outcome)',
          'Movant entitled to judgment as matter of law'
        ],
        keyPoints: [
          'Court views facts in light most favorable to non-movant',
          'Moving party bears initial burden of showing no genuine dispute',
          'Non-movant must then show specific facts demonstrating genuine dispute',
          'Cannot rely on mere allegations—must point to evidence',
          'Credibility determinations for jury, not judge',
          'Partial summary judgment: on liability only, leaving damages for trial',
          'Standard: would reasonable jury find for non-moving party?'
        ],
        mnemonic: '"GEMS" - Genuine dispute, Evidence required, Material facts, Summary judgment',
        cases: [
          { name: 'Celotex Corp. v. Catrett', holding: 'Moving party can meet burden by showing absence of evidence on essential element' },
          { name: 'Anderson v. Liberty Lobby', holding: '"Material" fact affects outcome; "genuine" requires sufficient evidence for jury to find for non-movant' },
          { name: 'Matsushita v. Zenith', holding: 'Non-movant must show more than "some metaphysical doubt"—evidence must be significantly probative' }
        ],
        essayTip: 'Apply the summary judgment trilogy. Identify the material facts in dispute. Remember: court doesn\'t weigh evidence or judge credibility—only asks if jury could reasonably find for non-movant.',
        mbeTip: 'MBE tests the standard: non-movant must present evidence, not just allegations. View facts in non-movant\'s favor. Credibility = jury question, not summary judgment.'
      },
      {
        id: 'res-judicata',
        name: 'Claim Preclusion (Res Judicata)',
        rule: 'A final judgment on the merits bars relitigation of the same claim between the same parties or their privies.',
        elements: [
          'Same claim (transaction/occurrence)',
          'Same parties (or privies)',
          'Final judgment on the merits',
          'Valid jurisdiction in first suit'
        ],
        keyPoints: [
          'Same claim: majority uses transactional test—same transaction or occurrence',
          'Final judgment: need not be after trial; dismissal with prejudice qualifies',
          'On the merits: default judgment = yes; dismissal for jurisdiction/venue = no',
          'Privity: substantive legal relationship (successive property owners, representation)',
          'Bars claims that were or could have been raised',
          'Applies to compulsory counterclaims that should have been raised'
        ],
        mnemonic: '"SFFP" - Same claim, Final judgment, Full and fair opportunity, Parties same',
        cases: [
          { name: 'Rush v. City of Maple Heights', holding: 'Single accident = single claim—cannot split personal injury and property damage' },
          { name: 'Federated Department Stores v. Moitie', holding: 'Claim preclusion bars relitigation even if first judgment was wrong on the law' },
          { name: 'Taylor v. Sturgell', holding: 'No "virtual representation"—privity requires formal relationship' }
        ],
        essayTip: 'Apply the elements methodically. The "same claim" analysis often turns on whether claims arise from same transaction. Discuss what constitutes "final judgment on merits."',
        mbeTip: 'MBE tests whether first judgment was "on the merits." Jurisdictional dismissals are NOT on merits. Also tests claim-splitting (can\'t split same transaction into multiple suits).'
      },
      {
        id: 'collateral-estoppel',
        name: 'Issue Preclusion (Collateral Estoppel)',
        rule: 'A final judgment precludes relitigation of issues actually litigated and necessarily decided in the prior action.',
        elements: [
          'Same issue',
          'Actually litigated',
          'Necessarily decided (essential to judgment)',
          'Full and fair opportunity to litigate',
          'Used against party who litigated (or mutuality exception)'
        ],
        keyPoints: [
          'Narrower than claim preclusion—only specific issues, not whole claims',
          'Actually litigated: default judgments don\'t qualify',
          'Necessarily decided: if judgment could rest on alternative grounds, neither preclusive',
          'Defensive use: new defendant uses prior judgment against plaintiff',
          'Offensive use: new plaintiff uses prior judgment against defendant',
          'Offensive use disfavored: court has discretion (wait-and-see plaintiffs)',
          'Mutuality abandoned in most jurisdictions'
        ],
        mnemonic: '"ALIEN" - Actually litigated, Issue same, Essential to judgment, Necessarily decided',
        cases: [
          { name: 'Parklane Hosiery v. Shore', holding: 'Offensive non-mutual collateral estoppel allowed in court\'s discretion' },
          { name: 'Blonder-Tongue v. University of Illinois', holding: 'Defensive non-mutual collateral estoppel allowed' },
          { name: 'Illinois Central v. Parks', holding: 'Alternative holdings—neither preclusive because either could have supported judgment' }
        ],
        essayTip: 'Distinguish from claim preclusion. For issue preclusion, the specific issue must have been actually litigated and essential to the judgment. Address mutuality and offensive/defensive use.',
        mbeTip: 'MBE tests "actually litigated" (default judgments fail) and "necessarily decided" (alternative holdings). Also tests offensive vs. defensive use distinctions.'
      }
    ]
  },

  // ============================================================================
  // 6. EVIDENCE (MBE)
  // ============================================================================
  {
    id: 'evidence',
    name: 'Evidence',
    emoji: '🔍',
    mbe: true,
    desc: 'What comes into court',
    topics: [
      {
        id: 'relevance',
        name: 'Relevance',
        rule: 'Evidence is relevant if it has any tendency to make a fact of consequence more or less probable than without the evidence (FRE 401-403).',
        elements: [
          'Probative value: tendency to prove/disprove',
          'Materiality: fact of consequence to the case',
          'Rule 403: exclude if probative value substantially outweighed by unfair prejudice'
        ],
        keyPoints: [
          'Low threshold for relevance—"any tendency"',
          'Rule 403 balancing: unfair prejudice, confusion, misleading, delay, cumulative',
          'Rule 403 favors admissibility—"substantially outweighed"',
          'Conditional relevance (Rule 104(b)): sufficient to support finding of preliminary fact',
          'Limited admissibility (Rule 105): admitted for one purpose, instruction to jury',
          'Stipulations: may reduce probative value but don\'t make evidence inadmissible'
        ],
        mnemonic: '"PUMA" - Probative value, Unfair prejudice, Materiality, Any tendency',
        cases: [
          { name: 'Old Chief v. United States', holding: 'Prosecution can refuse stipulation to prove prior conviction with full record for evidentiary richness' },
          { name: 'Knapp v. State', holding: 'Evidence relevant even if offered to prove declarant\'s state of mind, not truth' },
          { name: 'Sherrod v. Berry', holding: 'Hindsight information (suspect unarmed) irrelevant to officer\'s reasonable belief at time' }
        ],
        essayTip: 'Relevance is the first hurdle. If relevant, apply Rule 403 balancing. Don\'t forget to address limiting instructions when evidence is admissible for one purpose only.',
        mbeTip: 'MBE tests Rule 403 balancing. Remember: "substantially outweighed"—scale tilts toward admission. Unfair prejudice ≠ harmful to party; it means emotional/irrational impact.'
      },
      {
        id: 'character-evidence',
        name: 'Character Evidence',
        rule: 'Character evidence is generally inadmissible to prove conduct in conformity (propensity). Exceptions exist for criminal defendants, victims, and witnesses.',
        elements: [
          'Character to prove conduct: generally prohibited (FRE 404(a))',
          'Criminal defendant exception: D opens door with reputation/opinion',
          'Victim\'s character: D can offer in criminal case',
          'Witness impeachment: always allowed'
        ],
        keyPoints: [
          'Methods of proof: reputation, opinion; specific acts only on cross-examination',
          'MIMIC evidence (404(b)): other acts for Motive, Intent, absence of Mistake, Identity, Common plan',
          '404(b) requires: proper purpose, relevant, 403 balancing, limiting instruction upon request',
          'Sexual assault cases (413-415): prior sexual offenses admissible',
          'Rape shield (412): victim\'s past sexual behavior generally inadmissible',
          'Habit (406): routine response to specific situation, admissible to prove conformity'
        ],
        mnemonic: '"MIMIC" - Motive, Intent, absence of Mistake, Identity, Common scheme/plan',
        cases: [
          { name: 'Michelson v. United States', holding: 'Character witness can be cross-examined about specific acts to test knowledge of reputation' },
          { name: 'Huddleston v. United States', holding: '404(b) evidence admitted if jury could reasonably find D committed prior act (Rule 104(b))' },
          { name: 'Olden v. Kentucky', holding: 'Rape shield cannot exclude evidence essential to defendant\'s constitutional rights' }
        ],
        essayTip: 'Character evidence analysis is multi-step: (1) Is this propensity evidence? (2) Does an exception apply? (3) What form of proof is allowed? (4) Apply 403 balancing.',
        mbeTip: 'MBE heavily tests 404(b) MIMIC exceptions. Remember: must be for non-propensity purpose. Also tests when criminal D "opens the door" to character evidence.'
      },
      {
        id: 'hearsay',
        name: 'Hearsay',
        rule: 'Hearsay is an out-of-court statement offered to prove the truth of the matter asserted. Generally inadmissible unless exception applies (FRE 801-807).',
        elements: [
          'Out-of-court statement',
          'Offered for truth of the matter asserted',
          'By a declarant (human)',
          'Not within exception or exemption'
        ],
        keyPoints: [
          'Not hearsay if not offered for truth: verbal acts, effect on listener, state of mind, impeachment',
          'Prior statements by witness (801(d)(1)): inconsistent (under oath), consistent (rebut recent fabrication), identification',
          'Admissions by party-opponent (801(d)(2)): party\'s own statement, adoptive, agent, co-conspirator',
          'Hearsay exceptions: present sense impression, excited utterance, state of mind, medical diagnosis',
          'Unavailability required: former testimony, dying declaration, statement against interest, forfeiture',
          'Residual exception (807): trustworthiness, necessity, notice'
        ],
        mnemonic: '"TOPMOST" for non-hearsay: Truth not purpose, Operative words, Perception/knowledge, Mental state, Offered to show effect, State of mind, Then-existing condition',
        cases: [
          { name: 'Bourjaily v. United States', holding: 'Co-conspirator statements: judge determines conspiracy existed by preponderance under Rule 104(a)' },
          { name: 'Tome v. United States', holding: 'Prior consistent statement admissible only if made before motive to fabricate arose' },
          { name: 'Crawford v. Washington', holding: 'Testimonial hearsay violates Confrontation Clause unless declarant unavailable and D had prior cross opportunity' }
        ],
        essayTip: 'Systematic approach: (1) Is it hearsay? (2) If yes, exemption under 801(d)? (3) If not, exception under 803-804? (4) If declarant available/unavailable? (5) Confrontation Clause in criminal cases.',
        mbeTip: 'MBE loves testing what is NOT hearsay (verbal acts, effect on listener). Also tests which exceptions require unavailability (804) vs. don\'t require it (803).'
      },
      {
        id: 'witnesses',
        name: 'Witnesses',
        rule: 'All persons are competent to testify. Witness may be impeached by bias, prior inconsistent statement, contradiction, character for untruthfulness, and capacity.',
        elements: [
          'Personal knowledge (Rule 602)',
          'Oath or affirmation (Rule 603)',
          'Competency (Rule 601)',
          'Impeachment methods'
        ],
        keyPoints: [
          'Any party can impeach any witness, including own witness',
          'Impeachment methods: bias, prior inconsistent statement, specific contradiction, character for untruthfulness, sensory defects',
          'Prior conviction (609): crime of dishonesty (automatic), felony (balancing)',
          'Specific instances of conduct (608(b)): can ask on cross, no extrinsic evidence',
          'Rehabilitation: prior consistent statement, good character for truth, explanation',
          'Lay opinion (701): rationally based on perception, helpful',
          'Expert opinion (702): qualified, reliable methodology, based on sufficient facts'
        ],
        mnemonic: '"BICCC" - Bias, Inconsistent statements, Contradiction, Character, Capacity',
        cases: [
          { name: 'United States v. Abel', holding: 'Bias is always relevant to credibility and can be shown by extrinsic evidence' },
          { name: 'Daubert v. Merrell Dow', holding: 'Trial judge gatekeeps expert testimony for reliability: testing, peer review, error rate, acceptance' },
          { name: 'Kumho Tire v. Carmichael', holding: 'Daubert applies to all expert testimony, not just scientific' }
        ],
        essayTip: 'Organize impeachment by method. Remember: extrinsic evidence allowed for bias and prior inconsistent (if foundation), but not for specific instances of conduct.',
        mbeTip: 'MBE tests when extrinsic evidence is allowed. Bias = yes. Prior inconsistent = yes (with foundation). Character for truthfulness via specific acts = no extrinsic, cross only.'
      },
      {
        id: 'privileges',
        name: 'Privileges',
        rule: 'Privileges protect confidential communications in certain relationships. Federal courts use common law; state courts may vary.',
        elements: [
          'Attorney-client: communication with lawyer for legal advice',
          'Spousal: testimonial immunity and confidential communications',
          'Physician-patient: varies by jurisdiction, usually state courts',
          'Psychotherapist-patient: recognized federally (Jaffee v. Redmond)'
        ],
        keyPoints: [
          'Attorney-client: client holds privilege; survives death; corporations included',
          'Crime-fraud exception: no privilege if consultation to commit crime/fraud',
          'Spousal testimonial: one spouse cannot be compelled to testify against other (criminal)',
          'Spousal communications: confidential communications during marriage protected',
          'Work product: qualified protection for litigation materials (broader than privilege)',
          'Waiver: voluntary disclosure to third party, failure to claim',
          'Clergy-penitent: communications to clergy in spiritual capacity'
        ],
        mnemonic: '"CAPS" - Client privilege (attorney), Adverse spousal testimony, Psychotherapist, Spiritual (clergy)',
        cases: [
          { name: 'Upjohn v. United States', holding: 'Corporate attorney-client privilege covers employee communications for legal advice' },
          { name: 'Jaffee v. Redmond', holding: 'Federal psychotherapist-patient privilege exists under FRE 501' },
          { name: 'Trammel v. United States', holding: 'Witness spouse holds testimonial privilege, not defendant spouse' }
        ],
        essayTip: 'Identify which privilege applies and who holds it. Analyze all elements. Check for exceptions (crime-fraud) and waiver. In federal diversity cases, state privilege law applies.',
        mbeTip: 'MBE tests who holds the privilege. Client holds attorney-client. Witness spouse holds testimonial privilege. Both spouses hold marital communications privilege.'
      },
      {
        id: 'authentication',
        name: 'Authentication & Best Evidence',
        rule: 'Evidence must be authenticated before admission. Best evidence rule requires original document to prove contents.',
        elements: [
          'Authentication: evidence sufficient to support finding of genuineness (Rule 901)',
          'Self-authentication: certain documents presumed genuine (Rule 902)',
          'Best evidence: original required to prove content (Rule 1002)',
          'Exceptions: original lost/destroyed, not obtainable, opponent\'s possession'
        ],
        keyPoints: [
          'Authentication methods: testimony of witness with knowledge, handwriting comparison, distinctive characteristics',
          'Voice identification: opinion based on familiarity',
          'Ancient document: 20+ years old, found where expected, no suspicion',
          'Self-authenticating: certified copies, official publications, newspapers, trade inscriptions',
          'Best evidence: applies when proving content of writing/recording',
          'Does not apply: fact exists independent of document; witness has personal knowledge',
          'Duplicates: generally admissible unless genuine question or unfair'
        ],
        mnemonic: '"WADC" - Witness with knowledge, Ancient document, Distinctive characteristics, Comparison',
        cases: [
          { name: 'United States v. Blackwell', holding: 'Phone records self-authenticating under business records certification' },
          { name: 'Seiler v. Lucasfilm', holding: 'Best evidence rule excludes testimony about destroyed originals when bad faith destruction' },
          { name: 'Meyers v. United States', holding: 'Best evidence applies when witness testifies about what document says, not independent knowledge' }
        ],
        essayTip: 'Authentication is low threshold—sufficient to support a finding. Best evidence applies only when proving contents. If witness has independent knowledge, best evidence doesn\'t apply.',
        mbeTip: 'MBE tests when best evidence rule applies. Key: is proof offered about the CONTENT of a writing? If so, best evidence. If witness has independent knowledge of the event, no.'
      }
    ]
  },

  // ============================================================================
  // 7. REAL PROPERTY (MBE)
  // ============================================================================
  {
    id: 'property',
    name: 'Property',
    emoji: '🏠',
    mbe: true,
    desc: 'Estates, landlord-tenant',
    topics: [
      {
        id: 'estates',
        name: 'Estates in Land',
        rule: 'Estates define the duration and conditions of land ownership. Freehold estates include fee simple, fee tail, and life estate.',
        elements: [
          'Fee simple absolute: "to A and his heirs" — infinite duration, fully transferable',
          'Fee simple defeasible: may end upon specified event',
          'Life estate: duration measured by someone\'s life',
          'Fee tail: "to A and the heirs of his body" — abolished in most states'
        ],
        keyPoints: [
          'Fee simple determinable: "so long as," "while," "during" — automatic reversion (possibility of reverter)',
          'Fee simple subject to condition subsequent: "but if," "provided that" — requires reentry (right of entry)',
          'Fee simple subject to executory limitation: ends and passes to third party (executory interest)',
          'Life estate: can be pur autre vie (measured by another\'s life)',
          'Waste doctrine: life tenant must not commit affirmative, permissive, or ameliorative waste',
          'Modern presumption: ambiguous grant creates fee simple absolute'
        ],
        mnemonic: '"DALE" - Determinable (automatic), And condition subsequent (reentry), Life estate, Executory limitation',
        cases: [
          { name: 'White v. Brown', holding: 'Ambiguous grant ("have and enjoy") construed as fee simple, not life estate' },
          { name: 'Mahrenholz v. County Board', holding: 'Language "to be used for school purposes only" created fee simple determinable, not condition subsequent' },
          { name: 'Woodrick v. Wood', holding: 'Life tenant commits affirmative waste by selling resources beyond reasonable use' }
        ],
        essayTip: 'Identify the estate by language used. "So long as" = determinable with possibility of reverter. "But if/provided that" = condition subsequent with right of entry.',
        mbeTip: 'MBE tests distinguishing determinable from condition subsequent. Key difference: determinable ends automatically; condition subsequent requires grantor action.'
      },
      {
        id: 'future-interests',
        name: 'Future Interests',
        rule: 'Future interests are present property rights to future possession. Created in grantor (reversion, possibility of reverter, right of entry) or grantee (remainder, executory interest).',
        elements: [
          'Reversion: grantor transfers less than had',
          'Possibility of reverter: follows fee simple determinable',
          'Right of entry: follows fee simple subject to condition subsequent',
          'Remainder: follows natural termination of prior estate',
          'Executory interest: cuts short prior estate'
        ],
        keyPoints: [
          'Vested remainder: ascertained person, no condition precedent',
          'Contingent remainder: unascertained person OR condition precedent',
          'Vested subject to open: class gift that may expand',
          'Shifting executory interest: cuts short prior grantee\'s estate',
          'Springing executory interest: cuts short grantor\'s estate (follows gap)',
          'Rule Against Perpetuities: interest must vest within 21 years after relevant life (common law)',
          'RAP applies to: contingent remainders, executory interests, class gifts, options to purchase'
        ],
        mnemonic: '"VIP-SEC" - Vested (indefeasible, subject to open, subject to divestment), Possibilities, Springing, Executory, Contingent',
        cases: [
          { name: 'Symphony Space v. Pergola Properties', holding: 'Option to purchase violates RAP if not exercised within perpetuities period' },
          { name: 'Jee v. Audley', holding: 'RAP analyzed at time of grant—"fertile octogenarian" and "unborn widow" problems' },
          { name: 'First National Bank v. Elston', holding: 'Class gift vests when class closes and all conditions are met' }
        ],
        essayTip: 'Map out the interests created. For remainders, determine vested vs. contingent. Apply RAP to contingent remainders and executory interests. Watch for class gifts.',
        mbeTip: 'MBE tests RAP heavily. Remember: interests in grantor (reversion, possibility of reverter, right of entry) are NOT subject to RAP. Watch for "fertile octogenarian" trap.'
      },
      {
        id: 'concurrent-ownership',
        name: 'Concurrent Ownership',
        rule: 'Concurrent ownership includes tenancy in common, joint tenancy, and tenancy by the entirety. Each has different rights of survivorship and severance.',
        elements: [
          'Tenancy in common: default, no survivorship, freely transferable',
          'Joint tenancy: four unities (TTIP), right of survivorship, severable',
          'Tenancy by entirety: married couples, survivorship, cannot unilaterally sever'
        ],
        keyPoints: [
          'Four unities for JT: Time, Title, Interest, Possession',
          'Severance of JT: conveyance, mortgage (title theory), lease (minority)',
          'Severance converts to tenancy in common',
          'Tenancy by entirety: protected from individual creditors (most states)',
          'Partition: by agreement, by sale (forced), in kind (physical division)',
          'Accounting: co-tenant can recover for ouster, rent from third parties, necessary repairs',
          'Modern presumption favors tenancy in common'
        ],
        mnemonic: '"TTIP" - Time, Title, Interest, Possession (joint tenancy unities)',
        cases: [
          { name: 'Riddle v. Harmon', holding: 'Joint tenant can sever by conveyance to self; strawman no longer required' },
          { name: 'Delfino v. Vealencis', holding: 'Partition in kind preferred over partition by sale if feasible' },
          { name: 'Sawada v. Endo', holding: 'Tenancy by entirety protected from individual creditors during marriage' }
        ],
        essayTip: 'Identify the type of concurrent ownership first. Then analyze severance possibilities and partition rights. Address rights and duties between co-tenants.',
        mbeTip: 'MBE tests whether JT was created (need TTIP + express language) and whether severed. Mortgage severs JT in title theory states only. Death of JT severs their share.'
      },
      {
        id: 'landlord-tenant',
        name: 'Landlord-Tenant',
        rule: 'A lease creates a non-freehold estate with landlord and tenant duties. Four types: term of years, periodic, at will, at sufferance.',
        elements: [
          'Term of years: fixed duration, ends automatically',
          'Periodic tenancy: automatically renews unless notice',
          'Tenancy at will: either party can terminate anytime',
          'Tenancy at sufferance: holdover tenant'
        ],
        keyPoints: [
          'Periodic tenancy notice: equal to period, max 6 months, some states 30 days',
          'Tenant duties: pay rent, avoid waste',
          'Landlord duties: deliver possession, quiet enjoyment, implied warranty of habitability (residential)',
          'Constructive eviction: substantial interference, tenant vacates within reasonable time',
          'Implied warranty of habitability: premises fit for living, cannot waive, remedies include repair and deduct',
          'Assignment: transfer entire remaining term; sublease: transfer less than remaining',
          'Landlord consent clauses: cannot unreasonably withhold (modern rule)'
        ],
        mnemonic: '"PAWS" - Periodic (renews), At will (no term), Years (fixed), Sufferance (holdover)',
        cases: [
          { name: 'Reste Realty v. Cooper', holding: 'Constructive eviction when landlord\'s act substantially interferes with use and enjoyment' },
          { name: 'Javins v. First National Realty', holding: 'Implied warranty of habitability in residential leases; housing code sets standard' },
          { name: 'Ernst v. Conditt', holding: 'Assignment vs. sublease turns on whether entire term transferred' }
        ],
        essayTip: 'Identify tenancy type first. Then analyze duties and remedies. For habitability issues, distinguish residential from commercial. Address assignment/sublease rules.',
        mbeTip: 'MBE tests assignment vs. sublease distinction. Also tests when constructive eviction applies (must vacate) vs. breach of IWH (can stay and remedies apply).'
      },
      {
        id: 'easements',
        name: 'Easements',
        rule: 'An easement is a non-possessory interest in land that allows holder to use another\'s land for a specific purpose.',
        elements: [
          'Express easement: writing required (Statute of Frauds)',
          'Easement by implication: prior use, apparent, necessary',
          'Easement by necessity: strict necessity at time of severance',
          'Prescriptive easement: like adverse possession (open, continuous, hostile)'
        ],
        keyPoints: [
          'Easement appurtenant: benefits dominant estate, runs with land',
          'Easement in gross: benefits person, generally commercial easements transferable',
          'Negative easements: light, air, support, stream water (limited categories)',
          'Termination: merger, release, abandonment (intent + act), prescription, necessity ends',
          'Scope: determined by grant or prescription; can\'t expand unilaterally',
          'License: revocable permission; irrevocable if coupled with interest or estoppel'
        ],
        mnemonic: '"PINE" - Prescription, Implication, Necessity, Express (creation methods)',
        cases: [
          { name: 'Van Sandt v. Royster', holding: 'Implied easement from prior use: continuous, apparent, reasonably necessary' },
          { name: 'Othen v. Rosier', holding: 'Easement by necessity requires strict necessity at time of severance' },
          { name: 'Preseault v. United States', holding: 'Rails-to-trails conversion may be taking if easement scope exceeded' }
        ],
        essayTip: 'Analyze creation method first. Then determine if appurtenant or in gross. Address scope limitations and termination possibilities.',
        mbeTip: 'MBE tests implied easement elements and prescriptive easement requirements. Remember: prescriptive easement is like adverse possession but for use, not possession.'
      },
      {
        id: 'covenants',
        name: 'Covenants & Servitudes',
        rule: 'Real covenants and equitable servitudes are promises regarding land use that may run with the land and bind successors.',
        elements: [
          'Real covenant (damages): writing, intent to run, touch and concern, horizontal and vertical privity, notice',
          'Equitable servitude (injunction): writing, intent to run, touch and concern, notice',
          'Implied reciprocal servitude: common scheme, notice'
        ],
        keyPoints: [
          'Real covenant requires privity; equitable servitude does not',
          'Horizontal privity: grantor-grantee relationship at creation',
          'Vertical privity: successor to entire interest (real covenant); any interest (equitable servitude)',
          'Touch and concern: affects parties as landowners',
          'Notice: actual, record, or inquiry notice',
          'Common scheme: implied servitude from uniform development plan',
          'Termination: merger, release, changed conditions, abandonment, estoppel'
        ],
        mnemonic: '"WITHIN" - Writing, Intent, Touch and concern, Horizontal privity (real covenant), In privity (vertical), Notice',
        cases: [
          { name: 'Tulk v. Moxhay', holding: 'Equity will enforce covenant if successor has notice, even without privity' },
          { name: 'Sanborn v. McLean', holding: 'Implied reciprocal negative servitude from common scheme; inquiry notice' },
          { name: 'Neponsit v. Emigrant Bank', holding: 'Homeowner association dues touch and concern land' }
        ],
        essayTip: 'Distinguish real covenant (law, damages) from equitable servitude (equity, injunction). For real covenant, analyze all privity requirements. Both need notice to bind successors.',
        mbeTip: 'MBE tests the privity requirements. Real covenant needs horizontal AND vertical privity. Equitable servitude only needs notice—no privity required. This distinction is heavily tested.'
      },
      {
        id: 'recording-acts',
        name: 'Recording Acts',
        rule: 'Recording acts determine priority among competing claims to land. Three types: race, notice, and race-notice.',
        elements: [
          'Race: first to record wins (regardless of notice)',
          'Notice: subsequent BFP without notice wins (regardless of recording)',
          'Race-notice: subsequent BFP who records first wins (most common)'
        ],
        keyPoints: [
          'BFP requirements: purchaser for value, without notice, before recording (for notice statute)',
          'Notice types: actual, record (chain of title), inquiry (possession)',
          'Chain of title problems: wild deed (outside chain), late-recorded deed, early-recorded deed',
          'Shelter rule: person who takes from BFP gets BFP\'s protection',
          'Recording does not validate defective deed',
          'Quitclaim grantee can still be BFP (majority rule)'
        ],
        mnemonic: '"RAN" - Race (first records), And notice (BFP), Notice (BFP wins)',
        cases: [
          { name: 'Luthi v. Evans', holding: '"Mother Hubbard" clause (all my land in county) insufficient to give notice of specific parcel' },
          { name: 'Orr v. Byers', holding: 'Judgment creditor not a BFP—no value given' },
          { name: 'Daniels v. Anderson', holding: 'Installment buyer is BFP to extent of payments made before notice' }
        ],
        essayTip: 'Identify the type of recording statute. Then determine if subsequent taker is BFP (value + without notice). Analyze each type of notice. Apply shelter rule if needed.',
        mbeTip: 'MBE tests notice types heavily. Inquiry notice from possession is frequently tested. Also tests chain of title problems—deed recorded too early or too late may not give notice.'
      },
      {
        id: 'mortgages',
        name: 'Mortgages',
        rule: 'A mortgage is a security interest in land that secures payment of a debt. Mortgagor is debtor; mortgagee is lender.',
        elements: [
          'Debt (note)',
          'Security interest in land (mortgage)',
          'Mortgagor\'s equity of redemption',
          'Foreclosure rights'
        ],
        keyPoints: [
          'Equity of redemption: mortgagor\'s right to redeem before foreclosure sale',
          'Clogging: cannot waive equity of redemption in mortgage',
          'Foreclosure: judicial (all states) or power of sale (some states)',
          'Deficiency judgment: debt exceeds sale price; debtor liable for difference',
          'Purchase money mortgage: priority over earlier liens, even if recorded later',
          'Transfer of mortgaged property: assumption (personal liability) vs. subject to (no personal liability)',
          'Due-on-sale clause: enforceable—lender can accelerate on transfer',
          'Recording: mortgage follows recording act priorities'
        ],
        mnemonic: '"FADE" - Foreclosure, Acceleration, Deficiency, Equity of redemption',
        cases: [
          { name: 'Sebastian v. Floyd', holding: 'Installment land contract treated like mortgage—buyer has equity of redemption' },
          { name: 'Bean v. Walker', holding: 'Sale leaseback can be disguised mortgage if intent was financing' },
          { name: 'Murphy v. Financial Development Corp.', holding: 'Foreclosure sale must be commercially reasonable; inadequate price may be set aside' }
        ],
        essayTip: 'Identify all parties and their interests. Analyze priority using recording acts. Address equity of redemption and whether it can be exercised. Calculate any deficiency.',
        mbeTip: 'MBE tests priority among mortgages and purchase money mortgage exception. Also tests assumption vs. subject to—key distinction is personal liability.'
      }
    ]
  },

  // ============================================================================
  // 8. COMMUNITY PROPERTY (CA)
  // ============================================================================
  {
    id: 'community',
    name: 'Community Property',
    emoji: '💍',
    ca: true,
    desc: 'Marital property (CA)',
    topics: [
      {
        id: 'classification',
        name: 'Property Classification',
        rule: 'All property acquired during marriage while domiciled in California is presumed community property. Property acquired before marriage or by gift/inheritance is separate.',
        elements: [
          'Community property: acquired during marriage by efforts of either spouse',
          'Separate property: acquired before marriage, by gift, by inheritance, after separation',
          'Quasi-community property: property that would have been CP if acquired in CA'
        ],
        keyPoints: [
          'Time of acquisition controls: when right to property arose, not when received',
          'Earnings during marriage: community property',
          'Rents and profits from SP: community property in CA',
          'General presumption: all property acquired during marriage is CP',
          'Married Woman\'s Special Presumption: pre-1975 title in wife\'s name alone presumed SP',
          'Tracing: SP funds used to acquire property remains SP if traceable',
          'Commingling: mixed funds—community property presumption unless traced'
        ],
        mnemonic: '"GIST" - Gift (SP), Inheritance (SP), Separate earnings before/after, Traced funds',
        cases: [
          { name: 'Marriage of Bonds', holding: 'Transmutation must be in writing with express declaration; prenup re: earnings effective' },
          { name: 'Marriage of Lucas', holding: 'Family Code 2581: property in joint form presumed CP for division purposes' },
          { name: 'Marriage of Valli', holding: 'Transmutation requires express declaration that character is being changed' }
        ],
        essayTip: 'Start with the general presumption of CP. Then analyze each asset: when acquired, source of funds, any transmutation. Trace carefully through commingled accounts.',
        mbeTip: 'Always ask: (1) When was it acquired? (2) What was the source? (3) Has it been transmuted? If during marriage with earnings = CP presumption.'
      },
      {
        id: 'management',
        name: 'Management & Control',
        rule: 'Either spouse, acting alone, has equal management and control over community property, with specific exceptions for certain transactions.',
        elements: [
          'Equal management: either spouse can act',
          'Joinder required: real property, gifts, furnishing bond',
          'Business exception: operating spouse has primary management'
        ],
        keyPoints: [
          'Real property: both spouses must join in sale, lease > 1 year, or encumbrance',
          'Personal property: either spouse can manage without consent',
          'Gifts of CP: both spouses must consent (except ordinary gifts)',
          'Community business: spouse operating has primary management',
          'Duty of good faith: fiduciary duty between spouses regarding CP',
          'Personal injury awards: injured spouse has sole management until divorce',
          'Creditors: CP generally liable for debts of either spouse incurred during marriage'
        ],
        mnemonic: '"SELF" - Sole management exceptions: personal injury; Equal management rule; Liability to creditors; Fiduciary duty',
        cases: [
          { name: 'Marriage of Leni', holding: 'Spouse\'s fraudulent gift of CP to paramour can be set aside completely' },
          { name: 'Droeger v. Friedman', holding: 'Fiduciary duty requires disclosure of material facts in CP transactions' },
          { name: 'Marriage of Feldman', holding: 'Breach of fiduciary duty may warrant unequal division of CP' }
        ],
        essayTip: 'Identify whether the transaction requires joinder. For unilateral actions affecting CP, analyze whether the acting spouse breached fiduciary duty.',
        mbeTip: 'Remember: real property ALWAYS requires both spouses to join. Personal property can be managed by either spouse alone. Breach of fiduciary duty has remedies at divorce.'
      },
      {
        id: 'division',
        name: 'Division Upon Dissolution',
        rule: 'Upon divorce, community property must be divided equally between the spouses. Separate property confirmed to owner spouse.',
        elements: [
          'Equal division required for CP',
          'Characterization of each asset',
          'Reimbursements for SP contributions to CP and vice versa',
          'Special rules for retirement benefits, education, personal injury'
        ],
        keyPoints: [
          'Equal division: each spouse receives 50% of CP value',
          'In-kind vs. cash: court has discretion on method',
          'Reimbursement: SP contribution to CP acquisition gets right to reimbursement (Moore/Marsden)',
          'Moore/Marsden: apportions property acquired with mixed CP and SP funds',
          'Retirement benefits: CP portion determined by time rule',
          'Education: CP contributions to education reimbursed if community hasn\'t benefited',
          'Personal injury: assigned entirely to injured spouse unless justice requires otherwise',
          'Debts: community debts divided equally'
        ],
        mnemonic: '"PREP" - Personal injury, Retirement (time rule), Education (reimbursement), Property (50/50)',
        cases: [
          { name: 'Marriage of Moore & Marriage of Marsden', holding: 'Pro rata apportionment when SP and CP contribute to acquisition' },
          { name: 'Marriage of Brown', holding: 'Non-vested pension rights are CP subject to division' },
          { name: 'Marriage of Sullivan', holding: 'Professional degree not divisible property, but CP contributions to education are reimbursable' }
        ],
        essayTip: 'Go asset by asset: characterize, value, then divide. Apply Moore/Marsden for mixed-funded acquisitions. Address retirement benefits using time rule. Check for reimbursement claims.',
        mbeTip: 'Equal division is mandatory—court can\'t deviate except for specific statutory exceptions. Moore/Marsden formula and time rule for retirement are heavily tested.'
      },
      {
        id: 'quasi-community',
        name: 'Quasi-Community Property',
        rule: 'Property acquired by either spouse while domiciled elsewhere that would have been CP if acquired in California is quasi-community property.',
        elements: [
          'Acquired while domiciled outside CA',
          'Would have been CP if acquired in CA',
          'Treated as CP for divorce division',
          'NOT treated as CP for death or creditor purposes'
        ],
        keyPoints: [
          'QCP exists only for divorce purposes in California',
          'At death: QCP only if acquiring spouse dies first (survivor takes 1/2)',
          'During marriage: acquiring spouse has exclusive management',
          'Not subject to community property creditor rules until divorce',
          'Rationale: California cannot retroactively apply CP laws to other states',
          'Characterization: apply law of domicile at acquisition, then reclassify if QCP',
          'Division at divorce: treated exactly like CP—equal division'
        ],
        mnemonic: '"QUAD" - Quasi if acquired in different state; At Divorce treated as CP',
        cases: [
          { name: 'Addison v. Addison', holding: 'QCP is constitutional; CA can apply its laws upon divorce despite property acquired elsewhere' },
          { name: 'Marriage of Roesch', holding: 'Stock options earned in common law state can be QCP' },
          { name: 'Marriage of Saslow', holding: 'QCP rights attach upon establishing CA domicile' }
        ],
        essayTip: 'Identify when and where property was acquired. If outside CA during marriage, apply the other state\'s law for classification, then ask if it would have been CP in CA. QCP only matters at divorce.',
        mbeTip: 'Key distinction: QCP treated as CP at divorce but NOT at death (unless acquirer dies first) and NOT for creditor purposes during marriage.'
      }
    ]
  },

  // ============================================================================
  // 9. WILLS & TRUSTS (CA)
  // ============================================================================
  {
    id: 'wills',
    name: 'Wills & Trusts',
    emoji: '📜',
    ca: true,
    desc: 'Estate planning',
    topics: [
      {
        id: 'will-execution',
        name: 'Will Execution',
        rule: 'A valid California will requires: (1) age 18+, (2) sound mind, (3) writing, (4) signed by testator, (5) witnessed by two witnesses who sign during testator\'s lifetime.',
        elements: [
          'Legal age (18+) and sound mind',
          'In writing (typed or handwritten)',
          'Signed by testator (or by another at testator\'s direction)',
          'Two witnesses who (a) witness signing or acknowledgment, (b) understand it\'s a will, (c) sign during testator\'s lifetime'
        ],
        keyPoints: [
          'Holographic will: entirely in testator\'s handwriting, signed, no witnesses required',
          'Interested witness: doesn\'t invalidate will but creates rebuttable presumption of undue influence for their gift',
          'Choice of law: valid if complies with CA law, state of execution, or testator\'s domicile at signing/death',
          'Codicil: modifies will; must be executed with same formalities',
          'Integration: pages present at execution and intended to be part of will',
          'Incorporation by reference: writing in existence at execution, clearly identified, testator intended to incorporate',
          'Republication by codicil: will treated as re-executed at codicil date'
        ],
        mnemonic: '"SWAT-2" - Signed, Writing, Age 18, Two witnesses, Testamentary intent',
        cases: [
          { name: 'Estate of Kuralt', holding: 'Handwritten letter expressing intent to transfer property at death is valid holographic will' },
          { name: 'In re Estate of Black', holding: 'Interested witness\'s gift subject to rebuttable presumption of undue influence' },
          { name: 'Estate of Catalan', holding: 'Substantial compliance: clear and convincing evidence can cure execution defects' }
        ],
        essayTip: 'Walk through each formality requirement. For holographic wills, ensure material provisions are in testator\'s handwriting. Address interested witness issues and presumption.',
        mbeTip: 'CA allows holographic wills with NO witnesses if entirely in testator\'s handwriting. Interested witness doesn\'t invalidate but creates presumption for their gift.'
      },
      {
        id: 'intestate',
        name: 'Intestate Succession',
        rule: 'When a person dies without a valid will, California intestacy statutes distribute property to surviving spouse and/or nearest relatives.',
        elements: [
          'Surviving spouse share depends on characterization (CP vs. SP)',
          'If no spouse: to issue (descendants), per capita at each generation',
          'If no issue: to parents, then siblings, then grandparents, etc.'
        ],
        keyPoints: [
          'Community property: all to surviving spouse',
          'Separate property with spouse: spouse takes 1/2 if one child or issue of deceased child; 1/3 if two+ children',
          'No spouse: to issue by representation (per capita at each generation)',
          'No issue: to parents; if none, to issue of parents (siblings); if none, to grandparents',
          'Per capita at each generation: divide equally at first generation with living takers, then pool remainder',
          'Half-blood siblings: treated same as whole-blood',
          'Adopted children: treated as natural children of adoptive parents',
          'Domestic partners: same rights as spouses'
        ],
        mnemonic: '"SPIG" - Spouse (CP all, SP share), Parents, Issue, Grandparents (intestate order)',
        cases: [
          { name: 'Estate of Russell', holding: 'Devise to dog ineffective; passes by intestacy as to that share' },
          { name: 'Estate of McGowan', holding: 'Adopted child inherits from adoptive parents but not natural parents' },
          { name: 'In re Marriage of Cyr', holding: 'Domestic partners entitled to same intestate share as spouses' }
        ],
        essayTip: 'First characterize property (CP vs. SP). Apply spousal share rules. Then trace through issue and ancestors. Remember CA\'s per capita at each generation distribution.',
        mbeTip: 'Know the spouse\'s share: all CP, and 1/3 to 1/2 of SP depending on number of children. Issue take by "per capita at each generation"—divide at first level with living members, then pool.'
      },
      {
        id: 'trust-creation',
        name: 'Trust Creation',
        rule: 'A valid trust requires: (1) intent to create, (2) trust property, (3) ascertainable beneficiaries, (4) valid purpose. No writing required for personal property trusts.',
        elements: [
          'Settlor with capacity',
          'Intent to create trust (present, not future)',
          'Trust res (property)',
          'Ascertainable beneficiaries (or charitable purpose)',
          'Valid trust purpose (not illegal or against public policy)'
        ],
        keyPoints: [
          'Writing required: real property trusts (Statute of Frauds); recommended for all',
          'Revocable trust: default in CA—settlor can revoke unless expressly irrevocable',
          'Pour-over will: valid if trust identified, even if trust is amendable',
          'Precatory language: "hope," "wish," "desire" creates no trust',
          'Resulting trust: implied when express trust fails',
          'Constructive trust: equitable remedy for fraud, breach of fiduciary duty',
          'Honorary trust: for pets or non-charitable purpose—enforceable in CA'
        ],
        mnemonic: '"PITBP" - Property, Intent, Trustee (not required), Beneficiaries, Purpose',
        cases: [
          { name: 'Hebrew University v. Coors', holding: 'Charitable trust to institution valid even if institution doesn\'t exist yet' },
          { name: 'Hieble v. Hieble', holding: 'Precatory language ("I would like") does not create trust' },
          { name: 'Estate of Sisto', holding: 'Pour-over will effective even though trust amended after will execution' }
        ],
        essayTip: 'Verify each element is present. For revocable trusts, address settlor\'s power to amend or revoke. Discuss trust modification and termination possibilities.',
        mbeTip: 'CA presumes trusts are REVOCABLE unless stated otherwise. Pet trusts are valid. Ascertainable beneficiaries required unless charitable trust.'
      },
      {
        id: 'fiduciary-duties-trusts',
        name: 'Trustee Fiduciary Duties',
        rule: 'A trustee owes fiduciary duties to beneficiaries: loyalty, prudent investment, impartiality, and duty to inform and account.',
        elements: [
          'Duty of loyalty: no self-dealing, no conflicts of interest',
          'Duty of prudence: prudent investor standard',
          'Duty of impartiality: fair to all beneficiaries',
          'Duty to inform and account: keep beneficiaries reasonably informed'
        ],
        keyPoints: [
          'Self-dealing: transaction between trustee and trust is voidable regardless of fairness',
          'Prudent investor: diversify, balance risk/return, consider portfolio as whole',
          'Impartiality: income beneficiary vs. remainderman—adjust for circumstances',
          'Delegation: trustee may delegate, but must use prudent selection and monitoring',
          'Co-trustees: must act unanimously unless trust provides otherwise',
          'Removal: court can remove trustee for breach, incapacity, or inability to administer',
          'Remedies for breach: damages, removal, denial of fees, surcharge, constructive trust'
        ],
        mnemonic: '"LIPID" - Loyalty, Impartiality, Prudence, Inform/account, Delegation',
        cases: [
          { name: 'Hartman v. Hartle', holding: 'Self-dealing by executor/trustee voidable even if transaction is fair' },
          { name: 'Estate of Collins', holding: 'Trustee must balance current income beneficiary against remaindermen' },
          { name: 'In re Gleeson', holding: 'Failure to diversify investments may be breach of prudent investor duty' }
        ],
        essayTip: 'Self-dealing is voidable per se—no fairness analysis. For investment decisions, apply prudent investor rule to entire portfolio. Address duty to beneficiaries with different interests.',
        mbeTip: 'Self-dealing is strictly prohibited—transaction voidable even if fair. Prudent investor looks at whole portfolio, not individual investments in isolation.'
      }
    ]
  },

  // ============================================================================
  // 10. BUSINESS ASSOCIATIONS (CA)
  // ============================================================================
  {
    id: 'business',
    name: 'Business Assoc',
    emoji: '🏢',
    ca: true,
    desc: 'Corps, partnerships',
    topics: [
      {
        id: 'agency',
        name: 'Agency',
        rule: 'Agency is a fiduciary relationship where the agent acts on behalf of and subject to the control of the principal.',
        elements: [
          'Consent by principal to agent acting on principal\'s behalf',
          'Agent\'s consent to act',
          'Principal\'s right to control agent',
          'Fiduciary duties owed by agent'
        ],
        keyPoints: [
          'Actual authority: express or implied from principal\'s words/conduct to agent',
          'Apparent authority: principal\'s words/conduct to third party',
          'Inherent authority: arises from agency relationship itself (general agents)',
          'Ratification: principal\'s after-the-fact acceptance of unauthorized act',
          'Agent\'s liability: disclosed principal (agent not liable); undisclosed (agent liable)',
          'Respondeat superior: employer liable for employee\'s torts in scope of employment',
          'Independent contractor: principal generally not liable for IC\'s torts'
        ],
        mnemonic: '"AAAIR" - Actual, Apparent, Agency inherent, Implied, Ratification',
        cases: [
          { name: 'Mill Street Church v. Hogan', holding: 'Implied authority from prior course of dealing—church liable for employee hired by sexton' },
          { name: 'Dweck v. Nasser', holding: 'Apparent authority requires third party\'s reasonable belief from principal\'s conduct' },
          { name: 'Ira S. Bushey & Sons v. United States', holding: 'Respondeat superior: employer liable if employee\'s conduct was foreseeable risk of employment' }
        ],
        essayTip: 'Identify the type of authority (actual vs. apparent). For third-party claims, analyze what representation the principal made. Address respondeat superior for tort claims.',
        mbeTip: 'Apparent authority looks at principal\'s conduct toward THIRD PARTY, not agent. Undisclosed principal: agent is personally liable on contract. Ratification requires full knowledge.'
      },
      {
        id: 'partnerships',
        name: 'Partnerships',
        rule: 'A general partnership is an association of two or more persons carrying on as co-owners of a business for profit. No formalities required.',
        elements: [
          'Association of two or more persons',
          'Carrying on a business',
          'As co-owners',
          'For profit'
        ],
        keyPoints: [
          'Formation: no filing required; can be implied from conduct',
          'Profit-sharing: creates presumption of partnership (can be rebutted)',
          'Partner liability: jointly and severally liable for partnership obligations',
          'Management: equal rights unless otherwise agreed',
          'Fiduciary duties: loyalty (no competition, no self-dealing), care (gross negligence)',
          'Partnership property vs. partner\'s interest: property belongs to partnership, not partners',
          'Dissociation: partner may withdraw at any time (may be wrongful)',
          'Dissolution: winding up upon certain events; partnership continues after dissociation'
        ],
        mnemonic: '"CLIP" - Co-ownership, Liability (joint/several), Intent to profit, Profit-sharing (presumption)',
        cases: [
          { name: 'Martin v. Peyton', holding: 'Loan with profit-sharing doesn\'t create partnership without co-ownership intent' },
          { name: 'Meinhard v. Salmon', holding: 'Partners owe "finest loyalty"—cannot usurp partnership opportunities' },
          { name: 'Lawlis v. Kightlinger & Gray', holding: 'Expulsion must be in good faith; can\'t expel to deprive of compensation' }
        ],
        essayTip: 'First determine if partnership exists (look for profit-sharing + co-ownership). Then analyze partner duties and liability. Address wrongful dissociation consequences.',
        mbeTip: 'Profit-sharing creates PRESUMPTION of partnership, but can be rebutted. Partners are jointly and severally liable for all partnership debts. Fiduciary duty of "finest loyalty."'
      },
      {
        id: 'corporations',
        name: 'Corporations',
        rule: 'A corporation is a legal entity separate from its owners. Shareholders have limited liability; directors manage; officers execute.',
        elements: [
          'Formation: articles of incorporation filed with Secretary of State',
          'Separate legal existence',
          'Limited shareholder liability',
          'Centralized management by board of directors',
          'Free transferability of shares',
          'Perpetual existence'
        ],
        keyPoints: [
          'Piercing corporate veil: Alter ego + fraud/injustice',
          'Business judgment rule protects director decisions',
          'Directors owe duty of care and duty of loyalty',
          'Shareholder derivative suits for corporate harm'
        ],
        mnemonic: 'CLEFT - Centralized management, Limited liability, Entity separate, Free transfer, Tax (double)',
        cases: [
          { name: 'Smith v. Van Gorkom', holding: 'Directors breached duty of care by approving merger without adequate information' },
          { name: 'Kamin v. American Express', holding: 'Business judgment rule protects good faith decisions even if unwise' }
        ],
        essayTip: 'Check formation validity first. Then analyze director/officer duties. For piercing veil, need alter ego PLUS injustice.',
        mbeTip: 'Business judgment rule applies unless conflict of interest or gross negligence. Duty of loyalty = no self-dealing without full disclosure and approval.'
      }
    ]
  },
  // Professional Responsibility
  {
    id: 'ethics',
    name: 'Prof Responsibility',
    emoji: '👔',
    mbe: true,
    desc: 'Attorney ethics & professional conduct',
    topics: [
      {
        id: 'confidentiality',
        name: 'Confidentiality',
        rule: 'A lawyer shall not reveal information relating to representation of a client unless client gives informed consent or disclosure is impliedly authorized.',
        elements: [
          'All information related to representation is protected',
          'Broader than attorney-client privilege',
          'Exceptions: prevent death/substantial bodily harm, prevent client crime/fraud, comply with law/court order'
        ],
        keyPoints: [
          'Continues after representation ends',
          'Cannot reveal even to help another client',
          'Different from privilege—applies outside court too'
        ],
        mnemonic: 'CARD - Client info, All representation, Reveal only with consent, Death exception',
        cases: [
          { name: 'In re Pressly', holding: 'Lawyer disciplined for revealing client confidences without authorization' }
        ],
        essayTip: 'Distinguish confidentiality (ethics rule) from attorney-client privilege (evidence rule). Confidentiality is broader.',
        mbeTip: 'Exception for preventing reasonably certain death applies even for past acts. But cannot reveal past crimes unless ongoing harm.'
      },
      {
        id: 'conflicts',
        name: 'Conflicts of Interest',
        rule: 'A lawyer shall not represent a client if representation involves a concurrent conflict of interest—directly adverse or material limitation.',
        elements: [
          'Directly adverse to another current client',
          'OR significant risk representation materially limited',
          'Can waive if: reasonable belief competent representation, not prohibited by law, not same litigation adverse, informed written consent'
        ],
        keyPoints: [
          'Current client conflicts: loyalty-based',
          'Former client conflicts: confidentiality-based',
          'Imputation: generally to entire firm',
          'Screening available for former government lawyers'
        ],
        mnemonic: 'DAMS - Direct adversity, Affected judgment, Material limitation, Same matter (former)',
        cases: [
          { name: 'Fiandaca v. Cunningham', holding: 'Conflict where firm sued state while representing client against same state on related matter' }
        ],
        essayTip: 'Analyze (1) is there conflict? (2) is it consentable? (3) was proper consent obtained? Check imputation to firm.',
        mbeTip: 'Current client = loyalty; Former client = confidentiality. Hot potato rule: can\'t drop client to take adverse matter.'
      }
    ]
  }
];

export default function BarPrepApp() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedCase, setSelectedCase] = useState<CaseInfo | null>(null);

  const daysUntil = Math.ceil((new Date('2026-07-28').getTime() - Date.now()) / 86400000);

  // Case Essay Modal
  if (selectedCase) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <header className="px-5 pt-8 pb-4 border-b border-white/5 sticky top-0 bg-[#0a0a0f]/95 backdrop-blur-sm z-10">
          <button 
            onClick={() => setSelectedCase(null)} 
            className="text-white/50 text-sm flex items-center gap-2 hover:text-white transition"
          >
            ← Back to {selectedTopic?.name}
          </button>
        </header>
        <main className="max-w-lg mx-auto px-5 py-6">
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/30 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-amber-400">{selectedCase.name}</p>
            <p className="text-xs text-white/60 mt-2">{selectedCase.holding}</p>
          </div>
          
          {selectedCase.essay ? (
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
              <p className="text-xs text-purple-400 font-medium mb-3">✍️ SAMPLE ESSAY USING THESE FACTS</p>
              <div className="prose prose-invert prose-sm max-w-none">
                {selectedCase.essay.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-sm text-white/80 mb-4 leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 text-center">
              <p className="text-white/40 text-sm">📝 Essay example coming soon!</p>
              <p className="text-white/30 text-xs mt-2">I'm adding detailed essay examples for all key cases.</p>
            </div>
          )}
        </main>
      </div>
    );
  }

  if (selectedTopic && selectedSubject) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <header className="px-5 pt-8 pb-4 border-b border-white/5">
          <button 
            onClick={() => setSelectedTopic(null)} 
            className="text-white/50 text-sm flex items-center gap-2 hover:text-white transition"
          >
            ← Back to {selectedSubject.name}
          </button>
        </header>
        <main className="max-w-lg mx-auto px-5 py-6">
          <h1 className="text-2xl font-semibold mb-2">{selectedTopic.name}</h1>
          
          {/* Rule */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-500/30 rounded-xl p-4 mb-4">
            <p className="text-xs text-blue-400 font-medium mb-2">📌 RULE</p>
            <p className="text-white/90 text-sm leading-relaxed">{selectedTopic.rule}</p>
          </div>

          {/* Elements */}
          {selectedTopic.elements && (
            <div className="mb-4">
              <p className="text-xs text-white/40 font-medium mb-2">ELEMENTS</p>
              <div className="space-y-2">
                {selectedTopic.elements.map((el, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60 flex-shrink-0">{i+1}</span>
                    <p className="text-sm text-white/80">{el}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Points */}
          <div className="mb-4">
            <p className="text-xs text-white/40 font-medium mb-2">KEY POINTS</p>
            <ul className="space-y-1.5">
              {selectedTopic.keyPoints.map((point, i) => (
                <li key={i} className="text-sm text-white/70 flex gap-2">
                  <span className="text-emerald-400">•</span>{point}
                </li>
              ))}
            </ul>
          </div>

          {/* Mnemonic */}
          {selectedTopic.mnemonic && (
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-4">
              <p className="text-xs text-purple-400 font-medium mb-1">🧠 MNEMONIC</p>
              <p className="text-white/90 text-sm">{selectedTopic.mnemonic}</p>
            </div>
          )}

          {/* Cases */}
          {selectedTopic.cases.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-white/40 font-medium mb-2">⚖️ KEY CASES <span className="text-purple-400">(tap for essay)</span></p>
              <div className="space-y-2">
                {selectedTopic.cases.map((c, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedCase(c)}
                    className="w-full text-left bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-amber-500/30 rounded-lg p-3 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-amber-400 group-hover:text-amber-300">{c.name}</p>
                      {c.essay ? (
                        <span className="text-xs text-purple-400 opacity-60 group-hover:opacity-100">✍️</span>
                      ) : (
                        <span className="text-xs text-white/30">→</span>
                      )}
                    </div>
                    <p className="text-xs text-white/60 mt-1">{c.holding}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3">
              <p className="text-xs text-purple-400 font-medium mb-1">✍️ Essay</p>
              <p className="text-xs text-white/60">{selectedTopic.essayTip}</p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3">
              <p className="text-xs text-blue-400 font-medium mb-1">📊 MBE</p>
              <p className="text-xs text-white/60">{selectedTopic.mbeTip}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (selectedSubject) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <header className="px-5 pt-8 pb-4 border-b border-white/5">
          <button 
            onClick={() => setSelectedSubject(null)} 
            className="text-white/50 text-sm flex items-center gap-2 hover:text-white transition"
          >
            ← Back
          </button>
        </header>
        <main className="max-w-lg mx-auto px-5 py-6">
          <div className="text-center mb-6">
            <span className="text-5xl mb-3 block">{selectedSubject.emoji}</span>
            <h1 className="text-2xl font-semibold">{selectedSubject.name}</h1>
            <p className="text-white/50 text-sm mt-1">{selectedSubject.desc}</p>
          </div>
          
          <div className="space-y-2">
            {selectedSubject.topics.map(topic => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className="w-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/10 rounded-xl p-4 text-left transition-all"
              >
                <p className="font-medium text-white/90">{topic.name}</p>
                <p className="text-sm text-white/40 mt-1 line-clamp-2">{topic.rule}</p>
              </button>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="px-5 pt-12 pb-6">
        <div className="max-w-lg mx-auto">
          <p className="text-xs tracking-[0.2em] text-white/40 uppercase mb-1">California Bar 2026</p>
          <h1 className="text-2xl font-semibold tracking-tight">Bar Prep</h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-5 pb-12">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 border border-emerald-500/20 rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold text-emerald-400">{daysUntil}</p>
            <p className="text-xs text-white/40 mt-1">days left</p>
          </div>
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/20 rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold text-amber-400">1,390</p>
            <p className="text-xs text-white/40 mt-1">to pass</p>
          </div>
          <div className="bg-gradient-to-br from-rose-500/20 to-rose-600/5 border border-rose-500/20 rounded-2xl p-4 text-center">
            <p className="text-3xl font-bold text-rose-400">34%</p>
            <p className="text-xs text-white/40 mt-1">pass rate</p>
          </div>
        </div>

        {/* MBE */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            <h2 className="text-xs tracking-[0.15em] text-blue-400 uppercase font-medium">MBE Subjects</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-blue-500/50 to-transparent"></div>
          </div>
          <div className="space-y-2">
            {subjectsData.filter(s => s.mbe).map(subject => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject)}
                className="w-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/10 rounded-xl p-4 flex items-center gap-4 transition-all group"
              >
                <span className="text-2xl">{subject.emoji}</span>
                <div className="flex-1 text-left">
                  <p className="font-medium text-white/90">{subject.name}</p>
                  <p className="text-sm text-white/40">{subject.topics.length} topics</p>
                </div>
                <span className="text-white/20 group-hover:text-white/40">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* CA */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent"></div>
            <h2 className="text-xs tracking-[0.15em] text-amber-400 uppercase font-medium">California Essay</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-amber-500/50 to-transparent"></div>
          </div>
          <div className="space-y-2">
            {subjectsData.filter(s => s.ca).map(subject => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject)}
                className="w-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/10 rounded-xl p-4 flex items-center gap-4 transition-all group"
              >
                <span className="text-2xl">{subject.emoji}</span>
                <div className="flex-1 text-left">
                  <p className="font-medium text-white/90">{subject.name}</p>
                  <p className="text-sm text-white/40">{subject.topics.length} topics</p>
                </div>
                <span className="text-white/20 group-hover:text-white/40">→</span>
              </button>
            ))}
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-xs text-white/20">
        Built for Janine ✨
      </footer>
    </div>
  );
}