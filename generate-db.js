// Script to generate a portfolio database with all images in the directory

// List of all image files
const imageFiles = [
  'images/big_apy.jpg',
  'images/big_beber.jpg',
  'images/big_eat.jpg',
  'images/big_lsfe.jpg',
  'images/big_monk.jpg',
  'images/big_sfrp.png',
  'images/iocl_lil.jpg',
  'images/kah-small.jpg',
  'images/lil_apy.png',
  'images/lil_big_big_big.jpg',
  'images/lil_big_p.png',
  'images/lil_blckteeshrt.jpg',
  'images/lil_bloom.jpg',
  'images/lil_bs.jpg',
  'images/lil_dancing.jpg',
  'images/lil_femboy.jpg',
  'images/lil_fermis.jpg',
  'images/lil_fn.jpg',
  'images/lil_fn_2.jpg',
  'images/lil_fortress.png',
  'images/lil_geppetto.png',
  'images/lil_hang.jpg',
  'images/lil_homie.jpg',
  'images/lil_ib.jpg',
  'images/lil_inmyway.png',
  'images/lil_izeth.png',
  'images/lil_pricetag.png',
  'images/lil_spotlight.png',
  'images/lil_sst.jpg',
  'images/lil_sugarhead.jpg',
  'images/lil_surfsup.png',
  'images/lil_wwdosv.jpg',
  'images/qamp-lil.png',
  'images/quo-small.jpg',
  'images/up2-small.jpg'
];

// Generate portfolio database
const portfolioDatabase = imageFiles.map((imagePath, index) => {
  // Extract image name without path and extension
  const fullFilename = imagePath.split('/').pop();
  const filename = fullFilename.split('.')[0];
  
  // Create a title from the filename by replacing underscores with spaces and capitalizing
  const title = filename
    .replace(/_/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
  
  return {
    id: filename,
    title: title,
    description: `Portfolio item featuring ${title}. Click to discover more about this project.`,
    url: `https://google.com/search?q=${encodeURIComponent(filename)}`,
    image: imagePath,
    tags: ["portfolio", "image", filename],
    date: new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD format
  };
});

// Print the database as formatted JSON
console.log(JSON.stringify(portfolioDatabase, null, 2));