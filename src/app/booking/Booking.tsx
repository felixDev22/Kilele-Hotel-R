

export const Booking = () => {
  return (
    <>
      <div className="flex-col  w-80vw p-4 h-40">
      
        <div className="form grid">
          <form className="flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 lg:space-y-0 md:space-x-2 lg:space-x-2">
            <input
              type="date"
              placeholder="Arrival Date"
            />
            <input
              type="date"
              placeholder="Departure Date"
            />
            <input
              type="number"
              placeholder="Adult"
            />
            <input
              type="number"
              placeholder="Children"
            />
            <input
              type="number"
              placeholder="Room"
            />
            <button
              type="submit"
              value="CHECK AVAILABILITY"
              className="btn bg-[#81642d] text-white lg:ml-6 md:text-base lg:text-lg">
              CHECK AVAILABILITY
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
