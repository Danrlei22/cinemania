import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="icons">
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/danrlei-vieira-85b335231/"
          target="_blank"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          className="github"
          href="https://github.com/Danrlei22"
          target="_blank"
        >
          <FaGithub className="icon" />
        </a>
      </div>

      <p className="dev">
        &copy; Desenvolvido por: <strong>Danrlei 2025</strong>
      </p>
    </footer>
  );
}

export default Footer;
