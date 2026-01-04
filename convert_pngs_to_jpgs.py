#!/usr/bin/env python3
"""
Batch convert PNG images to JPG format for better compression.
This script converts all PNGs in the images/resized folder to JPGs
and removes the original PNG files.
"""

import os
from PIL import Image

def convert_png_to_jpg(png_path):
    """Convert a single PNG file to JPG format."""
    try:
        # Open the PNG
        with Image.open(png_path) as img:
            # Convert RGBA to RGB if needed (remove alpha channel)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background
                rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                # Paste image on white background
                if img.mode == 'P':
                    img = img.convert('RGBA')
                rgb_img.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = rgb_img
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Create output path with .jpg extension
            jpg_path = png_path.rsplit('.', 1)[0] + '.jpg'
            
            # Save as JPG with quality 85 (good balance of quality/size)
            img.save(jpg_path, 'JPEG', quality=85, optimize=True)
            
            print(f"✓ Converted: {os.path.basename(png_path)} -> {os.path.basename(jpg_path)}")
            
            # Remove original PNG
            os.remove(png_path)
            print(f"  Removed: {os.path.basename(png_path)}")
            
            return jpg_path
    except Exception as e:
        print(f"✗ Error converting {png_path}: {e}")
        return None

def main():
    """Convert all PNGs in the resized directory to JPGs."""
    resized_dir = "/Users/joshjacobs/Portfolio/images/resized"
    
    # Find all PNG files
    png_files = [f for f in os.listdir(resized_dir) 
                 if f.lower().endswith('.png') and os.path.isfile(os.path.join(resized_dir, f))]
    
    if not png_files:
        print("No PNG files found to convert.")
        return
    
    print(f"Found {len(png_files)} PNG files to convert\n")
    
    converted = []
    for i, filename in enumerate(png_files, 1):
        png_path = os.path.join(resized_dir, filename)
        print(f"[{i}/{len(png_files)}] Converting {filename}...")
        
        jpg_path = convert_png_to_jpg(png_path)
        if jpg_path:
            converted.append(filename)
        print()
    
    print(f"\n{'='*50}")
    print(f"Conversion complete!")
    print(f"Converted {len(converted)} of {len(png_files)} PNG files to JPG")
    print(f"{'='*50}\n")
    
    if converted:
        print("Next steps:")
        print("1. Update CSV file to change .png extensions to .jpg")
        print("2. Run csv_to_json_converter.py to update portfolio-data.js")
        print("3. Refresh your browser to see the changes")

if __name__ == "__main__":
    main()

