// GETTING SELECTORS
const todoInput = document.querySelector('#todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const form = document.querySelector('form');
let todos = [];
// Events
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const todo = todoInput.value;

  if (!todo) {
    alert("Please fill out the task");
    return;
}

  todos.push({ task: todo, completed: false });
  todoInput.value = '';
  renderTodos(todos);
});
// A function that renders todos
const renderTodos = (arr) => {
  // Clear existing todos
  todoList.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const todoItem = arr[i];
    // Create todo item UI and append to todoList
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerText = todoItem.task;
    if (todoItem.completed) {
      li.classList.add('completed');
    }
    todoDiv.appendChild(li);

    // Add check button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    checkButton.classList.add('check');
    todoDiv.appendChild(checkButton);

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteButton.classList.add('trash');
    todoDiv.appendChild(deleteButton);
    
    // Delete button click event
    deleteButton.addEventListener('click', function () {
      deleteTodoItem(todoItem);
    });
    // Check button click event
    checkButton.addEventListener('click', function () {
      toggleTodoCompletion(todoItem);
    });
    // Append todoDiv to todoList
    todoList.appendChild(todoDiv);
  }
};
// Function to delete a todo item
const deleteTodoItem = (todoItem) => {
  todos = todos.filter((item) => item !== todoItem);
  renderTodos(todos);
};
// Function to toggle the completion status of a todo item
const toggleTodoCompletion = (todoItem) => {
  todoItem.completed = !todoItem.completed;
  renderTodos(todos);
};