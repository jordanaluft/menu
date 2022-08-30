import React, { useState } from "react"
import './App.css'
import Header from "./components/Header"
import items from "./data"
import Menu from "./components/Menu"

function App() {
  const [menuItems, setMenuItens] = useState(items)
  return (
    <section>
      <div className='title'>Our Menu</div>
      <div className='underline'></div>
      <Header />
      <Menu items={menuItems}/>
    </section>
  )
}

export default App
