function matchPhoneNumber(text) {

    let pattern = /\+359([-, ])[2]\1[0-9]{3}\1[0-9]{4}\b/g;

    let output = [];
    let validPhone = null;
    while ((validPhone = pattern.exec(text)) !== null) {
        output.push(validPhone[0]);
    }
    console.log(output.join(', '));
}
matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");