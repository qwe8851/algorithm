<<<<<<< HEAD:java/hongpack/HeroTest2.java
// 파라미터로 객체 전달
package hongpack;

=======
>>>>>>> b270cd715595bd7d9f112340c91015a4bc3fe46c:java/HeroTest2.java
public class HeroTest2 {
    public static void main(String[] args) {
        // 객체 생성
        Hero thor = new Hero("토르", 150); // thor -> {"토르", 150}
        Hero thanos = new Hero("타노스", 160); // thanos -> {"타노스", 160}

        // 토르의 펀치 -> 타노스
        thor.punch(thanos);
        thanos.punch(thor);
        thanos.punch(thor);

        /* 2.코드를 추가하여 펀치를 주고 받으세요. */
    }
}

class Hero {
    // 필드
    String name;
    int hp;

    // 생성자
    Hero(String s, int i) {
        name = s;
        hp = i;
    }

    // 메소드
    void punch(Hero enemy) {
        // 때린 주체 객체
        System.out.printf("[%s]의 펀치!! ", name);

        /* 1. 맞은 객체에 대한 정보를 출력하세요. */
        System.out.printf("%s의 HP: %d -> ", enemy.name, enemy.hp);
        enemy.hp -= 10;
        System.out.printf("%d", enemy.hp);
    }
}