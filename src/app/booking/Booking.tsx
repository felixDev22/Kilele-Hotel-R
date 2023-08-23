

export const Booking = () => {
  return (
    <>
      <div className="flex-col bg-[#4dd3f5] w-80vw py-4 px-4">
        <h2 className="text-var-[#81642d] pb-4">
          Book <span> Your Room</span>
        </h2>

        <div className="form grid">
          <form className="flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 lg:space-y-0 md:space-x-2 lg:space-x-2">
            <input
              type="date"
              placeholder="Arrival Date"
              className="w-full md:w-auto lg:w-auto"
            />
            <input
              type="date"
              placeholder="Departure Date"
              className="w-full md:w-auto lg:w-auto"
            />
            <input
              type="number"
              placeholder="Adult"
              className="w-full md:w-auto lg:w-auto"
            />
            <input
              type="number"
              placeholder="Children"
              className="w-full md:w-auto lg:w-auto"
            />
            <input
              type="number"
              placeholder="Room"
              className="w-full md:w-auto lg:w-auto"
            />
            <button
              type="submit"
              value="CHECK AVAILABILITY"
              className="btn bg-[#81642d] text-white ml-4 md:text-sm">
              CHECK AVAILABILITY
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
