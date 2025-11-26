import React from "react";

const userOrders = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold uppercase">My Orders</h1>
        <a href="#" className="underline">
          Terms And Conditions
        </a>
      </div>
      <div className="mb-8">
        <h2 className="font-semibold text-lg mb-2">My Ongoing Orders</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <p>No current orders available</p>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-lg mb-2">My Purchase History</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <p>No historic orders available</p>
        </div>
      </div>
    </div>
  );
};

export default userOrders;
