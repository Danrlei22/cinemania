import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";
import { TbMovie } from "react-icons/tb";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <div className="container">
        <h2>
          <Link to="/">
            <TbMovie /> Cine Mania
          </Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pesquise um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
