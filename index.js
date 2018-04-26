var order = [
	{
		"room": {
			"number": 1,
			"adults": 3,
			"childrens": 2,
			"childrensAge":
				{
					"childrenAge1": 5,
					"childrenAge2": 6
				},
		},
	},
	{
		"room": {
			"number": 2,
			"adults": 2,
			"childrens": 1,
			"childrensAge":
				{
					"childrenAge1": 6,
				},
		},
	}
]
// заменить childrens и childrensAge на массив где количество детей это будет кол-во элементов а значения возраст
function init() {
	var orderForm = document.querySelector('.order')
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
	orderForm.innerHTML = '';
	orderForm.appendChild(div);
	for (let i = 0; i < order.length; i++) {
		var divRooms = document.createElement("div")
		var labelAdults = document.createElement("label")
		var inputAdults = document.createElement("input")
		var labelChildrens = document.createElement("label")
		var inputChildrens = document.createElement("input")
		var divchildrens = document.createElement("div")
		//лабел для инпута взврослых каждой комнаты
		labelAdults.innerHTML = "Количество взрослых в комнате №" + order[i].room.number;
		labelAdults.setAttribute("for", "room-" + (i + 1) + "-adults");
		//лабел для инпута детей каждой комнаты
		labelChildrens.innerHTML = "Количество детей в комнате №" + order[i].room.number;
		labelChildrens.setAttribute("for", "room-" + (i + 1) + "child");
		//инпут взрослых каждой комнаты
		inputAdults.setAttribute("type", "text");
		inputAdults.setAttribute("id", "room-" + (i + 1) + "-adults");
		inputAdults.setAttribute("size", "5");
		inputAdults.setAttribute("value", order[i].room.adults);

		//инпут детей каждой комнаты
		inputChildrens.setAttribute("type", "text");
		inputChildrens.setAttribute("id", "room-" + (i + 1) + "-child");
		inputChildrens.setAttribute("size", "5");
		inputChildrens.setAttribute("value", order[i].room.childrens);
		for (let j = 0; j < order[i].room.childrens; j++) {
			var labelChildrensAge = document.createElement("label")
			var inputChildrensAge = document.createElement("input")
			//лабел для инпута возраста каждго ребенка
			labelChildrensAge.innerHTML = "Возраст ребенка №" + (j + 1);
			labelChildrensAge.setAttribute("for", "room-" + (i + 1) + "-children-age-" + (j + 1));
			//инпут возраста каждого ребенка
			inputChildrensAge.setAttribute("type", "text");
			inputChildrensAge.setAttribute("id", "room-" + (i + 1) + "-children-age-" + (j + 1));
			inputChildrensAge.setAttribute("size", "5");
			inputChildrensAge.setAttribute("value", order[i].room.childrensAge.childrenAge1); //не получается взять значение каждого ребенка

			divchildrens.appendChild(labelChildrensAge);
			divchildrens.appendChild(inputChildrensAge);
		}

		//вставляем лабел взрослых и инпут взрослых в див каждой комнаты
		divRooms.appendChild(labelAdults);
		divRooms.appendChild(inputAdults);
		divRooms.appendChild(labelChildrens);
		divRooms.appendChild(inputChildrens);
		divRooms.appendChild(divchildrens);




		div.appendChild(divRooms);
	}
}
init()

document.getElementById("room").addEventListener("change", orderRoom)
function orderRoom() {
	var roomCount = document.getElementById("room").value
	if (roomCount < order.length) {
		var minus = 0;
		minus = order.length - roomCount;
		for (let i = 0; i < minus; i++) {
			order.pop()
		}
		init()
	} else if (roomCount > order.length) {
		var add = 0;
		add = roomCount - order.length;
		for (let i = 0; i < add; i++) {
			var orderNew = {
				"room": {
					"number": order.length + 1,
					"adults": 0,
					"childrens": 0,
					"childrensAge":
						{
							"childrenAge1": 0
						},
				},
			}
			order.push(orderNew)
		}
		init()
	}
	document.getElementById("room").addEventListener("change", orderRoom)
}
