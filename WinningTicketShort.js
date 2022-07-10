function winningTicket(input) {

    input = input.split(/\s*\,\s+/);
    let pattern = /(?<ch>@{6,}|#{6,}|\${6,}|\^{6,})/;

    for (let ticket of input) {

        if (ticket.length != 20) {
            console.log('invalid ticket');
            continue;
        }

        let firstHalf = ticket.slice(0, 10);
        let secondHalf = ticket.slice(10);

        if (firstHalf.match(pattern) && secondHalf.match(pattern)) {
            let leftSeq = pattern.exec(firstHalf).groups['ch'];
            let rightSeq = pattern.exec(secondHalf).groups['ch'];

            if (leftSeq[0] != rightSeq[0]) {
                console.log(`ticket "${ticket}" - no match`);

            } else {
                let lengthOfWinningSequence = Math.min(leftSeq.length, rightSeq.length);

                if (lengthOfWinningSequence == 10) {
                    console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${leftSeq[0]} Jackpot!`);
                } else {
                    console.log(`ticket "${ticket}" - ${lengthOfWinningSequence}${leftSeq[0]}`);
                }
            }

        } else {
            console.log(`ticket "${ticket}" - no match`);
        }
    }
}
winningTicket('@@@@@@@@@##$$$$$$$$$, $$$$$$@$$$$$$@######');