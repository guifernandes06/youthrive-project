// About page specific enhancements
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const bio = btn.closest(".bio");
      const rest = bio ? bio.querySelector(".bio-rest") : null;
      if (!rest) return;
      const isOpen = rest.style.display === "inline";
      rest.style.display = isOpen ? "none" : "inline";
      btn.textContent = isOpen ? "Read more" : "Show less";
    });
  });
});
