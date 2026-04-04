const clock = document.getElementById("clock");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Change icon
  if (document.body.classList.contains("light")) {
    toggleBtn.innerText = "☀️";
  } else {
    toggleBtn.innerText = "🌙";
  }
});

function createClock() {
  const size = clock.offsetWidth;
  const center = size / 2;
  const radius = size * 0.42;

  /* NUMBERS */
  for (let i = 1; i <= 12; i++) {
    const num = document.createElement("div");
    num.className = "number";
    num.innerText = i;

    const angle = (i * 30) * Math.PI / 180;

    num.style.left = center + radius * Math.sin(angle) + "px";
    num.style.top = center - radius * Math.cos(angle) + "px";

    clock.appendChild(num);
  }

  /* TICKS */

for (let i = 0; i < 60; i++) {

  // ❌ Skip hour positions (12,1,2,...)
  if (i % 5 === 0) continue;

  const tick = document.createElement("div");
  tick.className = "tick";

  // Optional: slightly bigger tick for middle (like 5 min but not hour)
  if (i % 15 === 0) {
    tick.classList.add("big");
  }

  tick.style.transform = `
    rotate(${i * 6}deg)
    translateY(-${radius * 0.95}px)
  `;

  tick.style.top = "50%";
  tick.style.left = "50%";

  clock.appendChild(tick);
}
}

/* RUN AFTER LOAD */
window.onload = createClock;

/* UPDATE TIME */
function updateClock() {
  const now = new Date();

  const hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const hrDeg = (hr % 12) * 30 + min * 0.5;
  const minDeg = min * 6;
  const secDeg = sec * 6;

  hour.style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
  minute.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  second.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();