import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Home = () => {
    const [ books, setBooks] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
        .then((res) => {
            console.log(res.data);
            setBooks(res.data);
        })
        .catch((err) => {
            console.log(err)
        }, [])
    })
    // when you call axios.get("http://localhost:8000/api/books") from your frontend React component, 
    // it triggers the corresponding endpoint in your backend server, which then fetches and returns the books data. 
    // Finally, the frontend receives this data in the res.data object, which you can then use to update your 
    // component's state (setBooks(res.data)).

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Page Count</th>
                        <th>Is Available</th>
                        <th>Book Page</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.pages}</td>
                                <td style={{ color: book.isAvailable ? "green" : "red" }}>{book.isAvailable ? "yes" : "no"}<Link to={`/book/${book._id}/update`}>Edit</Link></td>
                                <td><Link to={`/book/${book._id}/details`}><button>Book Details</button></Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home