public class Pattern10{
    public static void rec(int num){
     
        for(int i=1;i<num/2;i++){
            System.out.print(i);
            rec(num+1)
        }
      
    }
    public static void main(String[] args){
       rec(6);
    }
}