const express = require("express");
const router = express.Router();

const customerData = [
  {
    name: "alina",
    age: 20,
    id: 1,
  },
  {
    name: "alex",
    age: 23,
    id: 2,
  },
];

router.get("/", (req, res) => {
  res.send("ok");
});

// router.get("/:id", (req, res) => {
//   res.send("ok");
// });

module.exports = router;
