import pic from '../icons_assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

export default function CallToAction() {
    //easier css modification
    const gridStyle = {
        background: '#495E57',
    }
    const h1Style = {
        fontSize: '60px', 
        marginBottom: '0px'
    }
    const textStyle = {
        color: '#F7F7F7',
    }
    const imgStyle = {
        background: '#495E57',
        borderRadius: '40px',
    }
    return (
        <div className='grid' style={gridStyle}>
            <div className='grid-item-2' style={gridStyle}/>
            <div className='grid-item-3' style={gridStyle}>
                <div className="column-text" style={textStyle} >
                    <h1 style={h1Style}>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking">
                        {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button */}
                        <input aria-label="On Click" className='button-sm' type="button" value='Reserve a Table'></input>
                    </Link>
                </div>
            </div>
            <div className='grid-item-2' style={gridStyle}></div>
            <img src={pic} alt='' className='grid-item-3' style={imgStyle}></img>
            <div className='grid-item-2'style={gridStyle}/>

        </div>
    )
}