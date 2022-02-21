
window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const listEl = document.querySelector("#tasks");
    
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;

    if(!task){
    alert("Please fill out the task")
    return;
    }

const taskEl = document.createElement("div");
taskEl.classList.add("task");

const taskContentEl = document.createElement("div");
taskContentEl.classList.add("content");

taskEl.appendChild(taskContentEl);

const taskInputEl = document.createElement("input");
taskInputEl.classList.add("text");
taskInputEl.type = "text";
taskInputEl.value = task;
taskInputEl.setAttribute("readonly", "readonly");

taskContentEl.appendChild(taskInputEl);

const taskActionsEl = document.createElement("div");
taskActionsEl.classList.add("actions");

const taskEditElement = document.createElement("button");
taskEditElement.classList.add("edit");
taskEditElement.innerHTML = "Edit";

const taskDeleteElement = document.createElement("button");
taskDeleteElement.classList.add("delete");
taskDeleteElement.innerHTML = "Delete";

taskActionsEl.appendChild(taskEditElement);
taskActionsEl.appendChild(taskDeleteElement);

taskEl.appendChild(taskActionsEl);

listEl.appendChild(taskEl);

input.value = "";

taskEditElement.addEventListener('click', () => {
    if(taskEditElement.innerHTML.toLocaleLowerCase() ==
    "edit"){
        taskInputEl.removeAttribute("readonly");
        taskInputEl.focus();
        taskEditElement.innerHTML = "Save";
        
    } else{
        taskInputEl.setAttribute("readonly", "readonly");
        taskEditElement.innerHTML = "Edit";
    }
});

taskDeleteElement.addEventListener('click', () => {
    listEl.removeChild(taskEl);
});


})})