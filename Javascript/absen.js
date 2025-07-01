const fs = require('fs');
const readline = require('readline-sync');

const filePath = 'absensi.json';

function loadData() {
    if (fs.existsSync(filePath)) {
        try {
            return JSON.parse(fs.readFileSync(filePath));
        } catch {
            console.log("File rusak. Membuat ulang...");
        }
    }
    return [];
}

function saveData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
}

function tambahAbsensi(data) {
    const nama = readline.question("Nama siswa: ");
    const status = readline.question("Hadir? (ya/tidak): ").toLowerCase();
    data.push({ nama, status: status === 'ya' ? 'Hadir' : 'Tidak Hadir' });
    console.log(`Absensi ${nama} telah dicatat.`);
    saveData(data);
}

function tampilkanAbsensi(data) {
    if (data.length === 0) {
        console.log("Belum ada data absensi.");
    } else {
        data.forEach((s, i) => {
            console.log(`${i + 1}. ${s.nama} - ${s.status}`);
        });
    }
}

function editAbsensi(data) {
    tampilkanAbsensi(data);
    const nomor = readline.questionInt("Pilih nomor siswa yang ingin diedit: ") - 1;
    if (data[nomor]) {
        const statusBaru = readline.question("Status baru (ya/tidak): ").toLowerCase();
        data[nomor].status = statusBaru === 'ya' ? 'Hadir' : 'Tidak Hadir';
        console.log(`Status ${data[nomor].nama} diperbarui.`);
        saveData(data);
    } else {
        console.log("Nomor tidak ditemukan.");
    }
}

function hapusAbsensi(data) {
    tampilkanAbsensi(data);
    const nomor = readline.questionInt("Pilih nomor yang ingin dihapus: ") - 1;
    if (data[nomor]) {
        const nama = data[nomor].nama;
        data.splice(nomor, 1);
        console.log(`Data absensi ${nama} dihapus.`);
        saveData(data);
    } else {
        console.log("Nomor tidak ditemukan.");
    }
}

function resetAbsensi() {
    saveData([]);
    console.log("Semua data absensi telah direset.");
}

// === MAIN LOOP ===
let data = loadData();

while (true) {
    console.log("\nMenu:\n1. Tambah Absensi\n2. Lihat Absensi\n3. Edit Absensi\n4. Hapus Absensi\n5. Reset Semua\n6. Keluar");
    const pilih = readline.question("Pilih: ");

    if (pilih === '1') tambahAbsensi(data);
    else if (pilih === '2') tampilkanAbsensi(data);
    else if (pilih === '3') editAbsensi(data);
    else if (pilih === '4') hapusAbsensi(data);
    else if (pilih === '5') { data = []; resetAbsensi(); }
    else if (pilih === '6') { console.log("Keluar."); break; }
    else console.log("Pilihan tidak valid.");

    readline.question("Klik enter untuk lanjut...");
}
