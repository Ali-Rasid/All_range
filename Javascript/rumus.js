const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ⏳ Animasi titik "..." 5 detik
function animasiTitikSebelumHasil(callback) {
    const frames = ['.', '..', '...'];
    let i = 0;
    let waktu = 0;

    const interval = setInterval(() => {
        process.stdout.write('\r🙏🙏' + frames[i] + '   ');
        i = (i + 1) % frames.length;
        waktu += 5000;

        if (waktu >= 6000) {
            clearInterval(interval);
            process.stdout.write('\r     \r');
            callback();
        }
    }, 5000);
}

// ✍️ Tampilkan hasil per karakter
function tampilkanPerKarakter(teks, delay, callback) {
    let i = 0;
    const interval = setInterval(() => {
        process.stdout.write(teks[i]);
        i++;
        if (i >= teks.length) {
            clearInterval(interval);
            process.stdout.write('\n');
            if (callback) callback();
        }
    }, delay);
}

// Konfirmasi sebelum balik ke menu
function konfirmasiLanjut() {
    rl.question("lanjut? (click 0 lanjut): ", (jawaban) => {
        if (jawaban === '0') {
            tampilkanMenu();
        } else {
            console.log("👋 BY---BY");
            rl.close();
        }
    });
}

function tampilkanMenu() {
    console.log("\n========== MENU RUMUS ==========");
    console.log("1. Luas Permukaan Balok");
    console.log("2. Luas Segitiga");
    console.log("3. Pythagoras");
    console.log("4. Pengurangan");
    console.log("5. Perkalian");
    console.log("0. Keluar");
    console.log("================================");

    rl.question("Masukkan pilihan (0-5): ", (pilihan) => {
   switch (pilihan) {
     
            case '1':
   rl.question("Panjangnya 😁😁 : ", (p) => {
   rl.question("Lebarnya 🤣🤣 : ", (l) => {
   rl.question("Tingginya 😑😑 : ", (t) => {
   animasiTitikSebelumHasil(() => {
      const hasil = 2 * (p * l + p * t + l * t);
      const teks = `Luas permukaan balok = ${hasil}`;
   tampilkanPerKarakter(teks, 220, konfirmasiLanjut);
         });
       });
    });
   });
   break;

            case '2':
    rl.question("Alasnya brp 😆😆 : ", (a) => {
    rl.question("Tingginya Juga 😂😂 : ", (t) => {
    animasiTitikSebelumHasil(() => {
       const hasil = 0.5 * a * t;
    const teks = `Luas segitiga = ${hasil}`;
       tampilkanPerKarakter(teks, 220, konfirmasiLanjut);
        });
     });
  });
    break;

            case '3':
    rl.question("Sisi A 😜😜 : ", (a) => {
    rl.question("Sisi B 🤔🤔 : ", (b) => {
    animasiTitikSebelumHasil(() => {
        const hasil = Math.sqrt(a * a + b * b);
     const teks = `Sisi miring = ${hasil.toFixed(2)}`;
        tampilkanPerKarakter(teks, 220, konfirmasiLanjut);
           });
       });
    });
      break;

            case '4':
    rl.question("Angka Pertama: ", (a) => {
    rl.question("Angka Kedua: ", (b) => {
    animasiTitikSebelumHasil(() => {
        const hasil = a - b;
    const teks = `hasil pengurangan = ${hasil}`;
       tampilkanPerKarakter(teks, 220, konfirmasiLanjut);
           });
       });
    });
     break;

            case '5':
    rl.question("Angka Pertama: ", (a) => {
    rl.question("Angka Kedua: ", (b) => {
    animasiTitikSebelumHasil(() => {
         const hasil = a * b;
      const teks = `Hasil perkalian = ${hasil}`;
      tampilkanPerKarakter(teks, 80, konfirmasiLanjut);
        });
      });
    });
      break;
//BAGIAN PENTING
            case '0':
                console.log("\n👋 Keluar dari program. Terima kasih!");
                rl.close();
                break;

            default:
                console.log("❗ Pilihan tidak valid.");
                tampilkanMenu();
        }
    });
}

// Jalankan pertama kali
tampilkanMenu();