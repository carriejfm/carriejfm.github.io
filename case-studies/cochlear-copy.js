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
  case_title:     "Building hearing rehab with Cochlear CoPilot",
  project_string: "Cochlear · ustwo // 2020–2021",
  role_title:     "Embedded design lead",

  /* ── Deck-specific meta ──────────────────────────────────────────── */
  deck_title:   "Building hearing rehab with Cochlear CoPilot",
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
  section_content:       "Getting content to people, and people to content",
  section_reuse:         "Reuse + Recycle — workshop and Skill Builder delivery",

  /* ── Context / Opportunity ──────────────────────────────────────── */
  /* opportunity_0 = full text for deck. Scroll splits it around a linked "CoPilot" via _0a/_0b. */
  opportunity_0:  "Cochlear is a global leader in hearing implant technology. After a recipient receives an implant, their brain needs to relearn how to interpret sound, a rehabilitation journey that is traditionally supported by in-clinic sessions with a hearing therapist. Cochlear partnered with ustwo to build CoPilot, a rehab companion app.",
  opportunity_0a: "Cochlear is a global leader in hearing implant technology. After a recipient receives an implant, their brain needs to relearn how to interpret sound, a rehabilitation journey that is traditionally supported by in-clinic sessions with a hearing therapist. Cochlear partnered with ustwo to build ",
  opportunity_0b: ", a rehab companion app.",
  opportunity_1: "I was brought in as an embedded cross-functional design lead to help execute in a moment when trust had broken down between clinical research, product and design. An early version of the app was live with a small set of beta recipients, but UX research was hamstrung and clinical requirements were blocking rather than informing. The team dynamic was taking a toll and the previous design lead was leaving the project.",
  opportunity_2: "I quickly assessed the work to be done wasn't just design. We needed to rebuild shared language, frameworks, and infrastructure to make good work possible. We needed to win back trust and forge a shared way of working across clinical, product and design.",

  /* ── Goal ───────────────────────────────────────────────────────── */
  goal: "Build a product, research culture, and ways of working that Cochlear can use long after ustwo hands over.",

  /* ── Hypothesis ─────────────────────────────────────────────────── */
  hypothesis: "I believe that interpersonal work and design work are reliant on one another — investing in both will leave Cochlear with more capability, not just more product.",

  /* ── Approach: Embedded leadership ──────────────────────────────── */
  embedded_0: "I worked directly with the Cochlear product owner day-to-day in stakeholder management, squad ops and delivery. I supported prioritization and planning with a living, multi-quarter Design Priorities document.",
  embedded_1: "I audited the existing research and design tooling stack and reset the team's collaboration practices, removing the daily friction that was slowing delivery.",
  embedded_2: "I created the Design + Learn cadence — a framework for differentiating and planning design work across six categories, each with risk and effort profiles. It gave the team a shared vocabulary for the work itself and made questions like 'what kind of work is this?' and 'do we need to test it?' answerable without me in the room.",

  design_cadence_caption: "Six categories of design work — the foundation for the Design + Learn Cadence.",

  /* ── Approach: Co-creators ────────────────────────────────────────── */
  cocreators_0: "Co-creation is what happens when interpersonal work and design work occupy the same room at the same time. It became my core strategy — not just with recipients, but with the clinical SME whose requirements we kept misinterpreting.",
  cocreators_1: "With recipients, I launched and ran the CoPilot Co-creators program, recruiting 17 co-creators through Cochlear's clinician network and organizing them into staggered cohorts for quarterly 1:1 video sessions. I designed the Welcome Kits, test guides, and observation packs across four rounds. Recipients were eager to please and the auditory nature of the app added friction, but once someone had been through a session they started giving more honest feedback, and could focus on the work rather than their bluetooth settings. The outcome was ongoing feedback infrastructure, not a one-off study.",
  cocreators_2: "With our clinical research SME, Co-creation looked different. The handoff model kept producing the wrong output. I brought them into Mural and we designed flows together in real time. As they explained the frameworks behind each rehabilitation exercise, we could ask “would this pattern work?” and they could say yes or no while staring at the actual thing. Co-creation, with the actual thing in front of us, turned requirements from a source of friction into a shared design language.",
  cocreators_figure_caption: "Clinical requirements mapped together in real time – messy, but effective.",

  /* ── Approach: Measure-Learn ─────────────────────────────────────── */
  measure_0: "Across 18 months I led 100+ measured experiments through the CoPilot Measure-Learn Tracker, a single source of truth covering hypotheses and outcomes across nine research initiatives.",
  measure_1: "The tracker initially raised eyebrows with clinical researchers who lived and breathed scientific rigor. When I got to the bottom of the friction I found two things: a misunderstanding about whether the product team was expected to prove clinical efficacy of the rehab tool (we were not), and a language problem. The words we were casually using, research, evidence, hypothesis, majority, carried specific meaning in a clinical context that made our lightweight qualitative work sound like it was overclaiming.",
  measure_2: "So we calibrated. “Research” became “testing.” “Hypothesis” became “experiment.” “The majority said” became 'three out of five recipients told us.' I over-communicated the value of small qualitative experiments as signal-gathering, and called out potential biases wherever I could.",
  measure_3: "Small shifts, but they changed everything. Our clinical research partner stopped hearing us as people who didn't respect their field, and Cochlear leadership gained the confidence to keep investing in qualitative UX work as its own valuable process, separate from their evidence-based clinical research.",
  measure_figure_caption: "The CoPilot Measure-Learn Tracker — 100+ experiments across nine research initiatives",

  /* ── Approach: Content strategy ──────────────────────────────────── */
  content_figure_caption: "Need Enablers — in-app signal patterns that let recipients shape their own content experience.",
  content_0: "CoPilot is fundamentally a content experience. Recipients learning to hear with an implant move between passive consumption — articles, stories, firmware updates — and active auditory practice through Skill Builders. But people were barely scratching the surface of content available, and they weren't reaching the Skill Builders.",
  content_1: "I led two tracks of work to fix that: making the system smarter, and making the app more navigable.",
  content_2: "To make the system smarter, I drove the IA and content tagging strategy as the foundation for personalization, running a Co-creation session with the clinical content SME to land an approach that worked for both the recipient mental model and the clinical taxonomy. I led a design sprint around Need Enablers — small in-app prompts letting recipients signal what was relevant to them. And I co-wrote “So you need content personalization” with the head of engineering — a thought piece sequencing the path from “no personalization” to “ML-ready” as concrete decisions, not a leap of faith.",
  content_3: "To make the content navigable, we ran two rounds of testing on navigation and tutorial design. The finding was worth naming: when we made Skill Builders easier to find, comprehension confidence on what Skill Builders were and how to use them dropped slightly. Speed and discoverability were in tension with understanding. We held that tension deliberately rather than optimizing for one metric, and iterated until we found a middle ground worth shipping.",

  /* ── Approach: Recycle & Reuse ───────────────────────────────────── */
  reuse_0: "We had one Skill Builder shipped and a second in progress but five remained. A September deadline was looming and engineering estimations showed we weren't going to make it. We needed to find a way to reuse as much design and code as possible across the remaining five, without compromising clinical integrity.",
  reuse_1: "Armed with requirements from our clinical Co-creation sessions, I ran a two-day Recycle and Reuse workshop with product, design, and engineering.",
  reuse_2: "We spent the first twenty minutes just naming things. From the names of the Skill Builders themselves to the taxonomy within: levels, sessions, rounds. From the screens in the flow to the components and micro-motion patterns within each. Same principle as everywhere else in this engagement — defining and differentiating through language — but focused and fast. Once we had a shared vocabulary, the workshop could move.",
  reuse_3: "The reframe that unlocked the scope: assume everything is the same; only call something out if it MUST be different. That single inversion collapsed what had looked like an impossibly long list of new things into a set of surgical deltas.",
  reuse_4: "Through this workshop I held the tension between Cochlear's clinical researchers, ustwo engineering under pressure to do things right but fast, and a product owner who needed a September release. And five little Skill Builders shipped on time.",

  /* ── AI in practice ─────────────────────────────────────────────── */
  ai_practice: "Most of this work was done in 2020–2021 with no AI in the toolchain. The Measure-Learn Tracker was hand-curated. Recipient interviews were synthesized by the team in Mural sessions. Thought pieces involved desk research and consulting peers in London. Today I'd use AI heavily but selectively. The reuse audit, clustering recipient feedback across hypotheses, drafting first-pass measure-learn entries, accelerating desk research — AI does that legwork. What I'd protect: the language alignment in the first thirty minutes of a workshop, the trust-building with clinical researchers and recipients, the judgment calls about which tension to hold and which to break. That work is human.",

  /* ── Quote: Recycle & Reuse ──────────────────────────────────────── */
  quote_reuse:      "“Your Reuse and Recycle workshop at Cochlear was beyond amazing and was probably the only thing that got us over the line. You also helped me to make better design decisions in order to allow the developers to reuse as much work as possible to get us to launch.” — CoPilot + ustwo product designer",
  quote_reuse_text: "“Your Reuse and Recycle workshop at Cochlear was beyond amazing and was probably the only thing that got us over the line. You also helped me to make better design decisions in order to allow the developers to reuse as much work as possible to get us to launch.”",
  quote_reuse_attr: "— CoPilot + ustwo product designer",


  /* ── Output section headings ─────────────────────────────────────── */
  section_output_content:      "Content and personalization →",
  section_output_ftu:          "First Time Use experience →",
  section_output_skillbuilders: "Five Skill Builders →",

  /* ── Output bodies ───────────────────────────────────────────────── */
  output_content_0: "Need Enablers, Content Tagging, and the Personalization foundation. Working with the clinical content SME, I drove the IA and tagging strategy — a co-created approach that worked for both the recipient mental model and the clinical taxonomy.",
  output_content_1: "Need Enablers + Personalization deck built with the head of engineering — signals framework (taste + preference), four personalization models compared, Meta-Content recommended as the pragmatic path before ML. Tested with four RSM recipients.",
  output_content_credit: "IC + Alex D · concept and strategy",

  output_ftu_0: "First Time Use experience redesigned end-to-end — App Store screens through to first content engagement.",
  output_ftu_1: "Two rounds of navigation and tutorial testing. Skill Builder Wayfinding ease rating: 3.3 → 4.0. Tutorial confidence: 3.6 → 4.0.",
  output_ftu_credit: "IC + Bec, Libby · design and copy",

  output_skillbuilders_0: "Five Skill Builders shipped for the September 2021 release: Identification L1 (sentences in context), Identification L2 (words/phrases in context), Comprehension L1 (single-turn conversation), Comprehension L2 (two-turn conversation), Telephone with Confidence.",
  output_skillbuilders_1: "Dual Lego Set architecture — components and micro-motion patterns designed for reuse across all five. Comprehension L1 + L2 copy and interaction iterations (pagination dot, 'Not sure, show me the answer' CTA, 'Conversation continues' interstitial) all confirmed before build.",
  output_skillbuilders_credit: "IC + Bec, Libby · design and copy",

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
  outcome_team_0: "Shifted the agency relationship from execution-only to genuine product partnership.",
  outcome_team_1: "Built reusable infrastructure — Design+Learn Cadence, Measure-Learn Tracker, Co-creators program, Skill Builder architecture.",
  outcome_team_2: "Coached 2 designers through transitions, tooling migration, and growth.",

  outcome_product_0: "7 total Skill Builders shipped.",
  outcome_product_1: "Skill Builder wayfinding ease rating 3.3 to 4.0 across two rounds of testing.",
  outcome_product_2: "Tutorial pattern moved user confidence from 3.6 to 4.0.",
  outcome_product_3: "First Time Use redesigned end-to-end, App Store screens through to first content engagement.",
  outcome_product_4: "Personalization foundation laid: content tagging strategy, Need Enablers, signals framework.",

  outcome_business_0: "Cochlear ended with research infrastructure, design tooling, and a measure-learn discipline they could keep running.",
  outcome_business_1: "Sustained 18-month embedded engagement.",
  outcome_business_2: "When ustwo Sydney closed, Cochlear explored bringing me on directly — a measure of the partnership's success.",

  outcome_scale_0: "Co-creators program template reusable for any future Cochlear product.",
  outcome_scale_1: "Measure-Learn Tracker portable to any team holding qualitative and quantitative research together.",
  outcome_scale_2: "Design+Learn Cadence is the framework I'd still use today.",
  outcome_scale_3: "Component architecture and library inheritable for any future Skill Builder.",

  /* ── Impact bullets (deck — shorter/punchier) ────────────────────── */
  impact_team_0: "Agency relationship shifted to genuine product partnership.",
  impact_team_1: "Reusable infrastructure built — Cadence, Tracker, Co-creators, Skill Builder architecture.",
  impact_team_2: "2 designers coached through transitions and growth.",

  impact_product_0: "7 Skill Builders shipped.",
  impact_product_1: "Wayfinding ease rating: 3.3 → 4.0.",
  impact_product_2: "Tutorial confidence: 3.6 → 4.0.",
  impact_product_3: "FTU redesigned end-to-end.",
  impact_product_4: "Personalization foundation laid.",

  impact_business_0: "Cochlear left with infrastructure, tooling, and a measure-learn discipline they could keep running.",
  impact_business_1: "Sustained 18-month embedded engagement.*",
  impact_business_2: "When ustwo Sydney closed, Cochlear explored bringing me on directly.",

  impact_scale_0: "Co-creators template — reusable for any Cochlear product.",
  impact_scale_1: "Measure-Learn Tracker — portable to any team.",
  impact_scale_2: "Design+Learn Cadence — still the framework I'd use today.",
  impact_scale_3: "Component architecture — inheritable for any future Skill Builder.",

  /* ── Quotes — combined (deck) ────────────────────────────────────── */
  quote_stakeholder: "“Carrie plays a key leadership role for the squad, helping us achieve to our timelines and product goals, championing the customer experience, encouraging a collaborative approach to ways of working, striving towards continuous improvements and maintaining transparency in all communications with myself and the team.” — CoPilot Product owner",
  quote_vijay:       "“Carrie is an incredible facilitator and collaborator which transcends design into every other discipline.” — Head of engineering, ustwo",
  quote_paz:         "“It was like I had another brain outside my brain.” — UX design director, ustwo",
  quote_jonathan:    "“I like them. More than one (per session). I think interaction is flavourful. I would want to see multiple each time you open.” — Jonathan, Cochlear recipient, Need Enablers Co-creation session",

  /* ── Quotes — split (scroll) ─────────────────────────────────────── */
  quote_stakeholder_text: "“Carrie plays a key leadership role for the squad, helping us achieve to our timelines and product goals, championing the customer experience, encouraging a collaborative approach to ways of working, striving towards continuous improvements and maintaining transparency in all communications with myself and the team.”",
  quote_stakeholder_attr: "— CoPilot Product owner",

  quote_vijay_text: "“Carrie is an incredible facilitator and collaborator which transcends design into every other discipline.”",
  quote_vijay_attr: "— Head of engineering, ustwo",

  quote_paz_text: "“It was like I had another brain outside my brain.”",
  quote_paz_attr: "— UX design director, ustwo",

  /* ── Reflection ── */
  reflection_0: "I was sent in to stabilise a dynamic that had fractured trust. My job was partly design and partly repair — to work with our clinical research partner in a way that opened collaboration rather than closed it, and to build infrastructure that made the work itself easier. What I learned was that the interpersonal work and the design work were the same thing.",
  reflection_1: "Early on, it meant getting precise about what \"research\" actually meant between clinical and UX contexts. Later, in the Recycle and Reuse workshop, it meant spending thirty minutes aligning on the language we were using for Skill Builders before we could even have a conversation about what and how to ship.",
  reflection_2: "Every time we fixed the language first, the rest unblocked.",
  reflection_3: "There's a theory that ancient cultures couldn't perceive blue as a distinct color because they had no word for it. They weren't blind to it — they just couldn't differentiate it from what they already knew. That's what the early months of this engagement felt like. We were all pointing at the same things and calling them different names, or using the same names for completely different things. Research. Evidence. Majority. Requirements. Until we built a shared vocabulary to differentiate, we couldn't actually see what the other person was seeing. The design work and the language work weren't separate. We had to do one to be able to do the other.",

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
