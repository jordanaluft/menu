import React from 'react'

function Header(){
    return(
        <div className='header'>
            <button className='header--button'>All</button>
            <button className='header--button'>Breakfast</button>
            <button className='header--button'>Lunch</button>
            <button className='header--button'>Shakes</button>
        </div>
    )
}

export default Header