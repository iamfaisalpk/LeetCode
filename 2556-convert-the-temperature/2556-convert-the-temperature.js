/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const kelvine = celsius + 273.15
    const Fahrenheit = celsius * 1.80 + 32.00

     const ans = [kelvine,Fahrenheit]

    return ans;
};