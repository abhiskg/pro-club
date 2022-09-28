import { useEffect, useState } from "react";
import { Activity } from "../components/Activity/Activity";
import { Details } from "../components/Details/Details";

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

  const handleAddToList = (activity) => {
    setDetails([...details, activity]);
  };

  return (
    <div className="bg-gray-100 flex relative flex-col sm:flex-row">
      <div className="mx-10 order-1 sm:order-none">
        <h1 className="text-4xl font-bold text-orange-500 mt-10">PRO-CLUB</h1>
        <h2 className="mt-5 font-semibold text-lg">Select today's activity</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5 mt-3">
          {activities.map((activity) => (
            <Activity
              key={activity._id}
              activity={activity}
              handleAddToList={handleAddToList}
            />
          ))}
        </div>
      </div>
      <div className="relative bg-white ">
        <Details details={details} />
      </div>
    </div>
  );
};
