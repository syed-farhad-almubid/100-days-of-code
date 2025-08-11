const form = document.querySelector(".todo");
const input = form.querySelector("input[name='task']");
const container = document.querySelector(".container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value.trim();

    if (taskText === "") return; 

    const taskDiv = document.createElement("div");
    taskDiv.className = "newadd";

    taskDiv.innerHTML = `
        <h3>${taskText}</h3>
        <div class="newadd-btn">
            <button class="remove-btn">Remove</button>
        </div>
    `;

    container.append(taskDiv);

    input.value = "";
});

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        const task = e.target.closest(".newadd");
        if (task) {
            task.remove();
        }
    }
});