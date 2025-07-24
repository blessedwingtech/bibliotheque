
//Auteur : Sandlie pierre

  const BookCard = ({ book,onAuthorClick }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}> 
        <img src={book.image} className="card-img-top" style={{height:"200px"}} alt={book.title} /> 
        <div className="card-body"> 
          <h5 className="card-title">{book.title}</h5> 
          <h6 className="card-subtitle mb-2 text-muted d-flex align-items-center"> 
            <img src={book.author.image} alt={book.author.name} className="rounded-circle me-2" style={{ width: 30, height: 30 }} /> 
            <span>{book.author.name}</span> 
            </h6> 
            <p className="card-text"> {book.description.length > 60 ? book.description.slice(0, 60) + "..." : book.description} </p>
             <button className="btn btn-primary">Voir plus</button> 
             </div> 
             </div> 
  );
};

export default BookCard;
