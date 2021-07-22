
const todoBody = document.querySelector(".todo-wrapper")
const createTodoButton = document.querySelector(".create-todo-button");
const createTodoTitleField = document.querySelector(".title-input");
const createTodoTextField = document.querySelector(".body-input");

const createTodo = (titleText, text) => {
    const newTodo = document.createElement("div");

    newTodo.className += 'todo-item'

    const id = document.createElement("div");
    const title = document.createElement("div");
    const body = document.createElement("div");
    const deleteButton = document.createElement("button");

    deleteButton.addEventListener('click', (ev) => {
            todoBody.removeChild(newTodo)
    })

    id.innerHTML = Math.floor(Math.random() * 100)
    title.innerHTML = titleText;
    body.innerHTML = text;
    deleteButton.innerHTML = "Remove"

    newTodo.appendChild(id)
    newTodo.appendChild(title)
    newTodo.appendChild(body)
    newTodo.appendChild(deleteButton)

    todoBody.appendChild(newTodo)
}


createTodoButton.addEventListener('click', (ev) => {

    const title = createTodoTitleField.value;
    const text = createTodoTextField.value

    createTodo(title, text)

    createTodoTitleField.value = ""
    createTodoTextField.value = ""
})