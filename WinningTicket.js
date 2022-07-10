function winningTicket(input) {

    input = input.split(/\s*\,\s+/);
    let atPattern = /\@{6,}/;
    let hashPattern = /\#{6,}/;
    let dollarPattren = /\${6,}/;
    let caretPattern = /\^{6,}/;

    for (let ticket of input) {

        if (ticket.length != 20) {
            console.log('invalid ticket');
            continue;
        }

        let firstHalf = ticket.slice(0, 10);
        let secondHalf = ticket.slice(10);

        if (firstHalf.match(atPattern) !== null && secondHalf.match(atPattern) !== null) {
            let firstSequence = firstHalf.match(atPattern).join();
            let secondSequence = secondHalf.match(atPattern).join();
            let lengthOfWinningSequence = Math.min(firstSequence.length, secondSequence.length);
            if (lengthOfWinningSequence == 10) {
                console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${firstSequence[0]} Jackpot!`);
            } else {
                console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${firstSequence[0]}`);
            }
        } else if (firstHalf.match(hashPattern) !== null && secondHalf.match(hashPattern) !== null) {
            let firstSequence = firstHalf.match(hashPattern).join();
            let secondSequence = secondHalf.match(hashPattern).join();
            let lengthOfWinningSequence = Math.min(firstSequence.length, secondSequence.length);
            if (lengthOfWinningSequence == 10) {
                console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${firstSequence[0]} Jackpot!`);
            } else {
                console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${firstSequence[0]}`);
            }
        } else if (firstHalf.match(dollarPattren) !== null && secondHalf.match(dollarPattren) !== null) {
            let firstSequence = firstHalf.match(dollarPattren).join();
            let secondSequence = secondHalf.match(dollarPattren).join();
            let lengthOfWinningSequence = Math.min(firstSequence.length, secondSequence.length);
            if (lengthOfWinningSequence == 10) {
                console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${firstSequence[0]} Jackpot!`);
            } else {
                console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${firstSequence[0]}`);
            }
        } else if (firstHalf.match(hashPattern) !== null && secondHalf.match(hashPattern) !== null) {
            let firstSequence = firstHalf.match(hashPattern).join();
            let secondSequence = secondHalf.match(hashPattern).join();
            let lengthOfWinningSequence = Math.min(firstSequence.length, secondSequence.length);
            if (lengthOfWinningSequence == 10) {
                console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${firstSequence[0]} Jackpot!`);
            } else {
                console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${firstSequence[0]}`);
            }
        } else if (firstHalf.match(caretPattern) !== null && secondHalf.match(caretPattern) !== null) {
            let firstSequence = firstHalf.match(caretPattern).join();
            let secondSequence = secondHalf.match(caretPattern).join();
            let lengthOfWinningSequence = Math.min(firstSequence.length, secondSequence.length);
            if (lengthOfWinningSequence == 10) {
                console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${firstSequence[0]} Jackpot!`);
            } else {
                console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${firstSequence[0]}`);
            }
        } else {
            console.log(`ticket "${ticket}" - no match`);
        }
    }
}
winningTicket('      @@@@@@@@@@@@@@@@@@@@      , $$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');