// 정사각형 클래스 구현 해보기
package hongpack;

public class SquareTest {
  public static void main(String[] args) {
    /* 객체 생성 */
    Square square = new Square();
    
    /* 필드 초기화(값 변경) */
    square.length = 4;
    
    /* 결과 출력 */
    System.out.printf("한 변의 길이가 %d인 정사각형의 넓이: %d", square.length, square.area());
  }
}

/* 정사각형 클래스 구현 */
class Square {
  int length;
  
  int area(){
    return length*length;
  }
  
}