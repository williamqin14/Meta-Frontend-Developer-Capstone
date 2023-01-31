import logo from '../icons_assets/Logo.svg'

// reference for the future on grid layout template: https://stackoverflow.com/questions/57504992/aligning-multiple-boxes-on-css

export default function Nav() {
    return (
        <nav class="grid">
            <div class="grid-item-2"/>
            <div class="grid-item-2">
                <img style={{maxWidth:'100'}} src={logo} alt="Little Lemon Restaurant Logo"/>
            </div>
            <div class="grid-item">Home</div>
            <div class="grid-item">About</div>
            <div class="grid-item">Menu</div>
            <div class="grid-item">Reservation</div>
            <div class="grid-item">Order Online</div>
            <div class="grid-item">Login</div>
            <div class="grid-item-2"></div>
        </nav>
    )
}