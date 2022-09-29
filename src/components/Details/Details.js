import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  clearStorage,
  getBreakFromStorage,
  setBreakInStorage,
} from "../../utils/localStorage";

export const Details = ({ details, setDetails }) => {
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const storedTime = getBreakFromStorage();
    if (storedTime) {
      setBreakTime(storedTime);
    }
  }, []);

  const handleBreak = (value) => {
    setBreakTime(value);
    setBreakInStorage(value);
  };

  const handleStorage = () => {
    clearStorage();
    setBreakTime(0);
    setDetails([]);
  };

  const notify = () => toast("Congratulations! You have done your activity.");
  const totalTime = details?.reduce(
    (prev, curr) => prev + curr.duration * curr.quantity,
    0
  );

  return (
    <div className="px-4 mt-5 sticky top-5 md:w-80 sm:w-72">
      <img
        className="w-12 h-12 rounded-full mx-auto outline outline-orange-300"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <h2 className="font-semibold text-center">Abhishek Sengupta</h2>
      <p className="text-gray-500 text-sm text-center">Chittagong Bangladesh</p>
      <div className="flex gap-7 mt-4 items-center justify-center bg-orange-200 rounded py-1">
        <div>
          <div className="font-medium text-center">61kg</div>
          <div className="text-sm text-gray-600">Weight</div>
        </div>
        <div>
          <div className="font-medium text-center">27yrs</div>
          <div className="text-sm text-gray-600 text-center">Age</div>
        </div>
        <div>
          <div className="font-medium text-center">6.6inch</div>
          <div className="text-sm text-gray-600 text-center">Height</div>
        </div>
      </div>
      <h2 className="mt-5 font-medium">Add a Break</h2>
      <div className="flex justify-center gap-3 bg-orange-200 py-1.5 rounded">
        <div
          onClick={(e) => handleBreak(10)}
          className="bg-white cursor-pointer rounded-full p-2 hover:bg-orange-500 font-medium"
        >
          10s
        </div>
        <div
          onClick={() => handleBreak(20)}
          className="bg-white cursor-pointer rounded-full p-2 hover:bg-orange-500 font-medium"
        >
          20s
        </div>
        <div
          onClick={() => handleBreak(30)}
          className="bg-white cursor-pointer rounded-full p-2 hover:bg-orange-500 font-medium"
        >
          30s
        </div>
        <div
          onClick={() => handleBreak(40)}
          className="bg-white cursor-pointer rounded-full p-2 hover:bg-orange-500 font-medium"
        >
          40s
        </div>
        <div
          onClick={() => handleBreak(50)}
          className="bg-white cursor-pointer rounded-full p-2 hover:bg-orange-500 font-medium"
        >
          50s
        </div>
      </div>

      <h2 className="mt-5 font-semibold">Activity Details:</h2>
      <div className="bg-orange-200 px-4 py-3 rounded flex justify-between">
        <span className="font-medium">Activity Time:</span>{" "}
        <span className="text-gray-600">
          {totalTime} {totalTime === 0 ? "second" : "seconds"}
        </span>
      </div>
      <div className="bg-orange-200 px-4 py-3 rounded flex justify-between mt-2">
        <span className="font-medium">Break Time:</span>{" "}
        <span className="text-gray-600">
          {breakTime} {breakTime === 0 ? "second" : "seconds"}
        </span>
      </div>
      <button
        onClick={() => handleStorage()}
        className="w-full bg-orange-500 rounded py-1.5 mt-5 font-medium"
      >
        Clear Activity
      </button>
      <button
        onClick={notify}
        className="w-full bg-orange-500 rounded py-1.5 mt-2 font-medium"
      >
        Activity Completed
      </button>
      <ToastContainer position="bottom-right" />
    </div>
  );
};
