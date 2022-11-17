import { useParams } from "react-router-dom";
import "./style.css";
import api from "../../services/api";
import { useState, useEffect } from "react";

export default function Details() {
  // como só usaremos o cep, podemos desestruturar com as propriedades que precisaremos, ao invés de pegar o objeto inteiro
  const { cep } = useParams();
  const [endereco, setEndereco] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => { getDataCep(); }, [])

  async function getDataCep() {
    try {
      const { data } = await api.get(`/${cep}/json`)
      console.log(data);
      setEndereco(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  // async function exemploDePostPutPatchEmApi() {
  //   const user = {
  //     nome: "pedro",
  //     cpf: "000.000.000-00"
  //   }
  //   try {
  //     const { data } = await api.post(`url`, user)
  //     const { data } = await api.put(`url`, user)
  //     const { data } = await api.patch(`url`, user)
  //     console.log(data);
  //     setEndereco(data)
  //   } catch (error) {
  //     console.log(error)
  //   }

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <h1>Tela de Details - {cep}</h1>
      <h3>Rua: {endereco.logradouro ? endereco.logradouro : "Rua não encontrada"}</h3>
      <h3>Bairro: {endereco.bairro ? endereco.bairro : "Bairro não encontrado"}</h3>
      <h3>Localidade: {endereco.localidade} - {endereco.uf}</h3>
      {/* <button onClick={getDataCep}>Buscar</button> */}
    </>
  )
}