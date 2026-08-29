// --- DATA DEFINITIONS ---

const PRODUCT_DETAILS = {
  bed: {
    title: "Orthopedic Memory Foam Bed",
    sub: "Best for senior dogs & joint support",
    rating: "★ 9.4 / 10",
    link: "https://www.amazon.com/dp/B0153DUSW4",
    mediaSvg: `<svg viewBox="0 0 100 100" class="pick-svg">
      <rect x="15" y="45" width="70" height="25" rx="8" fill="var(--coral)" opacity="0.8"/>
      <ellipse cx="50" cy="52" rx="28" ry="12" fill="var(--peach)"/>
      <circle cx="50" cy="48" r="4" fill="var(--ink)"/>
      <circle cx="43" cy="42" r="2.5" fill="var(--ink)"/>
      <circle cx="57" cy="42" r="2.5" fill="var(--ink)"/>
      <circle cx="40" cy="48" r="2.2" fill="var(--ink)"/>
      <circle cx="60" cy="48" r="2.2" fill="var(--ink)"/>
    </svg>`,
    description: "Our testing showed this bed offers unparalleled joint relief for aging dogs. The high-density medical grade memory foam doesn't bottom out even with heavier breeds, and the wrapper is completely waterproof and chew-resistant.",
    pros: ["Double layer memory foam", "Waterproof inner liner", "Easy to wash cover"],
    cons: ["Slightly expensive", "Foam needs 24h to expand initially"]
  },
  feeder: {
    title: "Automatic Cat Feeder",
    sub: "Best for multi-pet households",
    rating: "★ 9.1 / 10",
    link: "https://www.amazon.com/dp/B073DYHVSW",
    mediaSvg: `<svg viewBox="0 0 100 100" class="pick-svg">
      <rect x="35" y="20" width="30" height="50" rx="6" fill="var(--sage)" opacity="0.8"/>
      <circle cx="50" cy="35" r="8" fill="var(--peach)"/>
      <rect x="30" y="65" width="40" height="12" rx="4" fill="var(--ink-soft)"/>
      <ellipse cx="50" cy="70" rx="14" ry="5" fill="var(--cream)"/>
      <circle cx="48" cy="69" r="1.5" fill="var(--coral)"/>
      <circle cx="52" cy="71" r="1.5" fill="var(--coral)"/>
    </svg>`,
    description: "Features precise portion controls and custom voice clip announcements. The hopper keeps kibble completely fresh with dual locks, preventing mischievous cats from breaking in.",
    pros: ["Airtight food storage lid", "Battery backup option", "Anti-clog dispensing tech"],
    cons: ["Small bowl area", "App setup can take a few attempts"]
  },
  harness: {
    title: "No-Pull Front-Clip Harness",
    sub: "Best for leash training",
    rating: "★ 8.9 / 10",
    link: "https://www.amazon.com/dp/B000OBH654",
    mediaSvg: `<svg viewBox="0 0 100 100" class="pick-svg">
      <circle cx="50" cy="50" r="28" fill="none" stroke="var(--coral)" stroke-width="6" opacity="0.6"/>
      <path d="M50,15 L50,85 M15,50 L85,50" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
      <rect x="42" y="35" width="16" height="30" rx="3" fill="var(--peach)"/>
    </svg>`,
    description: "Designed to steer dogs to the side gently when they pull, neutralizing pulling habits naturally. Lightweight, breathable mesh construction protects delicate pressure points near the chest.",
    pros: ["Sturdy dual-ring layout", "Highly reflective trim", "Extremely easy to fit"],
    cons: ["Not chew-proof", "Straps might loosen over long hikes"]
  }
};

const BLOG_ARTICLES = {
  "dog-bed-size": {
    title: "How to pick the right dog bed for your breed's size",
    tag: "Buying Guide",
    meta: "Dog Care · 6 min read",
    imgUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
    content: `
      <p>Buying a dog bed seems simple, but getting the wrong size can impact your dog's rest and spinal alignment. When dogs sleep, they naturally sprawl, curl, or lean. The right bed needs to support their specific sleeping posture.</p>
      <p><b>Step 1: Measure your dog while sleeping.</b> Measure from the tip of the nose to the tail bone, then add 6-12 inches to find the correct bed width.</p>
      <p><b>Step 2: Know their style.</b> Sprawlers need flat mattress-style orthopedic beds. Curlers prefer round bolster beds where they can tuck their nose in. Leaners look for beds with built-in pillow bumpers.</p>
      <p><b>Step 3: Materials matter.</b> Senior dogs require true memory foam rather than polyfill, which sags and leaves pressure points resting directly against the cold floor.</p>
    `
  },
  "feeders-compared": {
    title: "Automatic vs. gravity feeders: which one wins?",
    tag: "Comparison",
    meta: "Cat Care · 4 min read",
    imgUrl: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=400&q=80",
    content: `
      <p>If you're balancing a busy work schedule with a pet's feeding schedule, choice of dispenser is critical. We compared gravity feeders (which refill automatically as the bowl empties) with automatic programmable dispensers.</p>
      <p><b>Gravity Feeders:</b> Best for budget-conscious owners and cats that self-regulate well. However, they invite overeating, which often leads to feline obesity and makes weight tracking impossible.</p>
      <p><b>Automatic Feeders:</b> Allow exact scheduling, portion control, and prevent breakfast wake-up calls. The higher entry cost pays off in overall health and peace of mind.</p>
    `
  },
  "monsoon-grooming": {
    title: "Monsoon grooming checklist for dogs and cats",
    tag: "Care Tips",
    meta: "Seasonal · 3 min read",
    imgUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&q=80",
    content: `
      <p>Humidity and moisture during the rainy season create the perfect environment for bacteria and yeast infections to settle in your pet's paws, coat, and ears.</p>
      <p><b>Keep Paws Dry:</b> Always wipe paws thoroughly with a clean micro-fiber cloth after outdoor walks. Damp paws lead to painful infections.</p>
      <p><b>Ear Hygiene:</b> Inspect ears weekly. Floppy-eared dogs are particularly prone to yeast build-up from ambient moisture.</p>
      <p><b>Brushing:</b> Brush your pet regularly to prevent wet fur mats, which hold bacteria close to the skin.</p>
    `
  },
  "harness-review": {
    title: "We tried 6 no-pull harnesses. One stood out.",
    tag: "Product Review",
    meta: "Reviews · 5 min read",
    imgUrl: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&q=80",
    content: `
      <p>A good harness can make the difference between an exhausting chore and an enjoyable daily walk. Over four weeks, our reviewers walked six dogs of different sizes using six popular no-pull front-clip harnesses.</p>
      <p>We evaluated each for strap slipping, chest chafing, ease of fitting, and control. While several kept dogs from pulling, the front-clip martingale harness stood out. It applied gentle leverage, redirecting pulling energy into a side-step without putting pressure on the windpipe.</p>
    `
  },
  "puppy-first-30-days": {
    title: "First 30 days with a new puppy: a simple checklist",
    tag: "Beginner Guide",
    meta: "New Pet Parents · 7 min read",
    imgUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&q=80",
    content: `
      <p>Welcoming a new puppy is beautiful, exciting, and occasionally chaotic. Having a clear structure protects your peace of mind and builds early boundaries for your pup.</p>
      <p><b>Days 1-7: Introduction & Vet.</b> Introduce the puppy slowly to their crate, set feeding routines, and complete their first health checkup.</p>
      <p><b>Days 8-15: House Training.</b> Expect accidents, but build consistency. Bring them to the designated spot every 2 hours and celebrate success immediately.</p>
      <p><b>Days 16-30: Socialization.</b> Introduce them safely to new sounds, surfaces, and friendly vaccinated dogs to build lifetime confidence.</p>
    `
  }
};


// --- APP INITIALIZATION ---

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCategoryFilters();
  initDialogHandlers();
  initDealsTicker();
  initQuizFlow();
});


// --- THEME SWITCHER (DARK MODE) ---

function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  
  // Read saved preference or system default
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
  });
}


// --- CATEGORY FILTERS (EDITOR'S PICKS) ---

function initCategoryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const pickCards = document.querySelectorAll(".pick-card");
  
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active states
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const category = btn.getAttribute("data-category");
      
      pickCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}


// --- DIALOG MODALS UTILITIES ---

function initDialogHandlers() {
  const dialogs = document.querySelectorAll("dialog");
  
  dialogs.forEach(dialog => {
    // 1. Light dismiss - close when clicking the backdrop overlay
    dialog.addEventListener("click", (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });

    // 2. Setup header close button (&times;)
    const closeBtn = dialog.querySelector(".close-dialog-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => dialog.close());
    }

    // 3. Setup generic dialog-footer close action
    const closeActionBtns = dialog.querySelectorAll(".close-modal-action-btn");
    closeActionBtns.forEach(btn => {
      btn.addEventListener("click", () => dialog.close());
    });
  });

  // --- PRODUCT REVIEW MODAL LOGIC ---
  const productDialog = document.getElementById("product-dialog");
  const pTitle = document.getElementById("p-modal-title");
  const pBody = document.getElementById("p-modal-body");
  const pLink = document.getElementById("p-modal-amazon-link");
  const viewDetailBtns = document.querySelectorAll(".view-details-btn");

  viewDetailBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-product");
      const prod = PRODUCT_DETAILS[prodId];
      if (prod) {
        pTitle.textContent = prod.title;
        pLink.setAttribute("href", prod.link);
        
        pBody.innerHTML = `
          <div class="product-review-modal-grid">
            <div class="modal-review-media">
              ${prod.mediaSvg}
            </div>
            <div>
              <div class="rating-pill">${prod.rating}</div>
              <p style="margin-bottom: 12px; font-weight: 500;">${prod.sub}</p>
              <p style="font-size: 14.5px; color: var(--ink-soft); line-height: 1.7;">${prod.description}</p>
            </div>
          </div>
          <div class="pros-cons-container">
            <div>
              <h4 class="pros-cons-title" style="color: var(--sage)">Pros</h4>
              <ul class="pro-list">
                ${prod.pros.map(pro => `<li>${pro}</li>`).join("")}
              </ul>
            </div>
            <div>
              <h4 class="pros-cons-title" style="color: var(--coral)">Cons</h4>
              <ul class="con-list">
                ${prod.cons.map(con => `<li>${con}</li>`).join("")}
              </ul>
            </div>
          </div>
        `;
        productDialog.showModal();
      }
    });
  });

  // --- BLOG ARTICLE MODAL LOGIC ---
  const blogDialog = document.getElementById("blog-dialog");
  const bTitle = document.getElementById("b-modal-title");
  const bBody = document.getElementById("b-modal-body");
  const blogCards = document.querySelectorAll(".blog-card");

  blogCards.forEach(card => {
    const readBtn = card.querySelector(".blog-read-btn");
    const blogId = card.getAttribute("data-blog-id");
    
    const openBlog = () => {
      const blog = BLOG_ARTICLES[blogId];
      if (blog) {
        bTitle.textContent = blog.title;
        bBody.innerHTML = `
          <img class="blog-modal-header-img" src="${blog.imgUrl}" alt="${blog.title}">
          <div class="blog-meta">${blog.meta} · Category: ${blog.tag}</div>
          <div class="blog-modal-body-text">
            ${blog.content}
          </div>
        `;
        blogDialog.showModal();
      }
    };

    if (readBtn) {
      readBtn.addEventListener("click", openBlog);
    }
    // Let clicking the card trigger the blog opening as well
    card.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") {
        openBlog();
      }
    });
  });
}


// --- DEALS TICKER & TOAST LOGIC ---

function initDealsTicker() {
  const tickerItems = document.querySelectorAll(".ticker-item");
  const toast = document.getElementById("toast-notification");
  const toastCode = document.getElementById("toast-code");
  let toastTimeout = null;

  tickerItems.forEach(item => {
    item.addEventListener("click", () => {
      const code = item.getAttribute("data-code");
      if (code) {
        // Copy to clipboard
        navigator.clipboard.writeText(code).then(() => {
          // Show toast notification
          toastCode.textContent = code;
          toast.classList.add("show");
          
          if (toastTimeout) {
            clearTimeout(toastTimeout);
          }
          
          toastTimeout = setTimeout(() => {
            toast.classList.remove("show");
          }, 3000);
        }).catch(err => {
          console.error("Could not copy discount code: ", err);
        });
      }
    });
  });
}


// --- QUIZ FINDER FLOW STATE ---

function initQuizFlow() {
  const startBtn = document.getElementById("start-quiz-btn");
  const quizDialog = document.getElementById("quiz-dialog");
  const quizForm = document.getElementById("quiz-form");
  const prevBtn = document.getElementById("prev-step-btn");
  const nextBtn = document.getElementById("next-step-btn");
  const progressBar = document.getElementById("quiz-progress");
  const steps = document.querySelectorAll(".quiz-step");
  const quizResult = document.getElementById("quiz-result");
  const resultCardContainer = document.getElementById("result-card-container");
  const resultTitle = document.getElementById("result-title");
  const resultText = document.getElementById("result-text");
  const restartBtn = document.getElementById("restart-quiz-btn-modal");
  
  let currentStep = 1;
  const totalSteps = 3;

  startBtn.addEventListener("click", () => {
    resetQuiz();
    quizDialog.showModal();
  });

  nextBtn.addEventListener("click", () => {
    if (currentStep < totalSteps) {
      // Validate step fields
      const currentStepEl = quizForm.querySelector(`.quiz-step[data-step="${currentStep}"]`);
      const inputs = currentStepEl.querySelectorAll("input");
      let isValid = false;
      inputs.forEach(input => {
        if (input.checked) isValid = true;
      });

      if (!isValid) {
        // Find if user hasn't selected anything, highlight first one or alert
        alert("Please pick an option before proceeding!");
        return;
      }

      currentStep++;
      updateStepUI();
    } else {
      // Complete quiz and evaluate results
      evaluateQuizResults();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      updateStepUI();
    }
  });

  restartBtn.addEventListener("click", () => {
    resetQuiz();
  });

  function updateStepUI() {
    steps.forEach(step => {
      const stepNum = parseInt(step.getAttribute("data-step"));
      if (stepNum === currentStep) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });

    // Update progress bar
    const progressPercent = (currentStep / totalSteps) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Toggle Back button visibility
    if (currentStep === 1) {
      prevBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
    }

    // Update Next/Submit button label
    if (currentStep === totalSteps) {
      nextBtn.textContent = "Show Matches 🎉";
    } else {
      nextBtn.textContent = "Next Step →";
    }
  }

  function resetQuiz() {
    currentStep = 1;
    quizForm.reset();
    quizForm.classList.remove("hidden");
    quizResult.classList.add("hidden");
    nextBtn.classList.remove("hidden");
    prevBtn.classList.add("hidden");
    nextBtn.textContent = "Next Step →";
    progressBar.style.width = "33%";
    steps.forEach(step => {
      if (parseInt(step.getAttribute("data-step")) === 1) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }

  function evaluateQuizResults() {
    // Collect user values
    const petType = quizForm.querySelector('input[name="petType"]:checked')?.value;
    const goal = quizForm.querySelector('input[name="goal"]:checked')?.value;
    const age = quizForm.querySelector('input[name="age"]:checked')?.value;

    let matchId = "bed"; // default

    if (petType === "dog") {
      if (goal === "sleep" || age === "senior") {
        matchId = "bed";
      } else if (goal === "gear" || goal === "walks") {
        matchId = "harness";
      } else {
        matchId = "bed";
      }
    } else if (petType === "cat") {
      if (goal === "food") {
        matchId = "feeder";
      } else if (goal === "sleep") {
        matchId = "bed";
      } else {
        matchId = "feeder";
      }
    }

    const matchInfo = PRODUCT_DETAILS[matchId];

    if (matchInfo) {
      resultTitle.textContent = matchInfo.title;
      
      let reasoning = "";
      if (matchId === "bed") {
        reasoning = `Based on your choices, your ${age} ${petType} needs optimal resting comfort. The Orthopedic Memory Foam Bed is perfect for daily spinal relief and relaxation.`;
      } else if (matchId === "feeder") {
        reasoning = `Based on your choices, food management is key. The Automatic Cat Feeder helps regulate feeding times and prevents overeating for your healthy feline.`;
      } else if (matchId === "harness") {
        reasoning = `Based on your choices, leash training is a priority. The No-Pull Front-Clip Harness will provide gentle control without hurting your puppy/dog.`;
      }
      
      resultText.textContent = reasoning;
      
      // Inject matching product card
      resultCardContainer.innerHTML = `
        <div class="pick-card" style="width: 100%;">
          <div class="pick-media">
            ${matchInfo.mediaSvg}
          </div>
          <div class="pick-title">${matchInfo.title}</div>
          <div class="pick-sub">${matchInfo.sub}</div>
          <div class="pick-rating">${matchInfo.rating}</div>
          <a href="${matchInfo.link}" target="_blank" class="pick-cta">Check Price on Amazon →</a>
        </div>
      `;
    }

    // Transition form to result
    quizForm.classList.add("hidden");
    quizResult.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    prevBtn.classList.add("hidden");
    progressBar.style.width = "100%";
  }
}
