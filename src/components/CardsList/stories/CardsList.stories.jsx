import CardsListBase from "../CardsList";
import { defaultData } from './dataMock'

export function CardsListNoData () {
    return <CardsListBase />
}

export function CardsListDataWithoutTitle () {
    return <CardsListBase data={defaultData} />
}

export function CardsListDataWithTitle () {
    return <CardsListBase title={"Keyboards"} data={defaultData} />
}

export default {
    title: "components/CardsList",
}