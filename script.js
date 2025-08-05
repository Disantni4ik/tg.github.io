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

const copyButton = document.querySelector('.copy-button');
const message = document.getElementById('copyMessage');

copyButton.addEventListener('click', () => {
      const textToCopy = copyButton.textContent.trim();

      navigator.clipboard.writeText(textToCopy).then(() => {
        message.classList.add('show');

        setTimeout(() => {
          message.classList.remove('show');
        }, 2000);
      }).catch(err => {
        console.error('Помилка копіювання: ', err);
      });
    });

const tg = window.Telegram.WebApp;

  document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };

    tg.sendData(JSON.stringify(data));

    tg.close();
  });