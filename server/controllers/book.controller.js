import Book from '../models/book.model.js'

async function getAllBooks(req, res) {
    try {
        const allBooks = await Book.find();
        res.json(allBooks)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

async function createBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getOneBook(req, res) {
    try {
        const selectedBook = await Book.findById(req.params.id);
        res.json(selectedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function editOneBook(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook)
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    getAllBooks,
    createBook,
    getOneBook,
    editOneBook,
    deleteBook
};