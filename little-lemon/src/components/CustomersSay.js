import person from '../icons_assets/smile person.jpeg';

export default function CustomersSay() {
    const styling = {
        width: '100%',
        padding: '10px',
    };

    return (
        <>
            <div className='grid'>
                <div className='grid-item-5'></div>
                <div className='grid-item-2'>
                    <h2>Testimonials</h2>
                </div>
            </div>
            <div className='grid'>
                <div className='grid-item-2'></div>
                <div className='grid-item-2'>
                    <div className='column-text'>
                        <h3>Rating</h3>
                        <div className='row-text'>
                            <div className='img-container-half'>
                                <img src={person} alt=''></img>
                            </div>
                            <p style={styling}>name</p>
                        </div>
                        <p>Review Text</p>
                    </div>
                </div>
                <div className='grid-item-2'>
                    <div className='column-text'>
                        <h3>Rating</h3>
                        <div className='row-text'>
                            <div className='img-container-half'>
                                <img src={person} alt=''></img>
                            </div>
                            <p style={styling}>name</p>
                        </div>
                        <p>Review Text</p>
                    </div>
                </div>
                <div className='grid-item-2'>
                    <div className='column-text'>
                        <h3>Rating</h3>
                        <div className='row-text'>
                            <div className='img-container-half'>
                                <img src={person} alt=''></img>
                            </div>
                            <p style={styling}>name</p>
                        </div>
                        <p>Review Text</p>
                    </div>
                </div>
                <div className='grid-item-2'>
                    <div className='column-text'>
                        <h3>Rating</h3>
                        <div className='row-text'>
                            <div className='img-container-half'>
                                <img src={person} alt=''></img>
                            </div>
                            <p style={styling}>name</p>
                        </div>
                        <p>Review Text</p>
                    </div>
                </div>

            </div>
        </>
    )
}