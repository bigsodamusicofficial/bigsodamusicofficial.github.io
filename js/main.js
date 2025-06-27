// Portfolio Cube Viewer
// Main JavaScript file for the interactive 3D cube portfolio

// Global variables
let scene, camera, renderer;
let cubes = [];
let raycaster, mouse;
let loadingManager;
let projectData = [];

// Initialize the scene, camera, and renderer
function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('canvas').appendChild(renderer.domElement);

    // Setup raycaster for mouse interaction
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // Setup controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 5;
    controls.maxDistance = 30;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Create loading manager
    loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = function() {
        document.getElementById('loading').style.display = 'none';
    };

    // Add event listeners
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('click', onMouseClick, false);

    // Load project data
    loadProjectData();
}

// Load project data directly from JavaScript
function loadProjectData() {
    // Portfolio data embedded directly to avoid need for server
    projectData = [
        {
            "id": "project1",
            "title": "Project One",
            "description": "This is the first portfolio item description with details about the project.",
            "url": "https://example.com/project1",
            "images": [
                "images/big_apy.jpg",
                "images/big_beber.jpg",
                "images/big_eat.jpg",
                "images/big_lsfe.jpg",
                "images/big_monk.jpg",
                "images/big_sfrp.png"
            ],
            "tags": ["design", "3D"],
            "date": "2023-06-15"
        },
        {
            "id": "project2",
            "title": "Project Two",
            "description": "The second project showcases different skills and technologies.",
            "url": "https://example.com/project2",
            "images": [
                "images/lil_bs.jpg",
                "images/lil_dancing.jpg",
                "images/lil_femboy.jpg",
                "images/lil_fermis.jpg",
                "images/lil_fn.jpg",
                "images/lil_fn_2.jpg"
            ],
            "tags": ["web", "interactive"],
            "date": "2023-08-22"
        },
        {
            "id": "project3",
            "title": "Project Three",
            "description": "The third project demonstrates additional capabilities and creative direction.",
            "url": "https://example.com/project3",
            "images": [
                "images/lil_fortress.png",
                "images/lil_geppetto.png",
                "images/lil_hang.jpg",
                "images/lil_homie.jpg",
                "images/lil_ib.jpg",
                "images/lil_inmyway.png"
            ],
            "tags": ["animation", "creative"],
            "date": "2023-11-05"
        },
        {
            "id": "cosmic-beats",
            "title": "Cosmic Beats",
            "description": "An experimental music visualization project that explores the intersection of sound and visual art. Click to discover more.",
            "url": "https://google.com",
            "images": [
                "images/big_monk.jpg",
                "images/lil_sugarhead.jpg",
                "images/lil_femboy.jpg",
                "images/iocl_lil.jpg",
                "images/lil_sst.jpg",
                "images/up2-small.jpg"
            ],
            "tags": ["music", "visualization", "experimental"],
            "date": "2024-06-23"
        }
    ];
    
    // Create cubes immediately since data is already loaded
    createCubes();
    
    // Hide loading message
    document.getElementById('loading').style.display = 'none';
}

// Create cubes for each project
function createCubes() {
    const textureLoader = new THREE.TextureLoader(loadingManager);
    const cubeSize = 2;
    const spacing = 5;

    projectData.forEach((project, index) => {
        // Load textures for each face
        const materials = project.images.map(imagePath => {
            return new THREE.MeshBasicMaterial({
                map: textureLoader.load(imagePath)
            });
        });

        // Create cube
        const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
        const cube = new THREE.Mesh(geometry, materials);

        // Position cube in a circle
        const angle = (index / projectData.length) * Math.PI * 2;
        cube.position.x = Math.cos(angle) * spacing;
        cube.position.z = Math.sin(angle) * spacing;
        
        // Add to scene and cubes array
        scene.add(cube);
        cubes.push({
            mesh: cube,
            projectIndex: index,
            rotationSpeed: {
                x: 0.005 + Math.random() * 0.005,
                y: 0.005 + Math.random() * 0.005
            }
        });
    });
}

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Handle mouse movement
function onMouseMove(event) {
    // Calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

// Handle mouse click
function onMouseClick() {
    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(cubes.map(cube => cube.mesh));

    if (intersects.length > 0) {
        // Find which cube was clicked
        const clickedCube = cubes.find(cube => cube.mesh === intersects[0].object);
        if (clickedCube) {
            displayProjectInfo(clickedCube.projectIndex);
        }
    } else {
        // Hide project info when clicking away
        document.getElementById('info').style.display = 'none';
    }
}

// Display project information
function displayProjectInfo(projectIndex) {
    const project = projectData[projectIndex];
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;
    
    // Add link functionality
    const infoElement = document.getElementById('info');
    infoElement.style.display = 'block';
    
    // Set click handler for the info panel
    infoElement.onclick = function() {
        if (project.url) {
            window.open(project.url, '_blank');
        }
    };
    
    // Add visual cue that it's clickable
    infoElement.style.cursor = 'pointer';
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate each cube
    cubes.forEach(cube => {
        cube.mesh.rotation.x += cube.rotationSpeed.x;
        cube.mesh.rotation.y += cube.rotationSpeed.y;
    });

    // Render scene
    renderer.render(scene, camera);
}

// Start the application
init();
animate();