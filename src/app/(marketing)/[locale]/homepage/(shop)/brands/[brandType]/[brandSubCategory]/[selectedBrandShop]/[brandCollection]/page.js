import React from 'react'

const brandCollectionpage = () => {
  const products = [
    {
      id: 1,
      name: "Symphony",
      brand: "Louis Vuitton",
      image:
        "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-symphony--LP0249_PM2_Front%20view.png?wid=490&hei=490",
      price: "920",
      rating: 4.8,
      description:
        "Dazzling freshness with ginger, bergamot & grapefruit / 100 ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 2,
      name: "Stellar Times",
      brand: "Louis Vuitton",
      image:
        "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-stellar-times--LP0242_PM2_Front%20view.png?wid=490&hei=490",
      price: "920",
      rating: 4.9,
      description:
        "Amber-woody escape with orange blossom & white amber / 100 ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 3,
      name: "Dancing Blossom",
      brand: "Louis Vuitton",
      image:
        "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-dancing-blossom--LP0247_PM2_Front%20view.png?wid=490&hei=490",
      price: "920",
      rating: 4.7,
      description: "Floral cascade of rose, jasmine & tuberose / 100 ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 4,
      name: "Cosmic Cloud",
      brand: "Louis Vuitton",
      image:
        "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cosmic-cloud--LP0251_PM2_Front%20view.png?wid=490&hei=490",
      price: "920",
      rating: 4.6,
      description: "Fruity-musk swirl with tonka bean & ambrette / 100 ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 5,
      name: "Myriad",
      brand: "Louis Vuitton",
      image:
        "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-myriad--LP0350_PM2_Front%20view.png?wid=490&hei=490",
      price: "920",
      rating: 4.8,
      description: "Elegant intensity exploring iris & musk / 100 ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 6,
      name: "Rhapsody",
      brand: "Louis Vuitton",
      image:
        "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rhapsody--LP0245_PM2_Front%20view.png?wid=490&hei=490",
      price: "920",
      rating: 4.7,
      description: "Modern chypre with patchouli, vetiver & jasmine / 100 ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 7,
      name: "Fantasmagory",
      brand: "Louis Vuitton",
      image:
        "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-fantasmagory---LP0429_PM2_Front%20view.png?wid=1090&hei=1090",
      price: "920",
      rating: 4.9,
      description: "Vanilla visionary with ginger & almond / 100 ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 7,
      name: "All in One",
      brand: "Louis Vuitton",
      image:
        "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-flaconnier-high-end--M10070_PM2_Front%20view.png?wid=490&hei=490",
      price: "920",
      rating: 4.9,
      description: "Vanilla visionary with ginger & almond / 100 ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
  ];

  return (
    <div className="flex flex-col gap-5 !py-22 w-full !px-6 overflow-hidden min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-gray-300 pb-3">
        <h1 className="font-semibold text-2xl">Les Extraits</h1>
        <p className="text-sm font-semibold">
          Description of what Les Extraits are
        </p>
      </div>
      <p className="text-sm underline text-gray-500 font-semibold">
        Feautures 7 fragrances
      </p>

      {/* products */}
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product, idx) => (
          <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
            {/* Image Container */}
            <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xs  font-semibold line-clamp-2 leading-tight">
                {product.name}
              </h1>
              <p className="text-xs">{product.description}</p>
              <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                {product.price}$
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default brandCollectionpage
