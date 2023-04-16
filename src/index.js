document.addEventListener("DOMContentLoaded", () => {
  // Select the form element
  const form = document.querySelector("#create-task-form");

  // Select the input field and the task list element
  const input = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  // Add a submit event listener to the form
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent form from submitting

    // Taking what is typed in
    const inputValue = input.value;

    // Making a new task with a delete button, and add them to the task list
    const newTask = document.createElement("li");
    newTask.textContent = inputValue;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    // Clear the input field
    input.value = "";

    // Making the delete button
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(newTask);
    });
  });
});
