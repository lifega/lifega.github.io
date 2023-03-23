const weekdays = ["日", "一", "二", "三", "四", "五", "六"];

let currentDate = new Date("2023-04-10");
let tbody = document.querySelector("tbody");
let dateHeader = document.querySelector("#date");

updateSchedule();

document.querySelector("#prev").addEventListener("click", function() {
  currentDate.setDate(currentDate.getDate() - 7);
  updateSchedule();
});

document.querySelector("#next").addEventListener("click", function() {
  currentDate.setDate(currentDate.getDate() + 7);
  updateSchedule();
});

function updateSchedule() {
  dateHeader.innerHTML = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月${currentDate.getDate()}日 星期${weekdays[currentDate.getDay()]}`;
  tbody.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = `星期${weekdays[currentDate.getDay()]}`;
    tr.appendChild(td1);
    for (let j = 0; j < 7; j++) {
      let td = document.createElement("td");
      td.innerHTML = `第${j + 1}節`;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  currentDate.setDate(currentDate.getDate() - 5);
}
