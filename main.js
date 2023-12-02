//Elementleri Seçelim

const amoutInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondSelect = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result"); 

var currency = new Currency();

runEventListeners();

function runEventListeners(){
    amoutInput.addEventListener("input",exchange);
}

function exchange(){
   const amount = Number(amoutInput.value.trim());
   const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;

    const secondOptionValue = secondSelect.options[secondSelect.selectedIndex].textContent;
    
    currency.exchange(amount,firstOptionValue,secondOptionValue)
    .then((result) => {
    resultInput.value = result.toFixed(3)
    })
}

