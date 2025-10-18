from PIL import Image
import os

all_files = os.listdir(".")

print("All files to convert:", all_files)

all_files.remove("main.py")

for file in all_files:
    img = Image.open(file)
    img.save(f"{os.path.splitext(file)[0]}.webp", format="webp", quality=100)
