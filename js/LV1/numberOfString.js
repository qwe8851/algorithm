// [Lv.1] 문자열 내 p와 y의 개수


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
    //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// ✨ 다른풀이 2
function solution(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
}

// ✨ 다른풀이 3
function solution(s) {

    return [...s.toLowerCase()].reduce((acc, cur) => {
        if (cur === 'p') return acc + 1;
        else if (cur === 'y') return acc - 1;
        return acc;
    }, 0) ? false : true;
}




// 💡 다른풀이를 보고 느낀 점
// - 1)
// - 2) 
// - 3) 리듀스는 넘 어렵다...

// 💡 내 코드를 다시보고...
// - 

// 💡 오늘의 배운 점
// - 삼항연산자를 잔뜩 써봤다 ㅎㅎㅎ