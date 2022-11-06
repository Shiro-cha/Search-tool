import React from 'react'
import './header.css'
import logo from "../../assets/images/logo.png";

export default function Header() {

    return (

        <div className="container-fluid mega-menu-prof">
            <div className="container">
                <div className="row col-md-12">
                    <div className="col-md-4 logo-pro">
                        <img src={logo} alt="logo prise de rdv" />
                    </div>
                    <div className="col-md-8 content-nav-prof">
                        <ul className="nav-prof">
                            <li>Notre société</li>
                            <li>Espace professionnel</li>
                            <li>Pour les patients</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
