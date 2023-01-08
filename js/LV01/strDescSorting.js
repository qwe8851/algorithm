// [Lv.01] 문자열 내림차순으로 배치하기
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// ex)
//    s          return
// "Zbcdefg"	"gfedcbZ"


// 🤔 내풀이
function solution(s) {

    return [...s].sort().reverse().join("");        // ... operator대신 split("")을 써도 된다.
}




// 💡 오늘의 배운 점
// - 내가 젤 멋지게 풀엇다 ㅎㅎ