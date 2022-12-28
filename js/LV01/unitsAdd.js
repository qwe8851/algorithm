// [Lv.1] 자릿수 더하기

// 🤔 내풀이
function solution(n) {
    var answer = 0;
    let result = 0;

    answer = String(n).split("");
    answer.forEach((a) => {
        result += parseInt(a);
    })

    return result;
}



// ✨ 
function solution(n) {
    return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);   // 배열이라 초기값 0넣어준 듯
}
// n+"" : 피연산자 중 1개가 문자열이면 문자열로 type 변환 (String)n과 동일하게 사용 가능