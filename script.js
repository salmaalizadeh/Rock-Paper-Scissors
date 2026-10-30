const buttons = document.querySelectorAll(".choice");
const userChoiceText = document.querySelector(".user-choice");
const computerChoiceText = document.querySelector(".computer-choice");
const resultText = document.querySelector(".result");

const choices = ["سنگ", "کاغذ", "قیچی"];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.value;
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];

    userChoiceText.textContent = userChoice;
    computerChoiceText.textContent = computerChoice;

    if (userChoice === computerChoice) {
      resultText.textContent = "مساوی شد!";
    } else if (
      (userChoice === "سنگ" && computerChoice === "قیچی") ||
      (userChoice === "کاغذ" && computerChoice === "سنگ") ||
      (userChoice === "قیچی" && computerChoice === "کاغذ")
    ) {
      resultText.textContent = "تو بردی! 🎉";
    } else {
      resultText.textContent = "کامپیوتر برد!";
    }
  });
});