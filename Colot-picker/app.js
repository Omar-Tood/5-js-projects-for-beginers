const colors = document.querySelectorAll('.color')
const selectedColorHex = document.getElementById('selectedColorHex')
const colorBox = document.getElementById('colorBox')
const copyHexBtn = document.getElementById('copyHexBtn')
const customHexInput = document.getElementById('customHexInput')
const addCustomColorBtn = document.getElementById('addCustomColorBtn')
const palette = document.querySelector('.palette')

// add event listeners to all predefined color elements
colors.forEach(color => {
    color.addEventListener('click', (e)=>{
        const hexCode = e.target.getAttribute('data-hex')
        selectedColorHex.textContent = hexCode
        colorBox.style.backgroundColor = hexCode
    });
});

// copy hex code to clipboard

copyHexBtn.addEventListener('click', ()=>{
    const hexCode = selectedColorHex.textContent
    navigator.clipboard.writeText(hexCode).then(()=>{
        alert('Hex code copied to clipboard')
    }).catch(err =>{
        alert('Error copying hex code')
    });
});


// add custom color

addCustomColorBtn.addEventListener('click', ()=>{
    const customHexCode = customHexInput.value.trim()
    console.log(customHexCode)

    // validate the hex code

    if(/^#[0-9A-F]{6}$/i.test(customHexCode)){
        const newColorDiv = document.createElement('div')
        newColorDiv.classList.add('color');
        newColorDiv.style.backgroundColor = customHexCode
        newColorDiv.setAttribute('data-hex', customHexCode)
        palette.appendChild(newColorDiv)

        newColorDiv.addEventListener('click', ()=>{
           selectedColorHex.textContent = customHexCode;
           colorBox.style.backgroundColor = customHexCode
        });
    } else {
        alert("Please Enter a valid hex code (e.g...#FBEE22")
    }
});