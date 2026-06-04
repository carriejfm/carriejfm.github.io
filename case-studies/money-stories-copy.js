/* ─────────────────────────────────────────────────────────────────
   MONEY STORIES — COPY SOURCE OF TRUTH
   Both the deck (money-stories-deck.html) and scroll (money-stories-design.html)
   pull copy from this file via data-ms-copy="key" attributes.

   To update copy in both layouts at once:
     1. Change the value here.
     2. Reload either page — the injector at the bottom does the rest.

   COPY INJECTION RULES:
   - Put data-ms-copy on the element whose full textContent should be replaced.
   - When a hardcoded label ("Goal: ") must sit alongside injected copy, put the
     attribute on a child <span>, not the parent element.
   - <head> meta tags are always hardcoded — injector only runs on body elements.
   - NBSP for no-wrap phrases goes in the string value here, not in HTML.

   QUOTE KEY CONVENTIONS:
   quote_*            = full combined string → deck <p>
   quote_*_text       = quote text only → scroll blockquote <p>
   quote_*_attr       = attribution only → scroll blockquote <footer>
─────────────────────────────────────────────────────────────────── */

var MS_COPY = {

  /* ── Meta ───────────────────────────────────────────────────────── */
  case_title:     "Money Stories: swipeable money management",
  project_string: "Money by Afterpay · Block // 2021–2022",
  role_title:     "Design Principal and Lead",

  /* ── Deck-specific meta (deck only) ─────────────────────────────── */
  deck_title:   "Money Stories: swipeable money management",
  deck_company: "Money by Afterpay · Block · 2021–2022",

  /* ── Role rows (scroll + deck) ───────────────────────────────────── */
  role_responsible: "Creator, designer and design lead on Money Stories and subsequent workstreams",
  role_accountable: "Design partner to media and content, driving standards for design team ways of working, culture and craft",
  role_consulted:   "Broader Money by Afterpay positioning strategy, engineering and product decisions",

  /* ── Section headings ────────────────────────────────────────────── */
  section_opportunity:   "Opportunity",
  section_hypothesis:    "Hypothesis",
  section_reflection:    "Reflection",
  section_accessible:    "Making finances accessible",
  section_format:        "Designing the format",
  section_live_data:     "Live data stories",
  section_partnerships:  "Partnerships that made it a franchise, not a feature",
  section_facilitating:  "Facilitating, mapping, and stress-testing the system",

  /* ── Context / Opportunity ──────────────────────────────────────── */
  opportunity_0: "In 2021 Afterpay had embarked on a new proposition: Money by Afterpay — a money-positive neobank-style product for the Afterpay consumer base.",
  opportunity_1: "A year into the Covid digital surge, the Afterpay audience wasn't asking for a spreadsheet or dashboard to help manage their finances; they were living on Instagram, consuming Reels, swiping stories.",
  opportunity_2: "I was brought in as design principal to help Millennials and Gen Z 'feel' their money. Banking UX had no native format for the behavior young money-anxious users were already fluent in. I put two and two together and Money Stories was born.",

  /* ── Goal ───────────────────────────────────────────────────────── */
  goal: "make money feel as easy as Instagram — turning raw spending data into bite-sized insight and low-barrier-to-entry action.",

  /* ── Hypothesis ─────────────────────────────────────────────────── */
  hypothesis: "I believe using a known low-effort digital content pattern will lower the barrier to engagement with - and improve feelings and behavior around - money.",

  /* ── Approach blocks ─────────────────────────────────────────────── */
  accessible_0: "My hunch was that the content consumption habits used in low-stress environments could translate to, and ease the friction within, the higher-stress money environment. Like Nike Training Club made fitness feel bite-sized and manageable, Money Stories would make money feel simple and accessible.",
  accessible_1: "Money insight stories were generated from the user's own data and delivered in story reel content, ending in a one-tap action.",


  /* ── Flywheel figure ─────────────────────────────────────────────── */
  flywheel_caption: "The core concept was articulated as a flywheel: Data → Content → Action, repeating daily and weekly.",

  /* ── Format taxonomy figure ──────────────────────────────────────── */
  format_figure_caption: "We leveraged known habitual Reels patterns so users didn't need to learn new mental models or interaction patterns.",

  /* ── User research and validation ────────────────────────────────── */
  section_research: "User research and validation",
  research_0: "Discovery research had given us reason to believe a content-first approach to data was the direction to take",
  research_1: "When we took the Money Stories concept back to research participants the response was unanimously positive.",
  research_2: "I'd been in the role weeks when I pushed back on leadership to keep Money Stories in the founder deck. We had the qual backing, I had the conviction — and I was right.",


  format_0: "I designed a reel of avatars that sat at eye level on the home surface, just below the hero balance.",
  format_1: "There were three user data-based stories that populated on an async cadence:",
  format_2: "1) Daily Spend was live and answered the question: what did I spend today?",
  format_3: "2) Afterpay Spend was live and showed current balance, orders and status.",
  format_4: "3) Weekly Insights dropped every Monday — the big Spotify-reel payoff with bite-sized data on where last week's money went across Wants, Needs and savings.",

  partnerships_0: "I worked with my marketing partner to harness media partnerships that would make Money Stories about more than just self-reflection.",
  partnerships_1: "We partnered with Refinery29 to translate their long-form editorial hit, Money Diaries, into weekly short-form Money Stories dropping each Thursday. In our most successful program, we partnered with Pedestrian on Makes Cents — a co-created editorial franchise that polled our respective communities on Instagram on Tuesday and dropped the visualised results in the app the following Tuesday, with a link out to a long-form data-backed editorial article on Pedestrian. This story format held a 55% engagement rate.",
  partnerships_2: "With Calm, we were co-designing Money Mindfulness for our Weekly Outros and a new Money Fit track. In parallel, a talent and founder series (starting with a Lil Nas X concept around \"Every money story starts somewhere\") was in flight when org changes shifted priorities.",

  facilitating_0: "Money insight storytelling — while visually simple to users — needed complex mapping to ensure ins, outs, savings and transfers were attributed in a meaningful way. I facilitated co-creation workshops with director-level stakeholders to align on potential money management systems, then took our top ideas back to research to sense-check with users.",
  facilitating_1: "I mapped multiple use cases and hypothetical spend data scenarios, then pulled in my engineering counterparts to collaboratively stress-test them, teasing out edge cases and ensuring every story template could survive the messiness of real user data.",
  facilitating_2: "A surface with an active content publishing rhythm isn't a 'set and forget' feature. I personally designed the systems, content workflow and CMS tooling to support the various content formats and cadences — then owned those workflows myself before hiring and handing over to a content marketing partner.",

  /* ── Output headings ─────────────────────────────────────────────── */
  section_output_editorial:    "Editorial partnerships →",
  section_output_avatar:       "Money Stories avatar reel on app home →",
  section_output_stories:      "Daily Spend · Afterpay Spend · Weekly Insights →",
  section_output_makes_cents:  "Pedestrian Makes Cents →",
  section_output_r29:          "Refinery29 Money Diaries in-app story →",
  section_output_calm:         "Calm × Money Mindfulness →",
  section_output_outro:        "Weekly Outro →",

  /* ── Output body copy ────────────────────────────────────────────── */
  output_avatar_0:      "Familiar format. Unfamiliar subject: your money. A horizontal avatar reel at eye level on the home screen — the same swipe mechanic users already ran on autopilot every morning.",
  output_stories_0:     "Three story types on three distinct cadences — Daily Spend, Afterpay Spend, and Weekly Insights — each generated from the user's own data and ending in a one-tap action. Playful messaging and deep links to take action were punctuated throughout. Each weekly drop ended with an Outro — a deliberately mindful bookend that helped users pause and ground in positivity.",
  output_makes_cents_0: "A closed loop between community, app, and publisher. Instagram poll on Tuesday → in-app results story the following Tuesday → link out to a long-form data-backed editorial on Pedestrian.com. Held a 55% engagement rate.",
  output_r29_0:         "Long-form editorial, re-cut for a swipe. Refinery29's Money Diaries franchise translated into a weekly short-form story dropping each Thursday.",
  output_calm_0:        "Money anxiety, addressed in the surface itself. Co-designed with Calm as a deliberate mindful bookend after the Weekly Insights data drop.",
  output_outro_0:       "A mindful bookend after the data. Each Weekly Insights drop closed with an Outro — a deliberately calm screen to help users pause and ground in positivity.",

  /* ── AI in Practice ──────────────────────────────────────────────── */
  ai_then: "We collaboratively mapped multiple data scenarios and edge cases with engineering so every story template could survive the messiness of real user data. The limit of that era was that this was manual and inefficient.",
  ai_now:  "AI is most useful when it removes the wait between an idea and seeing it under stress — and this is an ideal scenario to leverage it. Today I would use an AI scenario partner to generate realistic synthetic data across the long tail (high spenders, no-spenders, lumpy pay cycles, weird edge cases) and instantly render the visual story for each one. This would have saved weeks on Money Insight stories.",

  /* ── Output credit lines ─────────────────────────────────────────── */
  output_avatar_credit:      "IC · home surface, avatar reel design, story system",
  output_stories_credit:     "IC · story type design, content system, CMS tooling",
  output_makes_cents_credit: "IC · partnership creative direction, in-app story design",
  output_r29_credit:         "IC · editorial partnership, story format design",
  output_calm_credit:        "IC · partnership creative direction, Outro design",
  output_outro_credit:       "IC · Outro design, content cadence",

  /* ── Stats — values shared across scroll + deck ─────────────────── */
  stat_1_value: "55%",  stat_1_label: "engagement rate · Makes Cents",
  stat_2_value: "400K", stat_2_label: "total story views",
  stat_3_value: "27%",  stat_3_label: "of actives viewing stories",

  /* ── Outcome category labels (scroll + deck) ─────────────────────── */
  outcome_scale:    "Scale",
  outcome_business: "Business",
  outcome_team:     "Team",
  outcome_product:  "Product",

  /* ── Impact bullets — deck (shorter/punchier) ────────────────────── */
  impact_scale_0:    "400K total story views, 64K unique viewers",
  impact_scale_1:    "489 total hours watched",
  impact_scale_2:    "27% of active users viewing",
  impact_scale_3:    "55% engagement rate on Makes Cents",
  impact_business_0: "Measurable engagement at a scale the AU org hadn't seen on content surfaces",
  impact_business_1: "Repeatable partnership playbook — editorial → in-app, with publishing rhythm",
  impact_business_2: "Press-worthy creative moments supporting Money Positive brand narrative",
  impact_team_0:     "Led multi-stream design across Money Stories, Savers, Categories, Fit",
  impact_team_1:     "Built tooling and ways of working that influenced the wider design team",
  impact_team_2:     "Modelled lead by participating — hands-on in Figma while scaling craft",
  impact_product_0:  "Shipped new content-led surface inside Money by Afterpay",
  impact_product_1:  "Designed story template system — Daily, Afterpay Spend, Weekly Insights, Outros",
  impact_product_2:  "Connected Stories into Categories (wants/needs) and Savers",
  impact_product_3:  "Partner authoring model for R29, Pedestrian, and Calm",

  /* ── Outcome bullets — scroll (longer/more detailed) ─────────────── */
  outcome_scale_0:    "400K total story views, 64K unique viewers, 2K average weekly viewers",
  outcome_scale_1:    "489 total hours watched",
  outcome_scale_2:    "27% of active app users viewing stories",
  outcome_scale_3:    "55% engagement rate on Makes Cents — the most successful program",
  outcome_business_0: "Delivered measurable engagement at a scale the AU org hadn't seen on content surfaces before",
  outcome_business_1: "Created a repeatable partnership playbook (editorial → in-app content, with a publishing rhythm)",
  outcome_business_2: "Generated press-worthy creative moments supporting the Money Positive brand narrative",
  outcome_team_0:     "Led a multi-stream design group across Money Stories, Money Savers, Money Categories, Money Fit",
  outcome_team_1:     "Built tooling, ways of working and rituals that influenced the wider design team",
  outcome_team_2:     "Modelled lead by participating — hands-on in Figma while scaling the craft bar",
  outcome_product_0:  "Shipped Money Stories as a new content-led surface inside the Money by Afterpay app",
  outcome_product_1:  "Designed the story template system (Daily Spend, Afterpay Spend, Weekly Insights, Weekly Outros)",
  outcome_product_2:  "Connected Money Stories into Money Categories (wants/needs) and Money Savers",
  outcome_product_3:  "Stood up a partner authoring model so R29, Pedestrian and Calm could publish within the system",

  /* ── Reflection ─────────────────────────────────────────────────── */
  reflection_0: "I came into the Money by Afterpay team with fresh eyes and trusted my instincts. I recall a lead getting cold feet just before the first Money Stories founder presentation and I pushed back; we had the qualitative backing and I had confidence it was right. I told them I didn't want to drop it from the deck.",
  reflection_1: "And I was right. Money Stories achieved 55% engagement — unusually high for a feature that asked people to slow down inside a utility app. Money Stories leveraged the right behavior at the right time.",
  reflection_2: "Lateral thinking is easy to talk about and not always as easy to nail. I built out a 'parallel worlds' workshop when working agency side that helped clients get outside of their own segment and competitor silos and into adjacent human behavior. I still think it's one of the most interesting exercises a team can go through. Market landscape research is important; behavioral landscape? Maybe even more.",

  /* ── Quotes — combined (deck) ────────────────────────────────────── */
  quote_research: '"It\'s visually pleasing to go through stories like that. It\'s not as time consuming as a spreadsheet. I think it would be helpful for me personally because of the data they can gather for me — having it at your fingertips is useful." — Research participant',
  quote_cpo:      '"Carrie is great at forming through ambiguity, breaking things apart and guiding cross-functional teams through messiness to outcome. Money Stories was an example of that — pushing forward with an idea, getting buy-in from senior stakeholders and then delivering on a really cool experience all the way from insights to content." — Chief product officer',
  quote_pp:       '"Your work on Money Stories was incredible!" — Product partner',
  quote_viewer:   '"It\'s like Spotify\'s yearly review, but for your money." — Money Stories viewer',

  /* ── Quotes — split (scroll) ─────────────────────────────────────── */
  quote_research_text: '"It\'s visually pleasing to go through stories like that. It\'s not as time consuming as a spreadsheet. I think it would be helpful for me personally because of the data they can gather for me — having it at your fingertips is useful."',
  quote_research_attr: "— Research participant",

  quote_cpo_text: '"Carrie is great at forming through ambiguity, breaking things apart and guiding cross-functional teams through messiness to outcome. Money Stories was an example of that — pushing forward with an idea, getting buy-in from senior stakeholders and then delivering on a really cool experience all the way from insights to content."',
  quote_cpo_attr: "— Chief product officer",

  quote_pp_text: '"Your work on Money Stories was incredible!"',
  quote_pp_attr: "— Product partner",

  quote_viewer_text: '"It\'s like Spotify\'s yearly review, but for your money."',
  quote_viewer_attr: "— Money Stories viewer",

};

/* ── Injector ── */
(function () {
  function inject() {
    document.querySelectorAll('[data-ms-copy]').forEach(function (el) {
      var key = el.getAttribute('data-ms-copy');
      if (MS_COPY[key] !== undefined) {
        el.textContent = MS_COPY[key];
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
