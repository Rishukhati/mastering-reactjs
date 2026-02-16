import List from "./List"
import Button from "../button";

function App() {
  const fruits =
    [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 70 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "mango", calories: 110 },
    { id: 5, name: "grappes", calories: 91 }];

  return (
    <>
      <List items={fruits} category="fruits" />
      <Button />
    </>
  )
}

export default App
