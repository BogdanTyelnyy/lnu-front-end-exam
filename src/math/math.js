const LEN = 10;

function checkLenth(str) {
    if(isNaN(str))
        return "Error";
    if(str.length <= LEN)
        return str;
    if(str.includes(".") && Number(str) < 1e10) {
        const int = str.search(/\./);
        console.log(int);
        if(int - 1 <= LEN)
            return String(Number(str).toFixed(LEN - int - 1));
    }
    return "Infinity";
}

function calculate(str) {
    let i = 0;
    if("+-*/".includes(str[0])) i++;
    for(i; i < str.length; i++) {
        if("+-*/^".includes(str[i]))
            break;
    }
    if(i == str.length)
        return str;
    let val1 = Number(str.slice(0, i));
    let val2 = Number(str.slice(i + 1, str.length));
    let res;
    switch(str[i]) {
        case "+":
            res = val1 + val2;
            break;
        case "-":
            res = val1 - val2;
            break;
        case "*":
            res = val1 * val2;
            break;
        case "/":
            res =  val1 / val2;
            break;
        case "^":
            res = val1 ** val2;
            break;
    }
    console.log(val1, str[i], val2, '=', res);
    return checkLenth(String(res));    
}

export function update(e, setState, state) {
    const buttons = [
        "<-", "^", "/", "C",
        "7", "8", "9", "*",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        "0", "00", ".", "="
    ];
    const {offsetX : x, offsetY : y} = e.nativeEvent;
    let I = 0, J = 0;
    for(let i = 28; i < 250; i += 67) {
        if (i <= x && x <= i + 47) break;
        else I++;
    }
    for(let j = 141; j < 380; j += 57) {
        if (j <= y && y <= j + 37) break;
        else J++;
    }
    if(I == 4 || J == 5)
        return;
    let target = buttons[J * 4 + I];


    if(target === "C" || state === "Infinity" || state === "Error") {
        if(target === "C") setState("");   
    } else if("00123456789".includes(target) && state.length < LEN) {
        setState(prev => prev + target);
    } else if (target === "." && state.length < LEN) {
        setState(prev => {
            const operator = prev.search(/[+\-*/^]/) + 1;
            if (prev.slice(operator).includes(".") || prev.slice(operator) === "")
                return prev;
            else return prev + target;
        })
    } else if (target === "<-") {
        setState(prev => prev.slice(0, -1));
    } else if ("+-*/^=".includes(target)){
        if(target === "=") target = "";
        if("+-*/^".includes(state.at(-1))) {
            setState(prev => prev.slice(0, -1) + target);
        } else {
            setState(prev => {
                const res = calculate(prev);
                if(res !== "Infinity" && res !== "Error" && res.length + 1 < LEN) {
                    return res + target;
                }
                return res;
            });
        }
    }
}