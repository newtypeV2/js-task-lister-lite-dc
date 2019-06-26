let form = document.getElementById('create-task-form');
form.addEventListener('submit',submitHandler);

function getTextField(){
  return document.getElementById('new-task-description').value;
}

function divExist(priority){
  return document.getElementById(`div-${priority}`) ? true : false
}

function createNewLi(string){
  let newTodo = document.createElement('li');
  let newButton = document.createElement('button')
  let newEditButton = document.createElement('button')
  newTodo.innerText = string;
  newButton.innerText = 'X';
  newEditButton.innerText = 'EDIT';
  newTodo.appendChild(newButton);
  newTodo.appendChild(newEditButton);
  newButton.addEventListener('click', function() {
    newTodo.remove();
    });
  newEditButton.addEventListener('click',function(e) {
    const oldText = e.target.parentElement.innerHTML.split("<b")[0]
    let newText = prompt("Please enter new task.")
    while (newText===""){
        newText = prompt("Please enter new task.","Can't be empty.")
      }
    (newText === null) ? newTodo.innerText=oldText : newTodo.innerText=newText
    newTodo.appendChild(newButton);
    newTodo.appendChild(newEditButton);
    });
  return newTodo;
}

function divCreator(priority){
  if (priority==="high"){
    let newDiv = document.createElement("div");
    newDiv.id = "div-high"
    newDiv.style.backgroundColor="red";
    return newDiv;
  }else if(priority==="medium"){ 
    let newDiv = document.createElement("div");
    newDiv.id = "div-medium"
    newDiv.style.backgroundColor="yellow";
    return newDiv;
  }else{
    let newDiv = document.createElement("div");
    newDiv.id = "div-low"
    newDiv.style.backgroundColor="green";
    return newDiv;
  }
}


  



function submitHandler(e) {
  let tasks = document.getElementById('tasks');
  let priority = document.getElementById('priority');
  if (getTextField()){
    let newLi=createNewLi(getTextField());
    if (divExist(priority.value)){
      let priorityDiv = document.getElementById(`div-${priority.value}`);
      priorityDiv.appendChild(newLi);
    }else{
      let newDiv = divCreator(priority.value);
      newDiv.appendChild(newLi);
      tasks.appendChild(newDiv);
    }
    e.preventDefault();
    form.reset();
  }else{
    alert("Textfield can't be empty.");
    e.preventDefault();
  }
};

