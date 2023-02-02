import { useEffect } from 'react';
import BookingForm from './BookingForm';

export default function BookingPage(props) {

    return (
        <>
        <BookingForm state={props.state} dispatch={props.dispatch}></BookingForm>
        </>
    );
}