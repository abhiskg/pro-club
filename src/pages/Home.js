import { useEffect, useState } from "react";
import { Activity } from "../components/Activity/Activity";
import { Details } from "../components/Details/Details";

export const Home = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const loadActivities = async () => {
      const res = await fetch("data/data.json");
      const data = await res.json();
      setActivities(data);
    };
    loadActivities();
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="w-9/12 mx-auto">
        <h1>PRO-CLUB</h1>
        <h2>Select today's activity</h2>
        <div className="grid grid-cols-3 gap-5">
          {activities.map((activity) => (
            <Activity key={activity._id} activity={activity} />
          ))}
        </div>
      </div>
      <div className="sticky top-0 bg-white">
        <Details />
      </div>
    </div>
  );
};
