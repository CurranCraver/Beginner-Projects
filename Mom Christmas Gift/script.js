const giftImage = document.querySelector('#gift');
const giftOptions = document.querySelector('.gift-options');
const backDrop = document.querySelector('.gift-backdrop');

giftImage.addEventListener('click', ()=> {
    
    giftOptions.classList.remove('closing')
    backDrop.classList.remove('closing')  

    giftOptions.classList.add('show')
    backDrop.classList.add('show')
});

function closeOptions() {
    giftOptions.classList.add('closing')
    backDrop.classList.add('closing')
    photoGallery.classList.add('closing')

    setTimeout(() => {
    giftOptions.classList.remove('show')
    backDrop.classList.remove('show')
    photoGallery.classList.remove('show')
}, 300)
};

backDrop.addEventListener('click',(e)=> {
    if (e.target === backDrop) {
        closeOptions()
    }
});


const photoGift = document.querySelector('#photo-gift')
const photoGallery = document.querySelector('.photo-gallery')
const closeGalleryBtn = document.querySelector('.gallery-close')

photoGift.addEventListener('click', ()=> {
    photoGallery.classList.remove('closing')
    backDrop.classList.remove('closing')

    photoGallery.classList.add('show')
    backDrop.classList.add('show')
})

closeGalleryBtn.addEventListener('click',()=> {
    closeOptions()
})


const thirdGift = document.querySelector('#gift-3');
const calculatorPopup = document.querySelector('.calculator-popup')
const calculatorBackdrop = document.querySelector('.calculator-backdrop')
const closeCalculatorBtn = document.querySelector('.calculator-close')
const macroForm = document.querySelector('#macro-form')
const resultsSection = document.querySelector('#results')

thirdGift.addEventListener('click', ()=> {
    calculatorPopup.classList.remove('closing')
    calculatorBackdrop.classList.remove('closing')

    calculatorPopup.classList.add('show')
     calculatorBackdrop.classList.add('show')
});

function closeCalculator() {  
    calculatorPopup.classList.remove('show')
    calculatorBackdrop.classList.remove('show')

    calculatorPopup.classList.add('closing')
    calculatorBackdrop.classList.add('closing')
    
    setTimeout(()=> {
        calculatorPopup.classList.remove('closing')
        calculatorBackdrop.classList.remove('closing')
    },300)

}

closeCalculatorBtn.addEventListener('click', closeCalculator)

calculatorBackdrop.addEventListener('click', (e)=> {
    if(e.target === calculatorBackdrop) {
        closeCalculator()
    }
})



// Wait 1 second, then try


macroForm.addEventListener('submit', function(e) {
    e.preventDefault();
 


const age = parseInt(document.querySelector('#age').value)
const gender = document.querySelector('#gender').value
const weightLbs = parseFloat(document.querySelector('#weight').value)
const heightInches = parseInt(document.querySelector('#height').value)
const activityLevel = parseFloat(document.querySelector('#activity').value)
const goal = document.querySelector('#goal').value

const weightKg = weightLbs / 2.205;
const heightCm = heightInches * 2.54;

let bmr;
if (gender === 'male') {
    bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5
} else {
     bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161
}

let tdee = bmr * activityLevel

let calories;
if (goal === 'lose') {
    calories = tdee - 500;
} else if (goal === "gain") {
    calories = tdee + 300;
} else {
    calories = tdee;
}

calories = Math.round(calories)

const protein = Math.round(weightLbs * 1);
const fatCalories = calories * .24;
const fat = Math.round(fatCalories / 9);

const proteinCalories = protein * 4
const carbCalories = calories - proteinCalories - fatCalories;
const carbs = Math.round(carbCalories / 4)

 document.getElementById('calories-result').textContent = calories;
    document.getElementById('protein-result').textContent = protein + 'g';
    document.getElementById('carbs-result').textContent = carbs + 'g';
    document.getElementById('fat-result').textContent = fat + 'g';

resultsSection.style.display = 'block'

resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

