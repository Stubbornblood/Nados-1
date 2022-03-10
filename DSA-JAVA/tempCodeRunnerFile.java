import java.util.Scanner;

public class Pattern11 {
    public static void main(String[] args){
        Scanner scn = new Scanner("System.in");
        int num = scn.nextInt();
        for(int i=0;i<=num;i++){
            for(int j=0;j<=num-i;j++){
                System.out.print("\t");
            }
            for(int j=0;j<=i;j++){
                System.out.print("*\t");
            }
            System.out.println();

             
        }
    }
}
