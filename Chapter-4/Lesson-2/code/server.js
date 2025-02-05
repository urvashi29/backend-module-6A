// var http = require("http");

// // create node server
// var server = http.createServer(function (req, res) {
//   console.log(res);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log("Listening to port 3000");
// });

// do request to a specific host
// var http = require("http");

// const options = {
//   hostname: "www.google.com",
//   post: 80,
//   path: "/",
//   method: "GET",
// };

// const req = http.request(options, (res) => {
//   console.log(res.statusCode);

//   res.on("data", (data) => {
//     // console.log(data);//buffer
//     process.stdout.write(data);//html
//   });

//   res.on("error", (error) => {
//     console.log(err);
//   });
// });

// req.end();

//Path module
// const path = require("path");

// const normalizePath = path.normalize('/hd/dhe///deudhke/dehded----/ededkej/...');
// console.log(normalizePath);

// const joinedPath = path.join("/hdj", "idjij", "djf/hdufji", "...");
// console.log(joinedPath);

// const resolvePath = path.resolve("hch/jeidjie", "/yhdeij/edhie/", '/..', "a/jdil/..dbue");
// console.log(resolvePath);

// console.log(path);

// OS 
const os = require("os");
console.log(os);
console.log(os.platform());
console.log(os.hostname());
console.log(os.arch());

// fs
