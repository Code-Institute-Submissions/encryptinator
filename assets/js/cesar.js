let alphabetOriginal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphabet = alphabetOriginal.slice()
    let cesarString = "";
    let shift;
    let cesarUserText;

    function getText (message) {
        cesarUserText = "";
        cesarUserText = document.getElementById(message).value;
    }

    function iterateString(text, reversed) {
        alphabet = alphabetOriginal.slice();
        if (reversed == true) {
            alphabet = alphabet.reverse();
        }
        cesarString = "";
        inputText = text;
        inputText = inputText.toLowerCase();
        for (let i = 0; i < inputText.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (inputText[i] == alphabet[j]) {
                    cesarString += alphabet[j + shift];
                    j = alphabet.length;
                }
                if ((!/^[a-z]/.test(inputText[i]))) {
                    cesarString += inputText[i];
                    j = alphabet.length;
                }
            }
        }
    }
    
    function getShift(shiftField) {
        let checkShift = document.getElementById(shiftField).value;
        if (checkShift < 1 || checkShift > 25 || checkShift == isNaN(shift)) {
            shift = 13;
            document.getElementById(shiftField).value = shift;
        }
        else {
            shift = Number(document.getElementById(shiftField).value);
        }
    }

    function writeMessage(outputParagraph) {
        encryptedParagraph = document.getElementById(outputParagraph);
        console.log("alphabetOriginal: " + alphabetOriginal);
        encryptedParagraph.innerHTML = cesarString;
    }

$(document).ready(function () {


        $("#cesar-btn").click(function () {
            getText("input-text");
            getShift("input-shift");
            iterateString(cesarUserText, false);
            writeMessage('encrypted');
        })
        $("#cesar-decipher-btn").click(function () {
            getText("text-to-decrypt");
            getShift("output-shift");
            iterateString(cesarUserText, true);
            writeMessage('decrypted');
        })

    
});