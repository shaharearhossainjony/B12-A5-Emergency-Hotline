    // copy counter element
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
  });
});


