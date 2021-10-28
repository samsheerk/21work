// var fs = require("fs");

// fs.writeFileSync("read.txt", "welcome to my NODE");

// var fs = require("fs");

// fs.appendFile("read.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

var fs = require("fs");

fs.rename("read.txt", "myrenamedfile.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
