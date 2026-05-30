/* ─────────────────────────────────────────────────────────────────
   {PROJECT} — COPY SOURCE OF TRUTH
   Rename this file per project: e.g. money-stories-copy.js

   HOW IT WORKS:
   Both the deck ({slug}-deck.html) and scroll ({slug}-design.html)
   pull copy from this file via data-{prefix}-copy="key" attributes.

   To update copy in both layouts at once:
     1. Change the value here.
     2. Reload either page — the injector at the bottom does the rest.

   COPY INJECTION RULES:
   - Put data-{prefix}-copy on the element whose full textContent should be replaced.
   - When a hardcoded label ("Goal: ") must sit alongside injected copy, put the
     attribute on a child <span>, not the parent element — otherwise the injector's
     el.textContent strips the label.
   - <head> meta tags (title, OG, Twitter) are always hardcoded — the injector
     only runs on body elements.
   - NBSP for no-wrap words goes in the string value here, not in HTML <span> tags,
     because textContent strips all child elements.

   MULTI-PARAGRAPH KEYS:
   Use numbered suffixes: opportunity_0, opportunity_1, opportunity_2 …
   The deck typically shows the first paragraph (_0); scroll shows all of them.

   QUOTE KEY CONVENTIONS:
   quote_*            = full combined string "text — attribution" → deck <p>
   quote_*_text       = quote text only → scroll blockquote <p>
   quote_*_attr       = attribution only → scroll blockquote <footer>

   PREFIX:
   Replace 'cs' in data-cs-copy with a project-specific prefix (e.g. data-ms-copy
   for Money Stories) and update the querySelectorAll below accordingly.
─────────────────────────────────────────────────────────────────── */

var CS_COPY = {

  /* ── Meta — title, project string, role ────────────────────────── */
  case_title:     "{Case study title}",
  project_string: "{Company} · {Client} // {Year}",
  role_title:     "{Role title}",

  /* ── Section headings ────────────────────────────────────────────── */
  section_opportunity: "Opportunity",
  section_hypothesis:  "Hypothesis",
  section_reflection:  "Reflection",
  /* Add approach block section headings here: */
  /* section_rebuild:  "{Approach block heading}", */

  /* ── Output section headings ─────────────────────────────────────── */
  /* section_output_1: "{Output heading} →", */

  /* ── Context / Opportunity ──────────────────────────────────────── */
  opportunity_0: "{Opportunity paragraph 1}",
  opportunity_1: "{Opportunity paragraph 2}",
  /* opportunity_2: "{Opportunity paragraph 3}", */

  /* ── Goal ───────────────────────────────────────────────────────── */
  goal: "{Goal statement}",

  /* ── Hypothesis ─────────────────────────────────────────────────── */
  hypothesis: "{Hypothesis statement}",

  /* ── Approach blocks (clone per pillar) ─────────────────────────── */
  /* approach_{key}_0: "{Paragraph 1}", */
  /* approach_{key}_1: "{Paragraph 2}", */

  /* ── Output sections (clone per workstream) ─────────────────────── */
  /* output_{key}_0: "{Paragraph 1}", */
  /* output_{key}_1: "{Paragraph 2}", */
  /* output_{key}_ai: "{AI in action callout text}", */

  /* ── Reflection ─────────────────────────────────────────────────── */
  reflection_0: "{Reflection paragraph 1}",
  reflection_1: "{Reflection paragraph 2}",
  /* reflection_2: "{Reflection paragraph 3}", */
  /* reflection_3: "{Reflection paragraph 4}", */

  /* ── Quotes — combined (deck <p>) ──────────────────────────────── */
  /* quote_{key}:  ""{Quote text}" — {Attribution}", */

  /* ── Quotes — split (scroll blockquote <p> / <footer>) ─────────── */
  /* quote_{key}_text:  ""{Quote text}"", */
  /* quote_{key}_attr:  "— {Attribution}", */

};

/* ── Injector ── runs synchronously; copy is ready before any layout initialises ── */
(function () {
  /*
    Update the querySelectorAll prefix to match your project.
    e.g. for Money Stories: '[data-ms-copy]' and el.getAttribute('data-ms-copy')
  */
  function inject() {
    document.querySelectorAll('[data-cs-copy]').forEach(function (el) {
      var key = el.getAttribute('data-cs-copy');
      if (CS_COPY[key] !== undefined) {
        el.textContent = CS_COPY[key];
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
