import React from "react";
import Logo from './Pictures/Logo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'

const Header = () => {
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" id="title" to="/">
            <img src={Logo} alt="Logo" width="30" height="30" class="d-inline-block align-text-bottom"/>
            Weinfo
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <NavDropdown title="Layanan Kami" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/Services/AllServices">Pembuatan Website</NavDropdown.Item>
                  <NavDropdown.Item href="/Services/AllServices">Pengembangan Sistem Informasi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Services">Layanan Lainnya</NavDropdown.Item>
                </NavDropdown>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About">Tentang Kami</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Header;
