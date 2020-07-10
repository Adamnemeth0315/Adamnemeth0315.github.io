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
        let amount = amountNumber * (price);
        let showAmount = document.querySelector("span.showAmount");
        showAmount.innerHTML = amount
            }
}
