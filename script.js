let completedCount = 0;

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button onclick="completeTask(this)">✔</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

function completeTask(button) {
  const li = button.parentElement.parentElement;

  if (!li.classList.contains("completed")) {
    li.classList.add("completed");
    completedCount++;
    document.getElementById("count").innerText = completedCount;
  }
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}

let timeLeft;
let timerRunning = false;

function startTimer() {
  if (timerRunning) return;

  timerRunning = true;

  const timer = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("time").innerText =
      `${minutes}:${seconds}`;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      timerRunning = false;
      alert("Focus Session Completed!");
    }
  }, 1000);
}
