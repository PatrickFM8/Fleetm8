import React from "react";

const Steps = () => {
  return (
    <div className="flex my-4 w-full bg-black text-center">
      <div className="flex flex-col w-1/4 p-10 justify-center items-center">
        <h2 className="text-white text-2xl ">Ports</h2>
        <p className="text-white pt-8">
        Administration of services for lower costs and increased capacity port side. Live tracking of vessel traffic, queueing system and push notifications for Just-in-Time benefits.
        </p>
      </div>

      <div className="flex flex-col w-1/4 p-10 justify-center items-center">
        <h2 className="text-white text-2xl">Ships</h2>
        <p className="text-white pt-8">
            Digital logbooks, checklists and work-culture development on board. Leverage ship specific data for organizational gains and increased transparency.
        </p>
      </div>

      <div className="flex flex-col w-1/4 p-10 justify-center items-center">
        <h2 className="text-white text-2xl">Insurance</h2>
        <p className="text-white pt-8">
          Next level performance analysis and risk assessment through collected metrics. SMART effects with the FM8 platform as a regulatory instrument on shore and on board.
        </p>
      </div>

      <div className="flex flex-col w-1/4 p-10 justify-center items-center">
        <h2 className="text-white text-2xl">Compliance</h2>
        <p className="text-white pt-8">
          Benchmarking and rendering of reports to influence organizational short and long term sustainability strategies. Seamless compliance with international regulations.
        </p>
      </div>

    </div>
  );
};

export default Steps;
