var mySeconds;
var intervalHandle;
var timeDisplay;
var message;

function resetPage() {
  document.getElementById("timer").style.display = "none";
}

function tick() {
  timeDisplay = document.getElementById("time");
  var min = Math.floor(mySeconds / 60);
  var sec = mySeconds - min * 60;
  if (sec < 10)
    sec = "0" + sec;
  message = min.toString() + ":" + sec;
  timeDisplay.innerHTML = message;
  if (mySeconds === 0) {
    alert("Done");
    clearInterval(intervalHandle);
    resetPage();
  }
  mySeconds--;
}

function startCounter() {
  var myInput = document.getElementById("input").value;
  if (isNaN(myInput)) {
    alert("Type a valid number please");
    return;
  }
  mySeconds = myInput * 60;
  intervalHandle = setInterval(tick, 1000);
  document.getElementById("inputArea").style.display = "none";
}

function stopCounter() {
  timeDisplay.innerHTML = "00:00";
  clearInterval(intervalHandle);
  document.getElementById("inputArea").style.display = "none";
}
