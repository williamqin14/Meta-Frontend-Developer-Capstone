import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { updateTimes, initializeTimes } from './App';

//run using npx jest app.test.js
//life saver when dealing with jest and css (put into package.json): 
//https://diessi.ca/blog/how-to-exclude-css-images-anything-from-unit-tests/
test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

describe('Checking initializeTimes function', () => {
  it('should return the correct expected value', () => {
    const expected = { availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] };
    expect(initializeTimes).toEqual(expected);
  });
});

describe('Checking updateTimes function', () => {
  it('should return the same value that is provided in the state', () => {
    const state = { availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] };
    const action = { type: 'setTime', value: '23:00' };
    const expected = { ...state, availableTimes: action.value };
    expect(updateTimes(state, action)).toEqual(expected);
  });
});