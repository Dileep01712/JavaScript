const form = document.querySelector('form')
// This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height!"
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight!"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        let classification = '';

        if (bmi < 18.6) {
            classification = 'Underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            classification = 'Normal Range';
        } else if (bmi > 24.9) {
            classification = 'Overweight';
        }

        // Show the result
        results.innerHTML = `<span>Your BMI is ${bmi} (${classification})</span>`
    }
})