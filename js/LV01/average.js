// [Lv.1] 평균구하기

// 🤔 내풀이
function solution(arr) {
    var answer = 0;
    let index = 0;

    arr.forEach((n, i) => {
        answer += n;
        index = i + 1;
        console.log(answer, index);
    });

    answer /= index;

    return answer;
}



// ✨ 다른풀이 1
// reduce 함수를 활용한 풀이
function average(array){
    return array.reduce((a, b)=>a+b)/array.legth;
}

let testArray = [5, 3, 4];
console.log("평균값 : " + average(testArray));