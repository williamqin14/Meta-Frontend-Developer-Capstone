import restaurant from '../icons_assets/restaurant.jpg';

export default function Footer() {
    return (
        <footer>
            <div class='grid' style={{marginBottom:'60px'}}>
                <div class='grid-item-2'></div>
                <div class='grid-item-2'>
                    <img src={restaurant} alt=''></img>
                </div>
                <div class='grid-item-2'>
                    <div class='column-text-padded'>
                        <h3>Doormat Navigation</h3>
                        <p>Home</p>
                        <p>About</p>
                        <p>Menu</p>
                        <p>Reservations</p>
                        <p>Order Online</p>
                        <p>Login</p>
                    </div>
                </div>
                <div class='grid-item-2'>
                    <div class='column-text-padded'>
                        <h3 style={{marginBottom:'43px'}}>Contact</h3>
                        <p>Address</p>
                        <p>Phone number</p>
                        <p>Email</p>
                    </div>
                </div>
                <div class='grid-item-2'>
                    <div class='column-text-padded'>
                        <h3>Social Media Links</h3>
                        <p>Address</p>
                        <p>Phone number</p>
                        <p>Email</p>
                    </div>
                </div>
            </div>
            <div class="grid">
            </div>
        </footer>
    )
}