import { useState } from "react"

interface Props{
  items: string[],
  heading: string,
  itemSelected : (item: string) => void
}
function ListGroup({items, heading, itemSelected}: Props){
    let [selectedIndex, setIndex] = useState(0)
    function getClassNames(index: Number) {
      if(index === selectedIndex) return "list-group-item active" 
      else return "list-group-item" 
    } 
    return(
        <>
        <h1>{heading}</h1>
        <ul className="list-group">
          {items.map((item, index) => 
          <li key={index} className={getClassNames(index)}
                onClick={() => {
                                setIndex(index); 
                                itemSelected(item)
                              }
                        }>
                    {item}
          </li>)}
  </ul>
        </>
    ) 
}

export default ListGroup