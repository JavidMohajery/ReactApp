import ListGroup from "./Components/ListGroup";

function itemSelect(item: string){
  console.log(item + " is selected")
}
function App() {
  const items = ["Item1", "Items2", "Items3"] 
  return <ListGroup items={items} heading="Cities" itemSelected={itemSelect}/>
}

export default App