const codeConversion = ['h', 'e', 'l', 'l', 'o'];
// var index = '';


const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const codeMaker = () => {
    const inputValue = document.getElementById('secretInputBox').value
    const inputWords = inputValue
    const numberConversionString = numberStringBuilder(inputWords);
    printToDom(numberConversionString.charCodeAt(), 'returnNumbers');
}

const numberStringBuilder = (inputWords) => {
    let newString = '';
    for(let i=0; i<inputWords.length;i++) {
        let convertedNumber = codeConversion[inputWords[i]];
        newString += `<p>${convertedNumber}</p>`

    };
    return newString
}

const numberButton = document.getElementById('secretButton');
    numberButton.addEventListener("click", codeMaker);