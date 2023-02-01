import greekSalad from '../icons_assets/greek salad.jpg';
import bruchetta from '../icons_assets/bruchetta.svg';
import lemonDessert from '../icons_assets/lemon dessert.jpg';

export default function Specials() {
    const imgStyle = {
        borderRadius: '25px',
        borderBottomRightRadius: '0',
        borderBottomLeftRadius: '0',
    }

    return (
        <>
            <div className='grid'>
                <div className='grid-item-2'></div>
                <div className='grid-item-6'>
                    <div className='column-text'>
                        <h2 style={{fontSize: '60px'}}>This weeks specials!</h2>
                    </div>
                </div>
                <div className='grid-item-2'>
                    <input className='button-lg' type='button' value='Online Menu'></input>
                </div>
            </div>
            <div className='grid'>
                <div className='grid-item-2'></div>
                <div className='grid-item-8'>
                    <div className='row-card'>
                        <div className='img-container'>
                            <img src={greekSalad} alt='' style={imgStyle} ></img>
                        </div>
                        <div className='column-text-padded'>
                            <div className='row-text' style={{height: '30%'}}>
                                <h3>Greek salad</h3>
                                <h4>$12.99</h4>
                            </div>
                            <p style={{height: '60%'}}>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
                            <h3 style={{fontSize: '20px'}}>Order a delivery</h3>
                        </div>
                    </div>
                    <div className='row-card' style={{marginLeft: '5%', marginRight: '5%'}}>
                        <div className='img-container'>
                            <img src={bruchetta} alt='' style={imgStyle} ></img>
                        </div>
                        <div className='column-text-padded'>
                            <div className='row-text' style={{height: '30%'}}>
                                <h3>Bruchetta</h3>
                                <h4>$5.99</h4>
                            </div>
                            <p style={{height: '60%'}}>Our Bruchetta is made from grilled bread that has been smeared with farlic and seasoned with salt and olive oil.</p>
                            <h3 style={{fontSize: '20px'}}>Order a delivery</h3>
                        </div>
                    </div>
                    <div className='row-card'>
                        <div className='img-container'>
                            <img src={lemonDessert} alt='' style={imgStyle} ></img>
                        </div>
                        <div className='column-text-padded'>
                            <div className='row-text' style={{height: '30%'}}>
                                <h3>Lemon dessert</h3>
                                <h4>$5.00</h4>
                            </div>
                            <p style={{height: '60%'}}>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <h3 style={{fontSize: '20px'}}>Order a delivery</h3>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}