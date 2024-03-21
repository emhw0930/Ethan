const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");
// const count = document.getElementById("count");
// var num = 0;

// if the enter input value is null, call alert
// else add the li element (text) into the list-container with a span (x)
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    } 
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        // num += 1;
        // count.innerHTML = ("Count: " + num);
    }
    inputBox.value = "";
    saveData();
}

// make enter key to enter the input
document.addEventListener("keypress", function(e){
    if(e.key === "Enter") {
        addTask();
    }
}, false);

// cross out the task if the click is on the task
// delete tht tast if the click is on the x
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        // num -= 1;
        // count.innerHTML = ("Count: " + num);
        saveData();
    }
}, false);

function saveData(){
    // localStorage.setItem("num", num);
    // localStorage.setItem("count", count.innerHTML);
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    // num = localStorage.getItem("num");
    // count.innerHTML = localStorage.getItem("count");
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
updateDateTime()
// create a function to update the date and time
function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const time = now.toLocaleString().substr(10);
    const date = now.toLocaleString().substr(0,9);

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = date;
    document.querySelector('#time').textContent = time;

}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);