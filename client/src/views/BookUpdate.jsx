import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const BookUpdate = ({setUpdateTitle}) => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState(1)
    const [isAvailable, setIsAvailable] = useState(false)
    const { id } = useParams();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then(res=>{
            console.log(res.data);
            setTitle(res.data.title);
            setAuthor(res.data.author);
            setPages(res.data.pages);
            setIsAvailable(res.data.isAvailable);
            setUpdateTitle(res.data.title);
        })
        .catch((err)=> {
            console.log(err,"error message");
        })
    },[id])

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
        axios.patch(`http://localhost:8000/api/books/${id}`, {
            title,
            author,
            pages,
            isAvailable
        })
        .then( res => {
            console.log(res);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
            console.log("error messages");
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }

    return (
        <div className="bookForm">
            <form onSubmit={submitHandler} className="form" >
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={title} onChange={titleHandler}/>
                {errors.title && <p style={{color: "red"}}>{errors.title.message}</p>}

                <label htmlFor="author">Author Name</label>
                <input type="text" id="author" name="author" value={author} onChange={authorHandler}/>
                {errors.author && <p style={{color: "red"}}>{errors.author.message}</p>}

                <label htmlFor="pages">Page Count</label>
                <input type="number" id="pages" name="pages" value={pages} onChange={pagesHandler}/>
                {errors.pages && <p style={{color: "red"}}>{errors.pages.message}</p>}

                <label htmlFor="isAvailable">Is it Available</label>
                <input type="checkbox" id="isAvailable" name="isAvailable" checked={isAvailable} onChange={isAvailableHandler}/>
                <button>
                    Update
                </button>
            </form>
        </div>
    )
}

export default BookUpdate