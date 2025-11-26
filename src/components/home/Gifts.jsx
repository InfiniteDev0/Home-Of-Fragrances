import { giftCategories } from '@/data/constants';
import Link from 'next/link';
import React from 'react'

const Gifts = () => {
  return (
    <div className="relative h-fit w-full !px-6 overflow-hidden">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700">Gift Choices</p>
          <p className="text-xs font-semibold tracking-wider">
            Choose from us Gifts that are fit for a King and Queen.
          </p>
        </div>
        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4">
          {giftCategories.map((gift, idx) => (
            <Link
              href={`${gift.link}`}
              key={idx}
              className="flex flex-col gap-3 p-2 md:p-4 group"
            >
              {/* Image Container */}
              <div
                className="relative w-full dark:bg-white aspect-square
                 overflow-hidden"
              >
                <img
                  src={gift.img}
                  alt={gift.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* gift Info */}
              <div className="flex flex-col gap-2">
                <h1
                  className="text-xs sm:text-sm transition-all
                     group-hover:underline  font-semibold line-clamp-2 leading-tight"
                >
                  {gift.name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gifts
