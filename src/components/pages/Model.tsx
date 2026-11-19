import {adidasArr} from "./Adidas.tsx";
import {useParams} from "react-router-dom";


export const Model = () => {

    const params = useParams();
    console.log(params);
    console.log(adidasArr);
    return (
        <div>
            <img src={adidasArr[Number(params.id)].picture} alt={''}/>
            <h2>{adidasArr[Number(params.id)].model}</h2>
            <p>{adidasArr[Number(params.id)].collection}</p>
            <p>{adidasArr[Number(params.id)].price}</p>
        </div>
    )
}