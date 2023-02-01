import pic from '../icons_assets/restauranfood.jpg';

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
        <div class='grid' style={gridStyle}>
            <div class='grid-item-2' style={gridStyle}/>
            <div class='grid-item-3' style={gridStyle}>
                <div class="column-text" style={textStyle} >
                    <h1 style={h1Style}>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button */}
                    <input class='button-sm' type="button" value='Reserve a Table'></input>
                    
                </div>
            </div>
            <div class='grid-item-2' style={gridStyle}></div>
            <img src={pic} alt='' class='grid-item-3' style={imgStyle}></img>
            <div class='grid-item-2'style={gridStyle}/>

        </div>
    )
}