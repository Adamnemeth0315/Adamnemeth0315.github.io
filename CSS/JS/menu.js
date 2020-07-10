

//Táblázat létrehozása
let menu = [
  { Hamburger: "Hamburger", Feltét: "Chilli", Ára: "1000 huf" },
  { Hamburger: "Sajtburger", Feltét: "Bacon", Ára: "1200 huf" },
  { Hamburger: "Baconos sajtburger", Feltét: "Chilli", Ára: "1400 huf" },
  { Hamburger: "Duplahúsos sajtburger", Feltét: "Cheddar", Ára: "1800 huf" },
  { Hamburger: "Vegan", Feltét: "Chilli", Ára: "1500 huf" },
  { Hamburger: "Bacon king", Feltét: "Cheddar", Ára: "2000 huf" },

];
let tableBody = document.querySelector("#userTable tbody");

let createTD = (html, parent) => {
  let td = document.createElement("td");
  td.innerHTML = html;
  parent.appendChild(td);
}

//Gombok létrehozása
let createButtonGroup = parent => {
  let group = document.createElement("div");
  group.className = "btn-group";

  let btnInfo = document.createElement("button");
  btnInfo.className = "btn-info btn";
  btnInfo.innerHTML = '<i class="fas fa-shopping-basket"></i>';

  let btnDanger = document.createElement("button");
  btnDanger.className = "btn-danger btn";
  btnDanger.innerHTML = '<i class="fas fa-shopping-basket"></i>';

  group.appendChild(btnInfo);
  group.appendChild(btnDanger);

  let td = document.createElement("td");
  td.appendChild(group);
  parent.appendChild(td);

}

for (k in menu) {
  let tr = document.createElement("tr");
  createTD(parseInt(k) + 1, tr);
  for (let value of Object.values(menu[k])) {
    createTD(value, tr);
  }
  createButtonGroup(tr)
  tableBody.appendChild(tr);
}