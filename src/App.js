import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListagemLivros from "./components/ListagemLivros.js";
import NovoLivro from "./components/NovoLivro.js";
import EditaLivro from "./components/EditaLivro.js";

function App() {
  return (
    <BrowserRouter>
      <nav className="container navbar navbar-expand navbar-dark bg-dark">
        <h1 className="navbar-brand">Exemplo CRUD</h1>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/livros" className="nav-link">
              Livros
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/novo" className="nav-link">
              Novo livro
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ListagemLivros />} />
          <Route path="novo" element={<NovoLivro />} />
          <Route path="livros/:id" element={<EditaLivro />} />
          <Route path="livros" element={<ListagemLivros />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
