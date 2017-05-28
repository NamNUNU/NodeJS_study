package backjoon.ex_2566;

import java.util.Scanner;

/**
 * Created by homr on 2017. 5. 25..
 */
public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int[][] arr = new int[9][9];
        int max = 0;
        int row=0, col=0;

        for(int i=0; i<9; i++){
            for(int j = 0; j<9; j++){
                arr[i][j] = sc.nextInt();
                if(arr[i][j]>max){
                    max = arr[i][j];
                    row = i+1;
                    col = j+1;
                }
            }
        }
        System.out.println(max);
        System.out.printf("%d %d", row, col);
    }
}