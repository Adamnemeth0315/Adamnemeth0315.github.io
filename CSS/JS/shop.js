function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amountInput']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 :  amountNumber;
    showSumPrice(price, amountNumber);
}
    


function showSumPrice(price, amountNumber) {
    if ( amountNumber > 10 ) {
        alert("Maximum 10 db hamburgert tud vásárolni");
    } else if (amountNumber < 1 ) {
        alert("Minimum 1 hamburgert kell vásárolnia");
    } else {
        showRealAmount(price, amountNumber);
}
}

function showRealAmount(price, amountNumber) {
    let amount = amountNumber * (price);
    if ( amount < 5000 ) {
        amount += 500; 
    }
    let showAmount = document.querySelector("span.showAmount");
    showAmount.innerHTML = amount;
}

// Add helptext
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);


// addeventlistener használata
window.addEventListener("resize" , function(){
    console.log(this.innerHeight, this.innerWidth);
}
);

//Parent elemek kezelése
let alertCloseButton = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function(ev){
    this.parentElement.style.display = "none";
  }
for (let i = 0; i < alertCloseButton.length; i++){
    alertCloseButton[i].addEventListener("click", alertCloseEventHandlerFunction );
}

//Select elem kitöltése
let toppings = [
    "Bacon", 
    "Hagyma",
    "Libamáj",
    "Tükörtojás",
    "Chilli"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while (index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}