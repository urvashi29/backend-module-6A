const express = require("express");
const Book = require("../models/bookModal");
const routes = express.Router();

// Creating a new book
routes.post("/books", async (req, res) => {
  try {
    //validate
    const newBook = new Book(req.body);
    await newBook.save(); //It is saving new document in collection.
    res.status(201).json(newBook);
    return;
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// get all the books
routes.get("/books", async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({ book: books });
    return;
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//delete
routes.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "record not exit" });
    }
    res.status(200).json({ message: "book delete successfully" });
  } catch (err) {
    res.status(500).json({ error: "record not exit" });
  }
});

// update
routes.put("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ error: "record not exit" });
    }
    res.status(200).json({ message: "updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "record not exit" });
  }
});

module.exports = routes;
