import React from "react";
import { Root } from "./CardsList.ui";
import CardItem from "../CardItem";

function CardsList({data, title}) {
    return <Root>   
        
        {title && <h3>{title}</h3>}
        <div className="items">
        {data ? data.map((cardItemData) => (
        <CardItem 
            key={`${cardItemData.title}-${cardItemData.price}`}
            title={cardItemData.title}
            image={cardItemData.image}
            avatar={cardItemData.avatar}
            likes={cardItemData.likes}
            postText={cardItemData.postText}
        />
        )) : 'No items'}
        </div>
    </Root>
}

export default CardsList