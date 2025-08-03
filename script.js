window.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  if (tg) {
    tg.expand();
    tg.ready();

    document.getElementById("continueBtn").addEventListener("click", () => {
      print("continueBtn clicked");
      document.getElementById("form").style.display = "block";
      document.getElementById("start").style.display = "none";
    });
  } else {
    console.warn("WebApp не запущено в Telegram.");
  }
});