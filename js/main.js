const calcInputValue = document.querySelector('.calc-input');

// Tip
const minusBtn = document.querySelector('.tip-btn-minus');
const plusBtn = document.querySelector('.tip-btn-plus');
const tipPercentValue = document.querySelector('.tip-num');
const tipInputs = document.querySelectorAll('.input-value')

// Split bill
const tipPersonNum = document.querySelector('.tip-num-person');
const billMinus = document.querySelector('.bill-btn-minus');
const billPlus = document.querySelector('.bill-btn-plus')


calcInputValue.addEventListener('change', calculateTotal);
tipInputs.forEach((input) => {
  input.addEventListener('change', calculateTotal)
})

let counter = 0;


minusBtn.addEventListener('click', () => {
  if(tipPercentValue.value > 0) {
    tipPercentValue.value = counter;
    counter--
    calculateTotal()
  }

});

plusBtn.addEventListener('click', () => {
  tipPercentValue.value = counter;
  counter++;
  calculateTotal()
});


billMinus.addEventListener('click', () => {
  if(tipPersonNum.value > 0) {
    tipPersonNum.value = counter;
    counter--;
  }
  calculateTotal()

});

billPlus.addEventListener('click', () => {
  tipPersonNum.value = counter;
  counter++
  calculateTotal()
})


const clearTipBtn = document.querySelector('.clear-btn');
const calcTipBtn = document.querySelector('.calc-btn');

calcTipBtn.addEventListener('click', calculateTotal)


const tipTotalPrice = document.querySelector('.tip-total-price');
const totalPrice = document.querySelector('.total-price')
let tipTotal;
let total;

function calculateTotal() {
  let billAmount = Number(calcInputValue.value);
  let tipPercent = Number(tipPercentValue.value);
  let billPerson = Number(tipPersonNum.value);

  tipTotal = parseFloat(billAmount * ((tipPercent / 100) / billPerson)).toFixed(2)
  total = parseFloat((billAmount + parseFloat(tipTotal)) / billPerson).toFixed(2)

  tipTotalPrice.textContent = `$ ${tipTotal}`;
  totalPrice.textContent = `$ ${total}`;
}


clearTipBtn.addEventListener('click', () => {
  calcInputValue.value = '';
  tipPercentValue.value = '';
  tipPersonNum.value = ''
  tipTotalPrice.textContent = '',
  totalPrice.textContent = '';

})
