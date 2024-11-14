import os

# Define the correct file path
file_path = r"D:\ODIN PROJECT\Javascript-Expert\Kriteria_dan_Bobot.txt"

# Check if the directory exists; if not, create it
os.makedirs(os.path.dirname(file_path), exist_ok=True)

# Writing to the file
with open(file_path, "w") as file:
    file.write("Kriteria\tBobot\n")
    file.write("Skor Pengguna\t0.50\n")
    file.write("Popularitas\t0.20\n")
    file.write("Jumlah Anggota Komunitas\t0.15\n")
    file.write("Jumlah Episode (>=23)\t0.10\n")
    file.write("Durasi (>=23 menit)\t0.05\n")

print("File has been written successfully.")
