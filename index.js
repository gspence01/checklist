//first, identify the and save what the user wrote in the form as a variable
//add that input to ul
//add button to remove input from ul
//animate container div to transform gradient when submit button is clicked
const form = document.getElementById("form");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList")
const completed = document.getElementById("completed");

form.addEventListener('submit', addTask);

function addTask(e){
    
    //the default here is for the value to be immediately removed the moment submit is clicked
    //need to prevent that so the value can be converted to a li, and then is manually removed at the end of the function 
    e.preventDefault();

    if(taskInput.value === ''){
        return;
    }

    
    const task = document.createElement('li');
    
    task.innerHTML = `
    <input id="check" type="checkbox">
    <p>${taskInput.value}</p>
    <button>delete</button>
    <br>
    `;

    

    taskList.appendChild(task);
    taskInput.value = '';

    //new event listener to listen when checklist is checked. Needs to remain in This function due to the local scope of the instance of the button element
    task.addEventListener('change',e => {
        if(e.target.checked){
            let text = task.querySelector('p');
            text.style.textDecoration="line-through";
            text.style.opacity = "50%"
        }
    })   
    
    //event listener to listen when delete button is used
    task.querySelector("button").addEventListener("mousedown", e =>{
        task.style.backgroundColor="white";
        e.target.style.display='none';
        setTimeout(function(){task.remove()}, 200);
    })
}