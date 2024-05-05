
function App() {
  return (
    <div className="App">
      <h2>Crypto Currency App</h2>
      <input type="text" placeholder="Search...." />
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
      </table>
    </div>
  )
}

export default App;
