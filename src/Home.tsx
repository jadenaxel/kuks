import { Fragment } from "react";
import NavBar from "./components/NavBar";
import Meal from "./components/Meal";
import OurMeal from "./components/OurMeal";
import OurFood from './components/OurFood';

export default function Home() {
    return (
        <Fragment>
            <NavBar />
            <div className="container">
                <p className="best_people text-center">People who loves to eat are always Best People <span>Julia Child</span></p>
            </div>
            <Meal />
            <OurMeal />
            <div className="popular container-fluid d-flex align-items-center">
                <h3>Popular</h3>
                <div className="line"></div>
            </div>
            <OurFood  />
        </Fragment>
    )
}
