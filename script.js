let completedCount = 0;

let totalTasks = 0;

let streak =
localStorage.getItem("streak") || 0;

document.getElementById("streak")
.innerText = streak;



// MOTIVATIONAL QUOTES

let quotes = [

  "Discipline beats motivation.",

  "Small progress is still progress.",

  "Focus on consistency.",

  "Success starts with daily effort."

];

document.getElementById("quote")
.innerText =

quotes[
  Math.floor(
    Math.random() * quotes.length
  )
];




// ADD TASK

function addTask(){

  const input =
  document.getElementById("taskInput");

  const category =
  document.getElementById("category").value;

  const taskText =
  input.value;

  if(taskText === "") return;

  totalTasks++;

  const li =
  document.createElement("li");

  li.innerHTML = `

    <div>

      <strong>[${category}]</strong>

      ${taskText}

    </div>

    <div>

      <button onclick="completeTask(this)">
      ✔
      </button>

      <button onclick="deleteTask(this)">
      ❌
      </button>

    </div>

  `;

  document
  .getElementById("taskList")
  .appendChild(li);

  saveTasks();

  input.value = "";

}



// COMPLETE TASK

function completeTask(button){

  const li =
  button.parentElement.parentElement;

  if(!li.classList.contains("completed")){

    li.classList.add("completed");

    completedCount++;

    document.getElementById("count")
    .innerText = completedCount;

    updateProgress();

    streak++;

    document.getElementById("streak")
    .innerText = streak;

    localStorage.setItem(
      "streak",
      streak
    );

    saveTasks();

  }

}



// DELETE TASK

function deleteTask(button){

  const li =
  button.parentElement.parentElement;

  li.remove();

  saveTasks();

}



// PROGRESS BAR

function updateProgress(){

  let percent = 0;

  if(totalTasks > 0){

    percent = Math.round(

      (completedCount / totalTasks) * 100

    );

  }

  document
  .getElementById("progressFill")
  .style.width = percent + "%";

  document
  .getElementById("progressText")
  .innerText =

  percent + "% Completed";

}




// TIMER

let timerRunning = false;

let timeLeft;



function startTimer(){

  if(timerRunning) return;

  const minutes =

  document.getElementById(
    "minutesInput"
  ).value;

  if(minutes === "" || minutes <= 0){

    alert("Enter valid minutes");

    return;

  }

  timeLeft = minutes * 60;

  timerRunning = true;

  const timer = setInterval(()=>{

    let mins =
    Math.floor(timeLeft / 60);

    let secs =
    timeLeft % 60;

    secs =
    secs < 10 ? "0"+secs : secs;

    document.getElementById("time")
    .innerText =

    `${mins}:${secs}`;

    timeLeft--;

    if(timeLeft < 0){

      clearInterval(timer);

      timerRunning = false;

      alert("Focus Session Completed!");

    }

  },1000);

}



// DARK / LIGHT MODE

function toggleTheme(){

  document.body
  .classList.toggle("light-mode");

}



// SAVE TASKS

function saveTasks(){

  localStorage.setItem(

    "tasks",

    document.getElementById("taskList")
    .innerHTML

  );

}



// LOAD TASKS

window.onload = function(){

  document.getElementById("taskList")
  .innerHTML =

  localStorage.getItem("tasks") || "";

    }
