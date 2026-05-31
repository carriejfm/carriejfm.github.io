/* ─────────────────────────────────────────────────────────────────
   AFTERPAY — COPY SOURCE OF TRUTH
   Edit copy here. Both the deck (afterpay-deck.html) and scroll
   (afterpay-design.html) pull from this file via data-ap-copy="key".

   To update copy in both layouts:
     1. Change the value here.
     2. Reload either page — the injector at the bottom does the rest.

   Multi-paragraph content uses numbered suffixes: regulated_0, regulated_1 …
   The first paragraph (_0) is always visible; subsequent ones build in on the deck.

   ── DISPLAY RULES ────────────────────────────────────────────────
   Both layouts:
     case_title, project_string, role_title
     section_opportunity, opportunity_0–2
     goal
     section_hypothesis, hypothesis
     section_rebuild, approach_rebuild_0–2
     quote_product_partner, quote_product_partner_text, quote_product_partner_attr
     section_problem, approach_problem_0–1
     quote_design_manager, quote_design_manager_text, quote_design_manager_attr
     section_xfn, approach_xfn_0–1
     quote_eng_partner, quote_eng_partner_text, quote_eng_partner_attr
     section_regulated, regulated_0–3
     section_designsystem, designsystem_0–2
     section_hero, hero_0–1, hero_ai
     section_shop, shop_0–3
     section_reflection, reflection_0–3
     quote_xfn_partner, quote_xfn_partner_text, quote_xfn_partner_attr
     quote_cmo, quote_cmo_text, quote_cmo_attr

   Deck only:
     (Index slide — always the same four sections, no copy key needed)
     (Section-title slides for Context, Approach, Outputs, Outcomes — hardcoded single words)

   Scroll only:
     ai_approach  (removed from scroll — kept in copy in case it returns)

   Quote key conventions:
     quote_*            = full combined string "text — attribution" → deck <p>
     quote_*_text       = quote text only → scroll blockquote <p>
     quote_*_attr       = attribution only → scroll blockquote <footer>
─────────────────────────────────────────────────────────────────── */

var AP_COPY = {

  /* ── Meta — title, project string, role ────────────────────────── */
  case_title:     "The rebuild of Afterpay Design",
  project_string: "Block · Afterpay // 2024–2025",
  role_title:     "Head of design",

  /* ── Section headings (editable per case study) ─────────────────── */
  section_opportunity: "Opportunity",
  section_hypothesis:  "Hypothesis",
  section_rebuild:     "Rebuild team and trust",
  section_problem:     "Solution-led to problem-led",
  section_xfn:         "Cross-functional alignment",
  section_reflection:  "Reflection",

  /* ── Output section headings ─────────────────────────────────────── */
  section_regulated:    "A regulated Afterpay →",
  section_designsystem: "Global design system rollout and US rebrand →",
  section_hero:         "Hero brand moments in app →",
  section_shop:         "Afterpay Shop uplift →",

  /* ── Context / Opportunity ──────────────────────────────────────── */
  opportunity_0: "Afterpay operates in the Buy Now, Pay Later (BNPL) space, where consumer trust and regulation are critical to growth.",
  opportunity_1: "In 2024, the business was navigating a global BNPL regulatory shift, requiring rapid coordination across regions and disciplines while juggling a rebrand within the US region and continuing to drive growth.",
  opportunity_2: "At the same time, the system was under strain. Design was under-resourced, brought in late, and often asked to execute predefined solutions. Roadmap priorities were volatile, and teams were beginning to ship without design input.",

  /* ── Goal ───────────────────────────────────────────────────────── */
  goal: "Rebuild the design discipline into a trusted strategic partner while delivering urgent regulatory change across multiple markets.",

  /* ── Hypothesis ─────────────────────────────────────────────────── */
  hypothesis: "I believe teams that understand a problem, ship better solutions than teams that execute predefined ones",

  /* ── Approach: Rebuild team and trust ───────────────────────────── */
  approach_rebuild_0: "I rebuilt the team from the ground up, establishing clear ownership across work streams and introducing best practices in team rituals and tooling.",
  approach_rebuild_1: "A culture of clear feedback and psychological safety was grown with clarity in roles, consistency in the day-to-day and reconnection with the broader design org.",
  approach_rebuild_2: "I stepped into difficult conversations with adjacent teams to mediate, and coached individuals through challenging situations, including unblocking a high-performing designer from a performance misunderstanding.",

  /* ── Approach: Solution-led to problem-led ──────────────────────── */
  approach_problem_0: "We shifted from delivering predefined solutions to defining problems first — grounding work in regulatory, business, and behavioural drivers before proposing solutions.",
  approach_problem_1: "Designers worked with measurable success criteria and true ownership. It made for better cross-functional culture and better delivery outcomes.",

  /* ── Approach: Cross-functional alignment ───────────────────────── */
  approach_xfn_0: "I established consistent alignment across product, engineering, legal, and compliance through a shared roadmap with design capacity visibility, regular 1:1s with product partners and actively embedding research and JTBDs into roadmap and PRDs.",
  approach_xfn_1: "When last-minute requests came up or scope thrashed (as they do), we had the footing to handle it — allowing us to reprioritize, make better tradeoffs or push back if needed. Embedded within the regional leadership team, I influenced strategy and presented to C-suite.",

  /* ── AI in practice (kept in copy; currently removed from scroll approach) ── */
  ai_approach: "If I were to embark on this journey now I would use AI to take and synth weekly notes into actions and support tracking. I would build out the regulation playbook structure, onboarding docs and the design system regional rollout tooling using AI. I would have flexed AI to smash out the manual content audit and publish a living content 'bot that brand and marketing partners could input into and co-own.",

  /* ── A regulated Afterpay ──────────────────────────────────────── */
  regulated_0: "Aligning Afterpay to responsible BNPL lending obligations meant designing and redesigning key experiences with regional variation —",
  regulated_1: "Credit limit increases, onboarding improvements, spend controls, KYC and compliance flows, autopay, fraud protection and dispute resolution.",
  regulated_2: "I co-wrote a reusable regulation playbook with product to enable consistent execution across AU, NZ and the US, and kickstart proactive conversations with UK regulatory bodies.",
  regulated_3: "2 designers · regulation workstreams",

  /* ── Global design system rollout and US rebrand ───────────────── */
  designsystem_0: "The Afterpay app, operating in 6 international markets, migrated to the parent Cash App design system across both Afterpay Mint and Cash Green themes.",
  designsystem_1: "We built out token themes and custom commerce component libraries, overhauled 75 emails into 2 reusable templates and completed a cross-region surface content audit.",
  designsystem_2: "I oversaw all of the above while leading release strategy, building reusable Notion tooling for each regional rollout, which became the cross-functional source of truth.",
  designsystem_3: "4 designers · design system + rebrand",

  /* ── Hero brand moments in app ─────────────────────────────────── */
  hero_0: "I personally owned the hero brand moments within the app, including design of the new US Afterpay Card and how it fit into the wider branding story with my brand partners.",
  hero_1: "The abstracted loop micro-animation on load gave a wink and a nod to Afterpay roots within the new Cash green brand.",
  hero_2:  "IC · card design + motion direction",
  hero_ai: "When we needed to adapt the card animation for the UK — different brand mark, different colorway — I used a combination of internal agent Goose and ChatGPT to rewrite the Lottie JSON directly and tested it in the Lottie viewer before shipping it.",

  /* ── Afterpay Shop uplift ──────────────────────────────────────── */
  shop_0: "We ran a series of component optimisation experiments across the Afterpay shopping surface to maximise referrals and GPV.",
  shop_1: "Editorial, banner ads, category tiles, sale tags, merchant avatars and in-app browser flow all got a refresh. This workstream also introduced consumer-funded checkout for out-of-network merchants in the US. All resulted in meaningful GPV increase.",
  shop_2: "I personally managed the relationship with internal ad and CMS teams, building ways of working, tooling and constraints to maintain visual asset consistency.",
  shop_3: "1 designer · shop optimisation",

  /* ── Reflection ─────────────────────────────────────────────────── */
  reflection_0: "Helping the Afterpay product team get its mojo back was enormously rewarding, and hard-won. It proved what I already knew: that the health of the systems and teams we work in drives product outcomes. ",
  reflection_1: "My hypothesis was true — the design team shipped solutions that objectively improved the Afterpay product and business.",
  reflection_2: "It's also true that change only comes with trust, and that path isn't always straightforward. Proving new ways of working took time, consistency, and repeated clarity. Not everyone loved the changes from the beginning, and I didn't always nail the approach.",
  reflection_3: "I owned my missteps quickly, asked for feedback, and tried again. I can say with a lot of pride and confidence that I stepped out of this role a year later with a cross-functional team that truly trusted and valued design partnership.",

  /* ── Outcomes — Scale ───────────────────────────────────────────── */
  outcome_scale_0: "Reusable design system rollout approach across regions",
  outcome_scale_1: "Improved design system and accessibility standards",
  outcome_scale_2: "Positioned Afterpay as a leader in consumer trust within BNPL — 908 earned media stories at 91% positive sentiment validated the approach as a category-leading model",
  outcome_scale_3: "Established repeatable regulatory playbook",

  /* ── Outcomes — Business ─────────────────────────────────────────── */
  outcome_business_0: "Delivered regulatory readiness across AU + NZ — 96% customer completion through new income verification and credit check flows",
  outcome_business_1: "Dynamic credit limit algorithm lifted average qualified spend from $600 to $730 (~22%) under the new regulatory regime",
  outcome_business_2: "1.5–6× increase in referrals and clickthrough on Afterpay Shop surfaces",
  outcome_business_3: "Supported +36% YoY growth ($7.8B GPV, $320M gross profit)",

  /* ── Outcomes — Team ─────────────────────────────────────────────── */
  outcome_team_0: "Scaled from 2 → 7 designers",
  outcome_team_1: "Improved morale, ownership, and performance",
  outcome_team_2: "Full roadmap supported by design",

  /* ── Outcomes — Product ──────────────────────────────────────────── */
  outcome_product_0: "Shift to problem-led design across workstreams",
  outcome_product_1: "Reduced rework and reactive delivery",
  outcome_product_2: "Improved experimentation quality",
  outcome_product_3: "Shaved substantial* time off onboarding and limit approval flow",

  /* ── Quotes — combined (deck <p>) ──────────────────────────────── */
  quote_product_partner:  "“Carrie built an incredibly talented team and created the environment for them to lean in with ownership.” — Product partner",
  quote_design_manager:   "“She pushed back and held the line when warranted… while building credibility and trust across teams.” — Design manager",
  quote_eng_partner:      "“Her prioritization was crucial in helping the team focus on the most impactful work and ultimately meet our release timeline.” — Engineering partner",
  quote_xfn_partner:      "“Carrie has been able to effectively communicate and align strategies across teams, adapting team structures and resources to meet evolving business needs.” — Cross-functional partner",
  quote_cmo:              "“She has a strong, positive influence at the leadership level — bringing both strategic thinking and empathy to complex initiatives.” — Afterpay CMO",

  /* ── Quotes — split (scroll blockquote <p> / <footer>) ─────────── */
  quote_product_partner_text:  "“Carrie built an incredibly talented team and created the environment for them to lean in with ownership.”",
  quote_product_partner_attr:  "— Product partner",
  quote_design_manager_text:   "“She pushed back and held the line when warranted… while building credibility and trust across teams.”",
  quote_design_manager_attr:   "— Design manager",
  quote_eng_partner_text:      "“Her prioritization was crucial in helping the team focus on the most impactful work and ultimately meet our release timeline.”",
  quote_eng_partner_attr:      "— Engineering partner",
  quote_xfn_partner_text:      "“Carrie has been able to effectively communicate and align strategies across teams, adapting team structures and resources to meet evolving business needs.”",
  quote_xfn_partner_attr:      "— Cross-functional partner",
  quote_cmo_text:              "“She has a strong, positive influence at the leadership level — bringing both strategic thinking and empathy to complex initiatives.”",
  quote_cmo_attr:              "— Afterpay CMO",

};

/* ── Injector — runs synchronously so copy is ready before any layout initialises ── */
(function () {
  function inject() {
    document.querySelectorAll('[data-ap-copy]').forEach(function (el) {
      var key = el.getAttribute('data-ap-copy');
      if (AP_COPY[key] !== undefined) {
        el.textContent = AP_COPY[key];
      }
    });
  }
  /* Run immediately if DOM is ready, otherwise wait */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
