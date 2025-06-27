#!/usr/bin/env python3
"""
Resize images to 300x300 pixels and prepare them for the portfolio.

This script:
1. Takes images from the new_additions_01 folder
2. Resizes them to 300x300 pixels and places them in the images/resized folder
3. Removes the original images from new_additions_01 folder

This script requires the Pillow library to be installed:
pip install Pillow

Usage:
python resize_images.py
"""

import os
import shutil
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
            return True
    except Exception as e:
        print(f"Error resizing {input_path}: {e}")
        return False

def remove_original_file(file_path):
    """Remove the original image file."""
    try:
        os.remove(file_path)
        print(f"Removed original file: {os.path.basename(file_path)}")
        return True
    except Exception as e:
        print(f"Error removing {file_path}: {e}")
        return False

def main():
    """Main function to resize all images and prepare them for the portfolio."""
    # Define directory paths
    base_dir = "/Users/joshjacobs/Portfolio"
    input_dir = os.path.join(base_dir, "images/new_additions_01")
    resized_dir = os.path.join(base_dir, "images/resized")
    
    # Create output directories if they don't exist
    os.makedirs(resized_dir, exist_ok=True)
    
    # Get list of image files
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']
    image_files = [f for f in os.listdir(input_dir) 
                  if os.path.isfile(os.path.join(input_dir, f)) and 
                  not f.startswith('.') and
                  os.path.splitext(f)[1].lower() in image_extensions]
    
    print(f"Found {len(image_files)} images to process in {input_dir}")
    
    # Process each image
    processed_files = []
    for i, filename in enumerate(image_files, 1):
        input_path = os.path.join(input_dir, filename)
        resized_path = os.path.join(resized_dir, filename)
        
        print(f"[{i}/{len(image_files)}] Processing: {filename}")
        
        # Step 1: Resize image to 300x300
        resize_success = resize_image(input_path, resized_path)
        
        # Step 2: Remove the original file after successful resize
        if resize_success:
            remove_success = remove_original_file(input_path)
            if remove_success:
                processed_files.append(filename)
    
    print(f"\nCompleted processing {len(processed_files)} images:")
    for file in processed_files:
        print(f"  - {file}")
    
    print("\nNext steps:")
    print("1. Add these images to your portfolio-data.js file with 'images/resized/{filename}' path")
    print("2. Update your index.html if needed")
    print("3. Commit and push changes to GitHub")

if __name__ == "__main__":
    main()