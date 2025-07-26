
// //Auteur : Sandlie pierre

//   const BookCard = ({ book,onAuthorClick }) => {
//   return (
//     <div className="card shadow-sm border-0 m-2" style={{borderRadius:"15px",overflow:"hidden", width: "18rem" }}> 
//         <img src={book.image} className="card-img-top" style={{height:"200px"}} alt={book.title} /> 
//         <span className="badge badge-secondary position-absolute top-0 end-0 m-2 bg-secondary">{book.category}</span>
//         <div className="card-body"> 
//               <h5 className="card-title fw-bold" >{book.title}</h5> 
//           <h6 className="card-subtitle mb-2 text-muted d-flex align-items-center"> 
//             <img src={book.author.image} alt={book.author.name} className="rounded-circle me-2" style={{ width: 30, height: 30 }} /> 
//             <span>{book.author.name}</span> 
//             </h6> 
//             <p className="card-text text-secondary"> {book.description.length > 60 ? book.description.slice(0, 60) + "..." : book.description} </p>
//          <div className="d-grid">

//              <button className="btn btn-outline-primary">Voir plus</button> 
//          </div>
//              </div> 
//              </div> 

//   );
// };

// export default BookCard;


// Auteur : Sandlie Pierre
import React, { useState } from 'react';

const BookCard = ({ book }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(prev => !prev);
  };

  const handleAuthorClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card shadow-sm border-0 m-2" style={{ borderRadius: "15px", overflow: "hidden", width: "18rem" }}>
        <img src={book.image} className="card-img-top" style={{ height: "200px" }} alt={book.title} />
        <span className="badge badge-secondary position-absolute top-0 end-0 m-2 bg-secondary">
          {book.category}
        </span>
        <div className="card-body">
          <h5 className="card-title fw-bold">{book.title}</h5>

          {/* Auteur clickable */}
          <h6
            className="card-subtitle mb-2 text-muted d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={handleAuthorClick}
          >
            <img src={book.author.image} alt={book.author.name} className="rounded-circle me-2" style={{ width: 30, height: 30 }} />
            <span>{book.author.name}</span>
          </h6>

          {/* Description avec toggle */}
          <p className="card-text text-secondary">
            {/* {showFullDescription ? book.description : book.description.slice(0, 60) + "..."} */}
            {showFullDescription 
            ? book.description 
            : book.description.length > 60 
              ? book.description.slice(0, 60) + "..." 
              : book.description}
            <span className="text-primary ms-1" style={{ cursor: "pointer" }} onClick={handleToggleDescription}>
              {showFullDescription ? "Lire moins" : "Lire plus"}
            </span>
          </p>

         
        </div>
      </div>

      {/* MODAL Bootstrap */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{book.author.name}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body text-center">
                <img src={book.author.image} alt={book.author.name} className="rounded-circle mb-3" style={{ width: 100, height: 100 }} />
                <p className="text-muted">{book.author.bio}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookCard;