//require module
const http = require("http");

// Save the result of the createServer() method in a variable named server.
const server = http.createServer((req, res) => {
  res.end("Red Sox suck!");
});
// Call the server's listen() method with the port number 3001.
server.listen(3000, () => {
  console.log("Server is running at warp 3000");
});
