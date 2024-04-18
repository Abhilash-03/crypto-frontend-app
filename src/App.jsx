import Card from "./components/Card"
import Chart from "./components/Chart"
import Header from "./components/Header"
import MobileMenu from "./components/MobileMenu"
import SimpleCard from "./components/SimpleCard"

function App() {

  return (
    <main className="app">
      <Header />
      <Card />
      <Chart />
      <div className="cards">
      <SimpleCard title={'Buy BTC'} classname={'buybtc'} />
      <SimpleCard title={'Sell BTC'} classname={'sellbtc'}/>
      </div>
      <MobileMenu />

    </main>
  )
}

export default App
