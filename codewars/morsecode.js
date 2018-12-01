// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

// A simple morse code decoder
// 6 kyu

const MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..	": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    "-...-": "="
};

const decodeMorse = morseCode => {
    const decoded = [];
    const words = morseCode.split("   ");
    words.forEach(element => {
        const letters = element.split(" ");
        letters.forEach(letter => {
            decoded.push(MORSE_CODE[letter]);
        });
        decoded.push(" ");
    });
    return decoded.join("").trim();
};

//===========================================
// TEST CASE
//===========================================
// Sample
// console.log(decodeMorse("...."));

// Actual
console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
