const { readFileSync, writeFileSync } = require("fs");

const firstText = readFileSync("./Memory/Fs/SyncMethod/First.txt", "utf-8");
const secondText = readFileSync("./Memory/Fs/SyncMethod/Second.txt", "utf-8");

writeFileSync(
  "./Memory/Fs/SyncMethod/Result.txt",
  `Here is the merge of first and second text : ${firstText} , ${secondText}`
);

console.log(firstText);
console.log(secondText);
