function race(input) {

    let participants = {};

    let names = input.shift().split(', ');

    while (input[0] != 'end of race') {

        let text = input.shift();
        let namePattern = /[a-zA-Z]/g;
        let distancePattern = /\d/g;

        let name = text.match(namePattern).join('');

        if (names.includes(name)) {
            let distance = text.match(distancePattern).map(Number).reduce((a, b) => a + b, 0);

            if (!participants.hasOwnProperty(name)) {
                participants[name] = 0;
            }
            participants[name] += distance;
        }
    }
    let sortedParticipants = Object.keys(participants)
        .sort((a, b) => participants[b] - participants[a]);

    console.log(`1st place: ${sortedParticipants[0]}\n2nd place: ${sortedParticipants[1]}\n3rd place: ${sortedParticipants[2]}`);
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
);