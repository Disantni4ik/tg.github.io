const continueBtn = document.getElementById("continue1");
const start = document.getElementById("start");
const registration = document.getElementById("registration");

continueBtn.addEventListener("click", () => {
    start.classList.add("hidden");
    start.classList.remove("visible");

    setTimeout(() => {
      start.style.display = "none";
      registration.classList.remove("hidden");
      registration.classList.add("visible");
    }, 300);
  });