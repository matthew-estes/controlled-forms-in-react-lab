import { useState } from "react";
import "./index.css";

function Bookshelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
    { title: "The Master and Margarita", author: "Mikhail Bulgakov" },
    { title: "Treasure Island", author: "Robert Louis Stevenson" },
    
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  function handleInputChange(event) {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
    console.dir(setNewBook);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setBooks([...books, { title: newBook.title, author: newBook.author }]);
    setNewBook({ title: "", author: "" });
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
     
        <form className="inputForm" onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add a Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <p className="title">{book.title}</p>
            <p className="author">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;
