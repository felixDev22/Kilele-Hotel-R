import React, { Children, useState } from 'react';
import axios from 'axios';

export const Booking = () => {
  const [formData, setFormData] = useState({
    date_of_arrival: '',
    date_of_departure: '',
    adults: 0,
    children: 0,
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="w-80vw p-4 mr-6">
        <div className="form grid">
          <form className="flex-col md:flex-row lg:flex-row md:space-y-0 lg:space-y-0 md:space-x-2 lg:space-x-2">
            <input type="date" placeholder="Arrival Date" name='date_of_arrival' value={formData.date_of_arrival} onChange={handleChange}/>
            <input type="date" placeholder="Departure Date" />
            <input type="number" placeholder="Adult" className="input2" />
            <input type="number" placeholder="Children" className="input2" />
            <input type="number" placeholder="Room" className="input2" />
            <button
              type="submit"
              value="CHECK AVAILABILITY"
              className="btn mt-6 text-l bg-[#8d7352] text-white lg:ml-6 md:text-base lg:text-lg">
              CHECK AVAILABILITY
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
