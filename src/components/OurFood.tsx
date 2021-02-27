import { Fragment } from "react";
import Food from "./Food";

const OurFood = () => {

    const food = [
        {
            image: "/assets/Image36.png",
            name: "Moussaka",
            reviews: 55,
            tag: ["Indian", "Greek"],
            time: "15-25"
        },
        {
            image: "/assets/Image37.png",
            name: "Capachino",
            reviews: 72,
            tag: ["American", "Eurpeon"],
            time: "20-30"
        },
        {
            image: "/assets/Image38.png",
            name: "Arabic Mandi",
            reviews: 34,
            tag: ["Arabic", "Turkish"],
            time: "35-45"
        }
    ];

    return (
        <div className="container-fluid d-flex popular-food">
            {food.map((comida: any, i: any) => {
                return (
                    <Food key={i} image={comida.image} name={comida.name} reviews={comida.reviews} tags={comida.tag} time={comida.time} />
                )
            })}
        </div>
    )
}
export default OurFood;