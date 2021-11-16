import React from "react";
import { Root, Image, Title } from "./CardItem.ui";
import imagePlaceholder from  './images/300placeholder.png'

function CardItem ({title, image = imagePlaceholder, price}) {
    return <Root>
        <Title>{title}</Title>
        <Image src={image} alt={title}/>
        <div>{price}</div>   
        <button>Add to cart</button>     
    </Root>
}

export default CardItem