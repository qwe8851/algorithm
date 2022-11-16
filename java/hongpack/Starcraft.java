// 생성자(constructor) 호출/정의 최종 연습해보기
package hongpack;

public class Starcraft {
    public static void main(String[] args) {
        // 객체 생성
        Person morales = new Person("모랄레스", 60, 60);
        Person raynor = new Person("레이너", 80, 0);

        // 메소드 호출
        raynor.stimpack(raynor);
        morales.heal(raynor);
    }
}

class Person {
    // 필드 생성
    String name;
    int hp;
    int mp;

    // 생성자
    Person(String nm, int h, int m) {
        name = nm;
        hp = h;
        mp = m;
    }

    // 치유 메소드
    void heal(Person ally) {
        System.out.printf("[%s]의 치유! => [%s] HP(%d -> ", name, ally.name, ally.hp);
        ally.hp += 10;
        System.out.printf("%d)", ally.hp);
    }

    // 스팀팩 메소드
    void stimpack(Person ally) {
        System.out.printf("[%s]의 스팀팩! HP: %d -> ", ally.name, ally.hp);
        ally.hp -= 10;
        System.out.println(ally.hp);
    }
}
