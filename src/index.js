
//the form item
let form = document.getElementById('create-task-form');

//text field where user inputs task item
let textField = document.getElementById('new-task-description');

//tasks that are listed
let tasks = document.getElementById('tasks');
let priority = document.getElementById('priority');

form.addEventListener('submit',submitHandler);

function divExist(priority){
  return document.getElementById(`div-${priority}`) ? true : false
}

function createNewLi(){
  let newTodo = document.createElement('li');
  newTodo.innerText = textField.value;
  let newButton = document.createElement('button')
  newButton.innerText = 'X';
  newTodo.appendChild(newButton);
  newButton.addEventListener('click', function() {
    newTodo.remove();
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
    newDiv.id = "div-high"
    newDiv.style.backgroundColor="yellow";
    return newDiv;
  }else{
    let newDiv = document.createElement("div");
    newDiv.id = "div-high"
    newDiv.style.backgroundColor="green";
    return newDiv;
  }
}


  //add a new event listener for the submission of a new list item
  
    //handler for submit button for todo list item
function submitHandler(e) {
  if (textField.value){
    let newLi=createNewLi();
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

