function netherRealms(input) {
    let names = input.split(/\s*,\s*/g);
    let sortedNames = names.sort((a, b) => a.localeCompare(b));

    for (let name of sortedNames) {

        let healthPattern = /[^\d\+\-\*\/\.]/g;
        let damagePattern = /\-?\d+(\.?\d*)/g;
        let divideMultiplicationSignsPattern = /[\*\/]/g;

        let health = 0;
        let damage = 0;
        let divideMultiplicationSigns = [];

        let validHealth;

        while ((validHealth = healthPattern.exec(name)) !== null) {
            health += validHealth[0].charCodeAt();
        }

        let validDamage;

        while ((validDamage = damagePattern.exec(name)) !== null) {
            damage += Number(validDamage[0]);
        }

        let validMulDivSigns;

        while ((validMulDivSigns = divideMultiplicationSignsPattern.exec(name)) !== null) {
            divideMultiplicationSigns.push(validMulDivSigns[0]);
        }

        if (divideMultiplicationSigns.length > 0) {
            divideMultiplicationSigns.map(sign => {
                sign == '*' ? damage *= 2 : damage /= 2;
            });
        }

        console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
    }
}
netherRealms('M3ph-0.5s-0.5t0.0**');