import java.util.Scanner;

public class gameTebak {
    static int skor = 0;

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        while (true) {
            System.out.println("\n=== MENU UTAMA ===");
            System.out.println("1. Mulai Bermain");
            System.out.println("2. Lihat Skor");
            System.out.println("3. Keluar");
            System.out.print("Pilih (1/2/3): ");
            String menu = input.nextLine();

            switch (menu) {
                case "1":
                    pilihLevel(input);
                    break;
                case "2":
                    System.out.println("Skormu sekarang: " + skor + " poin");
                    break;
                case "3":
                    System.out.println("Terima kasih telah bermain!");
                    return;
                default:
                    System.out.println("Pilihan tidak valid.");
            }
        }
    }

    public static void pilihLevel(Scanner input) {
        System.out.println("\n=== PILIH LEVEL ===");
        System.out.println("1. Mudah");
        System.out.println("2. Normal");
        System.out.println("3. Sulit");
        System.out.print("Pilih level (1/2/3): ");
        String lvl = input.nextLine();

        switch (lvl) {
            case "1":
                mainkan(input, soalMudah(), "Mudah");
                break;
            case "2":
                mainkan(input, soalNormal(), "Normal");
                break;
            case "3":
                mainkan(input, soalSulit(), "Sulit");
                break;
            default:
                System.out.println("Pilihan tidak valid.");
        }
    }

    public static void mainkan(Scanner input, String[][] soal, String level) {
        skor = 0;
        System.out.println("\n=== MULAI LEVEL " + level.toUpperCase() + " ===");

        for (int i = 0; i < soal.length; i++) {
            System.out.println("\nSoal #" + (i + 1));
            System.out.println(soal[i][0]);
            System.out.println(soal[i][1]);
            System.out.println(soal[i][2]);
            System.out.println(soal[i][3]);
            System.out.println(soal[i][4]);
            System.out.print("Jawabanmu (a/b/c/d): ");
            String jawab = input.nextLine().trim().toLowerCase();

            if (jawab.equals(soal[i][5])) {
                System.out.println("✅ Benar!");
                skor++;
            } else {
                System.out.println("❌ Salah. Jawaban yang benar: " + soal[i][5]);
            }
        }

        System.out.println("\n--- Selesai ---");
        System.out.println("Skor level " + level + ": " + skor + " dari " + soal.length);
    }

    public static String[][] soalMudah() {
        return new String[][]{
            {"Aku bersinar siang hari.", "a. Bulan", "b. Bintang", "c. Matahari", "d. Lilin", "c"},
            {"Aku bulat, biasa ditendang.", "a. Batu", "b. Kaca", "c. Bola", "d. Ember", "c"},
            {"Aku tempat tinggal hewan.", "a. Sarang", "b. Meja", "c. Rak", "d. Pisau", "a"},
            {"Aku hewan berkaki empat dan menggonggong.", "a. Kucing", "b. Kuda", "c. Sapi", "d. Anjing", "d"},
            {"Aku binatang kecil suka menggigit.", "a. Kupu-kupu", "b. Nyamuk", "c. Semut", "d. Ulat", "b"}
        };
    }

    public static String[][] soalNormal() {
        return new String[][]{
            {"Aku punya jarum tapi tidak menjahit.", "a. Jarum jam", "b. Mesin jahit", "c. Jarum suntik", "d. Kompas", "a"},
            {"Aku bisa pecah tapi tidak kelihatan.", "a. Balon", "b. Gelas", "c. Janji", "d. Cermin", "c"},
            {"Aku punya daun tapi bukan pohon.", "a. Buku", "b. Bayam", "c. Daun pintu", "d. Peta", "a"},
            {"Aku muncul setelah hujan, berwarna-warni.", "a. Pelangi", "b. Hujan", "c. Awan", "d. Guntur", "a"},
            {"Aku punya tangan tapi tak bisa memegang.", "a. Jam", "b. Topeng", "c. Kursi", "d. Wayang", "a"}
        };
    }

    public static String[][] soalSulit() {
        return new String[][]{
            {"Aku bisa jatuh tanpa terdorong, bisa pecah tapi bukan benda. Aku adalah?", "a. Es", "b. Balon", "c. Janji", "d. Langit", "c"},
            {"Aku tidak terlihat, tapi selalu terasa. Aku adalah?", "a. Waktu", "b. Bayangan", "c. Angin", "d. Pikiran", "c"},
            {"Aku berjalan tanpa kaki, bersuara tanpa mulut. Siapakah aku?", "a. Air", "b. Waktu", "c. Angin", "d. Cahaya", "b"},
            {"Aku selalu ada di depanmu, tapi kamu tak bisa menangkapku. Aku adalah?", "a. Bayangan", "b. Masa lalu", "c. Masa depan", "d. Harapan", "c"},
            {"Aku punya banyak wajah tapi tak punya mata. Siapakah aku?", "a. Dadu", "b. Buku", "c. Cermin", "d. Kalender", "d"}
        };
    }
}
