#!/usr/bin/env python3
"""
CSV to Portfolio Database JSON Converter

This script converts a CSV file containing project data into the portfolio-data.js 
format used by the portfolio website.

Expected CSV format:
id,artistName,projectName,description,url,image,projectType,releaseDate

Example:
big_apy,Josh Jacobs,Big Apy,Portfolio item featuring Big Apy,https://google.com/search?q=big_apy,images/big_apy.jpg,Music Production,2023-06-15
"""

import csv
import json
import os
import sys
from datetime import datetime

def validate_date(date_str):
    """Validate date string format (YYYY-MM-DD)"""
    try:
        datetime.strptime(date_str, '%Y-%m-%d')
        return True
    except ValueError:
        return False

def convert_csv_to_json(csv_path, output_path=None):
    """Convert CSV file to portfolio database JSON format"""
    
    # Default output path if not specified
    if output_path is None:
        output_path = 'portfolio-data.json'
    
    # Validate input file exists
    if not os.path.exists(csv_path):
        print(f"Error: CSV file '{csv_path}' not found.")
        return False
    
    portfolio_items = []
    project_types = set()  # To collect unique project types
    
    # Read CSV file
    try:
        with open(csv_path, 'r', encoding='utf-8') as csv_file:
            reader = csv.DictReader(csv_file)
            
            # Check required columns
            required_columns = ['id', 'artistName', 'projectName', 'description', 
                              'url', 'image', 'projectType', 'releaseDate']
            
            if not all(col in reader.fieldnames for col in required_columns):
                missing = [col for col in required_columns if col not in reader.fieldnames]
                print(f"Error: CSV is missing required columns: {', '.join(missing)}")
                return False
            
            # Process each row
            for row_num, row in enumerate(reader, start=2):  # Start at 2 to account for header row
                # Validate required fields
                if not all(row[col].strip() for col in required_columns):
                    empty = [col for col in required_columns if not row[col].strip()]
                    print(f"Warning: Row {row_num} has empty values for: {', '.join(empty)}")
                
                # Validate date format
                if not validate_date(row['releaseDate']):
                    print(f"Warning: Row {row_num} has invalid date format. Expected YYYY-MM-DD, got: {row['releaseDate']}")
                
                # Add project type to set
                project_types.add(row['projectType'])
                
                # Add to portfolio items
                portfolio_items.append({
                    'id': row['id'],
                    'artistName': row['artistName'],
                    'projectName': row['projectName'],
                    'description': row['description'],
                    'url': row['url'],
                    'image': row['image'],
                    'projectType': row['projectType'],
                    'releaseDate': row['releaseDate']
                })
    
    except Exception as e:
        print(f"Error reading CSV file: {e}")
        return False
    
    
    project_type_order = ["Selected Works"]
        #"Is Our Children Learning",
        #"Big Soda",
        #"Surfer Dave",
        #"poochdreams",
        #"as primary producer",
        #"as co-producer",
        #"as mixer/engineer",
        #"as featured producer",
        #"as featured musician",
      #]#list(project_types)#sorted(list(project_types))
    
    # Create final structure with both portfolio items and project type order
    portfolio_data = {
        'portfolioDatabase': portfolio_items,
        'projectTypeOrder': project_type_order
    }
    
    # Write to JSON file
    try:
        with open(output_path, 'w', encoding='utf-8') as json_file:
            json.dump(portfolio_data, json_file, indent=2)
        
        print(f"Successfully converted {len(portfolio_items)} items to {output_path}")
        return True
        
    except Exception as e:
        print(f"Error writing JSON file: {e}")
        return False

def convert_to_js_file(json_path, js_path=None):
    """Convert JSON file to JavaScript file for direct import"""
    
    # Default output path if not specified
    if js_path is None:
        js_path = 'js/portfolio-data.js'
    
    try:
        # Read JSON data
        with open(json_path, 'r', encoding='utf-8') as json_file:
            data = json.load(json_file)
        
        # Create JavaScript content
        js_content = "// Portfolio database with project type grouping\n"
        js_content += "const portfolioDatabase = " + json.dumps(data['portfolioDatabase'], indent=2) + ";\n\n"
        js_content += "// Define the project type order (for consistent display)\n"
        js_content += "const projectTypeOrder = " + json.dumps(data['projectTypeOrder'], indent=2) + ";\n"
        
        # Write to JS file
        with open(js_path, 'w', encoding='utf-8') as js_file:
            js_file.write(js_content)
        
        print(f"Successfully created JavaScript file: {js_path}")
        return True
        
    except Exception as e:
        print(f"Error creating JavaScript file: {e}")
        return False

def main():
    """Main function to handle command-line usage"""
    if len(sys.argv) < 2:
        print("Usage: python csv_to_json_converter.py project_database.csv [output.json] [output.js]")
        return
    
    csv_path = sys.argv[1]
    json_path = sys.argv[2] if len(sys.argv) > 2 else 'portfolio-data.json'
    js_path = sys.argv[3] if len(sys.argv) > 3 else 'js/portfolio-data.js'
    
    # Convert CSV to JSON
    if convert_csv_to_json(csv_path, json_path):
        # Convert JSON to JS
        convert_to_js_file(json_path, js_path)

if __name__ == '__main__':
    main()