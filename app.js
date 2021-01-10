//Selectors
const todoInput = document.querySelector(".todo-input"); // Select from class set in html
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list"); //Item to append in js later
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
//1. button to run addTodo function when we click it.
todoButton.addEventListener("click", addTodo);
//2. delete or completed item
todoList.addEventListener("click", deleteCheck);
//3. filter option
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
  //This is to avoid browser refresh when click todoButton. Prevent form from submitting.
  event.preventDefault();

  //to create todo div
  const todoDiv = document.createElement("div"); //We creating the div
  todoDiv.classList.add("todo"); //We add class to the div

  //Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value; //Value in li will be as what we type
  newTodo.classList.add("todo-item"); //We add class to the li
  todoDiv.appendChild(newTodo); //Sticking it inside this div we created. Move it to the selected div.

  //Completed button
  const completedButton = document.createElement("button");
  completedButton.innerText = "Complete"; //We creating HTML code inside i tag
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete"; //We creating HTML code inside i tag
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  //Append to list
  todoList.appendChild(todoDiv); // Apped todoDiv to todo-list

  //Like this:-
  //<ul class="todo-list">
  //*  <div class="todo">
  //*     <li></li>
  //*     <button>delete</button>
  //*     <button>checked</button>
  //*  </div>
  //</ul>

  //Clear Input value after we add new item
  todoInput.value = "";
}

function deleteCheck(e) {
  // console.log(e.target); //To check what item we click. Then different item can have different function
  const item = e.target;
  //Delete todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement; //This is to select parent element of what we click. As we want to delete all the element. not just only the trash button
    //Animation
    todo.classList.add("fall"); //We just created class .fall
    todo.addEventListener("transitionend", function () {
      todo.remove();
    }); //we add this function so that item not removed instantlt. but instead it will wait the animation to end before removed it
  }

  //complete todo
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement; //This is to select parent element of what we click. As we want to delete all the element. not just only the trash button
    todo.classList.toggle("completed"); //We just created class .completed. Now we're gonna add animation to completed task in css file .completed item
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos); //We want to check the todos working or not
  //Loop
  todos.forEach(function (todos) {
    switch (e.target.value) {
      case "all":
        todos.style.display = "flex";
        break;
      case "completed":
        if (todos.classList.contains("completed")) {
          todos.style.display = "flex";
        } else {
          todos.style.display = "none";
        }
    }
  });
}
