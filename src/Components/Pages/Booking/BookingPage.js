import React from 'react'

import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../../utils/mockAPI";

import './style.css'

import ReservationForm from "./ReservationForm";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];


const BookingPage = () => {
 
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate("/confirmedReservation");
  };

  return (
    <div className="reservations">
      <h2>Table reservation</h2>
       <ReservationForm 
               availableTimes={availableTimes}
               dispatchOnDateChange={dispatchOnDateChange}
               submitData={submitData}
             />
    </div>
  )
}

export default BookingPage
