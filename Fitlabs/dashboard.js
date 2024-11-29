// Initialize calorie values
let caloriesFromFood = 0; // Calories consumed
let caloriesBurned = 0;   // Calories burned through exercise

// Function to update calorie display
function updateCaloriesDisplay() {
    const netCalories = caloriesFromFood - caloriesBurned; // Calculate net calories
    const caloriesElement = document.querySelector('.grid-item:nth-child(4) p'); // Select the Calories <p> tag
    caloriesElement.textContent = `${netCalories}`; // Update the content
}

// Example function to add calories from food
function addCaloriesFromFood(calories) {
    caloriesFromFood += calories;
    updateCaloriesDisplay();
}

// Example function to add calories burned through exercise
function addCaloriesBurned(calories) {
    caloriesBurned += calories;
    updateCaloriesDisplay();
}

// Initial display update on load
updateCaloriesDisplay();
