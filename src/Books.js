const books = [
  {
    id: 1,
    title: "Le Petit Prince",
    author: {
      name: "Antoine de Saint-Exupéry",
      image: "https://tse2.mm.bing.net/th/id/OIP.9GszBg8qFX3GZIJ6C7xyyAHaJO?rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: `Écrivain, poète et aviateur français Lorsqu’il s’agit de vendre un livre, la description est l’un des éléments les plus importants. D’ailleurs, d’après un commentaire d’une lectrice, après avoir vu la couverture, la description est la seconde chose qui la motive d’acheter un livre.
Une bonne description doit donner aux lecteurs une idée claire de ce à quoi ils peuvent s’attendre en lisant le livre, tout en les incitant à l’acheter. Voici les éléments clés d’une description de livre réussie`
    },
    description: "Un conte poétique et philosophique. La première phrase de la description doit être accrocheuse et intrigante, pour attirer l’attention des lecteurs dès les premiers mots. ",
    category: "Fiction",
    image: "https://tse2.mm.bing.net/th/id/OIP.9GszBg8qFX3GZIJ6C7xyyAHaJO?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    title: "1984",
    author: {
      name: "George Orwell",
      image: "https://tse1.mm.bing.net/th/id/OIP.BNiBwK1hFGPyOYCdaiJE1gAAAA?r=0&w=220&h=314&rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: "Auteur britannique connu pour ses dystopies..."
    },
    description: " La première phrase de la description doit être accrocheuse et intrigante, pour attirer l’attention des lecteurs dès les premiers mots. Une dystopie sur une société totalitaire...",
    category: "Science-Fiction",
    image: "https://static01.nyt.com/images/2019/05/31/obituaries/Mendes2/merlin_155728638_90bf57a3-4c40-496d-baa1-27aeb49f9a7b-jumbo.jpg"
  },
  {
    id: 3,
    title: "L'Alchimiste",
    author: {
      name: "Paulo Coelho",
      image: "https://i.pinimg.com/736x/20/f0/9e/20f09ec14d58e30775439c8afec5cc2e.jpg",
      bio: "Écrivain brésilien, auteur de nombreux best-sellers..."
    },
    description: "Un jeune berger part en quête d'un trésor, La première phrase de la description doit être accrocheuse et intrigante, pour attirer l’attention des lecteurs dès les premiers mots. Bonjour...",
    category: "Aventure",
    image: "https://thumbs.dreamstime.com/z/girl-flying-book-international-children-s-book-day-girl-flying-book-isolated-white-background-day-knowledge-161892535.jpg"
  },
  {
    id: 4,
    title: "Le Rouge et le Noir",
    author: {
      name: "Stendhal",
      image: "https://i.ebayimg.com/images/g/BZ0AAeSwSsxodOEX/s-l960.webp",
      bio: "Auteur français du 19ème siècle..."
    },
    description: "L'histoire d'un jeune homme ambitieux Il doit donner aux lecteurs une idée de l’intrigue, de l’histoire et des personnages, tout en leur laissant suffisamment de mystère pour qu’ils veuillent en savoir plus.",
    category: "Classique",
    image: "https://i.ebayimg.com/images/g/BZ0AAeSwSsxodOEX/s-l960.webp"
  },
  {
    id: 5,
    title: "Les Misérables",
    author: {
      name: "Victor Hugo",
      image: "https://thumbs.dreamstime.com/z/trick-16558313.jpg",
      bio: "Un des plus grands écrivains français..."
    },
    description: "Une fresque sociale sur la pauvreté, Il doit donner aux lecteurs une idée de l’intrigue, de l’histoire et des personnages, tout en leur laissant suffisamment de mystère pour qu’ils veuillent en savoir plus.",
    category: "Classique",
    image: "https://tse2.mm.bing.net/th/id/OIP.DwR40k1GPzhcwohQANuFugHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 6,
    title: "Harry Potter à l'école des sorciers",
    author: {
      name: "J.K. Rowling",
      image: "https://thumbs.dreamstime.com/z/young-confidence-man-posing-casual-smiling-his-folded-arms-50039674.jpg",
      bio: "Romancière britannique, créatrice du monde magique..."
    },
    description: "Les aventures d'un jeune sorcier. Il doit donner aux lecteurs une idée de l’intrigue, de l’histoire et des personnages, tout en leur laissant suffisamment de mystère pour qu’ils veuillent en savoir plus.",
    category: "Fantasy",
    image: "https://www.mercycorps.org/sites/default/files/styles/image_caption_bottom_resizable_medium_2_x/public/2019-10/indonesia-200501-cnelson-0028.jpg?h=c2114625&itok=dr06EvxJ"
  },
  {
    id: 7,
    title: "Le Seigneur des Anneaux",
    author: {
      name: "J.R.R. Tolkien",
      image: "https://thumbs.dreamstime.com/z/young-confidence-man-posing-casual-smiling-his-folded-arms-50039674.jpg",
      bio: "Philologue et auteur anglais..."
    },
    description: "Une épopée fantastique. Il doit donner aux lecteurs une idée de l’intrigue, de l’histoire et des personnages, tout en leur laissant suffisamment de mystère pour qu’ils veuillent en savoir plus.",
    category: "Fantasy",
    image: "https://tse4.mm.bing.net/th/id/OIP.PIcGO46Ab3dtSlkgtjE15wHaE8?r=0&w=2010&h=1340&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    title: "La Peste",
    author: {
      name: "Albert Camus",
      image: "https://thumbs.dreamstime.com/z/young-confidence-man-posing-casual-smiling-his-folded-arms-50039674.jpg",
      bio: "Philosophe et romancier français..."
    },
    description: "Un roman sur une épidémie...Il doit donner aux lecteurs une idée de l’intrigue, de l’histoire et des personnages, tout en leur laissant suffisamment de mystère pour qu’ils veuillent en savoir plus.",
    category: "Philosophie",
    image: "https://tse3.mm.bing.net/th/id/OIP.D9UppAmUWzmc1Qe8bomFlwHaE8?r=0&w=1080&h=720&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 9,
    title: "Bel-Ami",
    author: {
      name: "Guy de Maupassant",
      image: "https://tse2.mm.bing.net/th/id/OIP.kLKpEtOiTNBZ2QHoN0NnrAHaKY?r=0&w=1205&h=1690&rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: "Auteur français du 19ème siècle..."
    },
    description: "L'ascension sociale d'un homme ambitieux dans son domaine depend toujiurs et parfois de son consistetence.",
    category: "Classique",
    image: "https://tse1.mm.bing.net/th/id/OIP.iOY9E_ZzDD2VRBTxT0ZU6gHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 10,
    title: "Madame Bovary",
    author: {
      name: "Gustave Flaubert",
      image: "https://tse2.mm.bing.net/th/id/OIP.pq7N9r5fb8N94cD9TWuUPAAAAA?r=0&w=217&h=300&rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: "Maître du réalisme littéraire français..."
    },
    description: "Le drame d'une femme en quête de passion. Il doit donner aux lecteurs une idée de l’intrigue, de l’histoire et des personnages, tout en leur laissant suffisamment de mystère pour qu’ils veuillent en savoir plus.",
    category: "Classique",
    image: "https://tse2.mm.bing.net/th/id/OIP.EiSnyOh0sahaI8lNEvp74gHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 11,
    title: "Da Vinci Code",
    author: {
      name: "Dan Brown",
      image: "https://static.wixstatic.com/media/3dde4b_7e514ce1f8304c7db36c3e11af7f2ce7~mv2.jpg/v1/fill/w_280,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Mother%2520Musk_edited.jpg",
      bio: "Auteur de thrillers américain..."
    },
    description: "Une enquête à travers les mystères religieux, Il doit donner aux lecteurs une idée de l’intrigue, de l’histoire et des personnages, tout en leur laissant suffisamment de mystère pour qu’ils veuillent en savoir plus.",
    category: "Thriller",
    image: "https://cdn.catalogs.com/medium/pdfprocessed/5a82cf10-7fd0-11ec-bcf4-9129c1037915/mOCN_Uzq1.png?w=640"
  },
  {
    id: 12,
    title: "Le Journal d'Anne Frank",
    author: {
      name: "Anne Frank",
      image: "https://tse2.mm.bing.net/th/id/OIP.EiSnyOh0sahaI8lNEvp74gHaEU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: "Jeune fille juive, auteur d'un témoignage poignant..."
    },
    description: "Un témoignage sur la vie cachée pendant la guerre. Une enquête à travers les mystères religieux, Il doit donner aux lecteurs une idée de l’intrigue, ",
    category: "Témoignage",
    image: "https://tse3.mm.bing.net/th/id/OIP.qe2VsIQIOsYAsQfy3_jiPwHaLN?r=0&w=600&h=908&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 13,
    title: "Le Parfum",
    author: {
      name: "Patrick Süskind",
      image: "https://tse1.mm.bing.net/th/id/OIP.28PD6nxsBdvdtZzIaq0r6gHaFj?r=0&w=960&h=720&rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: "Romancier allemand connu pour ce roman..."
    },
    description: "L'histoire d'un homme obsessionnel. Une enquête à travers les mystères religieux, Il doit donner aux lecteurs une idée de l’intrigue, ",
    category: "Psychologie",
    image: "https://tse3.mm.bing.net/th/id/OIP.l76vLYy6aBwVeMiJGGByugHaK5?r=0&w=680&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 14,
    title: "Siddhartha",
    author: {
      name: "Hermann Hesse",
      image: "https://tse2.mm.bing.net/th/id/OIP.ovb_bnOr8WUNpWjRzohPWwHaKj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: "Auteur suisse d'origine allemande..."
    },
    description: "Une enquête à travers les mystères religieux, Il doit donner aux lecteurs une idée de l’intrigue,  Un voyage spirituel en Inde ancienne...",
    category: "Spiritualité",
    image: "https://tse2.mm.bing.net/th/id/OIP.DOU_nH-kCmFwiBj-HYS57AHaKj?r=0&pid=ImgDet&w=179&h=256&c=7&dpr=1.3&o=7&rm=3"
  },
  {
    id: 15,
    title: "Fahrenheit 451",
    author: {
      name: "Ray Bradbury",
      image: "https://tse4.mm.bing.net/th/id/OIP.nG2W3VtpAaszTL5VA1HJSQHaJE?r=0&w=750&h=918&rs=1&pid=ImgDetMain&o=7&rm=3",
      bio: "Auteur américain de science-fiction..."
    },
    description: "Une enquête à travers les mystères religieux, Il doit donner aux lecteurs une idée de l’intrigue, Un monde où les livres sont interdits...",
    category: "Science-Fiction",
    image: "https://tse1.mm.bing.net/th/id/OIP.ZtvpfF1HCtpxvdrb4r3SqAHaI0?r=0&w=600&h=715&rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

export default books;