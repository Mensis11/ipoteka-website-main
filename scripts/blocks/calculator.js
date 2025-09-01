export function calculatorInit() {
  const sumInput = document.getElementById('sum-input');
  const monthSlider = document.getElementById('slider-month-input');
  const monthLabel = document.getElementById('slider-month-label');
  const rateInput = document.getElementById('rate-input');
  // const modeSelect = document.getElementById('mode-select');

  const sumCreditEl = document.getElementById('sum-credit');
  const percentCreditEl = document.getElementById('percent-credit');
  const sumAmountEl = document.getElementById('sum-amount');
  const monthlyPaymentEl = document.getElementById('monthly-payment');

  // Варіант 1 — точність до копійки і збіг
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

  // Варіант 2 — фінансова точність
  /*
  function calculateFinancial() {
    const S = +sumInput.value;
    const n = +monthSlider.value;
    const r = +rateInput.value / 100;

    const pow = Math.pow(1 + r, n);
    const A = S * (r * pow) / (pow - 1);

    const totalToPay = A * n;
    const interestTotal = totalToPay - S;

    sumCreditEl.innerText = S.toLocaleString('uk', { minimumFractionDigits: 2 }) + ' $';
    percentCreditEl.innerText = interestTotal.toFixed(2) + ' $';
    sumAmountEl.innerText = totalToPay.toFixed(2) + ' $';
    monthlyPaymentEl.innerText = A.toFixed(2) + ' $';
    monthLabel.innerText = n + ' міс.';
  }
  */

  function calculate() {
    calculateExactCents();
  }

  if (!sumInput || !monthSlider || !rateInput) return;

  [sumInput, monthSlider, rateInput].forEach(el => {
    el.addEventListener('input', calculate);
  });

  calculate();
}