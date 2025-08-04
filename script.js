window.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp;

  if (tg) {
    tg.ready(); // повідомляємо, що WebApp готовий
    tg.expand(); // просимо Telegram показати повну висоту

    // Використовуємо значення тільки після того, як WebApp точно готовий
    const width = tg.viewportWidth;
    document.getElementById("width").textContent = width + "px";

    // Якщо потрібно, увімкни обробку кнопки
    // document.getElementById("continueBtn").addEventListener("click", () => {
    //   console.log("continueBtn clicked");
    //   document.getElementById("form").style.display = "block";
    //   document.getElementById("start").style.display = "none";
    // });
  } else {
    console.warn("WebApp не запущено в Telegram.");
  }
});