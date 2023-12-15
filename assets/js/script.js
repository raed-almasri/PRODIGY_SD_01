// Generate a random number between 1 and 100
let generateRandom = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    return randomNumber;
};
let randomNumber = generateRandom();
let attempts = 0;
console.log(randomNumber);
document.getElementById("gift").hidden = true;
// document.getElementById("message").hidden = true;
function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100";
        document.getElementById("gift").hidden = true;
    } else {
        attempts++;
        if (guess === randomNumber) {
            message.textContent = `🎉 Congratulations ! You guessed the correct number. It took you ${attempts} attempts. 🎉`;
            attemptsDisplay.textContent = "";

            document.getElementById("gift").hidden = false;
            randomNumber = generateRandom();
            console.log(randomNumber);
            attempts = 0;
        } else if (guess < randomNumber) {
            message.textContent = "Too low! Try again.";
            attemptsDisplay.textContent = `Attempts: ${attempts}`;
            document.getElementById("gift").hidden = true;
        } else {
            message.textContent = "Too high! Try again.";
            attemptsDisplay.textContent = ` Attempts: ${attempts}`;
            document.getElementById("gift").hidden = true;
        }
    }
}
