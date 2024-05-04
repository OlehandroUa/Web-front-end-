(function (global) {
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function (event) {
        const userNameInput = document.getElementById("user-name");
        const emailInput = document.getElementById("user-email");
        const mealTimeInput = document.querySelector('input[name="meal-time"]:checked');
        const selectedMeals = document.querySelectorAll('input[name="meal"]:checked');
        const commentsInput = document.getElementById("comments");
        const formElement = document.querySelector("form");
        if (selectedMeals.length > 0 && userNameInput.value && emailInput.value && mealTimeInput && formElement.checkValidity()) {
            let allSelectedMeals = "";
            selectedMeals.forEach((meal, index) => {
                allSelectedMeals += `${meal.value}${selectedMeals.length - 1 === index ? "" : ", "}`;
            });
            document.getElementById(
                "output-container"
            ).textContent = `${userNameInput.value} (${emailInput.value}) вибрав ${mealTimeInput.value} ${allSelectedMeals} і залишив коментар "${commentsInput.value}"`;
        } else {
            alert("Будь ласка, заповніть усі поля коректно!");
        }
    });
})(window);
