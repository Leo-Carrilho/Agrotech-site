import "../styles/Services.css"

export default function Services () {

       const headerRef = useRef(null);
       
    return (
        <>
        <header ref={headerRef}>
          <h1 className="logo logo-title">AGROTECH</h1>
          <nav className="nav-menu">
            <a href="#">Drones</a>
            <a href="#servicos">Custos</a>
            <a href="/como-acessar">Regiões</a>
            <a href="#contato">Contato</a>
            <a href="/app" className="nav-btn">Contratar</a>
          </nav>
        </header>

        </>
    );
}
