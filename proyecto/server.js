var http = require("http");

function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("¡Probando Node.js!");
  response.end();
}

http.createServer(onRequest).listen(8888); 

console.log("Servidor Iniciado.");