
function conTemptoFahren() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    console.log("Celsius Input:", celsiusInput.value);

    if(!isNaN(celsiusInput.value) && celsiusInput.value !== '') {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else {
        alert("Please Enter Valid Number in Celsius");
    }
}

function conTemptoCel() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    
    
    if (!isNaN(fahrenheitInput.value) && fahrenheitInput.value !== '') {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusValue.toFixed(2);
    } else {
        alert("Please Enter Valid Number in Fahrenheit");
    }
}

function swap() {
    const label1 = document.getElementById('cel'); 
    const label2 = document.getElementById('fah'); 
    const textbox1 = document.getElementById('celsius'); 
    const textbox2 = document.getElementById('fahrenheit');

    tempLabel = label1.innerHTML; 
    label1.innerHTML = label2.innerHTML; 
    label2.innerHTML = tempLabel;

    const tempPlaceholder = textbox1.placeholder; 
    textbox1.placeholder = textbox2.placeholder; 
    textbox2.placeholder = tempPlaceholder;

    textbox1.id = textbox1.id === "celsius" ? "fahrenheit" : "celsius"; 
    textbox2.id = textbox2.id === "fahrenheit" ? "celsius" : "fahrenheit";
    
    textbox1.value = ''; 
    textbox2.value = '';
}

document.getElementById('convertBTN').addEventListener('click', function() {
    if (document.getElementById('cel').innerHTML === 'Celsius') {
        conTemptoFahren();
    } else {
        conTemptoCel();
    }
});

document.getElementById('swapBTN').addEventListener('click', swap);
