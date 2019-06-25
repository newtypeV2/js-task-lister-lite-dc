
//the form item
let form = document.getElementById('create-task-form');

//text field where user inputs task item
let textField = document.getElementById('new-task-description');

//tasks that are listed
let tasks = document.getElementById('tasks');


document.addEventListener("DOMContentLoaded", () => {
  //add a new event listener for the submission of a new list item
  form.addEventListener('submit',submitHandler);

    //handler for submit button for todo list item
    function submitHandler(e) {

    //create a new list item within a list tag
    let newTodo = document.createElement('li');

    //todo inner text is what is inputted within the text field
    newTodo.innerText = textField.value;

    //add the new todo list item to the list of tasks
    tasks.appendChild(newTodo);

    //create a new button element
    let newButton = document.createElement('button')

    //add the text inside the button
    newButton.innerText = 'X';

    //add the button to the new list item
    newTodo.appendChild(newButton);

    //add an event listener to delete the new list item
    newButton.addEventListener('click', function() {
      newTodo.remove(); //remove the newtodo item
    });

  //prevent from auto-refreshing
  e.preventDefault();
  };
});

