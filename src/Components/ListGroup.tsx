interface Props{
  items: string[],
  heading: string
}
function ListGroup({items, heading}: Props){
    
    return(
        <>
        <h1>{heading}</h1>
        <ul className="list-group">
          {items.map(i => <li key={i} className="list-group-item" onClick={(event) => console.log(event)}>{i}</li>)}
  </ul>
        </>
    ) 
}

export default ListGroup