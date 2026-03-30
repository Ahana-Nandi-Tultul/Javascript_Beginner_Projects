const timeElement = document.getElementById("time");
const formatSelect = document.getElementById("format");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let format = formatSelect.value;
  let period = "";

  if (format === "12") {
    period = hours >= 12 ? " PM" : " AM";
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timeElement.innerText = `${hours}:${minutes}:${seconds}${period}`;
}

setInterval(updateClock, 1000);
updateClock();

formatSelect.addEventListener("change", updateClock);