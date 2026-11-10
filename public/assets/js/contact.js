document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("O formulário contactForm não foi encontrado.");
    return;
  }

  // Impede que o mesmo formulário seja inicializado duas vezes
  if (form.dataset.initialized === "true") {
    return;
  }

  form.dataset.initialized = "true";

  function clearError(field) {
    const group = field.closest(".form-group");

    if (!group) {
      return;
    }

    group.classList.remove("error");

    const message = group.querySelector(".error-message");

    if (message) {
      message.remove();
    }
  }

  function showError(field, message) {
    const group = field.closest(".form-group");

    if (!group) {
      return;
    }

    clearError(field);

    group.classList.add("error");

    const error = document.createElement("div");
    error.className = "error-message";
    error.textContent = message;

    group.appendChild(error);
  }

  function isValidEmail(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(value);
  }

  function showSuccessMessage() {
    // Remove uma mensagem anterior, caso exista
    const previousNotification = document.querySelector(
      ".success-notification",
    );

    if (previousNotification) {
      previousNotification.remove();
    }

    const notification = document.createElement("div");
    notification.className = "success-notification";

    notification.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>
        Message sent successfully. We will get back to you soon.
      </span>
    `;

    // Coloca a mensagem logo depois do formulário
    form.insertAdjacentElement("afterend", notification);

    setTimeout(() => {
      notification.remove();
    }, 4500);
  }

  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      clearError(field);
    });

    field.addEventListener("change", () => {
      clearError(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let valid = true;

    const requiredFields = form.querySelectorAll("[required]");

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        showError(field, "This field is required.");
        valid = false;
      }
    });

    const email = form.querySelector('input[type="email"]');

    if (email && email.value.trim() && !isValidEmail(email.value.trim())) {
      showError(email, "Please enter a valid email address.");
      valid = false;
    }

    if (!valid) {
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');

    if (!submitBtn) {
      console.error("O botão de envio não foi encontrado.");
      return;
    }

    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i class="fas fa-spinner fa-spin"></i>
      Sending...
    `;

    window.setTimeout(() => {
      try {
        form.reset();

        // Remove uma mensagem anterior, caso exista
        const previousNotification = form.querySelector(
          ".success-notification",
        );

        if (previousNotification) {
          previousNotification.remove();
        }

        const notification = document.createElement("div");
        notification.className = "success-notification";
        notification.setAttribute("role", "status");
        notification.setAttribute("aria-live", "polite");

        notification.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>
        Message sent successfully. We will get back to you soon.
      </span>
    `;

        // Coloca a mensagem dentro do formulário, abaixo do botão
        form.appendChild(notification);

        window.setTimeout(() => {
          notification.remove();
        }, 4500);
      } catch (error) {
        console.error("Erro ao apresentar a mensagem:", error);
      } finally {
        // O botão volta sempre ao estado original
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    }, 800);
  });
});
