import React,{ useState } from "react";
import BookList from "./components/BookList";
import "./App.css";

// Sandlie pierre components

const App = () => {
    const [books] =   useState([
    
    {
        id: 1,
        title: "pour les debutant en react",
        description: "guide complet pour apprendre react.",
        coverImage: "https://via.placeholder.com/150",
        author: {
        name: "jean Dupont",
        image: "https//via.placeholder.com/50",
        bio: "il est un developpeur passione de react."
        },
        category: "programmation"
    },
    {
         id: 2,
        title: "PHP avance",
        description: "tecnique et concept avance en PHP.",
        coverImage: "https://via.placeholder.com/150",
        author: {
        name: "Marie Claire",
        image: "https//via.placeholder.com/50",
        bio: "elle est une formatrice en developpement web."
        },
        category: "programmation"
    },
    ]);
    const handleAuthorClick =  (author)  => {
    alert(author.bio);
};

return (
    <div className="App">
    <h1>Bibliotheque</h1>
    <BookList books={books} onSelectAuthor={handleAuthorClick} />
    </div>
  );
};

export default App;