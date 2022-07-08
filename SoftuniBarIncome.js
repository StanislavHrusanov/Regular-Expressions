function softuniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/;
    let totalSum = 0;

    while (input[0] != 'end of shift') {

        let text = input.shift();

        if (pattern.test(text)) {

            let name = pattern.exec(text).groups['name'];
            let product = pattern.exec(text).groups['product'];
            let count = pattern.exec(text).groups['count'];
            let price = pattern.exec(text).groups['price'];

            console.log(`${name}: ${product} - ${(Number(count) * Number(price)).toFixed(2)}`);
            totalSum += Number(count) * Number(price);
        }
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);