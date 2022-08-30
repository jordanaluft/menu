import React from 'react'

function Category({filterItems}){
    return(
        <div className='category'>
            <button className='category--button' onClick={() => filterItems('all')}>All</button>
            <button className='category--button' onClick={() => filterItems('breakfast')}>Breakfast</button>
            <button className='category--button' onClick={() => filterItems('lunch')}>Lunch</button>
            <button className='category--button' onClick={() => filterItems('shakes')}>Shakes</button>
        </div>
    )
}

export default Category