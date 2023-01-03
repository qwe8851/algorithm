// [Lv.01] 하샤드 수 

// 🤔 내풀이
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

// ✨ 다른풀이 1
//  개인적으로 제일 보고 쉽고 좋은 풀이같다. 
function solution(n) {
    let sum = 0;

    do{
        sum+= n%10;
        n= Math.floor(n/10);
    } while(n>0);

    return !(num % string);
}

// ✨ 다른풀이 2
// 재귀함수를 활용 (속도 측면에서는 좋지 않다고 한다.)
function solution(n, i=0, sum=0){
    return String(n).length == i?n%sum ==0 : solution(n, i+1, sum + String(n)[i]*1);
}

// ✨ 다른풀이 3
// 어려운 reduce..
function solution(n) {
    return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}



// 💡 다른풀이를 보고 느낀 점

// 💡 내 코드를 다시보고...
// - 내 코드도 나쁘지 않지만 다양한 함수들을 활용해서 다시 풀어볼 수 있을 것 같다.

// 💡 오늘의 배운 점


// 📝 다시 풀이1
//  - map함수 사용
function solution(n, sum=0, str=n+"") {

    [...str].map(e => {
        sum += e*1;
    });
    return n % sum == 0 ? true : false;
}

// 📝 다시 풀이 2
//  - reduce 연습
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