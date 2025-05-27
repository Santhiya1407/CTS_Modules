import java.util.HashMap;
import java.util.Scanner;
public class P25 {
    public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 2 ID-name pairs:");
        for (int i = 0; i < 2; i++) {
            System.out.print("ID: ");
            int id = sc.nextInt();
            sc.nextLine();
            System.out.print("Name: ");
            String name = sc.nextLine();
            map.put(id, name);
        }
        System.out.print("Enter ID to search: ");
        int id = sc.nextInt();
        System.out.println("Name: " + map.getOrDefault(id, "Not Found"));
    }
}
