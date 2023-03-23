table {
	border-collapse: collapse;
	width: 100%;
}

td, th {
	border: 1px solid black;
	padding: 10px;
	text-align: center;
}

th {
	background-color: lightgray;
}

#title {
	margin-top: 50px;
	text-align: center;
	font-size: 24px;
}
script.js

javascript
Copy code
var schedule = document.getElementById("schedule");
var title = document.getElementById("title");
var table = document.getElementById("table");
var currentDate = new Date("2023-04-10");
var currentWeek = 0;

function generateTable() {
	// Clear the table
	table.innerHTML = "";

	// Generate the table headers
	var headerRow = document.createElement("tr");
	headerRow.innerHTML = "<th></th><th>第一節</th><th>第二節</th><th>第三節</th><th>第四節</th><th>第五節</th><th>第六節</th><th>第七節</th>";
	table.appendChild(headerRow);

	// Generate the table rows
	for (var i = 0; i < 5; i++) {
		var date = new Date(currentDate.getTime()


