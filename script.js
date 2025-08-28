// copy counter and alert 
const counter = document.getElementById("copy-counter");
let count = 0;
const copyButtons = document.querySelectorAll(".copy-btn");
copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    const card = button.closest(".card");
    const serviceNumber = card.querySelector(".service-number").innerText;
    navigator.clipboard.writeText(serviceNumber);

    alert("Number copied: " + serviceNumber);
  });
});


// heart counter 
const loveCounter = document.getElementById("loveCounter");
    let loveCount = 0;
    const loveButtons = document.querySelectorAll(".love-btn");
    loveButtons.forEach(button => {
      button.addEventListener("click", () => {
        loveCount++;
        loveCounter.textContent = loveCount;
      });
    });
// coin counter and call history
const coinCounter = document.getElementById("coin-counter");

document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let currentCoins = parseInt(coinCounter.innerText);
    if (currentCoins >= 20) {
      const card = btn.closest(".card");
      const serviceName = card.querySelector(".service-name").innerText;
      const serviceNumber = card.querySelector(".service-number").innerText;

      alert(`📞 Calling ${serviceName} ${serviceNumber}`);
      coinCounter.innerText = currentCoins - 20;
      const now = new Date();
      const timeString = now.toLocaleTimeString();

      const historyItem = document.createElement("div");
      historyItem.className =
        "bg-[#FAFAFA] flex justify-between items-center m-3 p-3 rounded";
      historyItem.innerHTML = `
        <div>
          <h1 class="font-bold">${serviceName}</h1>
          <p>${serviceNumber}</p>
        </div>
        <div>
          <p>${timeString}</p>
        </div>
      `;

      document.querySelector(".for-history-cards").appendChild(historyItem);
    } else {
      alert("❌ Not enough coins to make a call!");
      return;
    }
  });
});

// clear call history
document.getElementById("clearBtn").addEventListener("click", function () {
  document.querySelector(".for-history-cards").innerHTML = "";
});
