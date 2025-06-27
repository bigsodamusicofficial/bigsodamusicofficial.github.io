# Portfolio Website Project

## Project Overview
A highly-compatible, fast portfolio website with easy database management.

## Guidelines and Specifications

### Core Requirements
- **High Compatibility**: Must work across all modern browsers and devices
- **Performance**: Fast load times
- **Responsive Design**: Fully responsive from mobile to desktop
- **Single Page**: All content on a single, scrollable page

### Technical Specifications
- Three.js for 3D cube animations and interactions
- JavaScript for core functionality
- Simple, lightweight implementation
- Easy system for adding new portfolio entries
- Minimal dependencies
- Focus on absolute minimalism

### Features
- Single page portfolio showcase
- Simple method to add and update content

### User Experience
- Interactive 3D cubes representing portfolio items
- Each face of the cube displays a different semi-low-resolution image related to the project
- Cubes rotate and move around the page
- Click interaction to view portfolio item details
- Visually engaging yet minimal interface

### Technical Implementation
- Three.js for 3D cube rendering
- Array of materials with individual textures for each cube face
- Optimized for performance across devices
- Simple data structure to define cube content and images

### Assets
- 36 images stored in /images directory
- All images resized to 300x300 pixels for consistent cube faces
- Images will be mapped to cube faces as textures
- Smaller image sizes improve loading performance

### Project Structure
- `index.html` - Main HTML file
- `css/style.css` - Styling for the portfolio
- `js/main.js` - Three.js implementation
- `images/` - Portfolio images (300x300 pixels)

### Setup & Usage

To run the portfolio viewer with local images, you **must** use a local web server:

```bash
# Using Python's built-in HTTP server (recommended)
python -m http.server

# OR using Node.js with serve
npx serve
```

Then open the demo in your browser:
- Main Portfolio: http://localhost:8000/index.html
- Single Image Demo: http://localhost:8000/single-image-demo.html

#### Why a Web Server is Required

Browsers restrict JavaScript from loading local resources (like images) when opening HTML files directly from the filesystem (using the file:// protocol). This is a security measure to prevent web pages from accessing files on your computer without permission.

A web server makes your files available through the http:// protocol, which allows JavaScript to load local resources like images for textures.

### Data Management
- Portfolio items are embedded directly in the JavaScript code
- Each portfolio item is represented as a 3D cube
- Cubes are clickable and show information when clicked
- Info panels link to external URLs when clicked
- Local web server required for loading local images
- Data structure includes:
  - ID: Unique identifier for each project
  - Title: Name of the portfolio item
  - Description: Short text describing the project
  - URL: External link to the project
  - Images: 6 image paths (one for each face of the cube)
  - Tags: Categories or keywords
  - Date: Creation or publication date

### Current Implementation
- Data is embedded directly in main.js for simplicity
- Run a local web server to view the portfolio
- Access via http://localhost:8000/index.html

### Portfolio Item Structure (Revised)
```javascript
{
    "id": "project-id",
    "title": "Project Title",
    "description": "Project description text.",
    "url": "https://example.com/project",
    "image": "path/to/image.jpg", // Single image used for all cube faces
    "tags": ["tag1", "tag2"],
    "date": "YYYY-MM-DD"
}
```

The main change is that each portfolio item now has a single `image` property instead of an array of six images. This single image is used for all six faces of the cube, creating a consistent appearance.

### Adding New Portfolio Items
To add a new portfolio item:
1. Edit js/main.js
2. Add a new object to the projectData array
3. Specify a single image (300x300px) for the cube
4. Save the file and reload the page