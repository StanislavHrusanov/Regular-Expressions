function postOffice(input) {

    let [firstPart, secondPart, thirdPart] = input[0].split('|');

    let capitalLettersPattern = /(#|\$|%|\*|&)(?<capitalLetters>[A-Z]+)\1/;
    let capitalLetters = capitalLettersPattern.exec(firstPart).groups['capitalLetters'].split('');

    let wordsInfo = {};
    for (let i = 0; i < capitalLetters.length; i++) {
        if (!wordsInfo.hasOwnProperty(capitalLetters[i])) {
            wordsInfo[capitalLetters[i]] = 0;
        }
    }

    let asciiCodeAndWordsLengthPattern = /(\d{2}:\d{2})/g;
    let asciiCodesAndLenghts = secondPart.match(asciiCodeAndWordsLengthPattern);
    let uniqueAsciiCodesAndLenghts = [];

    for (let i = 0; i < asciiCodesAndLenghts.length; i++) {
        if (!uniqueAsciiCodesAndLenghts.includes(asciiCodesAndLenghts[i])) {
            uniqueAsciiCodesAndLenghts.push(asciiCodesAndLenghts[i]);
        }
    }

    for (let i = 0; i < uniqueAsciiCodesAndLenghts.length; i++) {

        let [asciiCode, length] = uniqueAsciiCodesAndLenghts[i].split(':');
        asciiCode = Number(asciiCode);
        let capitalLetter = String.fromCharCode(asciiCode);
        length = Number(length) + 1;

        if (wordsInfo.hasOwnProperty(capitalLetter)) {
            wordsInfo[capitalLetter] = length;
        }

    }
    thirdPart = thirdPart.split(' ');

    for (let key in wordsInfo) {
        let length = wordsInfo[key];
        for (let word of thirdPart) {
            if (word[0] == key && word.length == length) {
                console.log(word);
            }
        }
    }
}
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);