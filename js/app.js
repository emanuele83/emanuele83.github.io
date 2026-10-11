/**
 * Emanuele Sabbadini - Portfolio & CV Site
 * Interactive Logic: i18n, Filtering, Scrollspy, Mobile Menu, Print, Contact Form
 */

(function () {
  "use strict";

  // Current language state
  let currentLang = "en";

  // Initialize application
  function init() {
    initLanguage();
    initMobileNav();
    initScrollSpy();
    initSkillFilters();
    initConvergenceTiers();
    initContactForm();
    initEmailCopy();
    initPrintCv();
  }

  // Language management
  function initLanguage() {
    const savedLang = localStorage.getItem("preferred_lang");
    const browserLang = (navigator.language || navigator.userLanguage || "en").startsWith("it") ? "it" : "en";
    currentLang = savedLang || browserLang;

    // Set toggle state
    updateLangToggleUI(currentLang);
    renderContent(currentLang);

    // Event listeners on language buttons
    const langBtns = document.querySelectorAll("[data-lang-btn]");
    langBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetLang = btn.getAttribute("data-lang-btn");
        if (targetLang !== currentLang && translations[targetLang]) {
          currentLang = targetLang;
          localStorage.setItem("preferred_lang", currentLang);
          updateLangToggleUI(currentLang);
          renderContent(currentLang);
        }
      });
    });
  }

  function updateLangToggleUI(lang) {
    document.documentElement.setAttribute("lang", lang);
    const langBtns = document.querySelectorAll("[data-lang-btn]");
    langBtns.forEach((btn) => {
      const isCurrent = btn.getAttribute("data-lang-btn") === lang;
      btn.classList.toggle("active", isCurrent);
      btn.setAttribute("aria-pressed", isCurrent ? "true" : "false");
    });
  }

  // Renders all localized dynamic content safely
  function renderContent(lang) {
    const t = translations[lang];
    if (!t) return;

    // Navigation
    setElementText("#nav-about", t.nav.about);
    setElementText("#nav-convergence", t.nav.convergence);
    setElementText("#nav-experience", t.nav.experience);
    setElementText("#nav-projects", t.nav.projects);
    setElementText("#nav-skills", t.nav.skills);
    setElementText("#nav-education", t.nav.education);
    setElementText("#nav-contact", t.nav.contact);
    setElementText("#nav-download-cv-text", t.nav.downloadCv);
    setElementText("#m-nav-download-cv-text", t.nav.downloadCv);

    // Mobile nav mirrors
    setElementText("#m-nav-about", t.nav.about);
    setElementText("#m-nav-convergence", t.nav.convergence);
    setElementText("#m-nav-experience", t.nav.experience);
    setElementText("#m-nav-projects", t.nav.projects);
    setElementText("#m-nav-skills", t.nav.skills);
    setElementText("#m-nav-education", t.nav.education);
    setElementText("#m-nav-contact", t.nav.contact);

    // Hero Section
    setElementText("#hero-badge-text", t.hero.badge);
    setElementText("#hero-title-prefix", t.hero.titlePrefix);
    setElementText("#hero-title-highlight", t.hero.titleHighlight);
    setElementText("#hero-title-mid", t.hero.titleMid);
    setElementText("#hero-title-highlight2", t.hero.titleHighlight2);
    setElementText("#hero-subtitle", t.hero.subtitle);
    setElementText("#hero-cta-primary", t.hero.ctaPrimary);
    setElementText("#hero-cta-secondary", t.hero.ctaSecondary);
    setElementText("#hero-location-text", t.hero.location);

    setElementText("#stat-years-num", t.hero.statYears);
    setElementText("#stat-years-label", t.hero.statYearsLabel);
    setElementText("#stat-level2-num", t.hero.statLevel2);
    setElementText("#stat-level2-label", t.hero.statLevel2Label);
    setElementText("#stat-pipeline-num", t.hero.statPipeline);
    setElementText("#stat-pipeline-label", t.hero.statPipelineLabel);
    setElementText("#stat-leadership-num", t.hero.statLeadership);
    setElementText("#stat-leadership-label", t.hero.statLeadershipLabel);

    // Executive Summary
    setElementText("#summary-title", t.summary.sectionTitle);
    setElementText("#summary-subtitle", t.summary.sectionSubtitle);
    setElementText("#summary-body-1", t.summary.body1);
    setElementText("#summary-body-2", t.summary.body2);
    setElementText("#summary-body-3", t.summary.body3);

    // Pillars
    renderPillars(t.summary.pillars);

    // Convergence Layers
    setElementText("#convergence-title", t.convergence.sectionTitle);
    setElementText("#convergence-subtitle", t.convergence.sectionSubtitle);
    renderConvergenceLayers(t.convergence.layers);

    // Experience
    setElementText("#experience-title", t.experience.sectionTitle);
    setElementText("#experience-subtitle", t.experience.sectionSubtitle);
    renderExperience(t.experience.roles);

    // Case Studies / Projects
    setElementText("#projects-title", t.projects.sectionTitle);
    setElementText("#projects-subtitle", t.projects.sectionSubtitle);
    renderProjects(t.projects.items);

    // Skills Matrix
    setElementText("#skills-title", t.skills.sectionTitle);
    setElementText("#skills-subtitle", t.skills.sectionSubtitle);
    renderSkills(t.skills.categories);

    // Education
    setElementText("#education-title", t.education.sectionTitle);
    setElementText("#education-subtitle", t.education.sectionSubtitle);
    renderEducation(t.education.items, t.education.languages);

    // Contact
    setElementText("#contact-title", t.contact.sectionTitle);
    setElementText("#contact-subtitle", t.contact.sectionSubtitle);
    setElementText("#contact-card-title", t.contact.cardTitle);
    setElementText("#contact-card-text", t.contact.cardText);
    setElementText("#contact-email-label", t.contact.emailLabel);
    setElementText("#contact-email-val", t.contact.emailValue);
    setElementText("#contact-linkedin-label", t.contact.linkedinLabel);
    setElementText("#contact-linkedin-val", t.contact.linkedinValue);
    setElementText("#contact-location-label", t.contact.locationLabel);
    setElementText("#contact-location-val", t.contact.locationValue);
    setElementText("#copy-email-btn-text", t.contact.copyEmail);
    setElementText("#download-cv-btn-text", t.contact.downloadResumeBtn);

    // Form placeholders and labels
    setElementText("#form-lbl-name", t.contact.formName);
    setElementText("#form-lbl-email", t.contact.formEmail);
    setElementText("#form-lbl-subject", t.contact.formSubject);
    setElementText("#form-lbl-message", t.contact.formMessage);
    setElementText("#form-submit-btn-text", t.contact.formSubmit);
    setElementText("#form-note", t.contact.formNote);

    // Footer
    setElementText("#footer-copyright", t.footer.copyright);
    setElementText("#footer-privacy", t.footer.privacy);
    setElementText("#footer-domain", t.footer.domain);
  }

  function setElementText(selector, text) {
    const el = document.querySelector(selector);
    if (el && text !== undefined) {
      el.textContent = text;
    }
  }

  function renderPillars(pillars) {
    const container = document.querySelector("#pillars-grid");
    if (!container || !pillars) return;
    container.innerHTML = "";

    const icons = [
      `<svg class="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
      `<svg class="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
      `<svg class="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
      `<svg class="w-6 h-6 text-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`
    ];

    pillars.forEach((p, index) => {
      const card = document.createElement("div");
      card.className = "glass-card pillar-card";
      
      const iconWrap = document.createElement("div");
      iconWrap.className = "pillar-icon-box";
      iconWrap.innerHTML = icons[index % icons.length];

      const h3 = document.createElement("h3");
      h3.className = "pillar-title";
      h3.textContent = p.title;

      const desc = document.createElement("p");
      desc.className = "pillar-desc";
      desc.textContent = p.desc;

      card.appendChild(iconWrap);
      card.appendChild(h3);
      card.appendChild(desc);
      container.appendChild(card);
    });
  }

  function renderConvergenceLayers(layers) {
    const container = document.querySelector("#convergence-layers");
    if (!container || !layers) return;
    container.innerHTML = "";

    layers.forEach((layer, idx) => {
      const tier = document.createElement("div");
      tier.className = "convergence-tier glass-card";
      tier.setAttribute("data-tier", idx);

      const header = document.createElement("div");
      header.className = "tier-header";

      const badge = document.createElement("span");
      badge.className = `tier-badge tier-badge-${idx + 1}`;
      badge.textContent = layer.badge;

      const title = document.createElement("h3");
      title.className = "tier-title";
      title.textContent = layer.title;

      header.appendChild(badge);
      header.appendChild(title);

      const tech = document.createElement("div");
      tech.className = "tier-tech";
      tech.textContent = layer.tech;

      const desc = document.createElement("p");
      desc.className = "tier-desc";
      desc.textContent = layer.desc;

      tier.appendChild(header);
      tier.appendChild(tech);
      tier.appendChild(desc);
      container.appendChild(tier);
    });
  }

  function renderExperience(roles) {
    const container = document.querySelector("#timeline-container");
    if (!container || !roles) return;
    container.innerHTML = "";

    roles.forEach((r) => {
      const item = document.createElement("div");
      item.className = "timeline-item";

      const node = document.createElement("div");
      node.className = "timeline-node";

      const card = document.createElement("div");
      card.className = "timeline-content glass-card";

      // Top row: Period & Location
      const topRow = document.createElement("div");
      topRow.className = "timeline-top";

      const period = document.createElement("span");
      period.className = "timeline-period";
      period.textContent = r.period;

      const location = document.createElement("span");
      location.className = "timeline-location";
      location.textContent = r.location;

      topRow.appendChild(period);
      topRow.appendChild(location);

      // Title & Company
      const title = document.createElement("h3");
      title.className = "timeline-title";
      title.textContent = r.title;

      const company = document.createElement("div");
      company.className = "timeline-company";
      company.textContent = `@ ${r.company}`;

      // Environment & Tools tag
      const envBox = document.createElement("div");
      envBox.className = "timeline-env";
      const envLabel = document.createElement("strong");
      envLabel.textContent = "Environment & Tools: ";
      const envText = document.createTextNode(r.env);
      envBox.appendChild(envLabel);
      envBox.appendChild(envText);

      // Highlights
      const list = document.createElement("ul");
      list.className = "timeline-highlights";
      r.highlights.forEach((h) => {
        const li = document.createElement("li");
        const boldSpan = document.createElement("strong");
        boldSpan.textContent = h.bold + " ";
        const textNode = document.createTextNode(h.text);
        li.appendChild(boldSpan);
        li.appendChild(textNode);
        list.appendChild(li);
      });

      card.appendChild(topRow);
      card.appendChild(title);
      card.appendChild(company);
      card.appendChild(envBox);
      card.appendChild(list);

      item.appendChild(node);
      item.appendChild(card);
      container.appendChild(item);
    });
  }

  function renderProjects(items) {
    const container = document.querySelector("#projects-grid");
    if (!container || !items) return;
    container.innerHTML = "";

    items.forEach((p) => {
      const card = document.createElement("div");
      card.className = "case-study-card glass-card";

      const top = document.createElement("div");
      top.className = "case-study-top";

      const tag = document.createElement("span");
      tag.className = "case-tag";
      tag.textContent = p.tag;

      const org = document.createElement("span");
      org.className = "case-org";
      org.textContent = p.organization;

      top.appendChild(tag);
      top.appendChild(org);

      const title = document.createElement("h3");
      title.className = "case-title";
      title.textContent = p.title;

      const desc = document.createElement("p");
      desc.className = "case-desc";
      desc.textContent = p.desc;

      const tagsWrap = document.createElement("div");
      tagsWrap.className = "case-tech-tags";
      p.tech.forEach((t) => {
        const span = document.createElement("span");
        span.className = "tech-pill";
        span.textContent = t;
        tagsWrap.appendChild(span);
      });

      card.appendChild(top);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(tagsWrap);
      container.appendChild(card);
    });
  }

  function renderSkills(categories) {
    const container = document.querySelector("#skills-grid");
    if (!container || !categories) return;
    container.innerHTML = "";

    categories.forEach((cat) => {
      const block = document.createElement("div");
      block.className = "skills-category glass-card";
      block.setAttribute("data-category-id", cat.id);

      const header = document.createElement("div");
      header.className = "skills-category-header";

      const title = document.createElement("h3");
      title.className = "skills-category-title";
      title.textContent = cat.name;

      header.appendChild(title);

      const pillList = document.createElement("div");
      pillList.className = "skills-pill-list";
      cat.items.forEach((item) => {
        const pill = document.createElement("span");
        pill.className = "skill-badge";
        pill.textContent = item;
        pillList.appendChild(pill);
      });

      block.appendChild(header);
      block.appendChild(pillList);
      container.appendChild(block);
    });
  }

  function renderEducation(items, languages) {
    const container = document.querySelector("#education-container");
    if (!container || !items) return;
    container.innerHTML = "";

    // Degree cards
    items.forEach((ed) => {
      const card = document.createElement("div");
      card.className = "education-card glass-card";

      const top = document.createElement("div");
      top.className = "education-top";

      const deg = document.createElement("h3");
      deg.className = "education-degree";
      deg.textContent = ed.degree;

      const yr = document.createElement("span");
      yr.className = "education-year";
      yr.textContent = ed.year;

      top.appendChild(deg);
      top.appendChild(yr);

      const inst = document.createElement("div");
      inst.className = "education-institution";
      inst.textContent = ed.institution;

      const desc = document.createElement("p");
      desc.className = "education-desc";
      desc.textContent = ed.desc;

      card.appendChild(top);
      card.appendChild(inst);
      card.appendChild(desc);
      container.appendChild(card);
    });

    // Language card
    if (languages) {
      const langCard = document.createElement("div");
      langCard.className = "education-card glass-card languages-card";

      const title = document.createElement("h3");
      title.className = "education-degree";
      title.textContent = languages.title;
      langCard.appendChild(title);

      const list = document.createElement("div");
      list.className = "language-items-wrap";
      languages.items.forEach((l) => {
        const item = document.createElement("div");
        item.className = "lang-row";

        const name = document.createElement("strong");
        name.className = "lang-name";
        name.textContent = l.name;

        const level = document.createElement("span");
        level.className = "lang-level";
        level.textContent = l.level;

        item.appendChild(name);
        item.appendChild(level);
        list.appendChild(item);
      });

      langCard.appendChild(list);
      container.appendChild(langCard);
    }
  }

  // Interactive Skill Filters
  function initSkillFilters() {
    const filterBtns = document.querySelectorAll(".skill-filter-btn");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const targetCat = btn.getAttribute("data-filter");
        const skillCards = document.querySelectorAll(".skills-category");

        skillCards.forEach((card) => {
          if (targetCat === "all" || card.getAttribute("data-category-id") === targetCat) {
            card.style.display = "block";
            card.classList.remove("fade-out");
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // Interactive Convergence Tiers
  function initConvergenceTiers() {
    const tiers = document.querySelectorAll(".convergence-tier");
    tiers.forEach((tier) => {
      tier.addEventListener("mouseenter", () => {
        tiers.forEach((t) => t.classList.remove("highlighted"));
        tier.classList.add("highlighted");
      });
      tier.addEventListener("mouseleave", () => {
        tier.classList.remove("highlighted");
      });
    });
  }

  // Contact Form Logic (Direct AJAX dispatch + Graceful Mailto & Copy fallback)
  function initContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nameInput = document.querySelector("#contact-name");
      const emailInput = document.querySelector("#contact-email-input");
      const subjectInput = document.querySelector("#contact-subject");
      const messageInput = document.querySelector("#contact-message");
      const submitBtn = document.querySelector("#form-submit-btn");
      const submitBtnText = document.querySelector("#form-submit-btn-text");
      const statusBox = document.querySelector("#form-status-message");

      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const subject = subjectInput ? subjectInput.value.trim() : "Project Inquiry";
      const message = messageInput ? messageInput.value.trim() : "";

      const t = translations[currentLang] || translations.en;

      // Disable button and show sending state
      if (submitBtn) submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.textContent = t.contact.formSubmitting;
      if (statusBox) {
        statusBox.style.display = "none";
        statusBox.className = "form-status-box";
        statusBox.textContent = "";
      }

      // Pre-construct fallback mail details
      const fullSubject = "[Portfolio Inquiry] " + subject;
      const fullBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const mailtoUrl = `mailto:emanuele.sabbadini@gmail.com?subject=${encodeURIComponent(
        fullSubject
      )}&body=${encodeURIComponent(fullBody)}`;

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 9000);

        const response = await fetch("https://formsubmit.co/ajax/emanuele.sabbadini@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _subject: fullSubject,
            message: message
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          form.reset();
          if (statusBox) {
            statusBox.className = "form-status-box success";
            statusBox.textContent = t.contact.formSuccess;
            statusBox.style.display = "block";
          }
        } else {
          throw new Error("Form dispatch returned non-200");
        }
      } catch (err) {
        if (statusBox) {
          statusBox.className = "form-status-box error";
          statusBox.textContent = "";

          const errorP = document.createElement("p");
          errorP.textContent = t.contact.formError;
          statusBox.appendChild(errorP);

          const actionsDiv = document.createElement("div");
          actionsDiv.className = "form-status-actions";

          const mailtoBtn = document.createElement("a");
          mailtoBtn.href = mailtoUrl;
          mailtoBtn.className = "form-status-btn";
          mailtoBtn.textContent = "✉ " + t.contact.formOpenMailto;
          actionsDiv.appendChild(mailtoBtn);

          const copyBtn = document.createElement("button");
          copyBtn.type = "button";
          copyBtn.className = "form-status-btn";
          copyBtn.textContent = "📋 " + t.contact.formCopyMsg;
          copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(fullBody).then(() => {
              copyBtn.textContent = "✓ " + t.contact.formCopied;
            });
          });
          actionsDiv.appendChild(copyBtn);

          statusBox.appendChild(actionsDiv);
          statusBox.style.display = "block";

          // Try mailto navigation as fallback
          try {
            window.location.href = mailtoUrl;
          } catch (e) {
            // Ignored if blocked
          }
        }
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.textContent = t.contact.formSubmit;
      }
    });
  }

  // 1-Click Copy Email to Clipboard
  function initEmailCopy() {
    const copyBtn = document.querySelector("#copy-email-btn");
    const feedback = document.querySelector("#copy-feedback");
    if (!copyBtn) return;

    copyBtn.addEventListener("click", () => {
      const email = "emanuele.sabbadini@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        if (feedback) {
          const t = translations[currentLang];
          feedback.textContent = t ? t.contact.emailCopied : "Copied to clipboard!";
          feedback.classList.add("visible");
          setTimeout(() => {
            feedback.classList.remove("visible");
          }, 2500);
        }
      }).catch(() => {
        // Fallback prompt
        window.prompt("Copy email address:", email);
      });
    });
  }

  // Print CV / Export Trigger
  function initPrintCv() {
    const printBtns = document.querySelectorAll(".trigger-print-cv");
    printBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        window.print();
      });
    });
  }

  // Mobile navigation drawer toggle
  function initMobileNav() {
    const menuBtn = document.querySelector("#mobile-menu-toggle");
    const mobileMenu = document.querySelector("#mobile-menu");
    const closeBtn = document.querySelector("#mobile-menu-close");
    const links = document.querySelectorAll(".mobile-nav-link");

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      document.body.classList.add("menu-open");
    });

    const closeMenu = () => {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
    };

    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    links.forEach((l) => l.addEventListener("click", closeMenu));
  }

  // Scrollspy & Sticky Header
  function initScrollSpy() {
    const header = document.querySelector("#site-header");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".desktop-nav-link");

    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;

      // Header background blur
      if (header) {
        if (scrollPos > 40) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }

      // Active section highlight
      let currentSection = "";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = sec.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    }, { passive: true });
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
