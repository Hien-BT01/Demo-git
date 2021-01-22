const todoInputElement = document.querySelector(".todo-input");
const todoButtonElement = document.querySelector(".todo-button");
const todoListElement = document.querySelector(".todo__list");  
const filterTodos = document.querySelector(".filter-todos");

todoButtonElement.addEventListener("click",addTodo);
todoListElement.addEventListener("click",deleteCheck);
filterTodos.addEventListener("click",filterTodo);
function addTodo(e){
    e.preventDefault();
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo__div");
    let inputValue = todoInputElement.value;
    todoDiv.innerHTML = `
                        <li class="todo__item">${inputValue}</li>
                        <button class="complete-btn"><i class="fas fa-check"></i></button>
                        <button class="trash-btn"><i class="fas fa-trash"></i></button>
                    `;
    todoListElement.appendChild(todoDiv)
    todoInputElement.value = "";
}

function deleteCheck(e){
    e.stopPropagation();    
    let item = e.target;
    if(item.closest(".trash-btn")){
        const todo = item.parentElement;
        todo.classList.add("fall");
        setTimeout(() => {
            todo.remove();
        },500);
    }
    if(item.closest(".complete-btn")){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

function filterTodo(e){
    const todos = todoListElement.childNodes;
    todos.forEach(todo => {
        switch(e.target.value){
            case "all":
                todo.style.display = "flex"
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    })
}