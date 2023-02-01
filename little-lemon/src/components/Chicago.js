import chef from '../icons_assets/Mario and Adrian A.jpg';

export default function Chicago() {
    const gridStyle = {
        background: '#495E57',
    }
    const textStyle = {
        color: '#F7F7F7',
    }

    return (
        <>
            <div class='grid' style={gridStyle}>
                <div class='grid-item-2'></div>
                <div class='grid-item-4'>
                    <div class='column-text'>
                        <h1>Little Lemon</h1>
                        <h2 style={textStyle}>Chicago</h2>
                        <p style={textStyle}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                </div>
                <div class='grid-item-4'>
                    <img src={chef} alt=''></img>
                </div>
            </div>
        </>
    )
}