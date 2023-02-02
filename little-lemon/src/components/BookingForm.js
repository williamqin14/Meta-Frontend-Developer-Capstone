import { useState } from 'react';

export default function BookingForm(props) {
    // https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input
    const [date, setDate] = useState('');
    const [time, setTime] = useState(props.state.availableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date);
        console.log(time);
        console.log(guests);
        console.log(occasion);
    }

    return (
        <>
            <h2>Book Now</h2>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(e) => {setDate(e.target.value); props.dispatch({type: 'setTime', value: e.target.value});}}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {props.state.availableTimes.map((ele) => (
                        <option key={ele}>{ele}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
        </>
    );
}