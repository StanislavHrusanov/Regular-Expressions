function santasSecretHelper(input) {
    let key = Number(input.shift());
    let decryptedMessages = [];
    let encryptedMessage = input.shift();

    while (encryptedMessage != 'end') {
        encryptedMessage = encryptedMessage.split('');

        for (let i = 0; i < encryptedMessage.length; i++) {
            let char = encryptedMessage[i];
            encryptedMessage[i] = String.fromCharCode(char.charCodeAt() - key);
        }

        decryptedMessages.push(encryptedMessage.join(''));
        encryptedMessage = input.shift();
    }

    let pattern = /[^\@\-\!\:\>]*@(?<name>[a-zA-Z]+)[^\@\-\!\:\>]*!(?<behavior>[GN])!/;

    for (let message of decryptedMessages) {

        if (message.match(pattern)) {
            let childsName = pattern.exec(message).groups['name'];
            let childsBehavior = pattern.exec(message).groups['behavior'];

            if (childsBehavior == 'G') {
                console.log(childsName);
            }
        }
    }
}
santasSecretHelper(['3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$'",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end']);