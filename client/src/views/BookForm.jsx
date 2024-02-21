import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BookForm = () => {
    // names must be the same as the fields in the model
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState(1)
    const [isAvailable, setIsAvailable] = useState(false)

    const navigate = useNavigate();

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }

    const authorHandler = (e)  => {
        setAuthor(e.target.value);
    }

    const pagesHandler = (e) => {
        setPages(e.target.value);
    }

    const isAvailableHandler = (e) => {
        setIsAvailable(e.target.checked);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/books', {
            title,
            author,
            pages,
            isAvailable
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="bookForm">
            <form onSubmit={submitHandler} className="form" >
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={titleHandler}/>

                <label htmlFor="author">Author Name</label>
                <input type="text" id="author" value={author} onChange={authorHandler}/>

                <label htmlFor="pages">Page Count</label>
                <input type="number" id="pages" value={pages} onChange={pagesHandler}/>

                <label htmlFor="isAvailable">Is it Available</label>
                <input type="checkbox" id="isAvailable" value={isAvailable} onChange={isAvailableHandler}/>
                <button>
                    Add Book!
                </button>
            </form>
        </div>
    )
}

export default BookForm