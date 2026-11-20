import {adidasArr} from "./Adidas.tsx";
import {useLocation, useParams} from "react-router-dom";
import {PATH} from "../../App.tsx";
import {pumaArr} from "./Puma.tsx";
import {AbibasArr} from "./Abibas.tsx";


export const Model = () => {

    const {id} = useParams();
    const {pathname} = useLocation()

    const models = pathname.startsWith(PATH.PAGE2)
        ? pumaArr
        : pathname.startsWith(PATH.PAGE3)
            ? AbibasArr
            : adidasArr

    const model = models.find((el) => el.id === Number(id))

    if (!model) {
        return <p>Модель не найдена</p>
    }

    return (
        <div>
            <img src={model.picture} alt={''}/>
            <h2>{model.model}</h2>
            <p>{model.collection}</p>
            <p>{model.price}</p>
        </div>
    )
}