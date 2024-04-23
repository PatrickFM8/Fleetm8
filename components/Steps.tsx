import React from "react";

const Steps = () => {
  return (
    <div className="flex my-4 bg-black text-center">
      <div className="flex flex-col w-1/3 p-10 justify-center items-center">
        <h2 className="text-white mb-3 ">Step 1</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex flex-col w-1/3 p-10 justify-center items-center">
        <h2 className="text-white mb-3">Step 2</h2>
        <p className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex flex-col w-1/3 p-10 justify-center items-center">
        <h2 className="text-white mb-3">Step 3</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Steps;
