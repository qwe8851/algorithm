// [Lv.01] 나머지가 1이 되는 수 찾기
// - 자연수 n이 매개변수로 주어집니다.
// - n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
// - 답이 항상 존재함은 증명될 수 있습니다.

// 🤔 내풀이
function solution(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 1) {
            return i;
        }
    }
}


// 📝 다시 풀이 1
function solution(n, i = 1) {
    i++;
    return n % i == 1 ? i : solution(n, i);
}
// 재귀함수를 이용해서 짜보고 싶었는데 큰 수가 들어왔을 때 stackoverflow Error가 나온다.
// 재귀함수 호출하는 방식은 속도가 느릴 수 있어 사용에 유의하는것이 좋을 듯 하당






// ✨ 다른 풀이 1
function solution(n, i = 0) {
    while(i++){
        if(n%i === 1){
            return n;
        }
    }
    return n % i == 1 ? i : solution(n, i);
}







// 💡 오늘의 배운 점
// - === 을 잘 쓰자