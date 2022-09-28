export const Details = ({ details }) => {
  console.log(details);
  const totalTime = details.reduce((prev, curr) => prev + curr.duration, 0);
  return (
    <div className="px-4 mt-5 sticky top-5 md:w-80 sm:w-72">
      <img
        className="w-12 h-12 rounded-full mx-auto"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <h2 className="font-semibold text-center">Abhishek Sengupta</h2>
      <p className="text-gray-500 text-sm text-center">Chittagong Bangladesh</p>
      <div className="flex gap-5 mt-4 items-center justify-center ">
        <div>
          <div className="font-medium text-center">75kg</div>
          <div className="text-sm text-gray-500">Weight</div>
        </div>
        <div>
          <div className="font-medium text-center">6.5</div>
          <div className="text-sm text-gray-500 text-center">Height</div>
        </div>
        <div>
          <div className="font-medium text-center">25yrs</div>
          <div className="text-sm text-gray-500 text-center">Age</div>
        </div>
      </div>
      <h2 className="mt-5 font-medium">Add a Break</h2>
      <h2 className="mt-5 font-medium">Exercise Details</h2>
      <div>Exercise Time: {totalTime}</div>
      <div>Break Time:</div>
      <button className="w-full bg-orange-200 rounded py-1.5 mt-3">
        Clear Details
      </button>
      <button className="w-full bg-orange-200 rounded py-1.5 mt-3">
        Activity Completed
      </button>
    </div>
  );
};
