const emoji = document.getElementById("emoji");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const newEmoji = button.getAttribute("data-face");
        const newColor = button.getAttribute("data-color");

        emoji.textContent = newEmoji;
        document.body.style.backgroundColor = newColor;
    });
});
