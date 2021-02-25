import SvgMotor from "./SvgMotor";

export default function Meal() {
    return (
        <div className="meal-container d-flex">
            <div className="container">
                <div className="bg-meal d-flex flex-column">
                    <p className="bg-meal-title">Find Healthy And<br /> Favourite Foods<br /> Near You</p>
                    <div className="app-stores d-flex">
                        <div className="app-store d-flex align-items-center justify-content-between">
                            <i className="fab fa-apple"></i>
                            <p>Download on the <br /><span>App Store</span></p>
                        </div>
                        <div className="play-store d-flex align-items-center justify-content-between">
                            <i className="fab fa-android"></i>
                            <p>Download on the <br /><span>App Store</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sideBarMeal d-flex flex-column align-items-center justify-content-between container">
                <p className="sideBarMealTitle">
                    Your Meal Has Been Shipped
                </p>
                <div className="img">
                    <SvgMotor />
                </div>
                <div className="time">
                    15<sup>m</sup>
                    :
                    20<sup>s</sup>
                </div>
            </div>
        </div>
    )
}
