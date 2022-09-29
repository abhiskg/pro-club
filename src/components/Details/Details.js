import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  clearStorage,
  getBreakFromStorage,
  setBreakInStorage,
} from "../../utils/localStorage";

export const Details = ({ details }) => {
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
  };

  const notify = () => toast("Congratulations! You have done your activity.");
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
      <div className="flex justify-center gap-3 bg-gray-100 py-1.5">
        <div
          onClick={(e) => handleBreak(10)}
          className="bg-white cursor-pointer rounded-full p-2"
        >
          10s
        </div>
        <div
          onClick={() => handleBreak(20)}
          className="bg-white cursor-pointer rounded-full p-2"
        >
          20s
        </div>
        <div
          onClick={() => handleBreak(30)}
          className="bg-white cursor-pointer rounded-full p-2"
        >
          30s
        </div>
        <div
          onClick={() => handleBreak(40)}
          className="bg-white cursor-pointer rounded-full p-2"
        >
          40s
        </div>
        <div
          onClick={() => handleBreak(50)}
          className="bg-white cursor-pointer rounded-full p-2"
        >
          50s
        </div>
      </div>

      <h2 className="mt-5 font-medium">Exercise Details</h2>
      <div>Exercise Time: {totalTime}</div>
      <div>Break Time:{breakTime}</div>
      <button
        onClick={() => handleStorage()}
        className="w-full bg-orange-200 rounded py-1.5 mt-3"
      >
        Clear Details
      </button>
      <button
        onClick={notify}
        className="w-full bg-orange-200 rounded py-1.5 mt-3"
      >
        Activity Completed
      </button>
      <ToastContainer position="bottom-right" />
    </div>
  );
};
