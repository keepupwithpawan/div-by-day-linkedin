const rippleBg = document.getElementById("ripple-bg");
const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");
const mainContainer = document.getElementById("main-container");

function createRipple(event, color) {
  rippleBg.innerHTML = ""; // Clear old ripples

  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  
  ripple.style.background = color;

  const rect = rippleBg.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  rippleBg.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}

lightBtn.addEventListener("click", (e) => {
  createRipple(e, "rgba(0, 0, 0, 0.4)"); // blue ripple
  lightBtn.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  darkBtn.style.backgroundColor = "transparent";
  mainContainer.style.backgroundColor = "#f1f1f1";
});

darkBtn.addEventListener("click", (e) => {
  createRipple(e, "rgba(255, 255, 255, 0.6)"); // white ripple
  darkBtn.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  lightBtn.style.backgroundColor = "transparent";
  mainContainer.style.backgroundColor = "#121212";
});
