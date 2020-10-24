import React,{useState} from 'react'

 const BookForm = ({changeBook}) => {
     const [isbn, setISbn]= useState('')
     const onChange = e => {
         setISbn(e.target.value)
        

         }
         const onSubmit = (e) =>{
             e.preventDefault()
             changeBook(Number(isbn))
             setISbn('')
           

         }
     
    return (
        <div className="book-form_container">
            <form onSubmit={onSubmit}>
           <input value={isbn}  onChange={onChange} className="book-input" type="text" placeholder="type in the isbn..." /> 
           <button class="btn" type="submit" name="action">Submit</button>

            </form>
           
         
       </div>
    )
}
export default BookForm