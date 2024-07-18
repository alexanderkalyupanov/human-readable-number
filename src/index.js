module.exports = function toReadable (number) {
    const singular = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const binary = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const dozens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundredths = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

    let result = "";
    let num = String(number)

    if (number === "0") {
        return singular[0]
    }

    if (num.length === 1) {
        result = singular[number]
    } else if (num.length === 2) {
        if (num < 20) {
            result = binary[number - 10]
        } else {
            result = dozens[Math.floor(number / 10)] + (number % 10 !== 0 ? " " + singular[number % 10] : "")
        }
    } else if (num.length === 3) {
        result = hundredths[Math.floor(number / 100)] + " " + toReadable(number % 100)
    }



    return result;
}
