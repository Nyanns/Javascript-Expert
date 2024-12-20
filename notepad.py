import os

# Define the correct file path
file_path = r"D:\ODIN PROJECT\Javascript-Expert\Kriteria_dan_Bobot.txt"

# Check if the directory exists; if not, create it
os.makedirs(os.path.dirname(file_path), exist_ok=True)

# Create the content for the Notepad file in table format
content = """+-------------------------------------+-------+
| Kriteria                           | Bobot |
+-------------------------------------+-------+
| Skor Pengguna                      | 0.50  |
| Popularitas                         | 0.20  |
| Jumlah Anggota Komunitas            | 0.15  |
| Jumlah Episode (>=23)               | 0.10  |
| Durasi (>=23 menit)                 | 0.05  |
+-------------------------------------+-------+

Penjelasan Pemberian Bobot
Skor Pengguna (0.50): Dengan bobot tertinggi, skor pengguna mencerminkan aspek utama dari kualitas anime sesuai persepsi penonton.
Popularitas (0.20): Meskipun di bawah skor pengguna, popularitas tetap penting dalam menunjukkan daya tarik anime.
Jumlah Anggota Komunitas (0.15): Banyaknya anggota komunitas menunjukkan basis penggemar yang kuat dan diatur sebagai faktor penting ketiga.
Jumlah Episode (0.10): Jumlah episode memberikan nilai tambah dalam variasi cerita, dengan bobot sedang.
Durasi (0.05): Durasi per episode menjadi aspek tambahan dengan pengaruh yang lebih kecil pada kualitas keseluruhan."""

# Save to a .txt file
with open(file_path, "w") as file:
    file.write(content)

file_path
