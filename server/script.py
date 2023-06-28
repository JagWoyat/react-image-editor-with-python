from PIL import Image
import os, sys

def create_mirror_image(input_image_path, output_image_path):
    image = Image.open(input_image_path)
    mirrored_image = image.transpose(Image.FLIP_LEFT_RIGHT)
    mirrored_image.save(output_image_path)


default_path = os.getcwd()
input_path = default_path + "/uploads/" + sys.argv[1]
output_path = default_path + "/output/" + sys.argv[2]
create_mirror_image(input_path, output_path)


