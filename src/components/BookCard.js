
//Auteur : Sandlie pierre

  const BookCard = ({ book,onAuthorClick }) => {
  return (
    <div className="card shadow-sm border-0 m-2" style={{borderRadius:"15px",overflow:"hidden", width: "18rem" }}> 
        <img src={book.image} className="card-img-top" style={{height:"200px"}} alt={book.title} /> 
        <span className="badge badge-secondary position-absolute top-0 end-0 m-2 bg-secondary">{book.category}</span>
        <div className="card-body"> 
              <h5 className="card-title fw-bold" >{book.title}</h5> 
          <h6 className="card-subtitle mb-2 text-muted d-flex align-items-center"> 
            <img src={book.author.image} alt={book.author.name} className="rounded-circle me-2" style={{ width: 30, height: 30 }} /> 
            <span>{book.author.name}</span> 
            </h6> 
            <p className="card-text text-secondary"> {book.description.length > 60 ? book.description.slice(0, 60) + "..." : book.description} </p>
         <div className="d-grid">

             <button className="btn btn-outline-primary">Voir plus</button> 
         </div>
             </div> 
             </div> 

  );
};

export default BookCard;
