import { useEffect, useState } from "react";
import "./App.css";
import GoogleBooks from "../api/GoogleBooks";

function App() {
  const [codeBar, setCodeBar] = useState("");
  const { getBooks, books } = GoogleBooks(codeBar);
  // const mydata = Myapi(codeBar);

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books)
  return (
    <div className="App">
      {/* <Myapi query={codeBar}  */}
      <h1>
        <strong>le stockage des livre de la biblio de jfn </strong>
      </h1>

      <div className="searchBar">
        <input
          type="text"
          placeholder="entrer le code-bar du livre"
          value={codeBar}
          onChange={(e) => setCodeBar(e.target.value)}
        />
        <button className="bouton1" onClick={() => setCodeBar("")}>
          Chercher
        </button>
      </div>
      <br />
      <br />
      <br />
      <div className="livre">
        <div className="image">
          <img src="/" alt="image du livre" />
        </div>
        <button className="bouton2"> Ajouter</button>
      </div>
    </div>
  );
}

export default App;
