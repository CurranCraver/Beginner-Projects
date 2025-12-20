const body = document.querySelector('body');
const div = document.createElement('div');
div.classList.add('todo-item');
;
div.dataset.id = "1";
div.dataset.completed = "false";

const p = document.createElement('p');



p.innerHTML = `Buy Groceries <span> Urgent </span>`;
const span = p.querySelector('span');
span.style.color = 'red';

const complete = document.createElement('button');
const deleteBtn = document.createElement('button');
complete.innerText = "Complete"
deleteBtn.innerText = "Delete"


div.style.border = "1px solid gray";
div.style.padding = "1rem";
div.style.margin = "5px";
div.style.display = "flex";
div.style.flexDirection = "column"
div.style.alignItems = "center";
div.style.gap = "1rem"

div.append(complete, deleteBtn)

div.prepend(p)

const status = div.dataset.completed
console.log(status)

body.append(div)

/* Create a div with class "todo-item"
Add data-id="1" and data-completed="false" to the div
Create a p element with text "Buy groceries"
Create a span inside the p that says " (Urgent)" in red color
Create a button with text "Complete"
Create another button with text "Delete"
Style the todo div: border "1px solid gray", padding "10px", margin "5px"
Append both buttons to the div
Prepend the p to the div (so text comes before buttons)
Read data-completed with dataset and log it
Append the entire todo to body


*/