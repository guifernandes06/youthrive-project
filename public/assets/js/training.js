// Training page specific enhancements
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".offer-card, .resource-card").forEach((card, index) => {
    card.style.setProperty("--card-index", index);
  });
});
