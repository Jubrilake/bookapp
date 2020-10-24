import React,{useState} from 'react'
import StarRatings from 'react-star-ratings'
 const BookCard = ({book}) => {

    const [rating,setRating] = useState(0);

    const changeRating = (newRating, name) => {
        setRating(newRating)
    }
    const shorten = text => {
        return text.substr(0,300) + '...'
    }



    const {authors,averageRating, pageCount,categories,description,imageLinks, publisher,publishedDate,title } = book
    return (
        <div className="book-card">

      
        <div className="book-img-card">
            {/* <img src="http://books.google.com/books/content?id=xYotngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" alt="book-image" /> */}
            <img src={imageLinks ? imageLinks.thumbnail : 'data:image/jpeg;base64,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' } alt="book-image"/>
        </div>

       
        <div className="book-detail">
            <h1>{ title && title}</h1>
            <h3> {authors && authors.map(author => (
               <span>{author}</span> 
            ))}  </h3>
           
            <ul className="book-publisher">
            <li>{publisher && publisher}</li>
            <li className="publish">{publishedDate && publishedDate}</li>
            </ul>

           
            <ul className="book-publisher mt-medium">
                <li>{categories  ? categories.map(category => (
                    <span>{category}</span>
                )) : (<span className='red-text'> No categories available</span> )}</li>
                <li className="publish">{pageCount && pageCount} pages</li>
                </ul>
                <div className="rating mt-medium">
                    {
                        averageRating ? (<StarRatings 
                            rating={averageRating}
                            starRatedColor = "gold"
                            changeRating = {changeRating}
                            numberOfStar = {5}
                            name="rating"
                            starDimension = "20px"
                            starSpacing = "2px"
                           />) : (<p style={{color:'red', marginBottom:'10px'}}>No rating available </p>)
                    }
                   
                </div>
                <div >
                    <p style={{marginLeft:'10px'}} className={!description && 'red-text'}>{description ? shorten(description) : 'Description not available'}</p>
                </div>
        </div>
       
    </div>
    )
}
export default BookCard