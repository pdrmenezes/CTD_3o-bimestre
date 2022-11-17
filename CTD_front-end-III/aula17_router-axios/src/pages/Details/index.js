import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from "../../services/api";

export default function Details() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  async function getProductDetails() {
    try {
      const { data } = await api.get(`/details/${id}`)
      setProduct(data.detail);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductDetails()
  })

  return (
    <>
      <h1>{product.name}</h1>
      <img alt={product.name} src={product.img} width={400} />
      <h4>R${product.price}</h4>
      <h5>Fabricante: {product.fabricante}</h5>
      <p>Descrição: {product.description}</p>
    </>
  )
}