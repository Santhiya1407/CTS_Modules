class Car {
    String make, model;
    int year;
    void displayDetails() {
        System.out.println(year + " " + make + " " + model);
    }
}
public class P17 {
    public static void main(String[] args) {
        Car car = new Car();
        car.make = "Toyota";
        car.model = "Camry";
        car.year = 2022;
        car.displayDetails();
    }
}
