console.log(document);



let textBox = document.querySelector(".todo__text");
let submitButton = document.querySelector(".todo_submit__button");

// hold div we want to update
let listItem = '';

// function to create div and add items to todo list
const generateTodo = (str) => {
    let newDiv = document.createElement('div');
    newDiv.className = "todo-item"

    // select our todo list element
    let toDo = document.querySelector("#todo");

    // create buttons
    let deleteButton = document.createElement('BUTTON');
    let updateButton = document.createElement('BUTTON');
    deleteButton.className = "delete-button";
    updateButton.className = "update-button";
    deleteButton.innerText = "x";
    updateButton.innerText = "↻";

    let toDoText = document.createElement('div');
    toDoText.className = "todo-text";
    toDoText.append(str);


    let toDoButtons = document.createElement('div');
    toDoButtons.append(deleteButton);
    toDoButtons.append(updateButton);



    // delete 
    deleteButton.addEventListener('click', () => {
        newDiv.remove();
    })

    // update
    updateButton.addEventListener('click', (e) => {
        // note: textBox uses value property
        // grab ONLY the first value
        // use innerHTML, accessing HTML code
        //need to get the value from todotext.innerHTML instead of str
        //because str never updates, but todotext.innerHTML
        //is always the most currently updated value
        textBox.value = toDoText.innerHTML;
        submitButton.innerHTML = "Update";
        // e.target returns the update button HTML text

        // parentNode is the div containing buttons
        listItem = e.target.parentElement.parentElement;


    })

    newDiv.append(toDoText);
    newDiv.append(toDoButtons);
    toDo.append(newDiv);


}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (submitButton.innerHTML == "Submit") {
        const textValue = textBox.value;
        // call the function to add our text to the div
        generateTodo(textValue);
        textBox.value = '';

    }

    if (submitButton.innerHTML == "Update") {
        listItem.firstElementChild.innerText = textBox.value;
        console.log(listItem);
        submitButton.innerHTML = "Submit";
        textBox.value = '';

    }


})


