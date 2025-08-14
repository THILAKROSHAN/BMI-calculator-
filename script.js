(() => {
    window.onload = () => {
        const button = document.querySelector('#btn');
        button.addEventListener('click', calculateBmi);
    };

    function calculateBmi() {
        const heightVal = parseFloat(document.querySelector('#heightInput').value);
        const weightVal = parseFloat(document.querySelector('#weightInput').value);
        const result = document.querySelector('#result');

        if (!Number.isFinite(heightVal) || heightVal <= 0) {
            result.textContent = "Please provide a valid height (cm)";
            return;
        }
        if (!Number.isFinite(weightVal) || weightVal <= 0) {
            result.textContent = "Please provide a valid weight (kg)";
            return;
        }

        const bmi = (weightVal / ((heightVal * heightVal) / 10000)).toFixed(2);

        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 25) category = 'Normal';
        else if (bmi < 30) category = 'Overweight';
        else if (bmi < 35) category = 'Obesity (class I)';
        else if (bmi < 40) category = 'Obesity (class II)';
        else category = 'Extreme Obesity';

        result.textContent = `Your BMI is ${bmi}. Category: ${category}`;
    }
})();
