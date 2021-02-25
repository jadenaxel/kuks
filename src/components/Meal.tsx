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
            <div className="sideBarMeal"></div>
        </div>
    )
}
