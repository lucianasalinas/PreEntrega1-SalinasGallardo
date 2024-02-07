import React from "react"
import '../itemListContainer/ItemListContainer.css'
const ItemListContainer = ({welcome}) => {
    return(
        <div>
            <h1 className="welcomeText">{welcome}</h1>
        </div>
    )
}

export default ItemListContainer