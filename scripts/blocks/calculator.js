export function calculatorInit() {
    document.querySelectorAll('.calculator__card').forEach((calculatorCard) => {
        const sumInput = calculatorCard.querySelector('.js-sum-input');
        const monthSlider = calculatorCard.querySelector('.js-slider-month-input');
        const monthLabel = calculatorCard.querySelector('.js-slider-month-label');
        const rateInput = calculatorCard.querySelector('.js-rate-input');

        const sumCreditEl = calculatorCard.querySelector('.js-sum-credit');
        const percentCreditEl = calculatorCard.querySelector('.js-percent-credit');
        const sumAmountEl = calculatorCard.querySelector('.js-sum-amount');
        const monthlyPaymentEl = calculatorCard.querySelector('.js-monthly-payment');

        if (
            !sumInput ||
            !monthSlider ||
            !monthLabel ||
            !rateInput ||
            !sumCreditEl ||
            !percentCreditEl ||
            !sumAmountEl ||
            !monthlyPaymentEl
        ) {
            console.warn('Не знайдено всі елементи всередині одного з калькуляторів');
            return;
        }

        function calculate() {
            const P = +sumInput.value;
            const n = +monthSlider.value;
            const r = +rateInput.value / 100;

            const interestTotal = P * r * n;
            const totalToPay = P + interestTotal;
            const monthlyPayment = totalToPay / n;

            sumCreditEl.innerText = `${P.toLocaleString('uk')} $`;
            percentCreditEl.innerText = `${Math.ceil(interestTotal).toLocaleString('uk')} $`;
            sumAmountEl.innerText = `${Math.ceil(totalToPay).toLocaleString('uk')} $`;
            monthlyPaymentEl.innerText = `${Math.ceil(monthlyPayment).toLocaleString('uk')} $`;
            monthLabel.innerText = `${n} міс.`;
        }

        sumInput.addEventListener('input', calculate);
        monthSlider.addEventListener('input', calculate);
        rateInput.addEventListener('input', calculate);

        calculate();
    });
}