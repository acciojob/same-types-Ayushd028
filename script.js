function isSameType(value1, value2) {
    // Convert valid numbers from string to number
    let num1 = isNaN(value1) || value1 === "NaN" ? value1 : Number(value1);
    let num2 = isNaN(value2) || value2 === "NaN" ? value2 : Number(value2);

    return typeof num1 === typeof num2;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
