function furniture(text) {

    let pattern = />{2}(?<item>[a-zA-Z]+)<{2}(?<price>[\d,\.]+)\!(?<count>\d+)/g;
    let furnitures = [];
    let totalSum = 0;
    let validFurnitureInfo = null;

    while ((validFurnitureInfo = pattern.exec(text)) != null) {

        let furnitureType = validFurnitureInfo.groups['item'];
        let price = validFurnitureInfo.groups['price'];
        let count = validFurnitureInfo.groups['count'];

        furnitures.push(furnitureType);
        totalSum += price * count;
    }
    console.log('Bought furniture:');
    if (furnitures.length > 0) {
        console.log(furnitures.join('\n'));
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
);