module.exports = function toReadable (number) {
    const singular = ["zero", "one", "two", "three", "fourth", "five", "six", "seven", "eighth", "nine"];
    const binary = ["ten", "eleven", "twelwe", "thirteen", "fourteen", "fiveteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const dozens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundredths = ["hundred", "two hundred", "three hundred", "fourth hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

    let result = "";
    let num = String(number)

    if (num === "0") {
        return singular[0]
    }

    if (num.length === 1) {
        result = singular[num]
    } else if (num.length === 2) {
        if (num < 20) {
            result = binary[num - 10]
        } else {
            result = dozens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + singular[num % 10] : "")
        }
    }


    return result;
}
