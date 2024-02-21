import {model, Schema} from 'mongoose';

const BookSchema = new Schema(
    {
        // title: required with a custom message, minimum length of 2 with a custom message, maximum length of 255 
            // with a custom message.
        title: {
            type: String,
            required: [true, "Title is required."],
            minlength: [2, "Title must be a minimum of 2 characters"],
            maxlength: [255, "Title must not longer than 255 characters"]
        },
        // author: required with a custom message, minimum length of 5 with a custom message, maximum length of 255 
            // with a custom message.
        author: {
            type: String,
            required: [true, "Author is required",],
            minlength: [5, "Author must be at least 5 characters"],
            maxlength: [255, "Author's name must not be longer than 255 characters"]
        },
        // pages: required with a custom message, minimum length of 1 with a custom message.
        pages: {
            type: Number,
            required: [true, "Book must have a page count"],
            min: [1, "Page count must be at least 1"]
        },
        // isAvailable: default of false.
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    // The schema should also have timestamps.
    { timestamps: true}
)
const Book = model("Book", BookSchema);

export default Book;