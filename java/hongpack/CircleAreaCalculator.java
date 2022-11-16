package hongpack;

public class CircleAreaCalculator {
  public static void main(String[] args) {
    int r = Integer.parseInt(args[0]);
    double s = Math.PI * r * r;
    
    System.out.printf("반지름이 %d인 원의 넓이 => %.3f", r, s);
  }
}