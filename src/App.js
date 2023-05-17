import React, {useState} from 'react'

function App() {

  const [items, setItems] = useState(
    [
      { name: 'Milk'},
      { name: 'Cheese'},
      { name: 'Beans'}
    ])

  


  return (
    <div className="App">
      <h1>Shopping List</h1>
      <hr></hr>

      <ul></ul>

      <form></form>
    </div>
  )
}

export default App

// Display a list of items
// Allow the user to add new items
// Allow the user to remove items that have been purchased