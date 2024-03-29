import Logo from "../../assets/logo.png";
import "./NavBar.css";
import CartWidget from "../cartWidget/cartWidget";
const NavBar = () => {
    return (
        <nav className="navContainer">
            <div className="imgDiv">
                <a className="logoLink" href="..."><img className="logoImg" src={Logo} alt="logo/enlace activo" /></a>
            </div>
            <div className="navDiv">
                <ul>
                    <li><a href="...">Tops</a></li>
                    <li><a href="...">Jeans</a></li>
                    <li><a href="...">Preguntas Frecuentes</a></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar