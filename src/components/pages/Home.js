import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import BookForm from '../layouts/BookForm'
import BookCard from '../layouts/BookCard'

 const Home = () => {
     const [book, setBook] = useState({})
     const [ loading, setLoading] = useState(true)
   
     useEffect(() =>{
        const getBooks = async ()  => {
            try {
            
                const book = await axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699')
                const bookData = book.data
                console.log(bookData.items[0].volumeInfo)
                setBook(bookData.items[0].volumeInfo) 
                setLoading(false)
           
            } catch (error) {
                
            }
         }

         getBooks()

     },[])

     const changeBook = async (books) => {
        try {
            
            const book = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${books}`)

            const bookData = book.data
            console.log(bookData)

            if(bookData.totalItems === 0){
                M.toast({html: 'No Book Found...'})
            }else if(bookData.totalItems === 1  ){
                setBook(bookData.items[0].volumeInfo)
            }else{
                setBook(bookData.items[1].volumeInfo )
            }
            
            
            setLoading(false)
       
        } catch (error) {
            
        }

     }
     
    return (
        <div className="book-container">
            <BookForm changeBook={changeBook} />
            <BookCard book={book}  />
       

        </div>
    )
    }
export default Home;