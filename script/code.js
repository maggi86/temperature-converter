// Celcius = (Fahrenheit - 32) / 1.8
// Fahrenheit = (Celcius * 1.8) + 32


const btnConvert = document.getElementById('btn');
// Adds a function to the button when its clicked
btnConvert.addEventListener('click', (celcius) => {
    // celcius is a parameter in the function which is why its not declared with let;
    // finds the value in the celcius input
    celcius = document.getElementById('celcius').value;

    // connects to input with fahrenheit ID 
    let fahrenheit = document.getElementById('fahrenheit');
    // places the answer in the fahrenheit input box
    fahrenheit.value = (celcius * 9 / 5) + 32;
}
)  