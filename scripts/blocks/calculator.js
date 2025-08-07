export function calculatorInit() {
    const sumInput = document.getElementById('sum-input');
    const monthSlider = document.getElementById('slider-month-input');
    const monthLabel = document.getElementById('slider-month-label');
    const rateInput = document.getElementById('rate-input');

    const sumCreditEl = document.getElementById('sum-credit');
    const percentCreditEl = document.getElementById('percent-credit');
    const sumAmountEl = document.getElementById('sum-amount');
    const monthlyPaymentEl = document.getElementById('monthly-payment');

    function calculate() {
      const P = +sumInput.value;
      const n = +monthSlider.value;
      const r = +rateInput.value / 100;

      const interestTotal = P * r * n;
      const totalToPay = P + interestTotal;
      const monthlyPayment = totalToPay / n;

      sumCreditEl.innerText = P.toLocaleString('uk') + ' $';
      percentCreditEl.innerText = Math.ceil(interestTotal).toLocaleString('uk') + ' $';
      sumAmountEl.innerText = Math.ceil(totalToPay).toLocaleString('uk') + ' $';
      monthlyPaymentEl.innerText = Math.ceil(monthlyPayment).toLocaleString('uk') + ' $';
      monthLabel.innerText = n + ' міс.';
    }

    sumInput.addEventListener('input', calculate);
    monthSlider.addEventListener('input', calculate);
    rateInput.addEventListener('input', calculate);

    calculate();
}