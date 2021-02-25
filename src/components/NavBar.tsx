
export default function NavBar() {
    return (
        <div className="container navbard">
            <div className="d-flex align-items-center justify-content-between header">
                <div className="navbar-brand">KUKS FRESH</div>
                <div className="menu d-flex align-items-center">
                    <ul className="d-flex nav-ul">
                        <li><a href="/">Find</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">How It Works</a></li>
                        <li><a href="/">Plans</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                    <div className="right-menu-data d-flex align-items-center justify-content-between">
                        <div className="profile-image">
                            <img src="" alt="" />
                        </div>
                        <div className="line"></div>
                        <div className="cart d-flex align-items-center justify-content-between">
                            <i className="fas fa-shopping-bag"></i>
                            <div className="quantity">(5)</div>
                            <p>Items</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
