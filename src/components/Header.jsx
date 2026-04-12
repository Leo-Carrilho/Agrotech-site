import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="logo logo-title">AGROTECH</h1>

      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/services">Serviços</Link>
        <Link to="/como-acessar">Como acessar</Link>
        <Link to="#contato">Contato</Link>
        <Link to="/app" className="nav-btn">
          Nossa plataforma
        </Link>
      </nav>
    </header>
  );
}