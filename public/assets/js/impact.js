// Impact page specific enhancements
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quick-link-card, .feature-card").forEach((card, index) => {
    card.style.setProperty("--card-index", index);
  });
});
