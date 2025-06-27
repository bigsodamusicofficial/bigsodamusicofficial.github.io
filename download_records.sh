#!/bin/bash

# Directory to save files
OUTPUT_DIR="/Users/joshjacobs/Portfolio/bigsoda_records"

# GitHub repository info
REPO="bigsodamusicofficial/bigsodamusicofficial.github.io"
BRANCH="master"
FOLDER="records"

# Make sure output directory exists
mkdir -p "$OUTPUT_DIR"

# Get list of files from GitHub API
echo "Fetching file list from $REPO/$FOLDER..."
FILES=$(curl -s "https://api.github.com/repos/$REPO/contents/$FOLDER?ref=$BRANCH" | grep -o '"download_url": *"[^"]*"' | grep -o 'https://[^"]*')

# Download each file
echo "Downloading files to $OUTPUT_DIR..."
for file in $FILES; do
    filename=$(basename "$file")
    echo "Downloading $filename..."
    curl -s -L "$file" -o "$OUTPUT_DIR/$filename"
done

echo "Download complete! Files saved to $OUTPUT_DIR"