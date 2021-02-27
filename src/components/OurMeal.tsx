import TypesSuggest from "./typesSuggest";
import Food from "./Food";

export default function OurMeal() {
    const countries = ["American", "Italian", "Indian", "Japonese", "Italian", "Latin", "Persian", "Mexican", "Russian", "Seafood"];
    const suggestions = [
        {
            title: "All",
            quantity: 170
        },
        {
            icon: "fas fa-bacon",
            title: "Break Fast",
            quantity: 23
        },
        {
            icon: "fas fa-apple-alt",
            title: "Launch",
            quantity: 41
        },
        {
            icon: "fas fa-glass-whiskey",
            title: "Drinks",
            quantity: 53
        },
        {
            icon: "fas fa-stroopwafel",
            title: "Dessets",
            quantity: 33
        },
        {
            icon: "fas fa-hamburger",
            title: "Fastfood",
            quantity: 20
        }
    ];

    const food = [
        {
            image: "/assets/Image33.png",
            name: "Pakistani Chicken Platter",
            reviews: 34,
            tag: ["Indian", "Pakistani"],
            time: "20-30"
        },
        {
            image: "/assets/Image34.png",
            name: "Risotto",
            reviews: 20,
            tag: ["Italian", "Eurpeon"],
            time: "10-20"
        },
        {
            image: "/assets/Image35.png",
            name: "Maslenitca",
            reviews: 35,
            tag: ["Russian"],
            time: "25-35"
        }
    ];

    return (
        <div className="ourmeal-container d-flex">
            <div className="left-side container">
                <div className="our-meal-sugguest d-flex justify-content-between align-items-center">
                    <h2 className="our-meal-sugguest-title">Our Meals</h2>
                    <div className="our-meal-search-setting d-flex">
                        <input type="search" placeholder="Search By Name" />
                        <div className="ourl-meal-search-setting-filter d-flex align-items-center justify-content-center">
                            <i className="fas fa-sliders-h"></i>
                        </div>
                    </div>
                </div>
                <div className="typesuggest d-flex">
                    {suggestions.map((suggest, i) => {
                        return (
                            <TypesSuggest key={i} icon={suggest.icon} title={suggest.title} quantity={suggest.quantity} />
                        )
                    })}
                </div>
                <div className="d-flex">
                    {food.map((f: any, i: any) => {
                        return <Food key={i} image={f.image} name={f.name} reviews={f.reviews} tags={f.tag} time={f.time} />
                    })}
                </div>
            </div>
            <div className="right-side">
                <h2>Price / Serving</h2>
                <div className="line d-flex align-items-center">
                    <div className="ball-1">
                        <div className="value-ball d-flex align-items-start justify-content-center">
                            $15
                        </div>
                    </div>
                    <div className="ball-2">
                        <div className="value-ball d-flex align-items-start justify-content-center">
                            $15
                        </div>
                    </div>
                </div>
                <div className="cusine d-flex flex-column">
                    <p className="mycusine">Cusine</p>
                    <div className="countries">
                        {countries.map((country: any, i: any) => {
                            return (
                                <p key={i} className="d-flex justify-content-center align-items-center">{country}</p>
                            )
                        })}
                    </div>
                    <button className="btn select-bottom">Select</button>
                </div>
            </div>
        </div>
    )
}
