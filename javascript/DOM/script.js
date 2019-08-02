var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

/// add delete button to all li
var li = document.querySelectorAll("li");
li.forEach(addDeleteButton);

function addDeleteButton(li){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));
	button.addEventListener("click", removeParent)
	li.appendChild(button);
}

/// use console.log to see what attribue in event
function toggleDone(event) {
	if (event.target.nodeName === "LI"){
		event.target.classList.toggle("done");
	}
}

function removeParent(event) {
	var button = event.target;
	button.parentNode.remove();
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDeleteButton(li)
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);
ul.addEventListener("click", toggleDone)
input.addEventListener("keypress", addListAfterKeypress);