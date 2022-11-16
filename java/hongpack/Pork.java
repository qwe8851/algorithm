package hongpack;

public class Pork {
  public static void main(String[] args) {
    int g = 180;
    double kcal = 5.179;
    
    int eat = Integer.parseInt(args[0]);
    
    System.out.printf("삼겹살 %d인분: %.2f kcal", eat, result(eat, kcal1(g, kcal)));
    
  }
  
  
  public static double kcal1(int g, double kcal){
    return g*kcal;
  }
  
  
  public static double result(int eat, double kcal1){
    return eat*kcal1;
  }

}