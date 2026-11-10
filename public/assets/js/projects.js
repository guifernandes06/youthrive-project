// Projects page specific enhancements
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-card").forEach((card, index) => {
    card.style.setProperty("--card-index", index);
  });
});
