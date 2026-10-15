const form = document.querySelector("#form-tareas");
const input =  document.querySelector("#input-tarea");
const lista = document.querySelector("#lista-tareas");

function agregarTarea(e){
    e.preventDefault();
    const tarea = input.value;
    input.value = "";
    const li = document.createElement("li");
    li.textContent = tarea;
    lista.appendChild(li);
}

form.addEventListener("submit", agregarTarea);

