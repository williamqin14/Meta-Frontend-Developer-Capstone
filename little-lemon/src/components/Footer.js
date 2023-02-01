import restaurant from '../icons_assets/restaurant.jpg';

export default function Footer() {
    return (
        <footer>
            <div className='grid' style={{marginBottom:'60px'}}>
                <div className='grid-item-2'></div>
                <div className='grid-item-2'>
                    <img src={restaurant} alt=''></img>
                </div>
                <div className='grid-item-2'>
                    <div className='column-text-padded'>
                        <h3>Doormat Navigation</h3>
                        <p>Home</p>
                        <p>About</p>
                        <p>Menu</p>
                        <p>Reservations</p>
                        <p>Order Online</p>
                        <p>Login</p>
                    </div>
                </div>
                <div className='grid-item-2'>
                    <div className='column-text-padded'>
                        <h3 style={{marginBottom:'43px'}}>Contact</h3>
                        <p>Address</p>
                        <p>Phone number</p>
                        <p>Email</p>
                    </div>
                </div>
                <div className='grid-item-2'>
                    <div className='column-text-padded'>
                        <h3>Social Media Links</h3>
                        <p>Address</p>
                        <p>Phone number</p>
                        <p>Email</p>
                    </div>
                </div>
            </div>
            <div className="grid">
            </div>
        </footer>
    )
}