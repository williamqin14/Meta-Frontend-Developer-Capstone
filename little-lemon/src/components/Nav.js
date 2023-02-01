import logo from '../icons_assets/Logo.svg'

// reference for the future on grid layout template: https://stackoverflow.com/questions/57504992/aligning-multiple-boxes-on-css

export default function Nav() {
    return (
        <nav className="grid">
            <div className="grid-item-2"/>
            <div className="grid-item-2">
                <img src={logo} alt="Little Lemon Restaurant Logo" style={{objectFit: 'none'}}/>
            </div>
            <div className="grid-item">Home</div>
            <div className="grid-item">About</div>
            <div className="grid-item">Menu</div>
            <div className="grid-item">Reservation</div>
            <div className="grid-item">Order Online</div>
            <div className="grid-item">Login</div>
            <div className="grid-item-2"></div>
        </nav>
    )
}