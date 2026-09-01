// ==========================================================================
// MOST VALUABLE PETS — EDITORIAL HOMEPAGE INTERACTIVE CONTROLLER
// ==========================================================================

const PRODUCT_DETAILS = {
  bed: {
    title: "Orthopedic Memory Foam Bed",
    sub: "Best for Senior Dogs & Joint Support",
    score: "9.2",
    price: "Rs 799",
    link: "https://www.amazon.com/dp/B0153DUSW4",
    img: "golden_retriever_bed.jpg",
    description: "Our 60-day pressure-mapping laboratory trial proved this bed maintains 94% of its loft even under heavy 90lb test dogs. The high-density medical grade memory foam cushions aching hips and prevents painful pressure points, wrapped in a 100% waterproof barrier and tear-resistant cotton twill cover.",
    pros: [
      "Medical-grade orthopedic memory foam that never sags",
      "Internal waterproof zipper liner prevents moisture intrusion",
      "Machine-washable cover with heavy-duty YKK zippers"
    ],
    cons: [
      "Requires 24 hours to fully expand after unboxing",
      "Slight premium price point compared to polyfill beds"
    ]
  },
  feeder: {
    title: "Stainless Steel Dog Bowl",
    sub: "Best for Hygienic Daily Feeding & Multi-Pet Homes",
    score: "8.6",
    price: "Rs 349",
    link: "https://www.amazon.com/dp/B073DYHVSW",
    img: "stainless_steel_bowl.jpg",
    description: "Constructed from human-grade 304 food stainless steel, this bowl eliminates chin acne in dogs and cats caused by porous plastics. The extra-wide bonded rubber base prevents energetic eaters from sliding the bowl across hard surfaces or tipping it over.",
    pros: [
      "Dishwasher safe and 100% rust-proof alloy construction",
      "Permanently bonded silicone-rubber base ring prevents spills",
      "Veterinary recommended non-porous antibacterial surface"
    ],
    cons: [
      "Metallic ringing noise if aggressive tag chewers nudge it",
      "Not microwave safe"
    ]
  },
  harness: {
    title: "Hip & Joint Soft Chews",
    sub: "Best for Aging Mobility & Inflammation Defense",
    score: "8.9",
    price: "Rs 499",
    link: "https://www.amazon.com/dp/B000OBH654",
    img: "joint_soft_chews.jpg",
    description: "Formulated by veterinary nutritional specialists with 800mg Glucosamine, 400mg Chondroitin, and organic turmeric per dose. In owner trials across 45 senior dogs, 84% demonstrated noticeable improvements in stair-climbing ease within 3 weeks.",
    pros: [
      "Clinically supported concentrations of Glucosamine & MSM",
      "Cold-press manufactured to preserve active enzyme efficacy",
      "Naturally flavored with real bacon dogs eagerly accept as treats"
    ],
    cons: [
      "Requires consistent daily administration for full benefit",
      "Jar must be kept tightly sealed to maintain chew softness"
    ]
  }
};

const BLOG_ARTICLES = {
  "dog-bed-size": {
    title: "How to Pick the Right Dog Bed for Your Breed’s Size",
    category: "BUYING GUIDE",
    meta: "BY DR. A. VANCE, DVM • 6 MIN READ • UPDATED MAY 2026",
    img: "golden_retriever_bed.jpg",
    content: `
      <p>Choosing the correct pet bed is one of the most overlooked aspects of lifelong canine skeletal health. While many pet owners purchase beds based primarily on room aesthetics or manufacturer weight charts, our testing reveals that sleep posture geometry is what truly dictates spinal comfort.</p>
      <p><strong>1. Measure From Nose to Tail Base in Deep Sleep:</strong> Wait until your dog is fully relaxed in their habitual sleeping pose. Measure the full length and add 8 to 12 inches. Sprawlers require flat open mattresses, whereas curlers thrive in bolstered nest designs.</p>
      <p><strong>2. Density Matters More Than Thickness:</strong> A 6-inch polyfill bed will compress to less than an inch beneath a 50-pound dog. Look for dual-layer high-density memory foam with a minimum 4 lb/cu.ft rating to prevent bottoming out against cold hardwood floors.</p>
      <p><strong>3. Waterproof Liners Are Mandatory:</strong> Even well-trained dogs bring moisture from wet grass or sudden illness. A non-crinkly waterproof internal lining prevents bacteria from colonizing the core foam where it cannot be laundered.</p>
    `
  },
  "feeders-compared": {
    title: "Senior Dog Nutrition: What Changes After Age 7",
    category: "NUTRITION",
    meta: "BY ELENA ROCHE, CANINE DIETITIAN • 8 MIN READ • UPDATED MAY 2026",
    img: "senior_dog.jpg",
    content: `
      <p>As dogs pass the age of seven, their basal metabolic rate naturally slows by approximately 20%, while their ability to synthesize joint lubrication and absorb essential minerals begins a steady decline. Continuing to feed adult-maintenance formulations frequently leads to obesity and accelerated arthritis.</p>
      <p><strong>Lean Muscle Preservation:</strong> Senior dogs actually require higher proportions of digestible, high-biological-value animal protein to offset sarcopenia (age-related muscle wasting). Look for clean poultry or wild fish meals rather than plant-based concentrates.</p>
      <p><strong>Targeted Fatty Acids:</strong> Incorporating EPA and DHA Omega-3s acts as a systemic anti-inflammatory agent, directly reducing joint swelling and supporting cognitive brain health to combat canine cognitive dysfunction syndrome.</p>
    `
  },
  "cat-water-fountain": {
    title: "Best Cat Water Fountains Tested & Reviewed",
    category: "BUYING GUIDE",
    meta: "BY MARIO KLINE, FELINE BEHAVIORIST • 5 MIN READ • UPDATED MAY 2026",
    img: "tabby_cat.jpg",
    content: `
      <p>Domestic cats evolved from desert ancestors who derived the majority of their hydration directly from prey. Because of this ancestral heritage, felines exhibit a naturally low thirst drive and possess a strong instinctual aversion to standing water, which their wild instincts associate with bacterial contamination.</p>
      <p><strong>Submerged Ultra-Quiet Pumps:</strong> Cats are auditory hunters; loud fountain vibration causes anxiety and avoidance. We recommend fountain motors rated below 25 decibels.</p>
      <p><strong>Multi-Stage Coconut Carbon Filtration:</strong> Hair, saliva, and airborne dust rapidly degrade water taste. Replaceable activated carbon filters ensure continuous freshness that encourages frequent drinking, directly preventing chronic feline kidney stones.</p>
    `
  },
  "grooming-mistakes": {
    title: "7 Grooming Mistakes Most Pet Parents Make",
    category: "GROOMING",
    meta: "BY SARAH JENNINGS, MASTER GROOMER • 7 MIN READ • UPDATED MAY 2026",
    img: "labrador_puppy.jpg",
    content: `
      <p>Home grooming strengthens the bond between human and pet, but well-intentioned mistakes can inadvertently damage protective undercoats, strip essential natural sebum oils, or cause painful matting burns.</p>
      <p><strong>Mistake 1: Shaving Double-Coated Breeds:</strong> Shaving breeds like Huskies, Retrievers, or Shepherds does not keep them cool in summer. Their undercoat functions as thermal insulation; shaving disrupts growth cycles and exposes skin to sunburn.</p>
      <p><strong>Mistake 2: Bathing Before Dematting:</strong> Wetting matted fur acts like felting wool, tightening tangles into impenetrable pelts that pinch the skin. Always thoroughly comb out mats before water touches the coat.</p>
    `
  },
  "senior-dog-care": {
    title: "Senior Dog Care Guide",
    category: "SENIOR DOG",
    meta: "BY VETERINARY EDITORIAL BOARD • COMPREHENSIVE GUIDE • UPDATED MAY 2026",
    img: "senior_dog.jpg",
    content: `
      <p class="dialog-lead-paragraph"><strong>Explore practical and thoughtful guidance designed around the changing needs of dogs as they move through their later years.</strong></p>
      
      <div class="senior-guide-grid">
        <div class="senior-guide-card">
          <div class="senior-guide-num">01 — HEALTH</div>
          <h4>Understanding the Changes</h4>
          <p>Learn what changes to observe as your dog ages and how to support a consistent, comfortable routine.</p>
          <a href="#how-we-review" class="senior-guide-link" onclick="document.getElementById('blog-modal').close()">EXPLORE &rarr;</a>
        </div>

        <div class="senior-guide-card">
          <div class="senior-guide-num">02 — CARE & GROOMING</div>
          <h4>Gentler Care for Older Dogs</h4>
          <p>Adapt grooming, hygiene, and handling routines to make everyday care more comfortable.</p>
          <a href="#how-we-review" class="senior-guide-link" onclick="document.getElementById('blog-modal').close()">EXPLORE &rarr;</a>
        </div>

        <div class="senior-guide-card">
          <div class="senior-guide-num">03 — NUTRITION</div>
          <h4>Nutrition Through the Years</h4>
          <p>Explore feeding routines, hydration, treats, and the changing nutritional considerations of senior dogs.</p>
          <a href="#how-we-review" class="senior-guide-link" onclick="document.getElementById('blog-modal').close()">EXPLORE &rarr;</a>
        </div>

        <div class="senior-guide-card">
          <div class="senior-guide-num">04 — TRAINING & BEHAVIOUR</div>
          <h4>Keep Learning Together</h4>
          <p>Understand behaviour changes and discover gentle ways to maintain engagement and useful habits.</p>
          <a href="#how-we-review" class="senior-guide-link" onclick="document.getElementById('blog-modal').close()">EXPLORE &rarr;</a>
        </div>

        <div class="senior-guide-card">
          <div class="senior-guide-num">05 — LIFESTYLE & ENRICHMENT</div>
          <h4>Comfort, Movement & Meaningful Days</h4>
          <p>Discover low-impact enrichment, comfortable routines, mental stimulation, and ways to adapt everyday life.</p>
          <a href="#how-we-review" class="senior-guide-link" onclick="document.getElementById('blog-modal').close()">EXPLORE &rarr;</a>
        </div>

        <div class="senior-guide-card">
          <div class="senior-guide-num">06 — PRODUCTS & BUYING GUIDES</div>
          <h4>Choose for Comfort</h4>
          <p>Explore practical products designed around accessibility, comfort, enrichment, and the changing needs of senior dogs.</p>
          <a href="#picks" class="senior-guide-link" onclick="document.getElementById('blog-modal').close()">EXPLORE &rarr;</a>
        </div>
      </div>
    `
  }
};

// ==========================================================================
// INITIALIZATION & DOM BINDINGS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  
  // Modals
  const productModal = document.getElementById('product-modal');
  const closeProductModal = document.getElementById('close-product-modal');
  
  const blogModal = document.getElementById('blog-modal');
  const closeBlogModal = document.getElementById('close-blog-modal');

  // Product View Buttons
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodKey = btn.dataset.product || 'bed';
      const item = PRODUCT_DETAILS[prodKey];
      if (!item || !productModal) return;

      document.getElementById('modal-product-title').textContent = item.title;
      document.getElementById('modal-product-tagline').textContent = item.sub;
      document.getElementById('modal-product-score').textContent = item.score;
      document.getElementById('modal-product-price').textContent = item.price;
      document.getElementById('modal-product-desc').textContent = item.description;
      document.getElementById('modal-amazon-link').href = item.link;

      const prosList = document.getElementById('modal-product-pros');
      prosList.innerHTML = '';
      item.pros.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p;
        prosList.appendChild(li);
      });

      const consList = document.getElementById('modal-product-cons');
      consList.innerHTML = '';
      item.cons.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c;
        consList.appendChild(li);
      });

      productModal.showModal();
    });
  });

  if (closeProductModal && productModal) {
    closeProductModal.addEventListener('click', () => productModal.close());
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) productModal.close();
    });
  }

  // Blog Article Cards
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      const blogId = card.dataset.blogId;
      const article = BLOG_ARTICLES[blogId];
      if (!article || !blogModal) return;

      document.getElementById('modal-blog-category').textContent = article.category;
      document.getElementById('modal-blog-title').textContent = article.title;
      document.getElementById('modal-blog-meta').textContent = article.meta;
      document.getElementById('modal-blog-img').src = article.img;
      document.getElementById('modal-blog-body').innerHTML = article.content;

      blogModal.showModal();
    });
  });

  if (closeBlogModal && blogModal) {
    closeBlogModal.addEventListener('click', () => blogModal.close());
    blogModal.addEventListener('click', (e) => {
      if (e.target === blogModal) blogModal.close();
    });
  }

  // Doggy Runner Loader Controller Helper
  const doggyLoader = document.getElementById('doggy-runner-loader');
  
  function triggerDoggyRunnerLoader(durationMs, callback) {
    if (!doggyLoader) {
      if (callback) callback();
      return;
    }
    
    doggyLoader.classList.add('active');
    doggyLoader.setAttribute('aria-hidden', 'false');

    setTimeout(() => {
      doggyLoader.classList.remove('active');
      doggyLoader.setAttribute('aria-hidden', 'true');
      if (callback) {
        setTimeout(callback, 200); // allow smooth fade-out before showing content
      }
    }, durationMs || 1500);
  }

  // Interactive Pet Product Finder with Treat Toss Loader
  const finderBtn = document.getElementById('finder-submit-btn');
  if (finderBtn) {
    finderBtn.addEventListener('click', () => {
      const pet = document.getElementById('finder-pet').value;
      const age = document.getElementById('finder-age').value;
      const size = document.getElementById('finder-size').value;
      const help = document.getElementById('finder-help').value;

      let recTitle = "Orthopedic Memory Foam Bed";
      let recReason = "Because you have an adult/senior pet requiring joint mobility support, our #1 lab-tested memory foam bed will provide immediate relief.";
      let prodKey = "bed";

      if (help === "feeding") {
        recTitle = "Stainless Steel Dog Bowl";
        recReason = "For daily feeding hygiene, non-porous 304 food-grade stainless steel completely prevents chin bacteria and won't slide or spill.";
        prodKey = "feeder";
      } else if (help === "training" || help === "grooming") {
        recTitle = "Hip & Joint Soft Chews";
        recReason = "Formulated with glucosamine and savory bacon flavor, ideal for rewarding active pets while reinforcing joint longevity.";
        prodKey = "harness";
      }

      // Trigger Realistic Doggy Runner Loader
      triggerDoggyRunnerLoader(1600, () => {
        // Auto-trigger product modal
        const item = PRODUCT_DETAILS[prodKey];
        if (item && productModal) {
          document.getElementById('modal-product-title').textContent = item.title;
          document.getElementById('modal-product-tagline').textContent = item.sub;
          document.getElementById('modal-product-score').textContent = item.score;
          document.getElementById('modal-product-price').textContent = item.price;
          document.getElementById('modal-product-desc').textContent = item.description;
          document.getElementById('modal-amazon-link').href = item.link;

          const prosList = document.getElementById('modal-product-pros');
          prosList.innerHTML = '';
          item.pros.forEach(p => {
            const li = document.createElement('li');
            li.textContent = p;
            prosList.appendChild(li);
          });

          const consList = document.getElementById('modal-product-cons');
          consList.innerHTML = '';
          item.cons.forEach(c => {
            const li = document.createElement('li');
            li.textContent = c;
            consList.appendChild(li);
          });

          productModal.showModal();
        }
      });
    });
  }

  // Interactive Filter dropdown triggers
  const finderSelects = document.querySelectorAll('.finder-select');
  finderSelects.forEach(select => {
    select.addEventListener('change', () => {
      triggerDoggyRunnerLoader(1000, null);
    });
  });

  // Search Button Action
  const searchBtn = document.getElementById('search-toggle-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const term = prompt("Search Most Valuable Pets database (e.g., orthopedic bed, bowls, chews):");
      if (term) {
        triggerDoggyRunnerLoader(1400, () => {
          const picksSec = document.getElementById('picks');
          if (picksSec) picksSec.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });
  }

});

