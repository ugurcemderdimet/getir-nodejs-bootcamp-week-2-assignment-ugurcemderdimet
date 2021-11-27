("use strict");
var http = require("http");
const fs = require("fs");

fs.writeFile("file.txt", "Logs:", function (err, data) {
  if (err) throw err;

  console.log("File created!");
});
http
  .createServer(function (request, response) {
    switch (request.url) {
      case "/":
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Ana sayfasindasiniz");
        break;
      case "/hakkimizda":
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hakkimizda sayfasindasiniz");
        break;
      default:
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 error! This page doesn't exist.");
        break;
    }
    fs.appendFile("file.txt", `${request.url} \n`, function (err, data) {
      if (err) throw err;
      console.log("Log saved!");
    });
    response.end();
  })
  .listen(8080);
