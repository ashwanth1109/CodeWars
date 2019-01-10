// ------------------------------------------------------------
// Rail Fence Cipher: Encoding and Decoding
//
// https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript
// 3 kyu - THE BIG LEAGUES *WOOHOO*
// ------------------------------------------------------------

encodeRailFenceCipher = (string, numberRails) => {
    // ------------------------------------------------------------
    // initialize variables
    // ------------------------------------------------------------
    let encodedString = "",
        arrOfarrays = [],
        strArray = string.split(""),
        iterator = 0,
        railStep = 0,
        railStepIncreasing = true;
    // ------------------------------------------------------------
    // create an array of arrays
    // ------------------------------------------------------------
    for (let i = 0; i < numberRails; i++) {
        arrOfarrays.push([]);
    }
    // ------------------------------------------------------------
    // while loop to iterate through each letter of passed in string
    // ------------------------------------------------------------
    while (iterator < string.length) {
        // ------------------------------------------------------------
        // store each letter in respective rail
        // ------------------------------------------------------------
        arrOfarrays[railStep].push(strArray[iterator]);
        // ------------------------------------------------------------
        // logic to move from rail to rail in described fashion
        // ------------------------------------------------------------
        if (railStepIncreasing) {
            // ------------------------------------------------------------
            // rail step should be increasing unless it hit the end
            // ------------------------------------------------------------
            if (railStep === numberRails - 1) {
                // ------------------------------------------------------------
                // set railStepIncreasing value to false
                // ------------------------------------------------------------
                railStepIncreasing = false;
                railStep--;
            } else railStep++; // else increase railStep value
        } else {
            // ------------------------------------------------------------
            // rail step should be decreasing unless it hit the beginning
            // ------------------------------------------------------------
            if (railStep === 0) {
                // ------------------------------------------------------------
                // set railStepIncreasing value to true
                // ------------------------------------------------------------
                railStepIncreasing = true;
                railStep++;
            } else railStep--; // else decrease railStep value
        }
        iterator++; // go to next letter in string
    }
    // ------------------------------------------------------------
    // combine encoded string
    // ------------------------------------------------------------
    for (const arr of arrOfarrays) {
        const arrString = arr.join("");
        encodedString += arrString;
    }
    return encodedString;
};

decodeRailFenceCipher = (string, numberRails) => {
    //
};

console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));
