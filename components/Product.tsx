import { Rating } from "./Rating";
import { ProductProps } from "../types";

export const Product = ({data}: ProductProps) => {
    return (
        <>
        <img src={data.thumbnailUrl} alt={data.thumbnailAlt}/>
        <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
        <p className="p-4">{data.description}</p>
        <Rating rating={data.rating}/>
        </>
    )
}