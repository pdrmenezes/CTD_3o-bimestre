import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav><ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/projects">PROJECTS</Link></li>
      <li><Link to="/contact">CONTACT</Link></li>
    </ul></nav>
  )
}