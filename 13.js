// 조건부 실행

// let x = 10;

// * 일반 조건문
// if (x > 0) {
//   console.log("x는 양수");
// }

// * 조건문 단축 실행 (&&조건)
// x > 0 && console.log("x는 양수");
// if, ( ), { } 생략, &&를 사용해서 이어짐

// * or조건(||)
// 삼항 연산자와 단축평가
let y; // 값을 설정하지 않음 undefined
let z = y || 20; // y가 undefined이면 20을 기본값으로 세팅하여라
console.log(z); // 20

// 변수 y가 존재하지 않는 경우, || 연산자는 false 값을 반환하고,
// 기본값으로 지정한 20을 반환합니다.
