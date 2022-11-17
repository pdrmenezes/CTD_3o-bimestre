import { Link } from 'react-router-dom'

export default function ProductItem({ product }) {
  return (
    <Link to={`/details/${product.id}`}>
      <li style={{ border: "1px solid black", marginBottom: 10 }}>
        <img alt={product.name} src={product.img} width={200} />
        <h2>{product.name}</h2>
      </li>
    </Link>
  )
}