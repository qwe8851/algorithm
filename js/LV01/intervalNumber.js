// [Lv.01] x만큼 간격이 있는 n개의 숫자

// 🤔 내풀이
function solution(x, n) {
    let answer = [x];
    let acc = x;

    for (i = 1; i < n; i++) {
        acc += x;
        answer.push(acc);
    }

    return answer;
}



// ✨ 다른풀이 1
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
// x: 3, n: 3
// - Array(n) : 3
// - Array(n).fill(3) : [3, 3, 3]
// - Array(n).fill(x).map((v, i) => (i + 1) : [3, 6, 9]

// Arran[n]으로 n개의 배열생성,
// .Fill()함수로 방금 만든 배열에 x를 모두 할당
// [3, 3, 3]을 map돌려 *iv후 재할당

// ✨ 다른풀이 2
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i)
    }
    return answer;
}






// 💡 다른풀이를 보고 느낀 점
// - 첫 번째 두 번째 코드 모두 index * v를 한게 인상깊었다.
//   내 코드에서 모자란 부분이었던 것 같다.
//   어렵지만 활용하기 좋은 코드같다. 연습을 더 해보면 좋을 것 같다.

// 💡 내 코드를 다시보고...
// - 내 코드도 딱히 나쁘지 않다고 생각한다.😎
//   index를 곱하는거나, 공식을 쓰는것같이 수학문제처럼 푸는것이 아직 어려운것 같다.

// 💡 오늘의 배운 점
// - 