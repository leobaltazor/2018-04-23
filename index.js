var room = document.getElementById("room-1").value;
var adults = 1;
var children = 0;

function addChildren(count) {
	var children = document.getElementById("room-1-children")
	var parentElements = children.nextSibling;
	var text = '';
	for (let i = 0; i < children.value; i++) {
		text += `<div><label for="children-1">Возраст ребенка №${i+1}</label>
		<input type="text" id="room-1-childrens-children-${i+1}" list="age" name="children-${i+1}" required size="5"></div>`
	}
	parentElements.innerHTML = text;
}