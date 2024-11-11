const fs = require("fs");
const path = require("path");

const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(path.resolve(filePath), "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return null;
  }
};

const writeFile = (filePath, data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(path.resolve(filePath), jsonData, "utf8");
    console.log(`Write to ${filePath}`);
  } catch (error) {
    console.error(`Error writing to file ${filePath}:`, error);
  }
};

module.exports = { readFile, writeFile };
