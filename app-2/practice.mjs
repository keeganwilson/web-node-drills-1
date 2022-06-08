//import module
import http from "http";

const server = http.createServer((req, res) => {
  res.end("Red Sox still suck");
});
// Save the result of the createServer() method in a variable named server.
server.listen(3000, () => {
  console.log("Server running at warp 3000");
});
// Call the server's listen() method with the port number 3001.
