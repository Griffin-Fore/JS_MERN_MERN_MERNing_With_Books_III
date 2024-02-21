import {Router} from 'express'
import { getAllBooks,
        createBook,
        getOneBook,
        editOneBook,
        deleteBook } from '../controllers/book.controller.js'

const router = Router()

router.route('/books')
    .get(getAllBooks)
    .post(createBook)

router.route('/books/:id')
    .get(getOneBook)
    .put(editOneBook)
    .delete(deleteBook)

export default router;