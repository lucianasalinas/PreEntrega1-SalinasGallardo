import NavBar from "./components/navbar/NavBar"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer welcome={"Bienvenida a SG Atelier!"} />
    </div>
  )
}
export default App