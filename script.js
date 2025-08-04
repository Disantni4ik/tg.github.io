window.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  if (tg) {
    tg.expand();
    tg.ready();

    console.log(window.Telegram.viewportWidth);
    document.getElementById("main").style.width = tg.viewportWidth + "px";

    // document.getElementById("continueBtn").addEventListener("click", () => {
    //   console.log("continueBtn clicked");
    //   document.getElementById("form").style.display = "block";
    //   document.getElementById("start").style.display = "none";
    // });
  } else {
    console.warn("WebApp не запущено в Telegram.");
  }
});