export function calculatorInit() {
  const calculators = document.querySelectorAll('.js-calculator'); // контейнер для кожного калькулятора

  calculators.forEach(calc => {
    const sumInput = calc.querySelector('.js-sum-input');
    const monthSlider = calc.querySelector('.js-slider-month-input');
    const monthLabel = calc.querySelector('.js-slider-month-label');
    const rateInput = calc.querySelector('.js-rate-input');

    const sumCreditEl = calc.querySelector('.js-sum-credit');
    const percentCreditEl = calc.querySelector('.js-percent-credit');
    const sumAmountEl = calc.querySelector('.js-sum-amount');
    const monthlyPaymentEl = calc.querySelector('.js-monthly-payment');

    function calculateExactCents() {
      const S = +sumInput.value;
      const n = +monthSlider.value;
      const r = +rateInput.value / 100;

      const pow = Math.pow(1 + r, n);
      const A = S * (r * pow) / (pow - 1);

      const monthlyCents = Math.round(A * 100);
      const totalCents = monthlyCents * n;
      const interestCents = totalCents - Math.round(S * 100);

      sumCreditEl.innerText = (S).toLocaleString('uk', { minimumFractionDigits: 2 }) + ' $';
      percentCreditEl.innerText = (interestCents / 100).toLocaleString('uk', { minimumFractionDigits: 2 }) + ' $';
      sumAmountEl.innerText = (totalCents / 100).toLocaleString('uk', { minimumFractionDigits: 2 }) + ' $';
      monthlyPaymentEl.innerText = (monthlyCents / 100).toLocaleString('uk', { minimumFractionDigits: 2 }) + ' $';
      monthLabel.innerText = n + ' міс.';
    }

    function calculate() {
      calculateExactCents();
    }

    if (!sumInput || !monthSlider || !rateInput) return;

    [sumInput, monthSlider, rateInput].forEach(el => {
      el.addEventListener('input', calculate);
    });

    calculate();
  });
}