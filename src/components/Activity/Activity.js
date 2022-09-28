export const Activity = () => {
  return (
    <div className="bg-white rounded p-4">
      <img
        className="rounded"
        src="https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cnVubmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <h2 className="font-medium mt-3">Dumble</h2>
      <p className="text-gray-500 mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        quidem at dolore.
      </p>
      <div className="mt-1">For Age: 20-25</div>
      <div className="mt-1">Time required: 30s</div>
      <button className="bg-orange-500 w-full rounded py-1.5 mt-4 font-semibold">
        Add to list
      </button>
    </div>
  );
};
