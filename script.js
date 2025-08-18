        (() => {
            window.onload = () => {
                const button = document.querySelector('#btn');
                const heightInput = document.querySelector('#heightInput');
                const weightInput = document.querySelector('#weightInput');
                
                button.addEventListener('click', calculateBmi);
                
                // Add Enter key support
                heightInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') calculateBmi();
                });
                
                weightInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') calculateBmi();
                });
            };

            function calculateBmi() {
                const heightVal = parseFloat(document.querySelector('#heightInput').value);
                const weightVal = parseFloat(document.querySelector('#weightInput').value);
                const result = document.querySelector('#result');

                if (!Number.isFinite(heightVal) || heightVal <= 0) {
                    result.textContent = "Please provide a valid height (cm)";
                    result.classList.remove('has-result');
                    return;
                }
                if (!Number.isFinite(weightVal) || weightVal <= 0) {
                    result.textContent = "Please provide a valid weight (kg)";
                    result.classList.remove('has-result');
                    return;
                }

                const bmi = (weightVal / ((heightVal * heightVal) / 10000)).toFixed(2);

                let category = '';
                let categoryColor = '';
                if (bmi < 18.5) {
                    category = 'Underweight';
                    categoryColor = '#3498db';
                } else if (bmi < 25) {
                    category = 'Normal';
                    categoryColor = '#27ae60';
                } else if (bmi < 30) {
                    category = 'Overweight';
                    categoryColor = '#f39c12';
                } else if (bmi < 35) {
                    category = 'Obesity (Class I)';
                    categoryColor = '#e67e22';
                } else if (bmi < 40) {
                    category = 'Obesity (Class II)';
                    categoryColor = '#e74c3c';
                } else {
                    category = 'Extreme Obesity';
                    categoryColor = '#c0392b';
                }

                result.innerHTML = `
                    <div style="text-align: center;">
                        <div style="font-size: 24px; font-weight: 700; color: ${categoryColor}; margin-bottom: 8px;">
                            BMI: ${bmi}
                        </div>
                        <div style="font-size: 18px; color: #333;">
                            Category: <span style="color: ${categoryColor}; font-weight: 600;">${category}</span>
                        </div>
                    </div>
                `;
                result.classList.add('has-result');
            }
        })();
