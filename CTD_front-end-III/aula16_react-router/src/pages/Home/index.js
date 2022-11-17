import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button><Link to="/projects">PROJECTS</Link></button>
      <button><Link to="/contact">CONTACT</Link></button>
    </div>
  )
}