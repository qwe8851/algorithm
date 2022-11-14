public class LeapYear {
  public static void main(String[] args) {
    int year = Integer.parseInt(args[0]);
    
    yun(year);
  }
  public static void yun(int year){
    boolean yun=false;

    if(year%100 != 0 && (year%4 == 0 || year%1000 == 0)){
        yun = true;
    }

    System.out.println(year+"년은 윤년입니까? "+yun);
  }
}