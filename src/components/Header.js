import { FaRocket, FaPencilRuler } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <a className="index" href="./">
        App de Notas
        <FaPencilRuler className="index-icon"></FaPencilRuler>
      </a>
      <div className="menu">
        <a href="./">
          About Me <FaRocket className="about-me-icon"></FaRocket>
        </a>
      </div>
    </header>
  );
};

export default Header;
