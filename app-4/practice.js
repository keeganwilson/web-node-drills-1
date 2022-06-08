const fs = require("fs");
const path = require("path");

fs.appendFile(path.join(__dirname, "text.txt"), "Red Sox still suck", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Red Sox status updated");
  }
});

fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data, "Text read!");
  }
});

fs.writeFile(__dirname + "/text.txt", "Red Sox will suck forever", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Red Sox status updated");
  }
});

fs.rename(__dirname + "/text.txt", __dirname + "/redSoxSuck.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Renamed!");
  }
});

fs.unlink(__dirname + "/text.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Unlinked!");
  }
});
