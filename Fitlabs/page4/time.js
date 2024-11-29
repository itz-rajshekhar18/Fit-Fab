// Timer Variables
document.addEventListener('DOMContentLoaded', () => {
    // Timer Variables
    let timerDisplay = document.querySelector('.timer-display');
    let timerButton = document.querySelector('#timer-btn');
    let timerInterval = null;
    let totalSeconds = 0;
    let isRunning = false; // To track timer state
  
    // Function to format time (HH:MM:SS)
    function formatTime(seconds) {
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);
      let secs = seconds % 60;
  
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  
    // Function to start the timer
    function startTimer() {
      timerInterval = setInterval(() => {
        totalSeconds++;
        timerDisplay.textContent = formatTime(totalSeconds);
      }, 1000);
      isRunning = true;
      timerButton.textContent = 'Stop'; // Change button text to "Stop"
    }
  
    // Function to stop the timer
    function stopTimer() {
      clearInterval(timerInterval);
      timerInterval = null;
      isRunning = false;
      timerButton.textContent = 'Start'; // Change button text to "Start"
    }
  
    // Toggle Timer
    function toggleTimer() {
      if (isRunning) {
        stopTimer();
      } else {
        startTimer();
      }
    }
  
    // Add event listener to the timer button
    timerButton.addEventListener('click', toggleTimer);
  });
  