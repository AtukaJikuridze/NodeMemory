const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`<div style="background-color: #aa8c8c;">
  <h1>Click for money</h1>
  <button>Click Me</button>
  </div>`);
});
server.listen(5000);
