import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const BookDetails = ({setTitle}) => {
    const [ book, setBook ] = useState({})
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
        // Once the server has fetched the data, it sends a response back to the frontend.
        // This response includes the data fetched from the database.
        .then((res) => {
            console.log(res.data)
            setBook(res.data)
            setTitle(res.data.title)
        })
        .catch((err) => {
            console.log(err);
        })
    ,[id, setTitle]})
    // if the id changes, useEffect will excute again, setTitle is set to the new book

    const deleteBook = () => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    return (
        <div className="detailsContainer">
            <h1>{book.title}</h1>
            <p>By {book.author}</p>
            <p>Page count: {book.pages}</p>
            <p style={{color: book.isAvailable ? 'green' : 'red'}}>
                {book.isAvailable ? "Available for borrowing" : "Not available"}</p>
            <button onClick={deleteBook}>Borrow</button>
        </div>
    )
}

export default BookDetails