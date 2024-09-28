const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculateBtn');
const bmiValue = document.getElementById('bmiValue');
const bmiCategory = document.getElementById('bmiCategory');
const suggestion = document.getElementById('suggestion');

calculateBtn.addEventListener('click', ()=>{
    const heightCm = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    if(isNaN(heightCm) || isNaN(weight) || heightCm <=0 || weight <=0){
        // alert('lease enter valid height and weight.')
        Swal.fire({
            title: 'Error',
            text: 'Please enter valid height and weight.',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2)
    bmiValue.textContent = bmi;
    bmiCategory.textContent = getBMICategory(bmi);
    suggestion.textContent = getBMISuggestion(bmi);
});

function getBMICategory(bmi){
    if(bmi < 18.5){
        return "Underweight";
    }else if (bmi >= 18.5 && bmi < 24.9){
        return "Normal";
    }else if (bmi >= 25 && bmi < 29.9){
        return "Overweight";
    }else{
        return "Obesity"
    }
}


function getBMISuggestion(bmi){
    if(bmi <18.5){
        return "You are underweight. Consider a balanced diet with more calorie intake";
    } else if(bmi >= 18.5 && bmi < 24.9){
        return "Great job! You have a healthy weight. Keep maintaining a balanced diet";
    }else if(bmi >=25 && bmi <29.9){
        return "You are slightly overweight. A balanced diet and regular exercise could help"
    }else{
        return "You are in the obesity range. It is recommended to consult a healthcare provider for advice";
    }
}