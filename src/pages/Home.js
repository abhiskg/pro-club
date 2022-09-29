import { useEffect, useState } from "react";
import { Activity } from "../components/Activity/Activity";
import { Blogs } from "../components/Blogs/Blogs";
import { Details } from "../components/Details/Details";
import {
  getActivityFromStorage,
  setActivityInStorage,
} from "../utils/localStorage";

export const Home = () => {
  const [activities, setActivities] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const loadActivities = async () => {
      const res = await fetch("data/data.json");
      const data = await res.json();
      setActivities(data);
    };
    loadActivities();
  }, []);

  useEffect(() => {
    const storedActivity = getActivityFromStorage();
    const savedActivityArray = [];
    for (const id in storedActivity) {
      const savedActivity = activities.find((activity) => activity._id === id);
      if (savedActivity) {
        savedActivity.quantity = storedActivity[id];
        savedActivityArray.push(savedActivity);
      }
    }
    setDetails(savedActivityArray);
  }, [activities]);

  const handleAddToList = (activity) => {
    setActivityInStorage(activity._id);
    const storedActivity = details.find(
      (detail) => detail._id === activity._id
    );

    let newActivity = [];
    if (!storedActivity) {
      activity.quantity = 1;
      newActivity = [...details, activity];
    } else {
      const remainActivity = details.filter(
        (detail) => detail._id !== activity._id
      );
      storedActivity.quantity = storedActivity.quantity + 1;
      newActivity = [...remainActivity, storedActivity];
    }
    setDetails(newActivity);
  };

  return (
    <div className="bg-gray-100 flex relative flex-col sm:flex-row">
      <div className="md:mx-10 mx-4 order-1 sm:order-none">
        <div className="flex items-center justify-center text-orange-500 mt-10 gap-1">
          <img src="assets/activity.svg" alt="" />
          <h1 className="md:text-4xl text-3xl font-bold  text-center">
            PRO-CLUB
          </h1>
        </div>
        <h2 className="mt-5 font-semibold text-xl">Select today's activity</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5 mt-5">
          {activities.map((activity) => (
            <Activity
              key={activity._id}
              activity={activity}
              handleAddToList={handleAddToList}
            />
          ))}
        </div>
        <Blogs />
      </div>
      <div className="relative bg-white sm:shadow ">
        <Details details={details} setDetails={setDetails} />
      </div>
    </div>
  );
};
