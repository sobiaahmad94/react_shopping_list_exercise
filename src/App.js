// imported {useState} to manage app state
import React, {useState} from 'react'

// App is visible as the only component in Dev tools
function App() {

  // Can see the food array in hooks in Dev Tools

  // useState takes 2 arguments, first is a variable of initial state and second is a function to set state to some other state when the function runs
  const [items, setItems] = useState(
    [
      { name: 'Milk'},
      { name: 'Cheese'},
      { name: 'Beans'}
    ])
    // This means the array of objects are stored in the items variable, that's the main state
    // When the setItems function is ran, it switches from the 'main' state to something else (e.g. if I added a new item or deleted an item, I think)

    // map() is the enumerator method used :)
    // map() creates a new array from calling a function (callback) for every array item in original array (doesn't change the original array, just creates a new array)
    // item is fitting as they're shopping items .name is the key for the value so should show 'Milk', 'Cheese', 'Beans' as they're the values corresponding to the name key
    const itemNodes = items.map((item) => {
      return(
        // Since it's wrapped in li, it will map through in list form like in HTML
        <li>{item.name}</li>
      )
    }) 
  
  // Returns a heading, unordered list and form
  // class is a reserved JS keyword so need to use className instead. So in JSX, need to use className, in HTML it'd remain class

  // The ul tag is for the unordered list so the content in map, the shopping items' li output for every iteration is placed inside the ul 
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <hr></hr>

      
      <ul>{itemNodes}</ul>

      <form></form>
    </div>
  )
}

export default App

// To do list app must:

// 1) Display a list of items
// 2) Allow the user to add new items
// 3) Allow the user to remove items that have been purchased