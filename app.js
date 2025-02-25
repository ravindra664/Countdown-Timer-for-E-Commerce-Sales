const endDate = "18 February 2026 04:07 PM";
document.getElementById("end-date").innerHTML = endDate;
const input = document.querySelectorAll("input");
function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000; //1000 to convert into seconds
  if (diff < 0) {
    clearInterval(timer);
    document.write("<h1>Now,You are live!!!</h1>");
    return;
  }
  input[0].value = Math.floor(diff / 3600 / 24); //convert into Days
  input[1].value = Math.floor((diff / 3600) % 24); //convert into Hours
  input[2].value = Math.floor((diff / 60) % 60); //convert into Minutes
  input[3].value = Math.floor(diff % 60); //convert into Seconds
}
const timer = setInterval(clock, 1000);
clock();
