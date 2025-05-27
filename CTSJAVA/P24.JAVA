import java.util.ArrayList;
import java.util.Scanner;
public class P24 {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 3 names:");
        for (int i = 0; i < 3; i++) names.add(sc.nextLine());
        System.out.println("Names entered: " + names);
    }
}
