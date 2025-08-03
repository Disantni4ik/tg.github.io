window.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  if (tg) {
    tg.expand();
    tg.ready();

    document.getElementById("continueBtn").addEventListener("click", () => {
      tg.sendData("start");
    });
  } else {
    console.warn("WebApp не запущено в Telegram.");
  }
});