import ListGroup from "./Components/ListGroup";

function App() {
  const items = ["Item1", "Items2", "Items3"] 
  return <ListGroup items={items} heading="Cities"/>
}

export default App