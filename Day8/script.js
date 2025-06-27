const testimonials = [
  {
    quote: "Sleek design and user-friendly interface made my work more efficient.",
    name: "Justin Shen",
    title: "CEO, CocoMoco",
  },
  {
    quote: "Customer service was fantastic. Helped me beyond expectations.",
    name: "Sarah Johnson",
    title: "Marketing Director, TechFlow",
  },
  {
    quote: "Software transformed how we manage operations. Highly recommend!",
    name: "Michael Chen",
    title: "CTO, InnovateLab",
  },
  {
    quote: "Responsive team and seamless integration with our system.",
    name: "Emily Rodriguez",
    title: "Operations Manager, DataSync",
  },
  {
    quote: "Great value and intuitive features for scaling our business.",
    name: "David Wilson",
    title: "Founder, GrowthTech",
  },
];

let currentIndex = 0;
let isAnimating = false;

function createCard(index) {
  const t = testimonials[index];
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-index", index);

  card.innerHTML = `
    <div class="quote">"${t.quote}"</div>
    <div class="author">
      <div class="author-name">${t.name}</div>
      <div class="author-title">${t.title}</div>
    </div>
  `;

  return card;
}

function renderCarousel() {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  for (let i = 0; i < testimonials.length; i++) {
    const card = createCard(i);
    carousel.appendChild(card);
  }

  applyClasses();
}

function applyClasses() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const index = Number(card.getAttribute("data-index"));
    card.className = "card"; // reset

    if (index === currentIndex) {
      card.classList.add("center");
    } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
      card.classList.add("left");
    } else if (index === (currentIndex + 1) % testimonials.length) {
      card.classList.add("right");
    } else {
      card.classList.add("hidden");
    }
  });
}

function nextCard() {
  if (isAnimating) return;
  isAnimating = true;

  currentIndex = (currentIndex + 1) % testimonials.length;
  applyClasses();

  setTimeout(() => {
    isAnimating = false;
  }, 600); // Match your CSS transition duration
}

function prevCard() {
  if (isAnimating) return;
  isAnimating = true;

  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  applyClasses();

  setTimeout(() => {
    isAnimating = false;
  }, 600); // Match your CSS transition duration
}

// Initial render
renderCarousel();
setInterval(nextCard, 5000);
