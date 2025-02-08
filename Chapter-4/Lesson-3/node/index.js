// fs
// buffer
// url

// fs
var fs = require("fs");

// readFile is a async, non-blocking code
fs.readFile("./test.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// writing into file
let content = "Hello, there!";

// write File created the file if doesn't exist
fs.writeFile("./test.txt", content, function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Data created & added");
});

console.log("hello");

// Synchronous
// const data = fs.readFileSync("./test.txt", "utf-8");
// const data = fs.writeFileSync("./test.txt", "utf-8");

// creating & removing folder/directory
// fs.mkdir("code", function (err) {
//   if (err) {
//     console.log(err);
//   }

//   console.log("folder created");
// });

// fs.rmdir("code", function (err) {
//   if (err) {
//     console.log(err);
//   }

//   console.log("folder removed");
// });

// Synchronous
// fs.mkdirSync("code");
// fs.rmdirSync("code");

// Buffer
const data = fs.readFileSync("./test.txt", "utf-8");
console.log(data);

// create a buffer
const bufferOne = new Buffer.alloc(10); //create a buffer of 10 bytes
console.log(bufferOne);

const bufferTwo = new Buffer.from([10, 20, 30, 40, 50]); //create a buffer of 5 bytes
console.log(bufferTwo);

const bufferThree = new Buffer.alloc(5, "hello", "utf-8");
console.log(bufferThree);

// extract data
const buf = new Buffer.alloc(5, "hello", "utf-8");
console.log(buf);
const str = buf.subarray(2, 4);
console.log(str); //return the buffer for text "ll"

//convert buffer to string
const strVal = buf.toString("utf-8", 0, buf.length); //0 and buf.legth is the index
console.log(strVal);

// copy buffer
const buff1 = Buffer.alloc(5, "world", "utf-8");
const buff2 = new Buffer.alloc(5);
buff1.copy(buff2); //copying the data from buff1 1 t buff 2
console.log(buff2.toString("utf-8"));

// url
const url = require("url");
const urlString =
  "https://www.almabetter.com/courses/full-stack-data-science?utm_source=Inorganic_google&utm_medium=data_science&utm_campaign=Brand|Search|2|AllGoals&utm_content=Brand-SKW-Desktop|Exact&utm_term=text_ad&gad_source=1&gclid=CjwKCAiAnpy9BhAkEiwA-P8N4iIjeFy8xGECmmdI1riBPKYKUVqdyjjBiaxJhPiMMuLZa05hU-sPzxoCinMQAvD_BwE";

const parseUrl = url.parse(urlString);
console.log(parseUrl); //object
console.log(parseUrl.search);
console.log(parseUrl.hostname);
console.log(parseUrl.pathname);

//create a url/format
const urlObject = {
  protocol: "https",
  slashes: true,
  auth: null,
  host: "www.hello.com",
  hostname: "www.hello.com",
  port: null,
  search: "?course=datascience",
  query: { course: "datascience" },
  hash: "#best",
  pathname: "/allcourses",
  path: "/allcourses/?course=datascience",
  href: "https://www.hello.com/allcourses/?course=datascience#best",
};

console.log(url.format(urlObject));
console.log(urlString);

// relative url
const fromUrl = "https://www.hello.com/allcourses/course/datascience";
const toUrl = "../course/wd";
const resolvedUrl = url.resolve(fromUrl, toUrl);
console.log(resolvedUrl);
