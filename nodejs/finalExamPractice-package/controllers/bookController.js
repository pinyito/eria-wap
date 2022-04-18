const express = require('express');
const Book = require('../models/book');

module.exports.fetchById = (req, res, next) => {
    res.json(Book.getById(req.params.bookId));
};
module.exports.saveBook = (req, res) => {
    let book = req.body;
    let newBook = new Book(null, book.title, book.author).save();
    res.json(newBook);
};
module.exports.searchByAuthor = (req, res, next) => {
    res.json(Book.getByAuthor(req.query.firstname));
};