import { useEffect, useState } from "react";
import Button from "../../components/Button";
import ProductItem from "../../components/ProductItem";
import api from "../../services/api";

export default function Home() {
  function requestAPI() {
    alert('fetching data...')
  }

  const [products, setProducts] = useState([]);

  useEffect(() => { getApiData(); }, [])

  async function getApiData() {
    try {
      const { data } = await api.get("/product")
      setProducts(data.products)
      console.log(data.products)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <h1>Produtos</h1>
      <ul style={{ listStyle: "none" }}>
        {
          products.map((product) => (<ProductItem key={product.id} product={product} />))}
      </ul>

      <Button text="Home Button" handleFunction={requestAPI} />
    </>
  )
}