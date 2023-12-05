const path = require("path");

const filepath = path.join("/Memory/", "Path", "text.txt");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolutePath = path.resolve(__dirname, "Memory", "Path", "text.txt");
console.log(absolutePath);
