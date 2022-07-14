const input = document.querySelector(".input");
const add = document.querySelector(".addbutton");
const deleteBtn = document.querySelector(".deletebutton");
const taskContainer = document.querySelector(".taskContainer");


const addFunction = () => {
    if (input.value) {
        let taskDiv = document.createElement("div")
        let task = document.createElement("p")
        
        let deleteBox = document.createElement("img")
        
        task.innerText = input.value;
    
        deleteBox.src = "./icons/deletebtn.svg"
        
        task.classList.add("task")
        deleteBox.classList.add("deleteBox")
        taskDiv.classList.add("taskDiv");
        
        taskDiv.appendChild(task)
        taskDiv.appendChild(deleteBox)
        
        taskContainer.appendChild(taskDiv)
        input.value = "";
        
        deleteBox.addEventListener('click', () => {
            deleteBox.parentElement.remove()
        })
            
    }
}

deleteBtn.addEventListener('click', () => {
    input.value = '';
})

add.addEventListener('click', addFunction)

input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        addFunction();
    }
})