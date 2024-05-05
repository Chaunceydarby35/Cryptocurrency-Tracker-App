import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState()
  const [currency, setCurrency] = useState([])

  useEffect(() => {
    axios.get('https://openapiv1.coinstats.app/coins?', {
      headers: `X-API-KEY: 0erpz11U1DbVL1arZLyjoABav1sfCYGeE3VBeLVpBBI=`
    }).then(res => setCurrency(res.data.result) )
    .catch(err => console.log(err)) 
  }, [])

  return (
    <div className="App">
      <h2>Crypto Currency App</h2>
      <input type="text" placeholder="Search...." onChange={(e) => setSearch(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Available Supply</th>
            <th>Volume(24hr)</th>
          </tr>
        </thead>
        <tbody>
          {currency.filter((val)=> {
            return val.name.toLowerCase().includes(search.toLowerCase())
          }).map((val) => {
            return tr
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App;
