const birthDateInput = document.getElementById('birthYear')
const calculateButton = document.getElementById('calculate')
const resetButton = document.getElementById('reset')
const ageDisplay = document.getElementById('ageDisplay')
const weekDisplay = document.getElementById('weekDisplay')
const dayDisplay = document.getElementById('dayDisplay')

function calculateAge(){
    const birthDate = new Date(birthDateInput.value)
    const today = new Date()

    if(isNaN(birthDate) || birthDate > today){
        alert('Invalid date. Please enter a valid date of birth.')
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth()
    let days = today.getDate() - birthDate.getDate()

    if(days < 0){
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if(months < 0){
        years--;
        months +=12
    }

    const totalDays = Math.floor((today - birthDate) /(1000 * 60 *60*24))
    const totalWeeks = Math.floor(totalDays / 7)

    ageDisplay.textContent = `You are ${years} years, ${months} months, and ${days} days old`
    weekDisplay.textContent = `That's approximately ${totalWeeks} weeks.`
    dayDisplay.textContent = `Or About ${totalDays} days.`

}

function resetFields(){
    birthDateInput.value = ''
    ageDisplay.textContent = ''
    weekDisplay.textContent = ''
    dayDisplay.textContent = ''
}

calculateButton.addEventListener('click', calculateAge)
resetButton.addEventListener('click', resetFields)
