import React from 'react'

const UserWishlist = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold uppercase">My Wishlist</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <p className="text-center text-lg font-semibold text-amber-700">Your wishlist is empty!</p>
        <p className="text-center text-sm mt-2">Add your favorite items and share them.<br/>Need Inspiration?</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg mb-2">Recently Viewed</h2>
        {/* Example recently viewed items grid (replace with real data) */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
            <div className="h-40 w-full bg-gray-200 mb-2" />
            <p className="text-xs mt-2">Ribbed Wool Half-Zip Pullover<br/>9,250 AED</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
            <div className="h-40 w-full bg-gray-200 mb-2" />
            <p className="text-xs mt-2">Speedy Bandoulière 35<br/>7,900 AED</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
            <div className="h-40 w-full bg-gray-200 mb-2" />
            <p className="text-xs mt-2">Imagination<br/>1,400 AED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserWishlist;