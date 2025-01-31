const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");


// add todos
const generateTemplate = (todo) => {
    const html = `
     <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `
    list.innerHTML += html
}

addForm.addEventListener("submit", e => {
    e.preventDefault();

    const todo = addForm.add.value.trim().toUpperCase();

    if(todo.length){
        generateTemplate(todo);
    }
});


// delete todo
list.addEventListener("click", e => {
    if (e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});

//filtering todos

const filteredTodos = (term) => {

    Array.from(list.children)
    .filter((todo) => !todo.textContent.toUpperCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"))

    Array.from(list.children)
    .filter((todo) => todo.textContent.toUpperCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"))


}
search.addEventListener("keyup", () => {
    const term = search.value.trim().toUpperCase();

    filteredTodos(term);

});