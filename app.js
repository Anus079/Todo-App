var todolist = document.getElementById("todo-list");

function addtodo(){
    var todoitems = document.getElementById("todo-inner");

    // Create Li tag from Javascript
    var li = document.createElement('li');
    var litext = document.createTextNode(todoitems.value);
    li.appendChild(litext);
    todolist.appendChild(li)
    todoitems.value = ""
    
    // Create Button tag from Javascript
    
    var Deltebtn = document.createElement("button");
    var deletetext = document.createTextNode("DELETE");
    Deltebtn.appendChild(deletetext);
    todolist.appendChild(li);
    li.appendChild(Deltebtn);
    Deltebtn.setAttribute(("Onclick"),("Deletebtn(this)"));
    Deltebtn.setAttribute(("class"),("Dlt-btn"));
    console.log(Deltebtn)
    
    
    // Create EditButton & Functionallity tag from Javascript
    var editbtn = document.createElement("button");
    var edittext = document.createTextNode("EDIT")
    editbtn.appendChild(edittext)
    li.appendChild(editbtn)
    editbtn.setAttribute(("class"),("Dlt-btn"))
    editbtn.setAttribute(("Onclick"),("Edititem(this)"))
}

// Function for Delete Button 

function Deletebtn(e){
    e.parentNode.remove()
}

function DeleteAll(){
    todolist.innerHTML = ""
}

// Function For Edit Button
function Edititem(e){
    var editvalue = prompt("Enter Edit Value You Want", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editvalue
    console.log(e.parentNode.firstChild)
    // editvalue.value = ""
}