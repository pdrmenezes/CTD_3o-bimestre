import React from "react";
import "./style.css"
import logo from '../../assets/logo.png'

export default function Header() {

  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <header>
      <img src={logo} />
      <ul className="menu">
        <li className="item-menu" onClick={() => scrollToComponent("projects")}>Projetos</li>
        <li className="item-menu" onClick={() => scrollToComponent("contact")}>Contato</li>
      </ul>
    </header>
  )
}