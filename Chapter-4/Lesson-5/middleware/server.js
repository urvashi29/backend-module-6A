const express = require("express");
// var uuid = require("uuid");

const app = express();

const customerRoutes = require("./routes/customer");

// // middleware
// app.use(express.static("public", { maxAge: 50000 }));

// //all the route
// // app.use(express.urlencoded());

// //specific route
// app.use("/employee", express.urlencoded());

// // creating custom middleware
// app.use((req, res, next) => {
//   if (!req.headers["x-request-id"]) {
//     res.setHeader("x-request-id", uuid.v4());
//   }

//   next();
// });

// // app.get("/", (req, res) => {
// //   res.send("ok");
// // });

// // app.get("",function, function)

// app.get(
//   "/",
//   (req, res, next) => {
//     console.log(req.body);
//     next();
//     // res.send("first");
//   },
//   (req, res, next) => {
//     console.log(req.body);
//     res.send("second middleware");
//   }
// );

// app.post("/employee", (req, res) => {
//   console.log(req.body);
//   res.send("ok");
// });

// app.post("/student", (req, res) => {
//   console.log(req.body);

//   res.send("ok");
// });

// // Error handling
// // sync
// app.get("/syncerror", (req, res) => {
//   try {
//     throw new Error("getting an error");
//   } catch (err) {
//     // res.status(500).json({ message: err.message });
//     next(err);
//   }
// });

// // async
// app.get("/asyncerror", (req, res, next) => {
//   setTimeout(() => {
//     try {
//       throw new Error("getting an error");
//     } catch (err) {
//       next(err);
//     }
//   }, 1000);
// });
// // common middleware for error handling
// app.use((error, req, res, next) => {
//   if (error) {
//     res.status(500).json({ message: `error message is ${error.message} ` });
//   }
// });

app.use("/customer", customerRoutes);
// app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("listenning at 3000");
});
