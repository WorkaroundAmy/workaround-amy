import {
  aiTools,
  caseStudies,
  everydayCategories,
  schoolCategories,
  skills,
  site,
  tutorials,
  workflowKits,
} from "./data.js";

const routes = [
  ["Home", "index.html"],
  ["How I Think", "how-i-think.html"],
  ["Build With Me", "build-with-me.html"],
  ["Workflow Kits", "workflow-kits.html"],
  ["School Systems", "school-systems.html"],
  ["Everyday Systems", "everyday-systems.html"],
  ["Proof of Work", "proof-of-work.html"],
  ["About", "about.html"],
];

const statusClass = (status = "") =>
  status.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const list = (items) => items.map((item) => `<li>${item}</li>`).join("");

const logoAsset = "public/images/workaround-amy-logo-tight.png";
const footerLogoAsset = "public/images/workaround-amy-logo.png";
const bannerAsset = "public/images/workaround-amy-banner.png";
const profileAsset = "public/images/workaround-amy-profile.png";

function flowDiagram(label = "chaos to system to forward motion") {
  return `
    <div class="flow-diagram" aria-label="${label}">
      <svg viewBox="0 0 680 220" aria-hidden="true">
        <path class="flow-scribble" d="M67 116c32-66 89 28 36 48-48 18-81-45-29-78 45-29 102 27 52 66-45 35-109-24-48-72 62-49 137-2 126 62" fill="none"/>
        <rect class="flow-window" x="264" y="46" width="166" height="118" rx="18"/>
        <path class="flow-window-line" d="M292 82h90M292 111h66M292 140h108"/>
        <path class="flow-path" d="M190 133c66 44 145 42 215 4 48-26 88-35 140-4"/>
        <path class="flow-arrow" d="M543 133l55 2-34 42"/>
      </svg>
      <div class="flow-labels">
        <span>Messy chaos</span>
        <span>Organized system</span>
        <span>Forward motion</span>
      </div>
    </div>`;
}

export function renderHeader(activePath) {
  const nav = routes
    .map(([label, href]) => {
      const active = href === activePath || (activePath === "" && href === "index.html");
      return `<a href="${href}" ${active ? 'aria-current="page"' : ""}>${label}</a>`;
    })
    .join("");

  return `
    <header class="site-header">
      <a class="skip-link" href="#main">Skip to content</a>
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand-mark" href="index.html" aria-label="Workaround Amy home">
          <img class="brand-logo" src="${logoAsset}" alt="Workaround Amy">
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span></span><span></span><span></span>
          <span class="sr-only">Open navigation</span>
        </button>
        <div class="nav-links" id="site-nav">${nav}</div>
      </nav>
    </header>`;
}

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <a class="brand-mark footer-brand" href="index.html">
            <img class="brand-logo" src="${footerLogoAsset}" alt="Workaround Amy">
          </a>
          <p>${site.philosophy}</p>
        </div>
        <div>
          <h2>Explore</h2>
          <a href="how-i-think.html">How I Think</a>
          <a href="workflow-kits.html">Workflow Kits</a>
          <a href="proof-of-work.html">Proof of Work</a>
        </div>
        <div>
          <h2>Built For</h2>
          <a href="school-systems.html">School Systems</a>
          <a href="everyday-systems.html">Everyday Systems</a>
          <a href="build-with-me.html">Build With Me</a>
        </div>
      </div>
      <p class="fine-print">© ${new Date().getFullYear()} ${site.name}. Practical systems, human judgment, and no fake magic.</p>
    </footer>`;
}

export function pageIntro({ eyebrow, title, subtitle, text }) {
  return `
    <section class="page-intro">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
      <h1>${title}</h1>
      ${subtitle ? `<p class="lede">${subtitle}</p>` : ""}
      ${text ? `<p>${text}</p>` : ""}
    </section>`;
}

export function sectionHeading({ eyebrow, title, text, align = "" }) {
  return `
    <div class="section-heading ${align}">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
      <h2>${title}</h2>
      ${text ? `<p>${text}</p>` : ""}
    </div>`;
}

export function ctaSection({
  title = site.signature,
  text = "Start with one repeatable mess. Turn it into something you can reuse.",
  primary = ["Build With Me", "build-with-me.html"],
  secondary = ["Browse Workflow Kits", "workflow-kits.html"],
} = {}) {
  return `
    <section class="cta-band">
      <div>
        <p class="eyebrow">Practical next step</p>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      <div class="button-row">
        <a class="button primary" href="${primary[1]}">${primary[0]}</a>
        <a class="button secondary" href="${secondary[1]}">${secondary[0]}</a>
      </div>
    </section>`;
}

export function emailSignup() {
  return `
    <section class="signup-panel" id="signup" aria-labelledby="signup-title">
      <div>
        <p class="eyebrow">Freebie placeholder</p>
        <h2 id="signup-title">Get the first starter kit when it is ready.</h2>
        <p>No checkout or email platform is connected yet. This spot is ready for the future freebie, newsletter, or kit list.</p>
      </div>
      <form class="signup-form">
        <label for="email">Email address</label>
        <div>
          <input id="email" name="email" type="email" placeholder="amy@example.com" disabled>
          <button class="button primary" type="button" disabled>Coming soon</button>
        </div>
      </form>
    </section>`;
}

export function pullQuote(text) {
  return `<figure class="pull-quote"><blockquote>${text}</blockquote></figure>`;
}

export function amyNote(text) {
  return `
    <aside class="amy-note">
      <span>Amy note</span>
      <p>${text}</p>
    </aside>`;
}

export function freebieSection() {
  const downloadUrl = "/downloads/workflow-idea-starter-kit-workaround-amy.pdf";
  return `
    <section class="freebie-callout">
      <div>
        <p class="eyebrow">Free 15-minute guide</p>
        <h2>Workflow Idea Starter Kit</h2>
        <p class="lede">Turn one recurring problem into a system you can actually reuse.</p>
        <p>This free guide helps you notice one piece of repeated work, give AI enough context to be useful, and choose a first version worth trying.</p>
        <p class="freebie-list-label">Inside, you’ll get:</p>
        <ul class="check-list">
          ${list([
            "The Workaround Amy way of looking at repeated work",
            "A quick example",
            "A 5-question copy/paste prompt",
            "A simple human review checklist",
            "A quick container guide",
          ])}
        </ul>
      </div>
      <div class="freebie-action">
        <p>No giant workbook. No overbuilt dashboard. No homework before you start. Just one repeated mess, one useful prompt, and a first version you can try.</p>
        <a class="button primary" href="${downloadUrl}" target="_blank" rel="noopener">Download the free guide</a>
      </div>
    </section>`;
}

export function pathwayCard({ title, text, href, label }) {
  return `
    <article class="pathway-card">
      <h3>${title}</h3>
      <p>${text}</p>
      <a class="text-link" href="${href}">${label}</a>
    </article>`;
}

export function statusBadge(status) {
  return `<span class="status ${statusClass(status)}">${status}</span>`;
}

export function tutorialCard(tutorial) {
  const related = workflowKits.find((kit) => kit.id === tutorial.relatedKitId);
  return `
    <article class="content-card tutorial-card">
      <div class="card-topline">
        <span>${tutorial.category}</span>
        ${statusBadge(tutorial.status)}
      </div>
      <h3>${tutorial.title}</h3>
      <p>${tutorial.summary}</p>
      <div class="meta-line">Audience: ${tutorial.audience}</div>
      ${related ? `<div class="meta-line">Related kit: ${related.title}</div>` : ""}
      <div class="youtube-placeholder" aria-label="YouTube embed placeholder">
        <span>Video placeholder</span>
      </div>
    </article>`;
}

export function workflowKitCard(kit) {
  const priceMarkup = kit.price ? `<span class="price">${kit.price}</span>` : `<span class="price muted-price">Price not posted yet</span>`;
  const targetMarkup = kit.ctaTarget ? ` target="${kit.ctaTarget}" rel="noopener"` : "";
  return `
    <article class="content-card kit-card">
      <div class="card-topline">
        <span>${kit.category}</span>
        ${statusBadge(kit.status)}
      </div>
      <h3>${kit.title}</h3>
      <p><strong>For:</strong> ${kit.audience}</p>
      <p><strong>Pain point:</strong> ${kit.painPoint}</p>
      <p>${kit.promise}</p>
      <ul class="check-list">${list(kit.includes)}</ul>
      <div class="card-actions">
        ${priceMarkup}
        <a class="button secondary small" href="${kit.ctaUrl}"${targetMarkup}>${kit.ctaLabel}</a>
      </div>
    </article>`;
}

export function caseStudyCard(study) {
  return `
    <article class="content-card case-card">
      <div class="card-topline">
        <span>Case study</span>
        ${statusBadge(study.status)}
      </div>
      <h3>${study.title}</h3>
      ${study.realWorldMess ? `<p class="mess-line"><strong>Real-world mess:</strong> ${study.realWorldMess}</p>` : ""}
      <p><strong>Problem:</strong> ${study.problem}</p>
      <p><strong>System built:</strong> ${study.afterState}</p>
      <p><strong>What changed:</strong> ${study.beforeState}</p>
      <p><strong>Tools:</strong> ${study.tools.join(", ")}</p>
      <p><strong>Skills:</strong> ${study.skills.join(", ")}</p>
      <p class="recruiter-summary">${study.recruiterSummary}</p>
    </article>`;
}

export function toolStackCard(tool) {
  return `
    <article class="content-card tool-card">
      <div class="card-topline"><span>${tool.role}</span></div>
      <h3>${tool.name}</h3>
      <p><strong>Best for:</strong> ${tool.bestFor}</p>
      <p>${tool.howAmyUsesIt}</p>
      <p class="judgment-note">${tool.humanJudgmentReminder}</p>
    </article>`;
}

function compactCaseCard(study) {
  return `
    <article class="content-card compact-card">
      <div class="card-topline"><span>Proof of work</span></div>
      <h3>${study.title}</h3>
      ${study.realWorldMess ? `<p class="mess-line"><strong>Real-world mess:</strong> ${study.realWorldMess}</p>` : ""}
      <p><strong>Problem:</strong> ${study.problem}</p>
      <p><strong>System built:</strong> ${study.afterState}</p>
      <p><strong>Tools:</strong> ${study.tools.join(", ")}</p>
      <a class="button secondary small" href="proof-of-work.html">See Proof of Work</a>
    </article>`;
}

function homeProofCard(study) {
  return `
    <article class="content-card compact-card home-proof-card">
      <div class="card-topline"><span>Proof of work</span></div>
      <h3>${study.title}</h3>
      <p><strong>Problem:</strong> ${study.problem}</p>
      <p><strong>System:</strong> ${study.afterState}</p>
      <p><strong>Tools:</strong> ${study.tools.join(", ")}</p>
    </article>`;
}

function compactKitCard(kit) {
  return `
    <article class="content-card compact-card">
      <div class="card-topline">
        <span>${kit.category}</span>
        ${statusBadge(kit.status)}
      </div>
      <h3>${kit.title}</h3>
      <p>${kit.promise}</p>
      <a class="button secondary small" href="workflow-kits.html">Explore Workflow Kits</a>
    </article>`;
}

export function categoryCard(category) {
  return `
    <article class="content-card category-card">
      <h3>${category.title}</h3>
      <p>${category.description}</p>
      <ul>${list(category.examples)}</ul>
      ${category.note ? `<p class="responsible-note">${category.note}</p>` : ""}
    </article>`;
}

export function renderPage(page) {
  const root = document.querySelector("main[data-page]");
  if (!root) return;
  const active = window.location.pathname.split("/").pop() || "index.html";
  root.insertAdjacentHTML("beforebegin", renderHeader(active));
  document.body.insertAdjacentHTML("beforeend", renderFooter());

  if (page === "home") renderHome(root);
  if (page === "how") renderHow(root);
  if (page === "build") renderBuild(root);
  if (page === "kits") renderKits(root);
  if (page === "school") renderSchool(root);
  if (page === "everyday") renderEveryday(root);
  if (page === "proof") renderProof(root);
  if (page === "about") renderAbout(root);
}

function renderHome(root) {
  const featuredCases = ["principal-command-center", "staff-committee-assignment", "pbis-command-center"]
    .map((id) => caseStudies.find((study) => study.id === id))
    .filter(Boolean);
  root.innerHTML = `
    <section class="brand-hero">
      <figure class="hero-banner">
        <img src="${bannerAsset}" alt="Workaround Amy brand banner showing a messy knot becoming a clear AI-supported workflow">
      </figure>
      <div class="hero-copy">
        <p class="eyebrow">${site.tagline}</p>
        <h1>I turn repeatable chaos into systems that actually work.</h1>
        <p class="hero-subheadline">Practical AI systems for school, work, and life.</p>
        <p class="lede desktop-home-copy">Workaround Amy is where I share practical systems for the repeated work that keeps coming back — the planning, communication, dashboards, templates, and decisions that need a better place to live.</p>
        <p class="lede mobile-home-copy">Systems, templates, prompts, and workflows for the repeated work that keeps coming back.</p>
        <p class="philosophy-line">${site.philosophy}</p>
        <div class="button-row">
          <a class="button primary" href="how-i-think.html">Read How I Think</a>
          <a class="button secondary" href="proof-of-work.html">See Proof of Work</a>
        </div>
      </div>
    </section>
    <section class="system-studio">
      ${sectionHeading({ title: "What is Workaround Amy?" })}
      <div class="about-home-copy">
        <p class="desktop-home-copy">Some work keeps coming back. The email gets rewritten. The spreadsheet gets rebuilt. The meeting notes disappear. The decision gets remade. The task lives in someone’s brain because the system around it is not clear enough yet.</p>
        <p class="desktop-home-copy">Workaround Amy is about finding the repeat inside that work and turning it into something reusable — with the right AI support and the human judgment still intact.</p>
        <p class="mobile-home-copy">Some work keeps coming back: the emails, spreadsheets, decisions, meetings, and tasks that keep living in someone’s brain. Workaround Amy is about finding the repeat and turning it into something reusable — with AI support and human judgment intact.</p>
      </div>
    </section>
    ${freebieSection()}
    <section class="three-paths">
      ${sectionHeading({
        eyebrow: "Choose your path",
        title: "Start where your chaos lives.",
        text: "Three clean doors into the work, depending on what you need next.",
      })}
      <div class="card-grid three">
        ${pathwayCard({
          title: "School Systems",
          text: "Tools and workflows for school operations, communication, meetings, and the invisible work of leadership.",
          href: "school-systems.html",
          label: "Explore school systems",
        })}
        ${pathwayCard({
          title: "Everyday Systems",
          text: "Practical systems for life admin, family logistics, planning, projects, and the recurring work that follows you home.",
          href: "everyday-systems.html",
          label: "Explore everyday systems",
        })}
        ${pathwayCard({
          title: "Build With Me",
          text: "Watch how messy ideas become usable systems — from first prompt to finished workflow.",
          href: "build-with-me.html",
          label: "Build with Amy",
        })}
      </div>
    </section>
    <section class="amy-way-preview mobile-home-hidden">
      <div>
        ${sectionHeading({ eyebrow: "Featured", title: "How I think when the work gets messy" })}
        <p class="amy-way-copy">I do not usually start with the tool. I start with the part of the work that is making everyone quietly lose their minds.</p>
        <a class="button primary" href="how-i-think.html">Read How I Think</a>
      </div>
      <ol class="home-step-list">
        ${["Name the chaos.", "Find the repeat.", "Pick the right handoff.", "Clean it up like a human."].map((step, index) => `<li><span>${index + 1}</span>${step}</li>`).join("")}
      </ol>
    </section>
    <section class="mobile-home-hidden">
      ${sectionHeading({ eyebrow: "Proof of Work", title: "A few systems in progress", text: "Short examples of the practical builds behind Workaround Amy." })}
      <div class="card-grid">${featuredCases.map(homeProofCard).join("")}</div>
      <div class="section-action"><a class="button secondary" href="proof-of-work.html">See Proof of Work</a></div>
    </section>
    ${ctaSection({
      title: site.signature,
      text: "Start with one repeatable mess. Turn it into something you can reuse.",
      primary: ["Read How I Think", "how-i-think.html"],
      secondary: ["Explore Workflow Kits", "workflow-kits.html"],
    })}`;
}

function renderHow(root) {
  const steps = [
    ["Name the chaos.", "What is actually messy here?"],
    ["Find the repeat.", "Where is this showing up again and again?"],
    ["Decide what kind of system it needs.", "Is this a template, a dashboard, a prompt, a tracker, a checklist, a form, or a full workflow?"],
    ["Pick the right AI for the job.", "Not every tool needs to be invited to every problem."],
    ["Refine it like a human.", "The first draft is not the system. The judgment is in the cleanup."],
  ];
  root.innerHTML = `
    ${pageIntro({
      eyebrow: "Operating system",
      title: "How I Think in Workflows",
      subtitle: "The Amy Way: start with the chaos, keep the human judgment, and let the right AI do the heavy lifting.",
      text: "I do not usually start with the tool. I start with the part of the work that is making everyone quietly lose their minds.",
    })}
    <section class="split-section">
      ${sectionHeading({
        eyebrow: "Useful over magical",
        title: "I do not need AI to be magic. I need it to be useful.",
        text: "I am an educator and operator, a school leader, mother of two, and Bay Area human watching the world change in real time. I build from real chaos: calendars, meetings, staff communication, school operations, family logistics, templates, dashboards, recurring decisions, and the invisible work that lives in people’s brains.",
      })}
      <p class="large-copy">It is not a replacement for judgment. The work still needs context, care, relationships, ethics, policy awareness, and someone willing to say, “That is technically clever, but not right for this situation.”</p>
    </section>
    <section class="amy-way-system">
      <div class="amy-way-system-intro">
        ${sectionHeading({ eyebrow: "The Amy Way", title: "Make the work make sense before you make it fancy." })}
      </div>
      ${flowDiagram("The Amy Way system flow")}
      <ol class="step-list">${steps.map(([title, text], index) => `<li><span>${index + 1}</span><strong>${title}</strong><small>${text}</small></li>`).join("")}</ol>
      ${amyNote("AI does not remove the thinking. It gives the thinking somewhere to land.")}
    </section>
    <section class="tool-stack-section">
      ${sectionHeading({ eyebrow: "Tool stack", title: "Everybody has a job. Even the robots." })}
      <div class="card-grid">${aiTools.map(toolStackCard).join("")}</div>
    </section>
    <section class="handoff-section">
      ${sectionHeading({
        eyebrow: "The handoff",
        title: "The magic is not the tool. It is the handoff.",
        text: "A messy idea can move through different tools as the job becomes clearer. The trick is knowing what to hand off, when, and why.",
      })}
      <div class="handoff-flow">
        ${["ChatGPT", "Gemini / Gems", "Script.new", "NotebookLM", "Claude", "Codex"].map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>
    <section class="guardrails">
      ${sectionHeading({ eyebrow: "Human first", title: "What I do not hand over to AI." })}
      <ul class="pill-list">
        ${["final judgment", "confidential information", "sensitive student or family context", "relationship decisions", "ethical calls", "anything that needs human care more than speed"].map((item) => `<li>${item}</li>`).join("")}
      </ul>
      ${amyNote("The magic is not the tool. It is the handoff.")}
    </section>
    ${ctaSection({
      primary: ["Build With Me", "build-with-me.html"],
      secondary: ["Browse Workflow Kits", "workflow-kits.html"],
    })}`;
}

function renderBuild(root) {
  const categories = ["Systems Thinking", "School Leader Systems", "Everyday Systems", "AI Tool Stack Tutorials", "Build-With-Me Projects"];
  root.innerHTML = `
    ${pageIntro({
      eyebrow: "Tutorial hub",
      title: "Build With Me",
      subtitle: "Watch me build the thing so you can learn how to build your own.",
      text: "This is where I take the messy middle seriously: the choices, the false starts, the cleanup, and the moment when the system finally starts helping.",
    })}
    <section><div class="category-strip">${categories.map((cat) => `<span>${cat}</span>`).join("")}</div></section>
    <section>
      ${sectionHeading({ title: "Starter tutorials", text: "Video spaces are placeholders for now. The point will be practical build-alongs, not polished magic tricks." })}
      <div class="card-grid">${tutorials.map(tutorialCard).join("")}</div>
    </section>
    ${emailSignup()}
    ${ctaSection({ primary: ["Browse Workflow Kits", "workflow-kits.html"], secondary: ["See Proof of Work", "proof-of-work.html"] })}`;
}

function renderKits(root) {
  root.innerHTML = `
    ${pageIntro({
      eyebrow: "Workflow shelf",
      title: "Workflow Kits",
      subtitle: "Reusable starters for the work you do not want to rebuild from scratch.",
      text: "These are not theoretical template packs. They come from the kind of repeated work that makes you say, “There has to be a better way to do this.”",
    })}
    <section class="shop-shelf">
      <div class="system-window-top"><span></span><span></span><span></span></div>
      ${sectionHeading({
        eyebrow: "From the messy middle",
        title: "Clean starters for messy recurring work.",
        text: "Each kit explains who it is for, what problem it solves, what is included, and where the human review belongs.",
      })}
      ${amyNote("If the system only works because one person remembers everything, it is not really a system yet.")}
    </section>
    <section><div class="card-grid">${workflowKits.map(workflowKitCard).join("")}</div></section>
    ${emailSignup()}
    ${ctaSection({ primary: ["Build With Me", "build-with-me.html"], secondary: ["School Systems", "school-systems.html"] })}`;
}

function renderSchool(root) {
  root.innerHTML = `
    ${pageIntro({
      eyebrow: "Education systems",
      title: "School Systems",
      subtitle: "Practical systems for the recurring work of school leadership.",
      text: "These examples focus on organization, communication, documentation, team routines, and responsible implementation. No confidential student information, private district content, or copyrighted district materials belong here.",
    })}
    <section class="responsible-use">
      <h2>Responsible-use note</h2>
      <p>Special education, bullying, behavior, discipline, and compliance-related systems are organizational supports only. They must be customized to district policy, applicable law, and approved tools. Nothing here is legal advice, a compliance determination, or a substitute for required professional judgment.</p>
    </section>
    <section>
      ${sectionHeading({ title: "School system categories" })}
      <div class="card-grid">${schoolCategories.map(categoryCard).join("")}</div>
    </section>
    ${ctaSection({ primary: ["Browse Workflow Kits", "workflow-kits.html"], secondary: ["See Proof of Work", "proof-of-work.html"] })}`;
}

function renderEveryday(root) {
  root.innerHTML = `
    ${pageIntro({
      eyebrow: "Real life systems",
      title: "Everyday Systems",
      subtitle: "Because school is not the only place where repeatable chaos shows up.",
      text: "These systems bring the same practical thinking to life admin, family logistics, home projects, travel, meals, and the tiny tasks that drain attention before breakfast.",
    })}
    <section>
      ${sectionHeading({ title: "Everyday system categories" })}
      <div class="card-grid">${everydayCategories.map(categoryCard).join("")}</div>
    </section>
    ${ctaSection({ primary: ["Browse Workflow Kits", "workflow-kits.html"], secondary: ["Build With Me", "build-with-me.html"] })}`;
}

function renderProof(root) {
  root.innerHTML = `
    ${pageIntro({
      eyebrow: "Proof of work",
      title: "Proof of Work",
      subtitle: "AI-enabled systems design, documented clearly.",
      text: "These are not portfolio filler. They are the practical builds underneath Workaround Amy: the choices, constraints, cleanup, and human judgment behind the tool.",
    })}
    <section class="proof-signal">
      <div>
        <p class="eyebrow">Portfolio signal</p>
        <h2>Operational mess, translated into usable systems.</h2>
      </div>
      <ul class="signal-list">
        <li><strong>Diagnose</strong><span>Find the real repeat underneath the noise.</span></li>
        <li><strong>Design</strong><span>Build a system people can actually use on a Tuesday.</span></li>
        <li><strong>Document</strong><span>Make the thinking legible to teams, recruiters, and future Amy.</span></li>
      </ul>
    </section>
    <section>
      ${sectionHeading({ title: "Case studies" })}
      <div class="card-grid">${caseStudies.map(caseStudyCard).join("")}</div>
    </section>
    ${pullQuote("The point is not to make AI impressive. The point is to make the work less absurd.")}
    <section>
      ${sectionHeading({ eyebrow: "Skills demonstrated", title: "The work behind the work" })}
      <ul class="pill-list">${skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>
    </section>
    ${ctaSection({ primary: ["How I Think", "how-i-think.html"], secondary: ["Build With Me", "build-with-me.html"] })}`;
}

function renderAbout(root) {
  root.innerHTML = `
    ${pageIntro({
      eyebrow: "About Amy",
      title: "About Amy",
      subtitle: "Practical systems, human judgment, and a very low tolerance for rebuilding the same thing twice.",
    })}
    <section class="about-intro">
      <figure class="profile-card">
        <div class="profile-image-wrap">
          <img src="${profileAsset}" alt="Portrait of Amy Maiden wearing a navy blazer and teal blouse, smiling against a clean white background.">
        </div>
      </figure>
      <div class="about-copy">
        <p class="lede">I’m Amy Maiden — a 16-year educator, principal, Bay Area mom of two, and systems-builder.</p>
        <p>For years, I have worked in schools, where the work is deeply human, the stakes are real, the inbox is not gentle, and the system still has to function tomorrow morning. Schools have a way of showing you exactly where the gaps are: the repeated decisions, the scattered information, the communication that gets rebuilt every year, and the invisible work people carry because the system around it is not clear enough yet.</p>
        <p>At home, I’m also living the regular-life version of that same reality: calendars, logistics, decisions, planning, family routines, and all the things that somehow end up living in someone’s brain.</p>
        <p>My husband works in tech, my work lives in schools, and our dinner-table conversations have made one thing very clear: the world is moving quickly. But real people still need practical ways to keep up without handing over their judgment, creativity, relationships, or context.</p>
      </div>
    </section>
    <section class="origin-section">
      <div>
        ${sectionHeading({
          eyebrow: "Where this started",
          title: "Not as a perfect business plan.",
          text: "Not as a polished productivity brand. More like a very familiar thought:",
        })}
        ${pullQuote("There has to be a better way to do this.")}
      </div>
      <div class="about-copy">
        <p>That is where Workaround Amy started.</p>
        <p>Not because I wanted AI to be magic.</p>
        <p>Because I needed it to be useful.</p>
        <p>I started building systems because I was tired of watching smart, capable people spend too much energy rebuilding the same work from scratch. In schools, at home, and in regular life, the work does not disappear just because the system is messy. It just gets carried by someone’s brain. Usually a very tired someone.</p>
        <p>So I started making workarounds.</p>
        <ul class="plain-list">
          <li>A better way to collect information.</li>
          <li>A cleaner way to organize a decision.</li>
          <li>A dashboard instead of twelve scattered tabs.</li>
          <li>A reusable prompt instead of rewriting the same email every August.</li>
          <li>A workflow that helps the human think more clearly, instead of pretending the tool should think for them.</li>
        </ul>
        <p>Workaround Amy is where I teach, package, and share the systems I am building for school, work, and life.</p>
        <p>The point is not to chase every new tool. The point is to notice the work that keeps coming back, find the repeat inside it, and build something reusable so your brain is not starting from scratch every time.</p>
        <p>The point is to stop rebuilding the same container from scratch when your brain is needed for the work only a human can do.</p>
      </div>
    </section>
    <section class="belief-section">
      <div class="about-copy">
        ${sectionHeading({
          eyebrow: "What I believe about AI",
          title: "I do not need AI to be magic. I need it to be useful.",
          text: "AI can help organize the mess. It can draft the first version. It can sort ideas, summarize information, build structures, generate templates, and help turn a scattered thought into something usable.",
        })}
        <p>AI can help with the heavy lifting: sorting, drafting, structuring, summarizing, organizing, and building a first version.</p>
        <p>But it does not replace human judgment.</p>
        <p>But the human part stays human.</p>
        <div class="human-lines">
          <span>The context still matters.</span>
          <span>The relationships still matter.</span>
          <span>The ethics still matter.</span>
          <span>The final decision still belongs to a person.</span>
        </div>
        <p>The magic is not the tool. It is the handoff.</p>
        <p>That is the part I care about most: knowing what to give the tool, what to keep human, and how to turn the output into something that actually works in real life.</p>
      </div>
      ${amyNote("AI does not remove the thinking. It gives the thinking somewhere to land.")}
    </section>
    <section class="build-section">
      ${sectionHeading({
        eyebrow: "What I build",
        title: "Most of what I build starts with a repeated mess.",
      })}
      <div class="mess-list">
        <span>The meeting notes no one can find later.</span>
        <span>The spreadsheet nobody wants to rebuild.</span>
        <span>The staff communication that gets rewritten every year.</span>
        <span>The family logistics living in someone’s head until they explode.</span>
        <span>The calendar item that should have become a task three weeks ago.</span>
        <span>The school system that only works because one person remembers how it works.</span>
      </div>
      <div class="about-copy narrow">
        <p>I turn those messy, repeated problems into practical systems: prompts, templates, dashboards, workflow kits, Google Workspace tools, planning structures, and build-with-me tutorials.</p>
        <p>Some are for school. Some are for work. Some are for home. Most started because I looked at a process and thought, “Absolutely not. We are not doing it this way again.”</p>
      </div>
    </section>
    <section class="why-section">
      <div class="about-copy">
        ${sectionHeading({
          eyebrow: "Why it matters",
          title: "People are not overwhelmed because they are bad at their jobs or bad at their lives.",
          text: "They are often overwhelmed because the system around the work is invisible, scattered, or rebuilt too many times.",
        })}
        <p>A good system does not remove the human part. It protects it.</p>
      </div>
      <div class="values-panel">
        <h2>A good system helps you</h2>
        <ul class="check-list">
          <li>Give your thinking somewhere to land.</li>
          <li>Make the next step easier to see.</li>
          <li>Reuse what you already figured out.</li>
          <li>Free up brain space for the work that actually needs you.</li>
        </ul>
      </div>
    </section>
    ${pullQuote("A good system does not remove the human part. It protects it.")}
    ${ctaSection({
      primary: ["How I Think", "how-i-think.html"],
      secondary: ["See Proof of Work", "proof-of-work.html"],
    })}`;
}
