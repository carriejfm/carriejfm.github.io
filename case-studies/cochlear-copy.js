/* ─────────────────────────────────────────────────────────────────
   COCHLEAR COPILOT — COPY SOURCE OF TRUTH
   Both the deck (cochlear-deck.html) and scroll (cochlear-copilot.html)
   pull copy from this file via data-cc-copy="key" attributes.

   To update copy in both layouts at once:
     1. Change the value here.
     2. Reload either page — the injector at the bottom does the rest.

   COPY INJECTION RULES:
   - Put data-cc-copy on the element whose full textContent should be replaced.
   - When a hardcoded label ("Goal: ") must sit alongside injected copy, put the
     attribute on a child <span>, not the parent element.
   - <head> meta tags are always hardcoded — injector only runs on body elements.
   - NBSP for no-wrap phrases goes in the string value here, not in HTML.

   QUOTE KEY CONVENTIONS:
   quote_*            = full combined string → deck <p>
   quote_*_text       = quote text only → scroll blockquote <p>
   quote_*_attr       = attribution only → scroll blockquote <footer>

   REFLECTION NOTE:
   reflection_0/1/2 are drafted from the document's prompts.
   Carrie to review and rewrite in her own voice before publishing.
─────────────────────────────────────────────────────────────────── */

var CC_COPY = {

  /* ── Meta ───────────────────────────────────────────────────────── */
  case_title:     "Building hearing rehab with Cochlear Copilot",
  project_string: "Cochlear · ustwo // 2020–2021",
  role_title:     "Embedded design lead",

  /* ── Deck-specific meta ──────────────────────────────────────────── */
  deck_title:   "Building hearing rehab with Cochlear Copilot",
  deck_company: "Cochlear · ustwo · 2020–2021",

  /* ── Role rows ───────────────────────────────────────────────────── */
  role_responsible: "Led the embedded cross-functional product team across research, facilitation, delivery, content and personalization strategy.",
  role_accountable: "Owned the Cochlear stakeholder relationship, design quality, research rigor and articulation of roadmap design priorities.",
  role_consulted:   "Partnered with product on roadmap planning and worked with Cochlear's clinical research SMEs to translate clinical requirements into product and design language.",

  /* ── Section headings ────────────────────────────────────────────── */
  section_opportunity:   "Opportunity",
  section_hypothesis:    "Hypothesis",
  section_reflection:    "Reflection",
  section_embedded:      "Embedded leadership",
  section_cocreators:    "The CoCreators programme",
  section_measure:       "A measure-learn discipline",
  section_content:       "Content strategy, tagging, and a personalisation foundation",
  section_reuse:         "Recycle & Reuse → five Skill Builders",

  /* ── Output section headings ─────────────────────────────────────── */
  section_output_cocreators:     "CoCreators programme →",
  section_output_infrastructure: "Design infrastructure →",
  section_output_needenablers:   "Need Enablers + Personalisation →",
  section_output_skillbuilders:  "Five Skill Builders →",

  /* ── Context / Opportunity ──────────────────────────────────────── */
  opportunity_0: "Cochlear is a global leader in hearing implant technology. After a recipient receives an implant, their brain needs to relearn how to interpret sound, a rehabilitation journey that is traditionally supported by in-clinic sessions with a hearing therapist. Cochlear partnered with ustwo to build CoPilot, a rehab companion app.",
  opportunity_1: "I was brought in as an embedded cross-functional design lead to help execute in a moment when trust had broken down between clinical research, product and design. An early version of the app was live with a small set of beta recipients, but UX research was hamstrung and clinical research requirements were blocking rather than informing the work. The team dynamic was taking a toll and the previous design lead was leaving the project.",
  opportunity_2: "I quickly assessed the work to be done wasn't just design. We needed to rebuild shared language, frameworks, and infrastructure to make good work possible even when I wasn't in the room to push things forward. We needed to win back trust and forge a shared way of working across clinical, product and design.",

  /* ── Goal ───────────────────────────────────────────────────────── */
  goal: "Build a product, research culture, and a way of working that Cochlear would still be using long after ustwo handed over.",

  /* ── Hypothesis ─────────────────────────────────────────────────── */
  hypothesis: "I believe that interpersonal work and design work are reliant on one another — investing in both will leave Cochlear with more capability, not just more product.",

  /* ── Approach: Embedded leadership ──────────────────────────────── */
  embedded_0: "I worked directly with the Cochlear product owner day-to-day on prioritization, planning, and stakeholder management — playing the leadership role for the squad alongside her.",
  embedded_1: "I built out a living Design Priorities document — a transparent multi-quarter plan that made trade-offs negotiable instead of invisible.",
  embedded_2: "I mapped the team's learning inputs and methods — a framework for deciding which research tool to use based on what we needed to learn and how fast we needed the feedback. I also audited the existing tooling stack, surfacing friction in what wasn't working and driving the migration to tools that actually supported the way the team needed to operate.",
  embedded_3: "I created the Design + Learn cadence — a framework for differentiating and planning design work across six categories, each with a risk profile, average timeline, and recommended testing approach. It gave the team a shared vocabulary for the work itself and made questions like 'what kind of work is this?' and 'can we get this done by next release?' answerable without me in the room.",

  design_cadence_caption: "Six categories of design work — the foundation for the Design + Learn Cadence.",

  /* ── Approach: CoCreators ────────────────────────────────────────── */
  cocreators_0: "Cochlear's research instinct was clinical and quantitative — efficacy, statistical relevance, sample size. UX qualitative research had to earn its place. I built the CoCreators programme as the proof point.",
  cocreators_1: "Recruited 17+ adult cochlear implant recipients across the US through Cochlear's clinician network, paired with their clinicians and area managers, into staggered cohorts (A, B, C) for quarterly 1:1 video sessions. Designed the participant Welcome Kit and built test guides as living documents — R1 Foundations & First Impressions through R4 Need Enablers.",
  cocreators_2: "Worked with US-based clinical researchers to calibrate what 'consent', 'confidentiality', and 'sensitive topic' meant in this context, and managed the tension between desire-to-please bias and useful feedback. Outcome: a research infrastructure Cochlear could keep running, not a one-off study. Recipients — Cary, Catherine, Gail, Jonathan — became real co-creators whose feedback shaped Need Enablers, Content Tagging, and FTU directly.",

  /* ── Approach: Measure-Learn ─────────────────────────────────────── */
  measure_0: "Built and maintained the CoPilot Measure-Learn Tracker — a single source of truth covering 14 workstreams. Each hypothesis followed the same structure: assumption + outcome → experiment + prediction → observation + insight + action. Across 18 months I led 100+ measured experiments through the tracker (E27 through E126).",
  measure_1: "This tracker was the spine of the credibility shift — it let us defend why we tested with 4 recipients on Need Enablers (because the question was directional, not statistical) while pointing to the quantitative experiments where appropriate. The Skill Builder Wayfinding redesign moved from a 3.3 to 4.0 ease rating across two rounds of testing. Numbers like these gave Cochlear leadership the confidence to keep investing in the qualitative work alongside their evidence-based defaults.",

  /* ── Approach: Content strategy ──────────────────────────────────── */
  content_0: "Drove the IA and content tagging strategy as the foundation for personalisation. Ran a co-creation session with the clinical content SME (Janette) to land an approach that worked for both the recipient mental model and the clinical taxonomy.",
  content_1: "Wrote two internal thought pieces that levelled the team and Cochlear leadership up: 'So you need content personalisation' — walked the team through four personalisation models (No Personalisation → Knowledge-Based → Meta-Content → Collaborative Filtering) and argued for Meta-Content as the pragmatic next step before investing in ML. And 'Measuring the health outcome of confidence' — mapping four approaches to tracking whether CoPilot was actually enabling recipients to live and hear more confidently.",
  content_2: "Co-led the Need Enablers + Personalisation sprint — a focused two-week workshop with paired designer (Alex D), coach (Howo), SME (Janette), and PM. Diverged across seven concepts, converged on one, prototyped, and tested with four RSM recipients. Built the personalisation deck with the head of engineering — signals framework (taste + preference signals), four models compared, sequenced path from 'no personalisation' to 'ML-ready' as concrete decisions, not a leap of faith.",

  /* ── Approach: Recycle & Reuse ───────────────────────────────────── */
  reuse_0: "In April 2021, ran the two-day Recycle & Reuse workshop with design, front-end, backend, and Sitecore engineering. Objective: identify reuse opportunities across what already existed and co-create the strategy for the remaining five Skill Builders to estimate and plan Release 2.",
  reuse_1: "Set the framing that became the intellectual heart of the sprint: assume everything is the same; only call something out if it MUST be different. That single inversion collapsed scope without losing rigour. Facilitated the architectural decision in the room — four approaches on the table (House of Cards, Single Lego Set, Dual Lego Set, Generalised Lego Set), trade-offs visible across Future Proof, Upfront Cost, Time to MVP, Fragility, Configurability.",
  reuse_2: "Held the tension between Cochlear's clinical researchers (rightly particular about pacing, tone, and clinical integrity) and ustwo engineering (under timeline pressure). Ran the dedicated CoPilot Skill Builder Requirements workshop ahead of the architectural one to surface clinical non-negotiables before reuse conversations — so reuse decisions weren't blocked by misunderstood requirements.",
  reuse_3: "Outcome: five Skill Builders shipped for the September 2021 release — Identification L1 (sentences in context), Identification L2 (words/phrases in context), Comprehension L1 (single-turn conversation), Comprehension L2 (two-turn conversation), Telephone with Confidence.",

  /* ── AI in practice ─────────────────────────────────────────────── */
  ai_practice: "Most of this work was done in 2020–2021 with no AI in the toolchain. The Measure-Learn Tracker was hand-curated. Recipient interview transcripts were synthesised by the team in Mural sessions. The thought pieces involved desk research consulting peers in London. Today I would use AI heavily across this kind of engagement — but selectively. AI would do the legwork on the reuse audit, cluster recipient feedback across hypotheses to surface patterns the human eye misses, draft first-pass measure-learn entries from session recordings, and accelerate the desk research behind thought pieces. What I would still protect: the language alignment in the first 30 minutes of a workshop, the trust-building with clinical researchers and recipients, the judgement calls about which tension to hold and which to break. That work is human.",

  /* ── Output bodies ───────────────────────────────────────────────── */
  output_cocreators_0: "17+ adult cochlear implant recipients across the US, paired with their clinicians and area managers, organised into staggered cohorts (A, B, C) for quarterly 1:1 sessions.",
  output_cocreators_1: "Welcome Kit, test guides (R1 Foundations → R4 Need Enablers), recruitment infrastructure, and scheduling — all reusable. Recipients became genuine co-creators whose feedback shaped Need Enablers, Content Tagging, and FTU directly.",
  output_cocreators_credit: "IC · programme design and facilitation",

  output_infrastructure_0: "Measure-Learn Tracker — 14 workstream tabs, 100+ experiments, hypothesis → experiment → conclusion structure across the full product. Design + Learn Cadence — six-category framework (BAU through User Insight Driven), each with risk profile, timeline, and testing approach.",
  output_infrastructure_1: "Design Priorities document — multi-quarter visible plan making trade-offs negotiable. Tools & Ways of Working reset — audit of design tooling friction and migration plan from Figma to Sketch + Abstract.",
  output_infrastructure_credit: "IC · research infrastructure and design systems",

  output_needenablers_0: "Need Enablers + Personalisation deck built with the head of engineering — signals framework (taste + preference), four personalisation models compared, Meta-Content recommended as pragmatic path before ML.",
  output_needenablers_1: "Prototyped and tested with four RSM recipients (Cary, Catherine, Gail, Jonathan). Turned a vague 'we want personalisation' ask into a sequenced, fundable plan.",
  output_needenablers_credit: "IC + Alex D (paired designer) · concept and strategy",

  output_skillbuilders_0: "Five Skill Builders shipped for the September 2021 release: Identification L1 (sentences in context), Identification L2 (words/phrases in context), Comprehension L1 (single-turn conversation), Comprehension L2 (two-turn conversation), Telephone with Confidence.",
  output_skillbuilders_1: "Skill Builder Wayfinding ease rating: 3.3 → 4.0. Tutorial pattern user confidence: 3.6 → 4.0. First Time Use redesigned end-to-end — App Store screens through to first content engagement.",
  output_skillbuilders_credit: "IC + Bec, Libby (designers) · design and copy",

  /* ── Stats ───────────────────────────────────────────────────────── */
  stat_1_value: "18 mo",
  stat_1_label: "embedded leadership",
  stat_2_value: "17+",
  stat_2_label: "recipient co-creators",
  stat_3_value: "100+",
  stat_3_label: "measured experiments",

  /* ── Outcome category labels ─────────────────────────────────────── */
  outcome_team:     "Team",
  outcome_product:  "Product",
  outcome_business: "Business",
  outcome_scale:    "Scale",

  /* ── Outcome bullets (scroll — longer/detailed) ──────────────────── */
  outcome_team_0: "Reset the agency-client design relationship from execution-only to genuine product partnership across an 18-month engagement.",
  outcome_team_1: "Built reusable infrastructure (Design+Learn Cadence, Measure-Learn Tracker, CoCreators programme, Tools reset) that outlived me on the project.",
  outcome_team_2: "Coached and grew the in-team designers (Bec, then Libby) through transitions and tooling migration.",
  outcome_team_3: "Recognised in 2020 360 feedback as 'invaluable to the ustwo team and the CoPilot project' and 'playing a key leadership role for the squad.'",

  outcome_product_0: "Five Skill Builders shipped for the September 2021 release.",
  outcome_product_1: "Skill Builder Wayfinding ease rating moved from 3.3 → 4.0 across two rounds of user testing, with more participants completing the find-a-Skill-Builder task in R2.",
  outcome_product_2: "New Tutorial pattern: user confidence in understanding what a Skill Builder would do moved from 3.6 → 4.0 between non-tutorial and tutorial groups.",
  outcome_product_3: "Comprehension L1 + L2 design and copy iterations (pagination dot, 'Not sure, show me the answer' CTA, 'Conversation continues' interstitial) all confirmed before build.",
  outcome_product_4: "First Time Use experience redesigned end-to-end — App Store screens through to first content engagement.",
  outcome_product_5: "Foundation laid for personalisation engine: content tagging strategy, Need Enablers concept, signals framework with engineering.",

  outcome_business_0: "Sustained 18-month embedded engagement — the kind of relationship most agency engagements don't evolve into.",
  outcome_business_1: "Set up the new work pitch for the Cochlear professionals portal as a natural expansion from the engagement.",
  outcome_business_2: "Cochlear ended the engagement with research infrastructure, design tooling, and a measure-learn discipline they could continue running.",

  outcome_scale_0: "CoCreators programme template (clinician network recruitment, cohort structure, welcome kit, test guides) reusable for any future Cochlear app or feature.",
  outcome_scale_1: "Measure-Learn Tracker structure portable to any product team needing to hold qualitative + quantitative research in one place.",
  outcome_scale_2: "Design + Learn Cadence (six-category work-type framework) is the template I'd still use today.",
  outcome_scale_3: "Dual Lego Set architecture and component library inheritable for any future Skill Builder.",

  /* ── Impact bullets (deck — shorter/punchier) ────────────────────── */
  impact_team_0: "Agency-client relationship reset from execution-only to genuine product partnership.",
  impact_team_1: "Reusable infrastructure built to outlive the engagement.",
  impact_team_2: "Designers coached and grown through the tooling transition.",
  impact_team_3: "Recognised in 360 feedback as 'invaluable to the ustwo team and the CoPilot project.'",

  impact_product_0: "Five Skill Builders shipped · September 2021.",
  impact_product_1: "Wayfinding ease rating: 3.3 → 4.0.",
  impact_product_2: "Tutorial confidence: 3.6 → 4.0.",
  impact_product_3: "Personalisation foundation laid with engineering.",

  impact_business_0: "Sustained 18-month embedded engagement.",
  impact_business_1: "New work pitch set up for Cochlear professionals portal.",
  impact_business_2: "Research, tooling, and measure-learn discipline handed over — running without us.",

  impact_scale_0: "CoCreators programme template — reusable for any Cochlear product.",
  impact_scale_1: "Measure-Learn Tracker structure — portable to any team.",
  impact_scale_2: "Design + Learn Cadence — still the framework I'd use today.",
  impact_scale_3: "Dual Lego Set architecture — inheritable for future Skill Builders.",

  /* ── Quotes — combined (deck) ────────────────────────────────────── */
  quote_stakeholder: "“Carrie plays a key leadership role for the squad, helping us achieve to our timelines and product goals, championing the customer experience, encouraging a collaborative approach to ways of working, striving towards continuous improvements and maintaining transparency in all communications with myself and the team.” — Copilot Product owner",
  quote_vijay:       "“Carrie is an incredible facilitator and collaborator which transcends design into every other discipline.” — Vijay, Engineering Lead, ustwo",
  quote_paz:         "“It was like I had another brain outside my brain.” — Paz, Director, ustwo",
  quote_jonathan:    "“I like them. More than one (per session). I think interaction is flavourful. I would want to see multiple each time you open.” — Jonathan, Cochlear recipient, Need Enablers co-creation session",

  /* ── Quotes — split (scroll) ─────────────────────────────────────── */
  quote_stakeholder_text: "“Carrie plays a key leadership role for the squad, helping us achieve to our timelines and product goals, championing the customer experience, encouraging a collaborative approach to ways of working, striving towards continuous improvements and maintaining transparency in all communications with myself and the team.”",
  quote_stakeholder_attr: "— Copilot Product owner",

  quote_vijay_text: "“Carrie is an incredible facilitator and collaborator which transcends design into every other discipline.”",
  quote_vijay_attr: "— Vijay, Engineering Lead, ustwo",

  quote_paz_text: "“It was like I had another brain outside my brain.”",
  quote_paz_attr: "— Paz, Director, ustwo",

  /* ── Reflection ── DRAFT — Carrie to review and rewrite in her own voice ── */
  reflection_0: "Eighteen months is long enough to stop being a consultant and start being accountable. At ustwo I'd typically run engagements in sprints — show up, deliver, move on. Cochlear was different. You can't build a research culture in a sprint. The clinical team's trust wasn't given because I ran a good workshop; it was earned because I came back, and showed the results, and made the next decision with them. That timescale changes how you lead. You can't optimise for the clever move. You have to optimise for the right infrastructure.",
  reflection_1: "The hardest thing wasn't designing the CoCreators programme — it was getting a clinically-trained organisation to treat a session with four recipients as evidence. The Measure-Learn Tracker was the bridge: by holding every qualitative experiment in the same structure as the quantitative ones, it gave the qualitative work a credibility platform it wouldn't have had standing alone. When Cochlear leadership started citing specific experiment numbers in product meetings, I knew the culture had shifted.",
  reflection_2: "The 360 feedback flagged that I tend to shoulder more responsibility than required. At the time I read it as praise. Looking back: I was carrying too much, doing too much of the work of the product lead, too many of the synthesis passes. I was effective, but I was also a single point of failure. What's changed is that I now spend more deliberate energy building the capability in the room — so when I leave, the work continues, and so does the team's confidence in doing it.",

};

/* ── Injector ── runs synchronously before any layout initialises ── */
(function () {
  function inject() {
    document.querySelectorAll('[data-cc-copy]').forEach(function (el) {
      var key = el.getAttribute('data-cc-copy');
      if (CC_COPY[key] !== undefined) {
        el.textContent = CC_COPY[key];
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
