// [Lv.01] 정수 내림차순으로 배치하기
// - 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
//   예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 🤔 내풀이
function solution(n) {
    let sortStr = [...n.toString()].sort((a, b) => {
        return b - a;
    });
    let sum = '';
    sortStr.map((a, i) => {
        sum += a;
    });

    return parseInt(sum);
}



// ✨ 다른풀이 1
function solution(n) {
    const newN = n+"";
    const newArr = newN.split("").sort().reverse().join("");

    return +newArr;
}

// ✨ 다른풀이 2
function solution(n) {
    // 숫자가 더 빠름
    let nums = [];
    
    do{
        nums.push(n%10);
        n=Math.floor(n/10);
    } while(n>0)

    return nums.sort((a, b) => b-a).join("") *1;     // *1로 형변환

    // 문자가 더 느림
    return (n+"").split("").sort().reverse().join("") *1;
}


// ✨ 다른풀이 3
function solution(n) {
    return parseInt((n + "").split("").sort().reverse().join(""));
}






// 💡 다른풀이를 보고 느낀 점

// 💡 내 코드를 다시보고...
 
// 💡 오늘의 배운 점
//  - 다른 사람들의 풀이를 보기 전, 여러 방식으로 문제를 풀어봤는데 함수를 많이 응용한게 뿌듯했다. 
//  - 그리고 다시풀이2처럼 풀게되면 문자로 형변환 후 다시 숫자로 형변환하기 때문에 더 오래 걸리게 된다고 한다.
//    숫자로 푸는 방법이 더 빠르다고 한다. 하나 배웠따!



// 📝 다시풀이 1. 
function solution(n, sum = '') {
    let sortStr = Array.from(String(n)).sort().reverse();
    // let sortStr = Array.from(String(n)).sort((a, b)=>{
    //     return b-a;
    // });

    sortStr.map((a, i) => {
        sum += a;
    });

    return parseInt(sum);
}


// 📝 다시풀이 2.
// - 다른풀이 2번이 나랑 비슷하게 푼 것 같다.
// - 근데 여러 글을 참고하니 reverse()를 사용하면 원본이 변형된다고 한다. 이부분은 더 찾아봐야 할 듯 하다.
function solution(n) {

    return parseInt(n.toString().split("").sort().reverse().reduce((total, val) => total + val));
}

// 다른 풀이 3을 참고하여 아래처럼 변경할 수도 있을 것 같다.
parseInt((n+"").split("").sort().reverse().join(""));