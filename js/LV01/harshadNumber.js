// [Lv.01] νμ€λ μ 

// π€ λ΄νμ΄
function solution(n) {
    if (1 <= n && 10000 >= n) {
        let sum = 0;
        let str = n + "";

        [...str].forEach(element => {
            sum += parseInt(element);
        });
        return n % sum == 0 ? true : false;
    }
}




// β¨ λ€λ₯Ένμ΄ 1
//  κ°μΈμ μΌλ‘ μ μΌ λ³΄κ³  μ½κ³  μ’μ νμ΄κ°λ€. 
function solution(n) {
    let sum = 0;

    do{
        sum+= n%10;
        n= Math.floor(n/10);
    } while(n>0);

    return !(num % string);
}

// β¨ λ€λ₯Ένμ΄ 2
// μ¬κ·ν¨μλ₯Ό νμ© (μλ μΈ‘λ©΄μμλ μ’μ§ μλ€κ³  νλ€.)
function solution(n, i=0, sum=0){
    return String(n).length == i?n%sum ==0 : solution(n, i+1, sum + String(n)[i]*1);
}

// β¨ λ€λ₯Ένμ΄ 3
// μ΄λ €μ΄ reduce..
function solution(n) {
    return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}










// π‘ μ€λμ λ°°μ΄ μ 
// - λ΄ μ½λλ λμμ§ μμ§λ§ λ€μν ν¨μλ€μ νμ©ν΄μ λ€μ νμ΄λ³Ό μ μμ κ² κ°λ€.





// π λ€μ νμ΄1
//  - mapν¨μ μ¬μ©
function solution(n, sum=0, str=n+"") {

    [...str].map(e => {
        sum += e*1;
    });
    return n % sum == 0 ? true : false;
}

// π λ€μ νμ΄ 2
//  - reduce μ°μ΅
function solution(n) {
    // 1. console.log([...n + ""]);
    // 2. console.log([...n.toString()]);
    // 3. console.log(n.toString().split(""));

    n % ([...n.toString()].reduce((total, val) =>
        total + parseInt(val), 0
    ) == 0 ? true : false
);
}

solution(148);