/* ─────────────────────────────────────────────────────────────────
   COCHLEAR COPILOT — COPY SOURCE OF TRUTH (canonical, single file)
   Both the scroll (cochlear-copilot.html) and the deck (cochlear-deck-2.html)
   pull copy from this one file via data-cc-copy="key" attributes.
   (cochlear-copy-2.js has been merged in and deleted — do not recreate it.)

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

   VIEW-VARIANT KEYS:
   Where the same slot needs different copy per view, the deck uses a *_deck /
   *_2 variant key while the base key stays the scroll (canonical) value:
     deck_title   (scroll/long)  vs  deck_title_2 (deck hero, short)
     content_1    (scroll)       vs  content_1_deck (deck — carries the
                                     "Beta usage…" lead-in that scroll's
                                     content_0 supplies separately)

   VISIBILITY + SPEAKER NOTES (see CC_VISIBILITY and CC_NOTES below):
   - CC_VISIBILITY tags keys as scrollOnly / deckOnly. Anything not listed is
     shown in both views. The scroll page renders everything; the deck only
     has data-cc-copy hooks for what it shows, so no runtime filtering is
     needed — the map is documentation + the data source for Speaker Notes.
   - CC_NOTES maps each deck slide's data-notes-id to the scrollOnly keys whose
     copy the deck drops for that section. The shared speaker-notes.html window
     reads these so the presenter still has the cut copy to hand. To add a slide
     to the notes, give its <section> a data-notes-id and list keys here.

   REFLECTION NOTE:
   reflection_0/1 — Carrie's final voice. Two paragraphs.
─────────────────────────────────────────────────────────────────── */

var CC_COPY = {

  /* ── Meta ───────────────────────────────────────────────────────── */
  case_title:     "Building hearing rehab with Cochlear CoPilot",
  project_string: "Cochlear · ustwo // 2020–2021",
  role_title:     "Embedded design lead",

  /* ── Deck-specific meta ──────────────────────────────────────────── */
  deck_title:   "Building hearing rehab with Cochlear CoPilot",
  deck_title_2: "Cochlear CoPilot",
  deck_company: "Cochlear · ustwo · 2020–2021",
  hero_caption_2: "Hearing rehab with Cochlear CoPilot: The one where I built shared language, shared evidence and shared capability.",

  /* ── Role rows ───────────────────────────────────────────────────── */
  role_responsible: "Owned the Cochlear relationship and led the cross-functional team in research, collaboration and delivery. Defined UX strategies and designed core flows.",
  role_accountable: "Accountable for clinical requirement translation into product, design quality, research rigor and roadmap design priorities.",
  role_consulted:"Consulted by product owner on strategy and roadmap planning.",

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
  opportunity_1: "I was brought in as an embedded lead in a moment when trust had broken down between clinical research, product and design. A beta app was live with a small set of recipients, but UX research was hamstrung and clinical requirements were blocking rather than informing. Team culture had suffered and the previous design lead was leaving.",
  opportunity_2: "The work to be done wasn't just design. We needed to win back trust and forge a shared way of working across disciplines.",

  /* ── Goal ───────────────────────────────────────────────────────── */
  goal: "Build a product, research culture, and ways of working that Cochlear can use long after ustwo hands over.",

  /* ── Hypothesis ─────────────────────────────────────────────────── */
  hypothesis: "I believe that interpersonal work and design work are reliant on one another — investing in both will leave Cochlear with more capability, not just more product.",

  /* ── Approach: Embedded leadership ──────────────────────────────── */
  embedded_0: "I worked directly with the Cochlear product owner day-to-day in stakeholder management, squad ops and delivery. I supported prioritization and planning with a living, multi-quarter Design Priorities document.",
  embedded_1: "I audited the research and design tooling stack and reset the team's collaboration practices, removing friction slowing delivery.",
  embedded_2: "I created the Design + Learn cadence — a framework for differentiating and planning design work across six categories, each with risk and effort profiles. It gave the team a shared vocabulary for design work and made questions like 'do we need to test it?' answerable without me in the room.",

  design_cadence_caption: "Six categories of design work — a shared language foundation for design planning.",

  /* ── Approach: Co-creators ────────────────────────────────────────── */
  cocreators_0: "Co-creation is what happens when interpersonal work and design work solve problems together. It became my core strategy — not just with recipients, but with our clinical counterparts.",
  cocreators_1: "With recipients, I launched and ran the CoPilot Co-creators program — 17 co-creators recruited through Cochlear's clinician network, organized into staggered cohorts for quarterly 1:1 sessions. Recipients were eager to please and we faced real technical hurdles in testing audio-rich prototypes via video calls. Once someone had been through a session, the technical friction eased and the feedback got more honest. The outcome was ongoing infrastructure, not a one-off study.",
  cocreators_2: "With our clinical research SME, co-creation looked different. The handoff model kept producing the wrong output. I brought them into Mural and we designed flows together in real time. As they explained the frameworks behind each rehabilitation exercise, we could ask “would this pattern work?” and get an answer on the spot. Co-creation turned requirements from a source of friction into a shared design language.",
  cocreators_program_caption:  "I launched and ran the CoPilot Co-creators program with recipients.",
  cocreators_figure_caption: "Clinical requirements mapped together in real time – messy, but effective.",
  measure_calibration_caption: "The words we were casually using carried specific meaning in a clinical context, so we calibrated.",

  /* ── Approach: Measure-Learn ─────────────────────────────────────── */
  measure_0: "I led 100+ measured experiments through the CoPilot Measure-Learn Tracker, a single source of truth covering hypotheses and outcomes across nine research initiatives.",
  measure_1: "The tracker initially raised eyebrows with the clinical team who lived and breathed scientific rigor. At the bottom of the friction was a language problem. The words we were casually using – research, hypothesis, majority – carried specific meaning in a clinical context that made our lightweight qualitative work sound like it was overclaiming.",
  measure_2: "So we calibrated. “Research” became “testing.” “The majority said” became 'three out of five recipients told us.' I over-communicated the value of small qualitative experiments as signal-gathering, and called out potential biases wherever I could.",
  measure_3: "Small shifts, but they changed everything. Our clinical partner stopped hearing us as people who didn't respect their field, and leadership gained confidence to keep investing in qualitative UX work as its own valuable process, separate from their evidence-based clinical research.",
  measure_figure_caption: "The CoPilot Measure-Learn Tracker — 100+ experiments across nine research initiatives",

  /* ── Approach: Content strategy ──────────────────────────────────── */
  content_ia_caption:              "Information architecture and content tagging strategy was based on the Functional Listening Index",
  content_figure_caption: "Need Enablers — in-app signal patterns that let recipients shape their own content experience.",
  content_personalisation_caption: "'So you need content personalization' — a thought piece sequencing the path from 'no personalization' to ML-ready",
  content_nav_caption:             "To make the content navigable, we ran multiple rounds of testing on wayfinding and Skill Builder tutorial design",
  content_0: "CoPilot is fundamentally a content experience. Recipients move between passive consumption — articles, stories, firmware updates — and active auditory practice through Skill Builders. But people were barely scratching the surface of content.",
  content_1: "I led two tracks of work to fix that: making the system smarter, and making the app more navigable.",
  /* content_1_deck — deck hides content_0, so its content_1 carries the lead-in sentence. */
  content_1_deck: "Beta usage showed people were barely scratching the surface of content. I led two tracks of work to fix that: making the system smarter, and making the app more navigable.",
  content_2: "To make the system smarter, I drove the IA and content tagging strategy as the foundation for personalization, running a co-creation session with the clinical SME to land an approach that worked for both the recipient mental model and the clinical taxonomy. I led a design sprint around Need Enablers — small in-app prompts letting recipients signal what was relevant to them. And I co-wrote “So you need content personalization” with the head of engineering — a thought piece sequencing the path from “no personalization” to “ML-ready” as concrete decisions.",
  content_3: "To make the content navigable, we ran multiple rounds of testing on navigation and Skill Builder tutorial design. We learned users expected both passive and active navigation, so we designed the final interface to support both modes. We also learned that speed and discoverability were in tension with understanding of Skill Builder comprehension. We held that tension deliberately rather than optimizing for one metric, and iterated until we found a middle ground worth shipping.",

  /* ── Approach: Recycle & Reuse ───────────────────────────────────── */
  reuse_fig_a_caption: "Clinical co-creation sessions",
  reuse_fig_b_caption: "Skill Builder language taxonomy",
  reuse_fig_c_caption: "\"Assume everything is the same\" strategy allowed for surgical deltas",
  reuse_0: "We had one Skill Builder shipped but five remained. A delivery deadline was looming and engineering estimations showed we weren't going to make it. We needed to reuse as much design and code as possible, without compromising clinical integrity.",
  reuse_1: "Armed with requirements from our clinical co-creation sessions, I ran a two-day Recycle and Reuse workshop with the cross-functional team.",
  reuse_2: "We spent the first twenty minutes just naming things. From the names of the Skill Builders to their underlying taxonomy. From screens to components and micro-motion patterns. Same principle as everywhere else in this engagement — defining and differentiating through language — but focused and fast. Once we had a shared vocabulary, the workshop could move.",
  reuse_3: "The reframe that unlocked the scope: assume everything is the same; only call something out if it MUST be different. That single inversion collapsed what had looked like an impossibly long list of new things into a set of surgical deltas.",
  reuse_4: "Through this workshop I held the tension between clinical integrity, engineering constraints, and business realities. And five little Skill Builders shipped on time.",

  /* ── AI in practice ─────────────────────────────────────────────── */
  ai_practice: "Most of this work was done in 2020–2021 with no AI in the toolchain. The Measure-Learn Tracker was hand-curated. Recipient interviews were synthesized by the team in Mural sessions. Thought pieces involved desk research and consulting peers in London. Today I'd use AI heavily but selectively. The reuse audit, clustering recipient feedback across hypotheses, drafting first-pass measure-learn entries, accelerating desk research — AI does that legwork. What I'd protect: the language alignment in the first thirty minutes of a workshop, the trust-building with clinical researchers and recipients, the judgment calls about which tension to hold and which to break. That work is human.",

  /* ── Quote: Recycle & Reuse ──────────────────────────────────────── */
  quote_reuse:      "“Your Reuse and Recycle workshop at Cochlear was beyond amazing and was probably the only thing that got us over the line. You also helped me to make better design decisions in order to allow the developers to reuse as much work as possible to get us to launch.” — CoPilot + ustwo product designer",
  quote_reuse_text: "“Your Reuse and Recycle workshop at Cochlear was beyond amazing and was probably the only thing that got us over the line. You also helped me to make better design decisions in order to allow the developers to reuse as much work as possible to get us to launch.”",
  quote_reuse_attr: "— CoPilot + ustwo product designer",


  /* ── Output section headings ─────────────────────────────────────── */
  section_output_content:      "Content & Personalization →",
  section_output_ftu:          "First Time Use experience →",
  section_output_skillbuilders: "Skill Builders →",

  /* ── Output bodies ───────────────────────────────────────────────── */
  output_content_0: "Content and personalization work included Need Enablers (in-app signal gathering), Discover (passive, editorial-style content surfacing), and Browse All (structured IA for active search), plus patterns for different content types and tags to encourage exploration. Together they represent the shift from a flat content list to a system that could serve content two ways — passively and on demand.",
  output_content_credit: "IC · design strategy, IA, and flows · 1 UI designer on visual execution",

  output_ftu_0: "The First Time Use experience was redesigned end-to-end — App Store screens through to first content engagement. We tested a pre-auth demo swipe-through of the app's value before sign-in, but found it added friction rather than reducing it, and removed it in favor of getting users into real content faster. The App Store value props were tested and refined in co-creation with Cochlear recipients to ensure the messaging resonated.",
  output_ftu_credit: "IC · design strategy and flows · 1 UI designer on visual execution",

  output_skillbuilders_0: "Six total Skill Builders shipped, covering the core rehab foundations: word and sentence identification, differentiating similar sounds, single and two-turn conversation comprehension, and telephone confidence.",
  output_skillbuilders_1: "The Recycle and Reuse workshop meant future Skill Builders inherit a consistent set of interaction patterns and components, ready to ship quickly without rebuilding from scratch.",
  output_skillbuilders_credit: "IC · design strategy and flows · 1 UI designer on visual execution",

  /* ── Stats ───────────────────────────────────────────────────────── */
  stat_1_value: "18 mo",
  stat_1_label: "Embedded Leadership",
  stat_2_value: "17+",
  stat_2_label: "Recipient Co-creators",
  stat_3_value: "100+",
  stat_3_label: "Measured Experiments",

  /* ── Outcome category labels ─────────────────────────────────────── */
  outcome_team:     "Team",
  outcome_product:  "Product",
  outcome_business: "Business",
  outcome_scale:    "Scale",

  /* ── Outcome bullets (scroll — longer/detailed) ──────────────────── */
  outcome_team_0: "Shifted the agency relationship from execution-only to genuine product partnership.",
  outcome_team_1: "Built reusable infrastructure — Design+Learn Cadence, Measure-Learn Tracker, Co-creators program, Skill Builder architecture.",
  outcome_team_2: "Coached 2 designers through transitions, tooling migration, and growth.",

  outcome_product_0: "6 total Skill Builders shipped.",
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

  impact_product_0: "6 Skill Builders shipped.",
  impact_product_1: "Wayfinding ease rating: 3.3 → 4.0.",
  impact_product_2: "Tutorial confidence: 3.6 → 4.0.",
  impact_product_3: "FTU redesigned end-to-end.",
  impact_product_4: "Personalization foundation laid.",

  impact_business_0: "Cochlear left with infrastructure, tooling, and a measure-learn discipline they could keep running.",
  impact_business_1: "Sustained 18-month embedded engagement.",
  impact_business_2: "When ustwo Sydney closed, Cochlear explored bringing me on directly.",

  impact_scale_0: "Co-creators template — reusable for any Cochlear product.",
  impact_scale_1: "Measure-Learn Tracker — portable to any team.",
  impact_scale_2: "Design+Learn Cadence — still the framework I'd use today.",
  impact_scale_3: "Component architecture — inheritable for any future Skill Builder.",

  /* ── Quotes — combined (deck) ────────────────────────────────────── */
  quote_stakeholder: "“Carrie plays a key leadership role for the squad, helping us achieve to our timelines and product goals, championing the customer experience, encouraging a collaborative approach to ways of working, striving towards continuous improvements and maintaining transparency in all communications with myself and the team.” — CoPilot Product owner",
  quote_vijay:       "“Carrie is an incredible facilitator and collaborator which transcends design into every other discipline.” — Head of engineering, ustwo",
  quote_paz:         "“It was like I had another brain outside my brain.” — UX design director, ustwo",
  quote_jonathan:    "”I like them (Need Enablers) More than one (per session). I think interaction is flavourful. I would want to see multiple each time you open.” — Cochlear recipient co-creator",
  quote_articles:    "“I liked the articles under different categories... It's truly a one stop shop for all regardless of whether one is a new or long-time recipient.” — Cochlear recipient co-creator",

  /* ── Quotes — split (scroll) ─────────────────────────────────────── */
  quote_stakeholder_text: "“Carrie plays a key leadership role for the squad, helping us achieve to our timelines and product goals, championing the customer experience, encouraging a collaborative approach to ways of working, striving towards continuous improvements and maintaining transparency in all communications with myself and the team.”",
  quote_stakeholder_attr: "— CoPilot Product owner",

  quote_vijay_text: "“Carrie is an incredible facilitator and collaborator which transcends design into every other discipline.”",
  quote_vijay_attr: "— Head of engineering, ustwo",

  quote_paz_text: "”It was like I had another brain outside my brain.”",
  quote_paz_attr: "— UX design director, ustwo",

  quote_jonathan_text: "”I like them (Need Enablers) More than one (per session). I think interaction is flavourful. I would want to see multiple each time you open.”",
  quote_jonathan_attr: "— Cochlear recipient co-creator",

  quote_articles_text: "“I liked the articles under different categories... It's truly a one stop shop for all regardless of whether one is a new or long-time recipient.”",
  quote_articles_attr: "— Cochlear recipient co-creator",

  /* ── Deck-2 section labels (left panel titles for static output slides) ── */
  section_cp:        "Content & Personalization",
  section_sb:        "Skill Builders",
  section_ftu_label: "First Time Use",

  /* ── Deck-2 static output intro copy ────────────────────────────── */
  intro_cp_0: "CoPilot is fundamentally a content experience. Recipients move between passive consumption — articles, stories, firmware updates — and active auditory practice.",
  intro_cp_1: "The content and personalization workstream aimed to shift from a flat content list to a system that could serve content two ways — passively and on demand.",
  intro_cp_2: "This included Need Enablers (in-app signal gathering), Discover (passive, editorial-style content surfacing), and Browse (structured IA for active search), plus patterns for different content types and tags to encourage exploration.",

  intro_sb_0: "Skill Builders are interactive practice sessions built on clinical rehab foundations, letting recipients practice key hearing skills at home.",
  intro_sb_1: "They live alongside relevant content in the Discover tab and are directly navigable in Browse.",
  intro_sb_2: "Each includes just enough introduction to give recipients the \"why\" before diving in.",

  intro_ftu_0: "The First Time Use experience was redesigned end-to-end — App Store screens through to first content engagement.",
  intro_ftu_1: "We tested a pre-auth demo swipe-through of the app's value before sign-in but found it added friction rather than reducing it, and removed it in favour of getting users into real content faster.",
  intro_ftu_2: "The App Store value props were tested and refined in co-creation with Cochlear recipients to ensure messaging resonated.",

  /* ── Reflection ── */
  reflection_figure_caption: "Naming and differentiating through language builds bridges.",
  reflection_0: "If I could go back, I'd have listened a little closer, a little longer, to the fear behind the resistance to UX research before trying to fix it. Early on I assumed our clinical partner wanted our research practice to expand into proving clinical efficacy, and even built a thought piece around it. It wasn't needed, and wasn't asked for. The impulse to solve someone's problem with a tool they didn't ask for is its own kind of not listening — and knowing when expertise needs to stay in its lane, and when it needs to come into the room, is a skill in itself.",
  reflection_1: "Looking back, most of what went wrong, and most of what eventually went right, came down to seeing things differently. There's a theory that ancient cultures couldn't perceive blue as a distinct color because they had no word for it. They weren't blind to it, they just couldn't differentiate it from what they already knew. The work with our clinical partners was the same: we were all pointing at the same things and calling them different names, or using the same names for completely different things. Until we defined a shared vocabulary, we couldn't see what the other person was seeing. In the end, clarity in language was what built the bridge.",

};

/* ─────────────────────────────────────────────────────────────────
   VISIBILITY MAP
   Which copy keys belong to which view. Anything NOT listed here is
   shown in both views ("both"). The scroll page renders everything and
   ignores this map; the deck only carries data-cc-copy hooks for what it
   shows. This is documentation + the source of truth Speaker Notes reads.
   When you hide a block from the deck, move its key into scrollOnly.
─────────────────────────────────────────────────────────────────── */
var CC_VISIBILITY = {
  scrollOnly: [
    'project_string',
    'opportunity_0a', 'opportunity_0b',
    'section_embedded', 'embedded_0', 'embedded_1', 'embedded_2', 'design_cadence_caption',
    'cocreators_1', 'cocreators_2',
    'measure_1', 'measure_2', 'measure_3',
    'content_0', 'content_2', 'content_3',
    'section_hypothesis',
    'reuse_1', 'reuse_2', 'reuse_3', 'reuse_4',
    'quote_paz_text', 'quote_paz_attr',
    'quote_jonathan_text', 'quote_jonathan_attr',
    'quote_articles_text', 'quote_articles_attr',
    'outcome_team_0', 'outcome_team_1', 'outcome_team_2',
    'outcome_product_0', 'outcome_product_1', 'outcome_product_2', 'outcome_product_3', 'outcome_product_4',
    'outcome_business_0', 'outcome_business_1', 'outcome_business_2',
    'outcome_scale_0', 'outcome_scale_1', 'outcome_scale_2', 'outcome_scale_3',
    'reflection_1'
  ],
  deckOnly: [
    'deck_title', 'deck_title_2', 'deck_company', 'hero_caption_2',
    'content_1_deck',
    'opportunity_0',
    'cocreators_program_caption', 'measure_calibration_caption',
    'content_ia_caption', 'content_personalisation_caption', 'content_nav_caption',
    'reuse_fig_a_caption', 'reuse_fig_b_caption', 'reuse_fig_c_caption',
    'section_cp', 'section_sb', 'section_ftu_label',
    'intro_cp_0', 'intro_cp_1', 'intro_cp_2',
    'intro_sb_0', 'intro_sb_1', 'intro_sb_2',
    'intro_ftu_0', 'intro_ftu_1', 'intro_ftu_2',
    'reflection_figure_caption',
    'impact_team_0', 'impact_team_1', 'impact_team_2',
    'impact_product_0', 'impact_product_1', 'impact_product_2', 'impact_product_3', 'impact_product_4',
    'impact_business_0', 'impact_business_1', 'impact_business_2',
    'impact_scale_0', 'impact_scale_1', 'impact_scale_2', 'impact_scale_3'
  ]
};

/* ─────────────────────────────────────────────────────────────────
   SPEAKER NOTES MAP
   deck slide data-notes-id → ordered list of copy keys to show in the
   Speaker Notes window for that slide. These are scrollOnly keys the deck
   drops, so the presenter keeps the fuller scroll copy to hand while
   presenting the trimmed slide. Slides with no data-notes-id (or an id not
   listed here) show "No notes for this slide."
─────────────────────────────────────────────────────────────────── */
var CC_NOTES = {
  'role-embedded': ['section_embedded', 'embedded_0', 'embedded_1', 'embedded_2', 'design_cadence_caption'],
  'content':       ['content_0', 'content_2', 'content_3'],
  'cocreators':    ['cocreators_1', 'cocreators_2'],
  'measure':       ['measure_1', 'measure_2', 'measure_3'],
  'reuse':         ['reuse_1', 'reuse_2', 'reuse_3', 'reuse_4'],
  'reflection':    ['reflection_1']
};

/* Expose for the Speaker Notes window (opened via window.open from the deck). */
if (typeof window !== 'undefined') {
  window.CC_COPY = CC_COPY;
  window.CC_NOTES = CC_NOTES;
  window.CC_VISIBILITY = CC_VISIBILITY;
}

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
