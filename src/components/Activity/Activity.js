export const Activity = ({ activity, handleAddToList }) => {
  const { name, image, age, description, duration } = activity;
  return (
    <div className="bg-white rounded p-4">
      <img className="rounded h-44 w-full" src={image} alt="" />
      <h2 className="font-medium mt-3">{name}</h2>
      <p className="text-gray-500 mt-1">
        {description.length > 100
          ? description.slice(0, 104) + "..."
          : description}
      </p>
      <div className="mt-1">For Age: {age}</div>
      <div className="mt-1">Time required: {duration}s</div>
      <button
        onClick={() => handleAddToList(activity)}
        className="bg-orange-500 w-full rounded py-1.5 mt-4 font-semibold"
      >
        Add to list
      </button>
    </div>
  );
};
