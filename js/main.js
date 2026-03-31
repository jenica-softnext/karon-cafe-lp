// Hero animations
function initHeroAnimations() {
  const heroLines = document.querySelectorAll(".hero__line");
  const heroBlur = document.querySelector(".hero__blur");
  const heroChecks = document.querySelector(".hero__checks");
  const heroCtaBtn = document.querySelector(".hero__cta-btn");
  const heroCtaNote = document.querySelector(".hero__cta-note");

  // Trigger animations on page load
  setTimeout(() => {
    heroLines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("animate");
      }, index * 200);
    });
    setTimeout(() => {
      if (heroBlur) heroBlur.classList.add("animate");
    }, 800);
    setTimeout(() => {
      if (heroChecks) heroChecks.classList.add("animate");
    }, 1000);
    setTimeout(() => {
      if (heroCtaBtn) heroCtaBtn.classList.add("animate");
    }, 1200);
    setTimeout(() => {
      if (heroCtaNote) heroCtaNote.classList.add("animate");
    }, 1400);
  }, 100);
}

// Scroll to contact form
function scrollToForm() {
  const el = document.getElementById("contact-form");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimations();
});

// Seminar selection
document.querySelectorAll(".seminar-card").forEach((card) => {
  card.addEventListener("click", () => {
    document
      .querySelectorAll(".seminar-card")
      .forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");
    const id = card.dataset.seminarId;
    const hidden = document.getElementById("selected-seminar");
    if (hidden) hidden.value = id;
    document.querySelectorAll(".seminar-form-input").forEach((inp) => {
      inp.disabled = false;
    });
    const btn = document.getElementById("seminar-submit-btn");
    if (btn) {
      btn.disabled = false;
      btn.classList.add("active");
    }
    const notice = document.getElementById("seminar-notice");
    if (notice) notice.style.display = "none";
  });
});

// Seminar form submit
const seminarForm = document.getElementById("seminar-form");
if (seminarForm) {
  seminarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const wrap = document.getElementById("seminar-section");
    if (wrap) {
      wrap.innerHTML = `<div class="seminar-sec"><div class="seminar-sec__inner"><div class="success-box">
        <div class="success-icon"><svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div>
        <h3>お申し込みありがとうございます！</h3>
        <p>ご入力いただいたメールアドレスに確認メールをお送りしました。</p></div></div></div>`;
    }
  });
}

// Contact form submit
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const wrap = document.getElementById("contact-section");
    if (wrap) {
      wrap.innerHTML = `<div class="contact-sec"><div class="contact-sec__inner"><div class="success-box">
        <div class="success-icon"><svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div>
        <h3>お問い合わせありがとうございます！</h3>
        <p>ご入力いただいた内容を確認の上、担当者よりご連絡いたします。</p></div></div></div>`;
    }
  });
}

// Initialize animations on DOM load
document.addEventListener("DOMContentLoaded", initHeroAnimations);
