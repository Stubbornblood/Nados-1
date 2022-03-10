

public class patterndownleft{
  public static void main(String[]args)
  { 
    int num = 5;
    for(int i = 0;i<=5;i++){
       
        for(int j=1;j<=i;j++){
            System.out.print("\t");
        }
        for(int j = 0;j<=num-i-1;j++){
            System.out.print("*\t");
        }
        System.out.println();
    
    }
  } 
}