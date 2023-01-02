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
        sum+= x%10;
        x= Math.floor(x/10);
    } while(x>0);

    return !(num % string);
}

// ✨ 다른풀이 2
// 재귀함수를 활용
function solution(n, i=0, sum=0){
    return String(x).length == i?x%sum ==0 : solution(x, i+1, sum + String(x)[i]*1);
}

// ✨ 다른풀이 3
// 함수를 다양하게 활용
function solution(n) {
    return x%eval([...x.toString()].join("+")) ? false : true;
}



// 💡 다른풀이를 보고 느낀 점

// 💡 내 코드를 다시보고...

// 💡 오늘의 배운 점