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




// 💡 오늘의 배운 점
// - reverse()함수의 첫 활용:)
// - 코드를 짧게 짠다고 좋은것은 아님
//   가독성 좋은 코드가 좋은 코드