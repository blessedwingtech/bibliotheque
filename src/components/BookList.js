import React,{useState} from 'react'; 
import BookCard from './BookCard'
import books from "../Books";
import Search from './searchFilter'
//Auteur : Sandlie pierre

const BookList = () => { 
  const [searchTem, setSearchTerm] = useState("");
const [category, setCategory] = useState("");
const uniqueCategories = [...new Set(books.map((book)=>book.category))];

const filteredBooks = books.filter((book) =>{
    const matchesSearch = 
     book.title.toLowerCase().includes(searchTem.toLowerCase())
    ||
      book.author.name.toLowerCase().includes(searchTem.toLowerCase());
      const matchesCategory = category ? book.category===category : true;
      return matchesSearch && matchesCategory;
});
  return (
    
  <div className="container"> 
  <Search 
  searchTem={searchTem}
  setSearchTerm={setSearchTerm}
  category={category}
  setCategory={setCategory}
  categories={uniqueCategories}
  />
  <div className="row justify-content-center"> 
    {filteredBooks.map((book) => ( 
      <div className="col-md-4" key={book.id}> 
            <BookCard book={book}/>
             </div>
              ))} 
              </div> 
              </div> 
              ); };

export default BookList;
