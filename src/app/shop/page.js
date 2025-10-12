import { Settings } from "lucide-react";
import React from "react";

const Shoppage = () => {
  return (
    <div>
      {/* desktop shop version */}
      <div className="hidden md:flex"></div>
      <div
        className="flex md:hidden w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/29805437/pexels-photo-29805437.jpeg?cs=srgb&dl=pexels-pic-matti-450440252-29805437.jpg&fm=jpg')",
        }}
      >
        {/* ...add any mobile shop content here... */}
        <div className="!px-6 !py-10 w-full h-full flex flex-col gap-[5rem]">
          <div className="flex justify-end w-full">
            <Settings className="text-white " />
          </div>
          <ul>
            <li>
                
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shoppage;
