<div align="center">

<img src="assets/ghifarion/repo-banner.svg" alt="CEX ARBITRAGE CALCULATOR — Model fees. Compare outcomes. Decide with clarity." width="100%">

</div>

# Kalkulator Arbitrage CEX

Kalkulator web sederhana berbahasa Indonesia untuk memperkirakan hasil arbitrase token antar-centralized exchanges (CEX), dengan memperhitungkan biaya trading dan penarikan.

## Fitur

- Menghitung jumlah token berdasarkan modal USDT dan harga beli.
- Membandingkan harga beli dan harga jual.
- Memilih biaya trading maker atau taker untuk sisi beli dan jual.
- Memasukkan biaya penarikan dalam token dan USDT.
- Menampilkan nilai transaksi, estimasi biaya, laba kotor, laba bersih, dan persentase hasil.
- Menunjukkan apakah hasil perhitungan positif atau negatif.

## Cara menjalankan

Tidak memerlukan build tool atau instalasi package.

1. Unduh atau clone repository ini.
2. Buka `index.html` di browser modern.
3. Masukkan modal, harga beli/jual, biaya trading, dan biaya penarikan.
4. Jalankan kalkulasi untuk melihat estimasi hasil.

File utama:
- `index.html` — form input dan tampilan hasil.
- `script.js` — perhitungan biaya dan profit.
- `styles.css` — styling halaman.

## Catatan penting

Hasilnya hanya estimasi berdasarkan input pengguna dan rumus di aplikasi. Kalkulator ini bukan koneksi ke exchange, tidak mengambil harga pasar secara live, dan bukan nasihat investasi. Periksa aturan fee, likuiditas, slippage, batas penarikan, jaringan, dan risiko transfer sebelum melakukan transaksi nyata.
