export const Activity = ({ activity, handleAddToList }) => {
  const { name, image, age, description, duration } = activity;
  return (
    <div className="bg-white rounded p-4 sm:shadow ">
      <img className="rounded h-44 w-full" src={image} alt="" />
      <div className="mt-2 flex justify-between items-center">
        <span className="font-medium ">{name}</span>
        <span className="text-orange-500">For age: {age}</span>
      </div>
      <p className="text-gray-500 mt-1">
        {description.length > 100
          ? description.slice(0, 104) + "..."
          : description}
      </p>

      <div className="flex items-center gap-1 mt-1">
        <div className=" font-medium ">Time required: {duration}s</div>
        <img src="assets/clock.svg" alt="" />
      </div>
      <button
        onClick={() => handleAddToList(activity)}
        className="bg-orange-500 w-full rounded py-1.5 mt-4 font-semibold hover:bg-orange-600"
      >
        Add to list
      </button>
    </div>
  );
};
