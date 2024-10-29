import Link from "next/link";
import React from "react";

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroLista" className="nav-link">
              Lista de Livros
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroDados" className="nav-link">
              Dados do Livro
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
