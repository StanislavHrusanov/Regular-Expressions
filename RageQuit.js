function rageQuit(input) {
    input = input[0].toUpperCase();
    let strings = input.split(/\d+/).filter(str => str != '');
    let numbers = input.split(/\D+/).filter(num => num != '').map(Number);

    let uniqueSymbols = new Set();
    let rageMessage = '';

    for (let i = 0; i < strings.length; i++) {

        let str = strings[i];
        let number = numbers[i];

        let strAsArr = str.split('');

        for (let char of strAsArr) {

            if (number > 0) {
                uniqueSymbols.add(char);
            }
        }

        for (let j = 0; j < number; j++) {
            rageMessage += str;
        }
    }

    console.log(`Unique symbols used: ${uniqueSymbols.size}`);
    console.log(rageMessage);
}
rageQuit(['e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi] - ~17 *% p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z < v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15']);