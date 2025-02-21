import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <h2 className="about">Sobre o projeto</h2>
      <p className="pAbout">
        Este projeto consome a API da TMDB, um banco de dados colaborativo de
        filmes e TV, que permite acessar informações detalhadas sobre diversas
        produções. Você pode encontrar mais informações na página oficial da
        API, disponível{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AQUI
        </a>
        .
      </p>
      <p className="pAbout">
        A página inicial apresenta filmes organizados por suas melhores
        classificações. Aqui, você pode pesquisar pelo filme que desejar e
        visualizar detalhes, como orçamento, receita, duração e uma descrição.
      </p>
      <hr />
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
