import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeOff } from "lucide-react";
import React from "react";

const UserProfile = ({ profileData }) => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col gap-5  !px-5 py-5">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col w-[50%] gap-5 overflow-y-scroll h-[70vh] border !p-5">
          <div className="flex  gap-4">
            <div className="w-8 h-8 text-sm  bg-gray-200 rounded-full flex items-center justify-center">
              YH
            </div>
            <div>
              <h1 className="text-xl font-semibold flex items-center gap-3">
                Hello {profileData.displayName}{" "}
              </h1>
              <p className="text-xs text-gray-500 font-semibold">
                This is your HOF account , Explore it and enjoy.
              </p>
            </div>
          </div>
          <div className="flex flex-col  h-full">
            {/* personal details */}
            <div className=" !px-5 !py-3  ">
              <h1 className="font-semibold text-sm underline">
                Personal Information
              </h1>
              <div className="!p-4">
                <p className="text-sm flex items-center gap-2 text-gray-500 font-semibold ">
                  <span className="text-black">Title:</span>
                  Mr
                </p>
                <p className="text-sm flex items-center gap-2 text-gray-500 font-semibold ">
                  <span className="text-black">Name:</span>
                  {profileData.displayName}
                </p>
                <p className="text-sm flex items-center gap-2 text-gray-500 font-semibold ">
                  <span className="text-black">Email:</span>
                  {profileData.email}
                </p>
                <p className="text-sm flex items-center gap-2 text-gray-500 font-semibold ">
                  <span className="text-black">Contact number:</span>
                  +971 800 884 8866
                </p>
              </div>
            </div>
            {/* Address information */}
            <div className=" !px-5 !py-3  ">
              <h1 className="font-semibold text-sm underline">
                Address information
              </h1>
              <div className="!p-4">
                <p className="text-xs font-semibold flex items-center justify-between">
                  Your Address is private and only for your eyes{" "}
                  <EyeOff className="w-4 h-4" />
                </p>
                <div className="mt-3">
                  <p className="text-sm flex items-center gap-2 text-gray-500 font-semibold ">
                    <span className="text-black">Country & City:</span>
                    ...............
                  </p>
                  <p className="text-sm flex items-center gap-2 text-gray-500 font-semibold ">
                    <span className="text-black">Area:</span>
                    ...............
                  </p>
                </div>
              </div>
            </div>
            {/* Edit your Information */}
            <div className=" !px-5 !py-3 flex flex-col gap-4  ">
              <h1 className="font-semibold text-sm underline">
                Customize Your Profile
              </h1>
              <form action="" className="flex flex-col gap-3">
                <div>
                  <label className="text-xs font-semibold">First Name*</label>
                  <Input
                    type="text"
                    placeholder="Change title"
                    className={"rounded-none border-black"}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold">Last Name*</label>
                  <Input
                    type="text"
                    placeholder="Change title"
                    className={"rounded-none border-black"}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold">Email*</label>
                  <Input
                    type="text"
                    placeholder="Change title"
                    className={"rounded-none border-black"}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold">
                    Contact Number*
                  </label>
                  <Input
                    type="text"
                    placeholder="Change title"
                    className={"rounded-none border-black"}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold">Address*</label>
                  <Input
                    type="text"
                    placeholder="Change title"
                    className={"rounded-none border-black"}
                  />
                </div>
                <Button
                  className={
                    "rounded-full bg-black !my-5 hover:bg-transparent border border-black hover:text-black cursor-pointer font-semibold tracking-wider"
                  }
                >
                  Save Changes
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[50%] h-fit border">
          <div className="flex flex-col !p-4 justify-between">
            <p className="text-lg font-semibold underline">
              Our recommendation
            </p>
            <div className="flex flex-col gap-2">
              <Button
                className={
                  "rounded-none font-semibold tracking-wider text-xs cursor-pointer"
                }
              >
                Continue Shopping
              </Button>
              <Button
                className={
                  "rounded-none font-semibold tracking-wider text-xs cursor-pointer"
                }
              >
                Add to Wishlist
              </Button>
            </div>
            <div>
              <p className="font-extrabold tracking-wider">Amounge outlands</p>
              <p className="text-xs font-semibold text-gray-500">
                The Hottest new middleEastern niche
              </p>
            </div>
          </div>
          <img
            src="https://hrd-live.cdn.scayle.cloud/images/d00c51fb0e557486990b108d0e0e5ce7.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
