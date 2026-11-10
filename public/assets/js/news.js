// News page specific enhancements
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".quick-link-card, .event-card");
  cards.forEach((card, index) => {
    card.style.setProperty("--card-index", index);
    card.classList.add("visible");
  });
});
