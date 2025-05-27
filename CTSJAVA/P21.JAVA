class InvalidAgeException extends Exception {
    public InvalidAgeException(String msg) { super(msg); }
}
public class P21 {
    public static void main(String[] args) {
        try {
            int age = 16;
            if (age < 18) throw new InvalidAgeException("Age must be 18 or older.");
            System.out.println("Valid age.");
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}