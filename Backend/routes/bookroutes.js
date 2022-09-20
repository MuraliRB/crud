const express = require("express");
const router = express.Router();
const Book = require("../model/book")
const BookContoller = require("../controllers/bookcontroller")


router.get("/",BookContoller.getAllBooks);
router.post("/",BookContoller.addBook);
router.get("/:id",BookContoller.getById);
router.put("/:id",BookContoller.updateBook)
router.delete("/:id",BookContoller.deleteBook)

module.exports = router;

