// Dog 클래스 만들기 연습
package hongpack;

public class DogTest {
  public static void main(String[] args) {
    // Dog 객체 생성
    Dog d = new Dog();
    
    // Dog 객체 필드 값 출력
    System.out.printf("이름: %s\n", d.name);
    System.out.printf("품종: %s\n", d.breeds);
    System.out.printf("나이: %s\n", d.age);
  }
}

  /* Dog 클래스 */
  class Dog {
    String name = null;
    String breeds = null;
    int age = 0;
    
    void Wag(){
      System.out.println("꼬리치기");
    }
    
    void bark(){
      System.out.println("멍멍!");
    }

  }
