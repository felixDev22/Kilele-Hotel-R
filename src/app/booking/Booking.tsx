'use client';
import React, { useState } from 'react';
import axios from 'axios';
import router from 'next/router';

export const Booking = () => {
  const [formData, setFormData] = useState({
    date_of_arrival: '',
    date_of_departure: '',
    adults: '',
    children: '',
    room: '',
  });

  const [availabilityMessage, setAvailabilityMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckAvailability = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/check_availability',
        formData,
      );
      if (response.data.available) {
        setAvailabilityMessage('Book Now');
        router.push('/room');
      } else {
        setAvailabilityMessage('We currently are fully booked');
      }
      setShowPopup(true);
    } catch (error) {
      console.error('Error checking availability:', error);
      setAvailabilityMessage('Error checking availability');
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="w-80vw p-4 mr-6">
        <div className="form grid">
          <form
            className="flex-col md:flex-row lg:flex-row md:space-y-0 lg:space-y-0 md:space-x-2 lg:space-x-2"
            onSubmit={handleCheckAvailability}>
            <input
              type="date"
              placeholder="Arrival Date"
              name="date_of_arrival"
              value={formData.date_of_arrival}
              onChange={handleChange}
            />

            <input
              type="date"
              placeholder="Departure Date"
              name="date_of_departure"
              value={formData.date_of_departure}
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Adult"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Children"
              name="children"
              value={formData.children}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Room"
              name="room"
              value={formData.room}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn mt-4 text-l bg-[#e0b15a] text-white lg:ml-6 md:text-base lg:text-lg">
              CHECK AVAILABILITY
            </button>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="bg-[#50dcff] p-2  rounded-lg mb-48 lg:-mt-80 absolute">
          <div className="popup-inner">
            <h2 className="text-black text-[15px]">{availabilityMessage}</h2>
            <button onClick={closePopup} className="text-red-700 text-sm">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
