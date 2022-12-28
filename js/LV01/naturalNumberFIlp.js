// [Lv.1] 자연수 뒤집어 배열로 만들기

// 🤔 내풀이
function solution(n) {
    var answer = [];

    if (10000000000 > n) {
        let newArr = String(n).split('').reverse().map((v) => answer.push(Number(v)))
    }
    return answer;
}



// ✨ 다른풀이 1
// 가독성 갑
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);

    return arr;
}






// 💡 다른풀이를 보고 느낀 점
// - '다른풀이1'에서 1자라씩 배열에 거꾸로 누적한게 새로웠고
// - 올림으로 혹시모를 에러를 방지,
// - 문자풀이로는 parseInt를 사용해서 숫자로 변환
// - 일단 풀었다고 끝이 아니라 다른 방법으로도 풀어보는것도 중요한 것 같다.. 여러 방법으로 도전해보기!

// 💡 내 코드를 다시보고...
// - 문제풀이에 급급했다는게 느껴진다. 가독성을 생각하지 못함.

// 💡 오늘의 배운 점
// - reverse()함수의 첫 활용:)
// - 코드를 짧게 짠다고 좋은것은 아님
//   가독성 좋은 코드가 좋은 코드
