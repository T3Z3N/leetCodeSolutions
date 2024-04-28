function convertoInt(str) {

    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i=0; i < str.length; i++){
        const cur = sym[str[i]];
        const next = sym[str[i+1]];

        if (cur < next){
            result += next - cur 
            i++
        } else {
            result += cur
        }
    }

    return result; 
};

console.log(convertoInt('CMLXXX')) // 980
