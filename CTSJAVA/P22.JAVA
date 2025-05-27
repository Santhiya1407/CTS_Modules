import java.io.FileWriter;
import java.util.Scanner;
public class P22 {
    public static void main(String[] args) {
        try {
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter text to write: ");
            String data = sc.nextLine();
            FileWriter writer = new FileWriter("output.txt");
            writer.write(data);
            writer.close();
            System.out.println("Written successfully.");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}