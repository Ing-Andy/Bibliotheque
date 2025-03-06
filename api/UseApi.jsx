import React, { use } from 'react'

export default MonApi = ({isbn}) => {
    const key = 'AIzaSyDPyQ8YsTVJkoNqXW1WmV6zZ4ywXO7ADdQ';
  useEffect(() => {
    const fetchBooks = async () => {
        const monFetch = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${key}`);
        const data = await monFetch.json();
        console.log(data);
    }
    fetchBooks();
  },[state])
  return []
}
