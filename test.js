const fs = require('fs').promises;
const path = require('path');

async function checkForTxtFiles(folderPath) {
    try {
        // Read all items in the specified directory
        const files = await fs.readdir(folderPath);
        
        // Check if at least one file ends with '.txt'
        const hasTxtFiles = files.some(file => path.extname(file).toLowerCase() === '.txt');
        
        if (hasTxtFiles) {
            console.log("Yes, .txt files exist in the folder.");
        } else {
            console.log("No .txt files found in the folder.");
        }
        return hasTxtFiles;
    } catch (error) {
        console.error("Error reading the folder:", error.message);
        return false;
    }
}
checkForTxtFiles('.');