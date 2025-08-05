window.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  if (tg) {
    tg.expand();
    tg.ready();

    const continueBtn = document.getElementById("continue1");
    const start = document.getElementById("start");
    const registration = document.getElementById("registration");

    continueBtn.addEventListener("click", () => {
      registration.style.display = "block";
      start.classList.add("hidden");
      start.classList.remove("visible");

      setTimeout(() => {
        start.style.display = "none";
        registration.classList.remove("hidden");
        registration.classList.add("visible");
      }, 300);
    });

    document.getElementById("registration-form").addEventListener("submit", function (e) {
      console.log("Form submitted");
      e.preventDefault();

      const data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      };

      tg.sendData(JSON.stringify(data));
      tg.close();
    });
  }
});
