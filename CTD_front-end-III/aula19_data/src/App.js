import { useEffect, useState } from "react";
import { formatCurrency } from './hooks/useUtils'

import api from "./services/api";

function App() {

  const [accounts, setAccounts] = useState([])
  async function GetAccounts() {
    try {
      const { data } = await api.get('/account')
      setAccounts(data.accounts);
      console.log(data.accounts)
    } catch (error) {
      alert("erro ao buscar contas")

    }
  }

  useEffect(() => { GetAccounts() }, [])


  return (
    <>
      <h1>Hello World</h1>
      {accounts.map((account) => <div key={account.id}>
        <p>{account.client}</p>
        <p>Formatado na mão: R$ {account.balance},00</p>
        <p>Formatado usando hook personalizado: {formatCurrency(account.balance)}</p>
        <p>{account.date}</p>
      </div>)}
    </>
  );
}

export default App;
