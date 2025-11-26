"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation"; // ⬅️ make sure this path is correct
import React from "react";

const Overview = ({ profileData }) => {
  const router = useRouter();
  const { logout } = useAuth(); // ⬅️ get logout from auth context

  const handleLogout = () => {
    logout(); // ⬅️ clears cookies, localStorage, sessionStorage, context user
    router.push("/login");
  };

  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-2 gap-8">
        {/* My Account */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-2">My account</h3>
          <p className="text-sm">Login: {profileData.email}</p>
          <button className="bg-black text-white rounded-full py-2 mt-2">
            Edit my profile
          </button>
        </div>

        {/* My Orders */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-2">My orders</h3>
          <p className="text-sm">There are no current orders</p>
          <button className="bg-black text-white rounded-full py-2 mt-2">
            START SHOPPING
          </button>
        </div>

        {/* My Appointments */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-2">My Appointments</h3>
          <p className="text-sm">You have no upcoming appointments.</p>
          <button className="bg-black text-white rounded-full py-2 mt-2">
            Book in-store appointment
          </button>
        </div>

        {/* My Wishlist */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-2">My wishlist</h3>
          <p className="text-sm">Your wishlist is empty</p>
        </div>

        {/* My Recommendations */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-2">My Recommendations</h3>
          <p className="text-sm">My recommendations</p>
        </div>

        {/* My Care Service */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-2">My Care Service</h3>
          <p className="text-sm">No products currently in Care Service</p>
          <button className="bg-black text-white rounded-full py-2 mt-2">
            Contact client services
          </button>
        </div>

        {/* My Certificates */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-2">My Vouchers</h3>
          <p className="text-sm">You currently don’t have any vouchers</p>
        </div>

        {/* Logout Button */}
        <div className="flex justify-end gap-5 items-center mt-8">
          <button
            onClick={handleLogout}
            className="bg-red-800 hover:bg-black transition-all duration-300 cursor-pointer text-white rounded-full px-8 py-2"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
