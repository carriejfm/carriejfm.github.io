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
  case_title:     "The rebuild of Afterpay Design",
  project_string: "Block · Afterpay // 2024–2025",
  role_title:     "Head of design",

  /* ── Section headings (editable per case study) ─────────────────── */
  section_opportunity: "Opportunity",
  section_hypothesis:  "Hypothesis",
  section_rebuild:     "Rebuild team & trust",
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
  opportunity_1: "In 2024, the business was in the middle of global BNPL regulatory shift, requiring rapid coordination across regions and disciplines while juggling a rebrand within the US region and continuing to drive growth.",
  opportunity_2: "At the same time, the system was under strain. Design was under-resourced, brought in late, and often asked to execute predefined solutions. Roadmap priorities were volatile, and teams were beginning to ship without design input.",

  /* ── Goal ───────────────────────────────────────────────────────── */
  goal: "Rebuild the design discipline, and shift from execution to strategic partnership — while fulfilling urgent regulatory deadlines.",

  /* ── Hypothesis ─────────────────────────────────────────────────── */
  hypothesis: "I believe teams that understand the problem, ship better solutions than teams that execute predefined ones",

  /* ── Approach: Rebuild team and trust ───────────────────────────── */
  approach_rebuild_0: "I rebuilt the team from the ground up, establishing clear ownership across work streams and introducing best practices in team rituals and tooling.",
  approach_rebuild_1: "A culture of clear feedback and psychological safety was grown with clarity in roles, consistency in the day-to-day and reconnection with the broader design org. I stepped into difficult conversations with adjacent teams to mediate and reset.",
  approach_rebuild_2: "I coached individuals through challenging situations, including unblocking a high-performing, autonomous designer from a performance misunderstanding.",

  /* ── Approach: Solution-led to problem-led ──────────────────────── */
  approach_problem_0: "I shifted the team from executing predefined solutions to defining problems. Through the unpacking of regulatory, business, and behavioral drivers we aligned as a team to redefine and understand opportunities.",
  approach_problem_1: "Designers worked with measurable success criteria in mind and solved problems with true ownership. It made for better cross-functional culture and better delivery outcomes.",

  /* ── Approach: Cross-functional alignment ───────────────────────── */
  approach_xfn_0: "I established consistent alignment across product, engineering, legal, and compliance through a shared roadmap with design capacity visibility, regular 1:1s with product partners and actively embedding research and JTBDs into roadmap and PRDs.",
  approach_xfn_1: "When last-minute requests came up or scope thrashed (as they do), we had the footing to handle it — allowing us to reprioritize, make better tradeoffs or push back if needed. Embedded within the regional leadership team, I influenced strategy and presented to C-suite.",

  /* ── AI in practice (kept in copy; currently removed from scroll approach) ── */
  ai_approach: "If I were to embark on this journey now I would use AI to take and synth weekly notes into actions and support tracking. I would build out the regulation playbook structure, onboarding docs and the design system regional rollout tooling using AI. I would have flexed AI to smash out the manual content audit and publish a living content 'bot that brand and marketing partners could input into and co-own.",

  /* ── A regulated Afterpay ──────────────────────────────────────── */
  regulated_0: "Aligning Afterpay to responsible buy now pay later lending obligations included the design and redesign of key experiences and required variation from region to region:",
  regulated_1: "Credit limit increases, onboarding improvements, user-initiated spend controls to support responsible usage, KYC and compliance flows, autopay to reduce late fees, fraud protection and dispute flows.",
  regulated_2: "I had 2 designers focused on regulation workstreams.",
  regulated_3: "I co-wrote a reusable regulation playbook with product to enable consistent execution across US, AU, NZ and kickstart proactive conversations with UK regulatory bodies.",

  /* ── Global design system rollout and US rebrand ───────────────── */
  designsystem_0: "The Afterpay app, operating in 6 international markets, migrated to a new the parent Cash App design system–within both Afterpay Mint and Cash Green themes.",
  designsystem_1: "I had 2 primary designers working on the design system overhaul, building up token themes and component libraries, 1 designer who overhauled 75 emails into 2 templates using core library components and 1 content designer who did a cross-region audit of all surfaces.",
  designsystem_2: "I oversaw design across all of the above while managing the release strategy facilitation, building out reusable tooling in Notion for the cross-functional team to follow for each regional rollout that would subsequently become a cross-region source of truth.",

  /* ── Hero brand moments in app ─────────────────────────────────── */
  hero_0: "I personally owned the hero brand moments within the app, designing the new US Afterpay Card and how it fit into the wider branding story with my brand partners.",
  hero_1: "The abstracted loop micro-animation on load gave a wink and a nod to Afterpay roots within the new cash green brand.",
  hero_ai: "Later, when we needed to adapt the card animation for the UK — different brand mark, different colorway — I leveraged AI via a combo of internal agent Goose and ChatGPT to rewrite the Lottie JSON directly and tested it in the Lottie viewer.",

  /* ── Afterpay Shop uplift ──────────────────────────────────────── */
  shop_0: "We ran a series of component optimization experiments across our shopping surface to maximize referrals and GPV:",
  shop_1: "Editorial, Banner ad, Category tiles, Sale tag, Merchant avatars, and In app Browser flow all got a little nip and tuck. This workstream also introduced consumer funded checkout for out of network merchants in the US–all resulted in meaningful GPV increase.",
  shop_2: "I had 1 designer focussed on this workstream.",
  shop_3: "I personally managed the relationship with the internal ad teams, helping build tooling and constraints for visual asset standards and consistency.",

  /* ── Reflection ─────────────────────────────────────────────────── */
  reflection_0: "Helping the Afterpay product team get its mojo back was enormously rewarding, and hard-won. It proved what I already knew: the health of the systems and teams we work in drives product outcomes.",
  reflection_1: "My hypothesis was true — the design team shipped solutions that objectively improved the Afterpay product and business.",
  reflection_2: "It's also true that change only comes with trust, and that path isn't always straightforward. Proving new ways of working took time, consistency, and repeated clarity. Not everyone loved the changes from the beginning, and I didn't always nail the approach.",
  reflection_3: "I owned my missteps quickly, asked for feedback, and tried again. I can say with a lot of pride and confidence that I stepped out of this role a year later with a cross-functional team that truly trusted and valued design partnership.",

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
