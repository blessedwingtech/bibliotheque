import React from 'react'; 
import BookCard from './BookCard'
import books from "../Books";

//Auteur : Sandlie pierre

 // src/components/BookList.js import React from "react"; import booksData from "../data/books";

const BookList = () => { 
  return ( 
  <div className="container"> 
  <div className="row justify-content-center"> 
    {books.map((book) => ( 
      <div className="col-md-4" key={book.id}> 
            <BookCard book={book}/>
             </div>
              ))} 
              </div> 
              </div> 
              ); };

export default BookList;
