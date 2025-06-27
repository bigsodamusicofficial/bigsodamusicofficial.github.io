#!/usr/bin/env python3
"""
Resize images to 300x300 pixels.

This script requires the Pillow library to be installed:
pip install Pillow

Usage:
python resize_images.py /Users/joshjacobs/Portfolio/images/new_additions_01
"""

import os
from PIL import Image

def resize_image(input_path, output_path, size=(300, 300)):
    """Resize an image to the specified size."""
    try:
        with Image.open(input_path) as img:
            # Convert image mode if necessary
            if img.mode in ('RGBA', 'LA'):
                # Images with transparency
                background = Image.new('RGBA', size, (255, 255, 255, 255))
                img_resized = img.resize(size, Image.LANCZOS)
                position = ((size[0] - img_resized.width) // 2,
                           (size[1] - img_resized.height) // 2)
                background.paste(img_resized, position, img_resized)
                background.convert('RGB').save(output_path)
            else:
                # Regular images
                img_resized = img.resize(size, Image.LANCZOS)
                img_resized.save(output_path)
            print(f"Resized: {os.path.basename(input_path)} -> {os.path.basename(output_path)}")
    except Exception as e:
        print(f"Error resizing {input_path}: {e}")

def main():
    """Main function to resize all images."""
    import sys
    
    # Get input directory from command line argument or use default
    if len(sys.argv) > 1:
        input_dir = sys.argv[1]
    else:
        input_dir = "/Users/joshjacobs/Portfolio/images/new_additions_01"
    
    output_dir = "/Users/joshjacobs/Portfolio/images/resized"
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Get list of image files
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']
    image_files = [f for f in os.listdir(input_dir) 
                  if os.path.isfile(os.path.join(input_dir, f)) and 
                  not f.startswith('.') and
                  os.path.splitext(f)[1].lower() in image_extensions]
    
    print(f"Found {len(image_files)} images to process in {input_dir}")
    
    # Process each image
    for i, filename in enumerate(image_files, 1):
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, filename)
        print(f"[{i}/{len(image_files)}] Processing: {filename}")
        resize_image(input_path, output_path)
    
    print(f"Completed resizing {len(image_files)} images to 300x300.")

if __name__ == "__main__":
    main()