// todays forecast
const kelvin = 0;

// converrting celcius to kelvin
const celcius = kelvin - 273;

// farenheight conversion
let fahrenheit = celcius * (9 / 5) + 32;

//rounding down the value from farenheit conversion
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);