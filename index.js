// write a function convertToCelsius which takes a temperature in Fahrenheit and returns the equivelant temperature in Celsius.

// initialize variables
let farTemp = 0;
let message = "";

/**
 * checks if a value is actually number
 * @param {number} num
 * @returns {boolean} - true if value is number, false if not
 */
function validateNum(num) {
  return typeof num === "number" && !Number.isNaN(num) && Number.isFinite(num);
}

/**
 * -------------------------------------------------------------------------
 * convertToCelsius:
 * takes a temperature in Fahrenheit and returns
 * the equivelant temperature in Celsius
 * -------------------------------------------------------------------------
 * --- formula ---
 * celsius = (farenheit -32) * (5/9)
 * -------------------------------------------------------------------------
 * @param {number} num1 -- The temperature in Farenheight to be converted.
 * @returns {number} -- The temperature after being converted to Celsius.
 * -------------------------------------------------------------------------
 */
function convertToCelsius(num1) {
  let celsTemp = 0;
  celsTemp = (num1 - 32) * (5 / 9);
  return celsTemp;
}

/**
 * ------------------------------------------------------
 * describeTemperature:
 * takes a temperature in Farenheit and generates
 * a message describing how the temperature feels,
 * what the temperature is in Farenheit, and what
 * the temperature is in Celsius. It calls the
 * convertToCelsius function in order to do the
 * conversion.
 * ------------------------------------------------------
 * @param {number} num1 -- The temperature in Farenheit.
 * @returns {string} -- Description of the temperature followed by the temperature in Farenheit and in Celsius.
 * ------------------------------------------------------
 */
function describeTemperature(num1) {
  if (!validateNum(num1)) {
    return `You did not enter a number. Please try again.`;
  }

  let celsTemp = convertToCelsius(num1);
  celsTemp = Math.round(celsTemp);
  if (celsTemp >= 40) {
    return `It's very hot! It is ${num1} degrees Farenheit, which is ${celsTemp} degrees Celsius.`;
  } else if (celsTemp < 40 && celsTemp >= 30) {
    return `It's hot! It is ${num1} degrees Farenheit, which is ${celsTemp} degrees Celsius.`;
  } else if (celsTemp < 30 && celsTemp >= 20) {
    return `It's warm! It is ${num1} degrees Farenheit, which is ${celsTemp} degrees Celsius.`;
  } else if (celsTemp < 20 && celsTemp >= 0) {
    return `It's cold! It is ${num1} degrees Farenheit, which is ${celsTemp} degrees Celsius.`;
  } else if (celsTemp < 0) {
    return `It's very cold! It is ${num1} degrees Farenheit, which is ${celsTemp} degrees Celsius.`;
  } else {
    return `Sorry! I couldn't convert what you entered into Celsius...`;
  }
}

// get the temperature in Farenheit from the user
farTemp = Number(
  prompt(
    "Please enter the temperature in Farenheit to see what it is in Celsius."
  )
);
console.log(typeof farTemp);
// display the message on the screen
message = describeTemperature(farTemp);
alert(message);
