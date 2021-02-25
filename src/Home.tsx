import { Fragment } from "react";
import NavBar from "./components/NavBar";
import Meal from "./components/Meal";

export default function Home() {
    return (
        <Fragment>
            <NavBar />
            <div className="container">
                <p className="best_people text-center">People who loves to eat are always Best People <span>Julia Child</span></p>
            </div>
            <Meal />
        </Fragment>
    )
}
