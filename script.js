window.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;
  const width = window.Telegram.WebApp.viewportWidth;

  if (tg) {
    tg.expand();
    tg.ready();

    document.getElementById("width").textContent = width + "px";

    // document.getElementById("continueBtn").addEventListener("click", () => {
    //   console.log("continueBtn clicked");
    //   document.getElementById("form").style.display = "block";
    //   document.getElementById("start").style.display = "none";
    // });
  } else {
    console.warn("WebApp не запущено в Telegram.");
  }
});