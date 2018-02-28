// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {

        let int = Math.trunc(currency / 50);
        let ha = currency % 50;
        let intHa = Math.trunc(ha / 25);
        let qu = ha % 25;
        let intQu = Math.trunc(qu / 10);
        let di = qu % 10;
        let intDi = Math.trunc(di / 5);
        let ni = di % 5;

        let cashMashine = {
            H: int,
            Q: intHa,
            D: intQu,
            N: intDi,
            P: ni
        };

        let str = JSON.stringify(cashMashine, function (key, value) {
            if (value === 0) return undefined;
            return value;
        });
        return JSON.parse(str);
    }
}




