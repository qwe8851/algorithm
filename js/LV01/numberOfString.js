// [Lv.01] 문자열 내 p와 y의 개수

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 🤔 내풀이
function solution(s) {
    var answer = true;
    let p = '';
    let y = '';

    if (50 >= s.length && /^[a-z|A-Z]*$/.test(s)) {
        s = s.split('');

        s.forEach((a) => {
            /[p|P]$/.test(a) ? p += a :
                /[y|Y]$/.test(a) ? y += a : '';
        });

        answer = p.length == y.length ? true : false;
    }

    return answer;
}



// ✨ 다른풀이 1
function solution(s) {
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// ✨ 다른풀이 2
function solution(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
}
// gi로대소문자 구분 없이 찾고자 하는 문자열을 찾음
// - g : global. 전역매칭으로 처음부터가 아닌 전체에서 정규식에 맞는걸 찾음
// - i : case Insensitive. 대소문자구별안함
// - m : multiline

// ✨ 다른풀이 3
function solution(s) {

    return [...s.toLowerCase()].reduce((acc, cur) => {
        if (cur === 'p') return acc + 1;
        else if (cur === 'y') return acc - 1;
        return acc;
    }, 0) ? false : true;
}
// 리듀서는 어렵다... 더 많이 공부해볼것..




// 💡 다른풀이를 보고 느낀 점
// - 짧게, 아직 어려운 함수들을 마구 응용해서, 가독성이 좋은, 성능이 좋은 코드를 짜보는것도 좋은 연습이 될 것 같다!

// 💡 내 코드를 다시보고...
// - 난 모든면에서 아직 모자른것 같다...

// 💡 오늘의 배운 점
// - 삼항연산자를 잔뜩 써봤다 ㅎㅎㅎ





// 📝 다시 풀이
function solution(s) {
    let answer;

    if (50 >= s.length && /^[a-z|A-Z]*$/.test(s)) {
        p = s.match(/p/gi);
        y = s.match(/y/gi);

        if (p === y) {
            return true;
        } else {
            return y === null || p === null ? false : p.length == y.length;
        }
    } else {
        return false;
    }
}
// 한 쪽 값이 null일때와 둘 중 하나의 값이 null일때를 고려하지 못해서 오류가 났음..
