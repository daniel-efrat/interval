let timer
let countdown = 300000 // 5 minutes in milliseconds

const timerElement = document.getElementById("timer")
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
const notificationSound = document.getElementById("notificationSound")

function updateTimerDisplay() {
  const minutes = String(Math.floor(countdown / 60000)).padStart(2, "0")
  const seconds = String(Math.floor((countdown % 60000) / 1000)).padStart(
    2,
    "0"
  )
  const milliseconds = String(countdown % 1000).padStart(3, "0")
  timerElement.textContent = `${minutes}:${seconds}.${milliseconds}`
}

function startTimer() {
  if (!timer) {
    countdown = 300000 // Reset to 5 minutes in milliseconds
    updateTimerDisplay()
    notificationSound.play() // Play sound on start
    timer = setInterval(() => {
      countdown -= 10 // Decrease every 10 milliseconds
      updateTimerDisplay()
      if (countdown <= 0) {
        notificationSound.play() // Play sound at the end of each interval
        countdown = 300000 // Reset to 5 minutes
      }
    }, 10) // Update every 10 milliseconds
  }
}

function stopTimer() {
  clearInterval(timer)
  timer = null // Reset the timer variable
  countdown = 300000
  updateTimerDisplay()
}

startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)

updateTimerDisplay()
