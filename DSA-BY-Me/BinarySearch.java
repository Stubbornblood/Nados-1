import java.util.Scanner;

public class BinarySearch {
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter no of Value You Want to Enter: ");
        int num =  scn.nextInt();
        System.out.print("Enter target index you want to featch : ");
        int Target = scn.nextInt();
        int[] arr= new int[10];
        for(int i = 1;i<=num;i++){
            System.out.println("Enter value for first position " + i + ":" );
            arr[i]=scn.nextInt();
        }
        for(int j=1;j<=num;j++){
            if(arr[j]==Target){
                System.out.println("Your Targeted Value is present at target : " + j );
            }
            
        }
        
        
    }
}
