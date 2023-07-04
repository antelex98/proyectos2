<<<<<<< HEAD
const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue/100);
    totalSpan.innerText = totalValue.toFixed(2);
}

=======
const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue/100);
    totalSpan.innerText = totalValue.toFixed(2);
}

>>>>>>> a9f73acadb0b356e5b6a43e99013f2a552259143
btnEl.addEventListener("click", calculateTotal);