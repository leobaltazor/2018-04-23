var order = [
	{
		"room": {
			"number": 1,
			"adults": 1,
			"childrens": 2,
			"childrens-age":
				{
					"children-age-1": 6,
					"children-age-2": 6
				},
		},
	},
	{
		"room": {
			"number": 2,
			"adults": 2,
			"childrens": 1,
			"childrens-age":
				{
					"children-age-1": 6,
				},
		},
	}
]

function init(){
	var div = document.createElement("div");
	var roomLabel = document.createElement("label");
	var roomInput = document.createElement("input");
	roomLabel.innerHTML = "Количество комнат: ";
	roomLabel.setAttribute("for", "room");
	roomInput.setAttribute("type", "text");
	roomInput.setAttribute("id", "room");
	roomInput.setAttribute("size", "5");
	roomInput.setAttribute("value", order.length);
	div.appendChild(roomLabel);
	div.appendChild(roomInput);
	document.body.appendChild(div);
for (let i = 0; i < order.length; i++) {
	var div = document.createElement("div")
	var label = document.createElement("label")
	var input = document.createElement("input")
	label.innerHTML = order[i].room.number;
	div.appendChild(label);
	document.body.appendChild(div);
}
}
init()