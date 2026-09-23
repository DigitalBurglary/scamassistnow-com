(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Placeholder Stripe / checkout CTAs
  document.querySelectorAll("[data-checkout]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var plan = btn.getAttribute("data-checkout") || "plan";
      var box = btn.parentElement.querySelector(".notify-box");
      if (!box) {
        box = document.createElement("div");
        box.className = "notify-box";
        btn.parentElement.appendChild(box);
      }
      box.textContent =
        "Checkout coming soon — Stripe not live yet. You’re on the notify list for “" +
        plan +
        "”. Email hello@" +
        (document.body.getAttribute("data-domain") || "example.org") +
        " to be first in line.";
    });
  });

  // Contact form placeholder (no backend yet)
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var domain = document.body.getAttribute("data-domain") || "example.org";
      var status = document.querySelector("#form-status");
      if (status) {
        status.textContent =
          "Thanks — form delivery isn’t wired yet. Please email support@" +
          domain +
          " or hello@" +
          domain +
          " directly.";
        status.hidden = false;
      }
    });
  }
})();
