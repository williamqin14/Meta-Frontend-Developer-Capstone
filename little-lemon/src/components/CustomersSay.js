import person from '../icons_assets/smile person.jpeg';

export default function CustomersSay() {
    const styling = {
        width: '100%',
        padding: '10px',
    };

    return (
        <>
            <div class='grid'>
                <div class='grid-item-5'></div>
                <div class='grid-item-2'>
                    <h2>Testimonials</h2>
                </div>
            </div>
            <div class='grid'>
                <div class='grid-item-2'></div>
                <div class='grid-item-2'>
                    <div class='column-text'>
                        <h3>Rating</h3>
                        <div class='row-text'>
                            <div class='img-container-half'>
                                <img src={person} alt=''></img>
                            </div>
                            <p style={styling}>name</p>
                        </div>
                        <p>Review Text</p>
                    </div>
                </div>
                <div class='grid-item-2'>
                    <div class='column-text'>
                        <h3>Rating</h3>
                        <div class='row-text'>
                            <div class='img-container-half'>
                                <img src={person} alt=''></img>
                            </div>
                            <p style={styling}>name</p>
                        </div>
                        <p>Review Text</p>
                    </div>
                </div>
                <div class='grid-item-2'>
                    <div class='column-text'>
                        <h3>Rating</h3>
                        <div class='row-text'>
                            <div class='img-container-half'>
                                <img src={person} alt=''></img>
                            </div>
                            <p style={styling}>name</p>
                        </div>
                        <p>Review Text</p>
                    </div>
                </div>
                <div class='grid-item-2'>
                    <div class='column-text'>
                        <h3>Rating</h3>
                        <div class='row-text'>
                            <div class='img-container-half'>
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