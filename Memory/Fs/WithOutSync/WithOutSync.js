const { readFile, writeFile } = require("fs");

readFile("./Memory/Fs/WithOutSync/Test.txt", "utf-8", (err, result) => {
  if (err) return;
  const first = result;

  readFile("./Memory/Fs/WithOutSync/SecondTest.txt", "utf-8", (err, result) => {
    if (err) return;
    const second = result;
    writeFile(
      "./Memory/Fs/WithOutSync/resut-async.txt",
      `here is the results : ${first}, ${second}`,
      (err, result) => {
        console.log("err :", err);
        if (err) return;
      }
    );
  });
});
