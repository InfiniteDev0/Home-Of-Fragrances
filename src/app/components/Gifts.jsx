import Link from 'next/link';
import React from 'react'

const Gifts = () => {
    const giftCategories = [
      {
        name: "Gifts for Her",
        img: "https://essenceofsolea.com/cdn/shop/files/B12F48BB-F554-4830-8FCF-2DEE564D317A.jpg?v=1748995449&width=1946",
        link:"/gifts/gifts-for-her"
      },
      {
        name: "Gift for Him",
        img: "https://cdn.salla.sa/form-builder/25PX4t2DkXoDR9ZaEhQFTio6qzOEWEnsOeX9LiqY.jpg",
        link:"/gifts/gifts-for-him"
      },
      {
        name: "Brands collection Set",
        img: "https://static.dezeen.com/uploads/2021/10/frank_gehry_louis_vuitton_perfume_bottle_design_dezeen_2364_col_hero.jpg",
        link:"/gifts/gifts-from-brand-collections"
      },
      {
        name: "Packaging Customization",
        img: "https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym94JTIwcGFja2FnaW5nfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
        link:"/gifts/package_customization"
      },
    ];
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5   px-2 ">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700">Gift Choices</p>
          <p className="text-xs font-semibold tracking-wider">
            Choose from us Gifts that are fit for a King and Queen.
          </p>
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
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
