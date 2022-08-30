import React, { useState } from "react"
import './App.css'
import Category from "./components/Category"
import items from "./data"
import Menu from "./components/Menu"

function App() {
  const [menuItems, setMenuItems] = useState(items)

  const filterItems = (category) => {
    if (category === 'all'){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <section>
      <div className='title'>Our Menu</div>
      <div className='underline'></div>
      <Category filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  )
}

export default App
