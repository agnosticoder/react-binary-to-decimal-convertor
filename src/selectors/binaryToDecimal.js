//Function to Convert from Binary Number (String) to Decimal



const binaryToDecimal = (binaryNumber) => {
    //Return 0 if empty String or Zero is passed
    if(!binaryNumber) {
        return 0;
    }
    console.log(binaryNumber.match(/^[0-1]{1,}$/g));
    //Remove the leading Zeros from the binary Number String.
    let sanitizedBinary = parseInt(binaryNumber, 10);
    let binaryNumberLength = sanitizedBinary.toString().length
    let decimalNumber = 0;
    for (let i = 0; i < binaryNumberLength; i++) {
        //Evaluate Remainder of Binary Number
        let remainder = sanitizedBinary % 10;
        //Add the remainder * 2^i to decimalNumber
        decimalNumber += (remainder * Math.pow(2, i));
        //Remove the last digit from the binaryNumber so that we can calucate the Remainder in next iteration
        sanitizedBinary = Math.round(sanitizedBinary / 10);
    }
    return decimalNumber;
}

export default binaryToDecimal;