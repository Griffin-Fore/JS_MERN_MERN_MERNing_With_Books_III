import { useNavigate } from "react-router"

const Header = ({title, updateTitle}) => {
    const navigate = useNavigate()

    const navigateToCatalog = () => {
        navigate("/")
    }

    const navigateToBookForm = () => {
        navigate("/book/create")
    }

    console.log(location.pathname)
    return (
        <>
            <button onClick={navigateToCatalog}>Catalog</button>
            <button onClick={navigateToBookForm}>Add Book</button>

            {window.location.pathname === '/' && <h1>Book Catalog</h1>}
            {window.location.pathname === '/book/create' && <h1>Add a Book</h1>}
            {window.location.pathname.includes('details') && <h1>{title}</h1>}
            {window.location.pathname.includes('update') && <h1>Update {updateTitle}</h1>}
        </>
    )
}

export default Header