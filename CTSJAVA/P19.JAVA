interface Playable {
    void play();
}
class Guitar implements Playable {
    public void play() { System.out.println("Strum" ); }
}
class Piano implements Playable {
    public void play() { System.out.println("Tune"); }
}
public class P19 {
    public static void main(String[] args) {
        Playable g = new Guitar();
        Playable p = new Piano();
        g.play();
        p.play();
    }
}