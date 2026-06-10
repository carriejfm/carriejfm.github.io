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
  section_cocreators:    "Co-creation as a strategy",
  section_measure:       "A UX measure-learn discipline, translated",
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
  goal: "Build a product, research culture, and ways of working that Cochlear can use long after ustwo hands over.",

  /* ── Hypothesis ─────────────────────────────────────────────────── */
  hypothesis: "I believe that interpersonal work and design work are reliant on one another — investing in both will leave Cochlear with more capability, not just more product.",

  /* ── Approach: Embedded leadership ──────────────────────────────── */
  embedded_0: "I worked directly with the Cochlear product owner day-to-day on prioritization, planning, and stakeholder management — playing the leadership role for the squad alongside her.",
  embedded_1: "I built out a living Design Priorities document — a transparent multi-quarter plan that made trade-offs negotiable instead of invisible.",
  embedded_2: "I mapped the team's learning inputs and methods — a framework for deciding which research tool to use based on what we needed to learn and how fast we needed the feedback. I also audited the existing tooling stack, surfacing friction in what wasn't working and driving the migration to tools that actually supported the way the team needed to operate.",
  embedded_3: "I created the Design + Learn cadence — a framework for differentiating and planning design work across six categories, each with a risk profile, average timeline, and recommended testing approach. It gave the team a shared vocabulary for the work itself and made questions like 'what kind of work is this?' and 'can we get this done by next release?' answerable without me in the room.",

  design_cadence_caption: "Six categories of design work — the foundation for the Design + Learn Cadence.",

  /* ── Approach: CoCreators ────────────────────────────────────────── */
  cocreators_0: "Co-creation became a core strategy — not just with recipients, but with the clinical researcher whose requirements we kept misinterpreting.",
  cocreators_1: "With recipients, I launched the CoPilot CoCreators program, recruiting 17 adult Cochlear implant recipients across the US through Cochlear's clinician network, organized into staggered cohorts and ran quarterly 1:1 video sessions with each. I designed Welcome Kits, test guides, and observation packs across four rounds of testing.",
  cocreators_2: "This user group required care. Recipients were eager to please, and the auditory nature of the app added technical friction to every session. But once participants had been through a session once, they could focus on the work rather than their microphone settings. The outcome was a recipient feedback infrastructure Cochlear could keep running, not a one-off study. Recipients became real co-creators whose feedback shaped Need Enablers, Content Tagging, and first time use flows directly.",
  cocreators_3: "With our clinical research SME, co-creation looked different. The handoff model of her writing requirements and us interpreting them kept producing the wrong output. I brought our clinical research SME into Mural and we designed flows together in real time. As she explained the frameworks behind each rehabilitation exercise, we could ask “would this pattern work?” and she could say yes or no while staring at the actual thing. Co-creation, with the actual thing in front of us, turned requirements from a source of friction into a shared design language.",
  cocreators_figure_caption: "Clinical requirements mapped together in real time, not handed over and interpreted.",

  /* ── Approach: Measure-Learn ─────────────────────────────────────── */
  measure_0: "Across 18 months I led 100+ measured experiments through the CoPilot Measure-Learn Tracker — a single source of truth covering hypotheses and outcomes across nine research initiatives. Each experiment followed the same structure: what we believed and how we tested it, what we expected and what we actually observed, and, finally, what came next.",
  measure_1: "The tracker initially raised eyebrows with clinical researchers who lived and breathed scientific rigor. When I got to the bottom of the friction I found two things: a misunderstanding about whether the product team was expected to prove the clinical efficacy of the rehab tool (we were not), and a language problem. The words we were casually using — research, evidence, hypothesis, majority — carried specific meaning in a clinical context that made our lightweight qualitative work sound like it was overclaiming.",
  measure_2: "So we calibrated. “Research” became “testing” or “co-creation”. “Hypothesis” became “experiment.” “Evidence” became “observations.” I replaced blanket statements like “the majority said” with specifics: “three out of five recipients told us.” I over-communicated the value of small qualitative experiments as signal-gathering, and called out potential biases wherever I could.",
  measure_3: "Once we owned what we were actually doing — something different from clinical research, not lesser — our clinical research partner stopped hearing us as people who didn’t respect their field. And Cochlear leadership gained the confidence to keep investing in qualitative UX work as its own valuable process, separate from the evidence-based clinical research informing the app’s content and exercises.",
  measure_figure_caption: "The CoPilot Measure-Learn Tracker — 100+ experiments across nine research initiatives",

  /* ── Approach: Content strategy ──────────────────────────────────── */
  content_0: "Drove the IA and content tagging strategy as the foundation for personalisation. Ran a co-creation session with the clinical content SME (Janette) to land an approach that worked for both the recipient mental model and the clinical taxonomy.",
  content_1: "Wrote two internal thought pieces that levelled the team and Cochlear leadership up: 'So you need content personalisation' — walked the team through four personalisation models (No Personalisation → Knowledge-Based → Meta-Content → Collaborative Filtering) and argued for Meta-Content as the pragmatic next step before investing in ML. And 'Measuring the health outcome of confidence' — mapping four approaches to tracking whether CoPilot was actually enabling recipients to live and hear more confidently.",
  content_2: "Co-led the Need Enablers + Personalisation sprint — a focused two-week workshop with paired designer (Alex D), coach (Howo), SME (Janette), and PM. Diverged across seven concepts, converged on one, prototyped, and tested with four RSM recipients. Built the personalisation deck with the head of engineering — signals framework (taste + preference signals), four models compared, sequenced path from \'no personalisation\' to \'ML-ready\' as concrete decisions, not a leap of faith.",
  content_3: "Round 1: New navigation plus tutorial boosted comprehension (confidence 3.6 to 4.0) but the tutorial added friction and confused people about where they were in the app. Ease rating stayed flat at 3.3.",
  content_4: "Round 2: Refined the tutorial — non-full screen, skippable, layered. Ease rating jumped from 3.3 to 4.0 and more people completed the task. The unexpected finding: when ease went up, comprehension confidence dropped slightly from 4.0 to 3.5. Speed and comprehension were in tension. Making it easier to find a Skill Builder meant people moved faster and absorbed less. You had to hold that tension deliberately rather than optimise for one metric.",
  content_5: "Also worth noting: participants who saw the tutorial used noticeably more accurate language to describe what a Skill Builder was. The tutorial was doing real comprehension work even while adding friction — which is why refining it was worth it rather than scrapping it.",

  /* ── Approach: Recycle & Reuse ───────────────────────────────────── */
  reuse_0: "In April 2021, ran the two-day Recycle & Reuse workshop with design, front-end, backend, and Sitecore engineering. Objective: identify reuse opportunities across what already existed and co-create the strategy for the remaining five Skill Builders to estimate and plan Release 2.",
  reuse_1: "Set the framing that became the intellectual heart of the sprint: assume everything is the same; only call something out if it MUST be different. That single inversion collapsed scope without losing rigour. Facilitated the architectural decision in the room — four approaches on the table (House of Cards, Single Lego Set, Dual Lego Set, Generalised Lego Set), trade-offs visible across Future Proof, Upfront Cost, Time to MVP, Fragility, Configurability.",
  reuse_2: "Held the tension between Cochlear's clinical researchers (rightly particular about pacing, tone, and clinical integrity) and ustwo engineering (under timeline pressure). Ran the dedicated CoPilot Skill Builder Requirements workshop ahead of the architectural one to surface clinical non-negotiables before reuse conversations — so reuse decisions weren't blocked by misunderstood requirements.",
  reuse_3: "Outcome: five Skill Builders shipped for the September 2021 release — Identification L1 (sentences in context), Identification L2 (words/phrases in context), Comprehension L1 (single-turn conversation), Comprehension L2 (two-turn conversation), Telephone with Confidence.",
  reuse_4: "The Recycle and Reuse workshop — spent thirty minutes naming things correctly before the workshop could move. Same principle, different scale.",

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

  /* ── Reflection ── */
  reflection_0: "I was sent in to stabilise a dynamic that had fractured trust. My job was partly design and partly repair — to work with our clinical research partner in a way that opened collaboration rather than closed it, and to build infrastructure that made the work itself easier. What I learned was that the interpersonal work and the design work were the same thing.",
  reflection_1: "Early on, it meant getting precise about what \"research\" actually meant between clinical and UX contexts. Later, in the Recycle and Reuse workshop, it meant spending thirty minutes aligning on the language we were using for Skill Builders before we could even have a conversation about what and how to ship.",
  reflection_2: "Every time we fixed the language first, the rest unblocked.",
  reflection_3: "There's a theory that ancient cultures couldn't perceive blue as a distinct colour because they had no word for it. They weren't blind to it — they just couldn't differentiate it from what they already knew. That's what the early months of this engagement felt like. We were all pointing at the same things and calling them different names, or using the same names for completely different things. Research. Evidence. Majority. Requirements. Until we built a shared vocabulary to differentiate, we couldn't actually see what the other person was seeing. The design work and the language work weren't separate. We had to do one to be able to do the other.",

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
