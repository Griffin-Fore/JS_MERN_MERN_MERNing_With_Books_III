import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './views/Home.jsx'
import BookForm from './views/BookForm.jsx'
import BookDetails from './views/BookDetails.jsx'
import BookUpdate from './views/BookUpdate.jsx'
import { useState } from 'react'
import './App.css'


function App() {
  const [title, setTitle ] = useState("")
  const [updateTitle, setUpdateTitle] = useState("")
  return (
    <>
      <BrowserRouter>
      <Header title={title} updateTitle={updateTitle}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/book/create" element={<BookForm />}/>
          <Route path="/book/:id/details" element={<BookDetails setTitle={setTitle}/>}/>
          <Route path="/book/:id/update" element={<BookUpdate setUpdateTitle={setUpdateTitle} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
