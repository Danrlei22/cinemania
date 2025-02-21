import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";
import { TbMovie } from "react-icons/tb";
import { LuArrowBigLeft } from "react-icons/lu";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  const location = useLocation();
  const handBack = () => {
    navigate("/");
  };

  const isMovePage = location.pathname.includes("/movie");

  return (
    <nav className="navbar">
      <div className="containerNavBar">
        {location.pathname !== "/" && (
          <button onClick={handBack} className="btnBack">
            <LuArrowBigLeft className="iconBack" />
          </button>
        )}

        <h2 className="navbarH2">
          <Link to="/">
            <TbMovie /> Cine Mania
          </Link>
        </h2>

        {!isMovePage && (
          <form onSubmit={handleSubmit} className="searchForm">
            <input
              type="text"
              className="searchInput"
              placeholder="Pesquise um filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit" className="btnSearch">
              <BiSearchAlt2 />
            </button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
