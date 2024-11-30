function updateDashboard(waterIntake, sleepDuration) {
    // Update the second HTML (Fit & Fab Dashboard)
    const waterProgress = document.querySelector(".water-info p:last-child");
    const waterBar = document.querySelector(".water-info ~ .progress-bar");
    const maxWaterGoal = 6; // Daily water goal (6L)

    waterProgress.textContent = `${waterIntake.toFixed(1)}L of ${maxWaterGoal}L`;
    const waterPercentage = Math.min((waterIntake / maxWaterGoal) * 100, 100);
    waterBar.style.width = `${waterPercentage}%`;
    waterBar.style.backgroundColor = "#007bff";

    const sleepProgress = document.querySelector(".sleep-info p:last-child");
    const sleepBar = document.querySelector(".sleep-info ~ .progress-bar");
    const maxSleepGoal = 11; // Maximum sleep duration (11 hours)

    sleepProgress.textContent = `${sleepDuration.toFixed(1)} hours of ${maxSleepGoal} hours`;
    const sleepPercentage = Math.min((sleepDuration / maxSleepGoal) * 100, 100);
    sleepBar.style.width = `${sleepPercentage}%`;
    sleepBar.style.backgroundColor = "#28a745";
}

function updateHealthTrackerPage(waterIntake, sleepDuration) {
    // Update the progress bars on the Health Tracker page
    const waterBar = document.querySelector(".water-bar");
    const sleepBar = document.querySelector(".steps-bar"); // Assuming steps-bar is for sleep

    const maxWaterGoal = 3; // Daily water goal (3L)
    const maxSleepGoal = 11; // Maximum sleep duration (11 hours)

    // Update water progress bar
    const waterPercentage = Math.min((waterIntake / maxWaterGoal) * 100, 100);
    waterBar.style.width = `${waterPercentage}%`;
    waterBar.style.backgroundColor = "#007bff";

    // Update sleep progress bar
    const sleepPercentage = Math.min((sleepDuration / maxSleepGoal) * 100, 100);
    sleepBar.style.width = `${sleepPercentage}%`;
    sleepBar.style.backgroundColor = "#28a745";

    // Update numeric values for water and sleep
    const waterText = document.querySelector(".progress-section .progress-bar:nth-child(3) span");
    const sleepText = document.querySelector(".progress-section .progress-bar:nth-child(1) span");

    if (waterText) waterText.textContent = `${waterIntake.toFixed(1)}L of ${maxWaterGoal}L`;
    if (sleepText) sleepText.textContent = `${sleepDuration.toFixed(1)} hours of ${maxSleepGoal} hours`;
}

// Save button event listener
document.querySelector(".save-button").addEventListener("click", () => {
    // Fetch water intake value
    const waterInput = parseFloat(document.getElementById("water-intake").value) || 0;
    
    // Fetch sleep duration (convert to hours) and cap at 11 hours
    const sleepInput = document.getElementById("sleep-duration").value;
    let sleepDuration = sleepInput
        ? parseFloat(sleepInput.split(":")[0]) + (parseFloat(sleepInput.split(":")[1]) / 60)
        : 0;

    // Cap sleep duration at 11 hours
    if (sleepDuration > 11) {
        sleepDuration = 11;
        alert("Sleep duration cannot exceed 11 hours. Adjusting to maximum limit.");
    }

    // Update both pages
    updateHealthTrackerPage(waterInput, sleepDuration);
    updateDashboard(waterInput, sleepDuration);
});