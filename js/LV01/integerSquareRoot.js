// [Lv.1] 정수 제곱근 판별

// 🤔 내풀이
function solution(n) {
    let answer = 0;

    if (1 <= n && 50000000000000 >= n) {        // 문제가 변경되면서 조건이 추가됨.
        let sqrt = Math.sqrt(n) + 1;

        if (sqrt > 0 && sqrt == Math.floor(sqrt)) {
            answer = Math.pow(sqrt, 2);
        } else {
            answer = -1;
        }
        // 다른풀이 2번을 참고해서 아래와 같이 한줄로 끝낼 수 있다.
        // sqrt>0 && sqrt==Math.floor(sqrt) ? Math.pow(sqrt, 2) : -1;
    }
    return answer;
}



// ✨ 다른풀이 1
function solution(n) {
    switch (n % Math.sqrt(n)) {
        case 0:
            return Math.pow(Math.sqrt(n) + 1, 2);
        default:
            return "no";
    }
}

// ✨ 다른풀이 2
function solution(n) {
    let n = Math.sqrt(n);
    let result = 0;

    result = Number.isInteger(n) ? Math.pow(n + 1, 2) : 'no';
    return result;
}






// 💡 다른풀이를 보고 느낀 점
// - 1) swich case를 잘 안쓰는데 여기서도 제법 괜찮은 것 같다.
// - 2) 삼항연산자를 사용한 방법! 좋다 깔끔하다. ✔️ 난 이 방법이 더 맘에 든다.

// 💡 내 코드를 다시보고...
// - 뭐든 if/for문 떡칠하는 방법은 좋지 않다.. 
// - 삼항연산자를 활용하는 방법을 생각하지 못한게 아쉽다. 

// 💡 오늘의 배운 점
// - 삼항연산자를 잘 활용해보자!