// const http = require("http");

// // node js server
// // server/api/service
// const server = http.createServer((req, res) => {
//   console.log("Request method is", req.method);
//   //   if(req.method === "GET") {
//   //     res.send({})
//   //   }
//   //    if(req.method === "POST") {
//   //         res.send({})
//   //       }
//   res.end("end");
// });

// server.listen(3000, () => {
//   console.log("http node setver listening on 3000");
// });

// ExpressJS
const express = require("express");
const app = express();

// app.use(middleware)
app.use(express.json()); //middleware (express.json())

//In real time, data from DB
const employees = [
  {
    name: "alina",
    id: 1,
    salary: 989889,
    city: "Mumbai",
  },
  {
    name: "alex",
    id: 2,
    salary: 129889,
    city: "Banglore",
  },
];

// user will do get request
// app.method("path", fun(req,res))
app.get("/employees", (req, res) => {
  res.status(200).json({ data: employees });
});

//specific employee data
app.get("/employees/:id", (req, res) => {
  const id = req.params.id;

  let employee = employees.find((e) => (e.id = id));
  if (employee) {
    res.status(200).json({ employee });
  } else {
    res.status(404).json({ message: "employee not exist" });
  }
});

// post method
app.post("/employees", (req, res) => {
  //   console.log(req.body); //
  const emp = req.body;

  //   validate request
  for (let key in emp) {
    if (key == "name" || key == "id" || key === "salary" || key == "city") {
      continue;
    } else {
      res
        .status(400)
        .json({ message: "Bad Request. Employee data is incorrect" });
    }
  }
  employees.push(emp);
  res.status(201).json({ data: emp });
});

app.put("/employee/:id", (req, res) => {
  let emp = req.body; //updated employee object
  let id = req.params.id;
  employees.splice(
    employees.findIndex((e) => e.id == id),
    1
  );
  employees.push(emp);
  res.status(200).json({ data: emp });
});

app.listen(3000, () => {
  console.log("Appliction is running at 3000");
});

// Try
// patch: update particular property
// delete: employee delete
