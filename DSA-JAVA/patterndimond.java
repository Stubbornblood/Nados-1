import java.util.Scanner;
public class patterndimond {
    Scanner scn = new Scanner(System.in);
    int num = scn.nextInt();
    int row = 1 ,nspaces = num/2,nstars=1;
    while(row<=num){
        for(int i = 1;i<=nspaces;i++){
            System.out.print("\t");
        }
        for(int i = 1;i<=nstars;i++){
            if(i==1||i==nstars){
                System.out.print("*\t");
            }else{
                System.out.print("\t");
            }
        }
        System.out.println();
        if(row<=num/2){
            nspaces=nspaces-1;
            nstars = nstars+2;

        }
        else{
            nspaces=nspaces+1;
            nstars=nstars-2;
        }
        row++;
    }
}
