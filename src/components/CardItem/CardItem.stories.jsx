import CardItemBase from "./CardItem";
import wideImage from './images/keyboard.jpg'
import verticalImage from './images/300X500.png'

export function CardItemWithoutImage () {
    return <CardItemBase title='Simple Item' price='100UAH'/>
}

export function CardItemHorisontalImage () {
    return <CardItemBase title='Simple Item' price='100UAH' image={wideImage}/>
}

export function CardItemVerticalImage () {
    return <CardItemBase title='Simple Item' price='100UAH' image={verticalImage}/>
}

export function CardItemSuperLongName () {
    return <CardItemBase title='Simple Item Simple Item Simple Item Simple Item' price='100UAH' image={wideImage}/>
}

export default {
    title: "components/CardItem",
}