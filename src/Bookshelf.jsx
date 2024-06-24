import { useState } from "react";

const [books, setBooks] = useState([
  { title: "Fourth Wing", author: "Rebecca Yarros" },
  { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
]);

const [newBook, setNewBook] = useState([{ title: "", author: "" }]);

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>;
