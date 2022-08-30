import React from "react"

function Item(items) {
    return (
        <section className="menu">
            <div>
                <img className="menu--image" src={items.img}/>
                <div className="menu--item">
                    <span className="menu--title">{items.title}</span>
                    <span className="menu--price">${items.price}</span>
                </div>
                <div className="lightUnderline"></div>
                <span className="menu--info">{items.desc}</span>
            </div>
        </section>
        )
}

export default Item