// 🤔 reduce 작동방식 이해하기

let a = [0, 1, 2, 3, 4]

a.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
});
// callback  	accumulator	 currentValue  currentIndex	    array	    반환 값
// 1번째 호출   	0        	  1	            1       [0, 1, 2, 3, 4]	   1
// 2번째 호출   	1       	  2	            2       [0, 1, 2, 3, 4]	   3
// 3번째 호출	    3       	  3	            3       [0, 1, 2, 3, 4]	   6
// 4번째 호출   	6       	  4	            4       [0, 1, 2, 3, 4]	   10

// 축약형
a.reduce((prev,curr)=> prev+curr);






// ✨ reduce()의 두 번째 인수로 초기값을 제공하는 경우
a.reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentIndex;
}, 10);
// callback  	accumulator	 currentValue  currentIndex	    array	    반환 값
// 1번째 호출   	10        	  1	            1       [0, 1, 2, 3, 4]	   10
// 2번째 호출   	10       	  2	            2       [0, 1, 2, 3, 4]	   11
// 3번째 호출   	11       	  2	            2       [0, 1, 2, 3, 4]	   13
// 4번째 호출	    13       	  3	            3       [0, 1, 2, 3, 4]	   16
// 5번째 호출   	16       	  4	            4       [0, 1, 2, 3, 4]	   20






// ✨ 배열의 모든 값 합산
let sum = a.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);  //sum is 6





// ✨ 객체 배열에서의 값 합산
// - 객체로 이루어진 배열의 값을 합산하기 위해서는 "반드시 초기값"을 주어야 함
let sum2 = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (accumulator, currentValue) {
    return accumulator + currentvalue.x;
}, initialValue);

console.log(sum2);





// ✨ 중첩 배열 펼치기
let flattened = [[0,1], [2,3], [4,5]].reduce(
    function (accumulator, currentValue) {
        return accumulator.concat(currentValue);
}, []);   // 펼친 결과 : [0, 1, 2, 3, 4, 5]





// ✨ 객체 내의 값 인스턴스 개수 세기
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce(function(allNames, name){
    if(name in allNames){
        allNames[name]++;
    } else{
        allNames[name] = 1; 
    }

    return allNames;
}, {}); //  countedNames is : {'Alice':2, 'Bob':1, 'Tiff':1, 'Bruce':1}






// ✨ 속성으로 객체 분류하기  
// ❗ 조금 어렵지만 이해는 가넝,,
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property){
    return objectArray.reduce(function(acc, obj){
        let key = obj[property];

        if(!acc[key]){
            acc[key] = [];
        }
        
        acc[key].push(obj);

        return acc;
    }, {});
}
let groupedPeople = groupBy(people, 'age');
// groupedPeople is : {
//                     20: [
//                         { name: 'Max', age: 20 },
//                         { name: 'Jane', age: 20 }
//                     ],
//                         21: [
//                             { name: 'Alice', age: 21 }
//                         ]
//                     }







// ✨ 확장 연산자와 초기값을 이용하여 객체로 이루어진 배열에 담긴 배열 연결하기
let friends = [{
    name : 'Anna',
    books : ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books : ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books : ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

let allbooks = friends.reduce(function (accumulator, currentValue) {
    return [...accumulator, ...currentValue.books];
}, ['Alphabet']);
// allbooks = {
//     'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//     'Romeo and Juliet', 'The Lord of the Rings',
//     'The Shining'
// ]






// ✨ 배열의 중복 항목 제거
// ❗ 어렵다...
// 📎 참고) Set과 Array.from()을 사용할 수 있는 환경이라면 let orderedArray= Array.form(new Set(myArray));를 사용해 중복요소 제거가 가능하다.
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current)=>{
    const length = accumulator.length;

    if(length === 0 || accumulator[length -1 ] !== current) {
        accumulator.push(current);
    } 
    return accumulator;
}, []);

console.log(result);     // [1, 2, 3, 4, 5]






// ✨ 프로미스를 순차적으로 실행하기
// ❗ 어렵다...
function runPromiseInSequence(arr, input){
    return arr.reduce((promisChain, currentFunction) =>{
        promisChain.then(currentFunction),
        Promise.resolve(input)
    });
}

// promise function 1
function p1(a){
    return new Promise((resolve, reject)=>{
        resolve(a * 5);
    });
}

// promise function 2
function p2(a){
    return new Promise((resolve, reject)=>{
        resolve(a * 2);
    });
}

// promise function 3 - will be wrapped in a resolved promise by .then()
function p3(a){
    resolve(a * 3);
}

// promise function 4
function p4(a){
    return new Promise((resolve, reject)=>{
        resolve(a * 4);
    });
}

const promiseArr = [p1, p2, p3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log);  //1200