// imported {useState} to manage app state
import React, { useState } from 'react'

// App is visible as the only component in Dev tools
function App() {

  // Can see the food array in hooks in Dev Tools

  // useState takes 2 arguments, first is a variable of initial state and second is a function to set state to some other state when the function runs
  const [items, setItems] = useState(
    [
      { id: 1, name: 'Milk' },
      { id: 2, name: 'Cheese' },
      { id: 3, name: 'Beans' }
    ])

    const itemNodes = items.map((item) => {
      return (
        <li key={item.id}>{item.name}
          <button onClick={() => purchaseItem(item.id)}>Purchase</button>
        </li>
      )
    })
  // key refers to the key prop

  // This means the array of objects are stored in the items variable, that's the main state
  // When the setItems function is ran, it switches from the 'main' state to something else (e.g. if I added a new item or deleted an item, I think)

  // map() is the enumerator method used :)
  // map() creates a new array from calling a function (callback) for every array item in original array (doesn't change the original array, just creates a new array)
  // item is fitting as they're shopping items .name is the key for the value so should show 'Milk', 'Cheese', 'Beans' as they're the values corresponding to the name key
  // const itemNodes = items.map((item) => {
  //   return(
  //     // Since it's wrapped in li, it will map through in list form like in HTML
  //     <li>{item.name}</li>
  //   )
  // }) 

  // Controlled component = to control the state of inputs, blank string
  // Will take whatever the user is typing into the box
  const [newItem, setNewItem] = useState('')

  const handleItemInput = (event) => {
    setNewItem(event.target.value)
  }


  const saveNewItem = (event) => {
    event.preventDefault()
    const newItemObj = { id: Date.now(), name: newItem }
    const nextItems = [...items, newItemObj]
    setItems(nextItems)

    setNewItem('');
  }

  const purchaseItem = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
  // HTML will make a post request when submitted, which refreshes the whole page, and state would be lost. The preventDefault method stops this
  // Date.now() returns a number 


  // Returns a heading, unordered list and form
  // class is a reserved JS keyword so need to use className instead. So in JSX, need to use className, in HTML it'd remain class

  // The ul tag is for the unordered list so the content in map, the shopping items' li output for every iteration is placed inside the ul 
  // Ternary operators, ? :. ? means if and : means else
  return (
    <div className="App">
      <h1>Shopping List - {items.length ? "Get to it! 🛒" : "Finished! 🙌"}</h1>
      <hr></hr>
      


      <ul>{itemNodes}</ul>

      <form onSubmit={saveNewItem}>
        <label htmlFor="new-item">Add a new item to the shopping list:</label>
        <input id="new-item" type="text" value={newItem} onChange={handleItemInput} />
        <input type="submit" value="Save New Item" />
      </form>
    </div>
  )
}

export default App

// To do list app must:

// 1) Display a list of items [X]
// 2) Allow the user to add new items []
// 3) Allow the user to remove items that have been purchased []