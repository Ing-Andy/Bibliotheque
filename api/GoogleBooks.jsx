import React, { useState } from "react";

const GoogleBooks = (codeBar) => {
  const apiKey = "AIzaSyDPyQ8YsTVJkoNqXW1WmV6zZ4ywXO7ADdQ"; // Replace with your actual API key
  const [books, setBooks] = useState([]); // Create a state to store the fetched books

  const getBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${codeBar}&key=${apiKey}?`
      );
      const data = await response.json();
      setBooks(data.items); // Set the fetched data to the books state
      return data; // Return the data if needed
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  useEffect(() => {
    if (codeBar) {
      getBooks();
    }
  }, [codeBar]);

  return { getBooks, books };
};

export default GoogleBooks;
