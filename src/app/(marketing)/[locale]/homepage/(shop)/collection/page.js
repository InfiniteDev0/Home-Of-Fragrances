import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const collectionPage = () => {
  const products = [
    {
      id: 1,
      name: "LV Imagination",
      brand: "Louis Vuitton",
      image:
        "https://whitewall.art/wp-content/uploads/2021/04/lv-beach-s4-596v3-e1617314981342.jpeg", // image for small screen sizes.
      // "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination---LP0226_PM2_Front%20view.png?wid=1090&hei=1090", image for large screen sizes
      price: "920",
      rating: 4.8,
      description: "Fresh Aquatic Escape / 100ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 2,
      name: "LV Imagination",
      brand: "Louis Vuitton",
      image:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F06%2Flouis-vuitton-imagination-mens-perfume-fragrance-1.jpg?q=75&w=800&cbr=1&fit=max",
      // "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination---LP0226_PM2_Front%20view.png?wid=1090&hei=1090",
      price: "920",
      rating: 4.8,
      description: "Fresh Aquatic Escape / 100ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 3,
      name: "Lv Sun Song",
      brand: "Louis Vuitton",
      image:
        "https://i0.wp.com/scentadvice.com/wp-content/uploads/2025/07/hawas-turning-into-the-fast-furious-franchise-megamare-v0-s4ii4y32kfff1-1.webp?fit=640%2C834&ssl=1",
      // "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sun-song--LP0427_PM1_Interior%20view.png?wid=490&hei=490",
      price: "920",
      rating: 4.9,
      description: "Radiant Solar Scent / 100ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 4,
      name: "Lv Pacific Chill",
      brand: "Fragrance World",
      image:
        "https://elitegen.singtao.ca/wp-content/uploads/elitegen2020/2023/05/PACIFIC-CHILL-PR-VISUAL-1-scaled.jpg",
      // "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pacific-chill---LP0326_PM2_Front%20view.png?wid=1090&hei=1090",
      price: "180",
      rating: 4.7,
      description: "Cool Ocean Breeze / 100ml",
      brandDescription:
        "Affordable luxury fragrances inspired by premium designer scents",
      brandLogo:
        "https://fragranceworld.ae/wp-content/uploads/2021/03/fw-logo.png",
    },
    {
      id: 5,
      name: "Odyssey Toffee Coffee",
      brand: "Armaf",
      image:
        "https://perfumesdemarca.com.mx/cdn/shop/files/odyssey-Toffee-Coffee-de-armaf-edp-100-ml-para-hombre-perfumes-originales-perfumes-de-marca-perfumes-arabes-8.jpg?v=1758325288",
      // "https://armaf.com/cdn/shop/files/GS-OdysseyLimoni_PhotoGrid.pngDisplayingGS-OdysseyLimoni_PhotoGrid.png._10.png?v=1757027475&width=533",
      price: "120",
      rating: 4.6,
      description: "Rich Gourmand Delight / 100ml",
      brandDescription:
        "UAE-based fragrance house creating affordable luxury scents with exceptional performance",
      brandLogo: "https://armaf.com/cdn/shop/files/armaf-logo.png",
    },
  ];

  const RelatedBrands = [
    {
      name: "Designer",
      img: "https://eu.louisvuitton.com/content/dam/lv/online/high-end/unisex/Fragrances/U_Fa_Pacific_Chill_V2.html/jcr:content/assets/M1_PACIFIC_CHILL_VISUAL_LVCOM_1600x2000_DII.jpg",
    },
    {
      name: "Niche",
      img: "https://nacosofficial.com/cdn/shop/files/RepushBR540-2024_Triptych_exdp_70ml_1080x1080_246c71ae-b2ef-4ffc-830f-d94511ca2e4b.png?v=1720095642&width=1445",
    },
    {
      name: "Indie",
      img: "https://www.dorsay.us/cdn/shop/products/DORSAY_Shopify2022-V2__produit-corpos_30-50-90ml_JR_50ML-ILLUS.jpg?v=1672839146&width=1946",
    },
    {
      name: "MiddleEastern",
      img: "https://dubai-aroma.co.za/cdn/shop/files/s-l1600_1d2b829f-315b-4164-a9a3-60199cb72a0c.webp?v=1756415394&width=1445",
    },
    {
      name: "Private / Exclusive Lines",
      img: "https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Library-Sites-Guerlain_SharedLibrary/default/dw2295fe50/Art&Matiere/HAIR_MIST/AM-HAIRMIST_SQUARE-IMAGE_TRIO.jpg?sw=1920",
    },
  ];
  const Seasons = [
    {
      name: "Winter",
      img: "https://static.wixstatic.com/media/nsplsh_ac0ebc93c42f4bccb93c39c1bd77b165~mv2.jpg/v1/fill/w_980,h_1544,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20HamZa%20NOUASRIA.jpg",
    },
    {
      name: "Summer",
      img: "https://www.aarfragrances.com/public/uploads/all/YsPPQpQPNsEd7sBQyX25noMaU66qu5GIKWi0EzgM.jpg",
    },
    {
      name: "Spring",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsmBryDyz7_5DNoajvjEwBpyyigqbyQGlyA&s",
    },
    {
      name: "Autumn",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzRdx8VA71zc3jq--NxD4kqsjmsyMsKBbkA&s",
    },
    {
      name: "All Seasons Wear",
      img: "https://jcpenney.scene7.com/is/image/JCPenney/DP0626202417041479M?hei=350&wid=350&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1",
    },
  ];
  const Notes = [
    {
      name: "Citrus and Fresh",
      img: "https://scentofdunes.com/wp-content/uploads/elementor/thumbs/oranges-and-flowers-citrus-notes-r9k465ht1wgg06toq31f6mutwxxf288uv96m3ud43k.webp",
    },
    {
      name: "Floral Elegance",
      img: "https://divainparfums.com/cdn/shop/files/notas-divain-786_bbfff90d-5065-4765-81cb-6a80de818592.jpg?v=1748721167&width=1946",
    },
    {
      name: "Woody & Earthy",
      img: "https://www.feelingsexy.com.au/images/OlFactory/woody_spicy_bd76c.jpg",
    },
    {
      name: "Fruity and Fresh",
      img: "https://www.purecandlesupplies.com.au/cdn/shop/files/thai-lime-and-mango-diffuser-roomspray-fragrance-oil_grande.png?v=1684158038",
    },
    {
      name: "Sweet & Gourmand",
      img: "https://cdn.shopify.com/s/files/1/0651/2502/3909/files/caramel-1.webp?v=1750778161",
    },
  ];
  const Occasion = [
    {
      name: "Winter",
      img: "https://ybeauty.pk/cdn/shop/files/5PCPerfume5.jpg?v=1738062017",
    },
    {
      name: "Summer",
      img: "https://yourperfumeshop.co.uk/cdn/shop/files/bleu-de-chanel-advert-parfum_800x.png?v=1717608283",
    },
    {
      name: "Spring",
      img: "https://fimgs.net/himg/o.MEfgsbOudLX.jpg",
    },
    {
      name: "Autumn",
      img: "https://www.franciskurkdjian.com/on/demandware.static/-/Sites-mfk-master-catalog/default/dw6a4542e3/BR540_REPUSH25-KV_AIR-ALL_triptych_square_1080x1080.jpg",
    },
    {
      name: "All Seasons Wear",
      img: "https://cdn4.beautinow.com/wp-content/uploads/2024/05/167.2.jpg",
    },
  ];
  const Region = [
    {
      name: "Winter",
      img: "https://ybeauty.pk/cdn/shop/files/5PCPerfume5.jpg?v=1738062017",
    },
    {
      name: "Summer",
      img: "https://yourperfumeshop.co.uk/cdn/shop/files/bleu-de-chanel-advert-parfum_800x.png?v=1717608283",
    },
    {
      name: "Spring",
      img: "https://fimgs.net/himg/o.MEfgsbOudLX.jpg",
    },
    {
      name: "Autumn",
      img: "https://www.franciskurkdjian.com/on/demandware.static/-/Sites-mfk-master-catalog/default/dw6a4542e3/BR540_REPUSH25-KV_AIR-ALL_triptych_square_1080x1080.jpg",
    },
    {
      name: "All Seasons Wear",
      img: "https://cdn4.beautinow.com/wp-content/uploads/2024/05/167.2.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-5 min-h-screen !py-22 w-full !px-6 overflow-hidden">
      {/* Header */}
      <h1 className="font-semibold text-xl">Our Featured Collections</h1>
      {/* products */}
      <div>
        {/* brand Collection */}
        <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Brand Collections
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Related brand cards */}
            {RelatedBrands.map((product, idx) => (
              <div key={idx} className="flex flex-col gap-3 group p-2 md:p-4">
                {/* Image Container */}
                <div className="relative w-full dark:bg-white aspect-[3/4]  overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm  font-semibold line-clamp-2 group-hover:underline leading-tight">
                    {product.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <Link href="/brand/related" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Explore Brand collections
            </Button>
          </Link>
        </section>
        {/* Seasonal collections */}
        <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Seasonal Collections
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Related brand cards */}
            {Seasons.map((product, idx) => (
              <div key={idx} className="flex flex-col gap-3 group p-2 md:p-4">
                {/* Image Container */}
                <div className="relative w-full dark:bg-white aspect-[3/4]  overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-semibold line-clamp-2 group-hover:underline leading-tight">
                    {product.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <Link href="/brand/related" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Explore Seasonal collections
            </Button>
          </Link>
        </section>
        {/* Notes Based Collections */}
         <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Notes Based Collections
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Related brand cards */}
            {Notes.map((product, idx) => (
              <div key={idx} className="flex flex-col gap-3 group p-2 md:p-4">
                {/* Image Container */}
                <div className="relative w-full dark:bg-white aspect-[3/4]  overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm  font-semibold line-clamp-2 group-hover:underline leading-tight">
                    {product.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <Link href="/brand/related" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Explore All Notes
            </Button>
          </Link>
        </section>
        {/* Occastional Collections */}
         <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Occasional Collections
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Related brand cards */}
            {Occasion.map((product, idx) => (
              <div key={idx} className="flex flex-col gap-3 group p-2 md:p-4">
                {/* Image Container */}
                <div className="relative w-full dark:bg-white aspect-[3/4]  overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm font-semibold line-clamp-2 group-hover:underline leading-tight">
                    {product.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <Link href="/brand/related" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Explore Occasional collections
            </Button>
          </Link>
        </section>
        {/* Region / Culture inspired collection */}
         <section className="flex flex-col gap-5">
          <h1 className="md:text-base underline font-semibold flex items-center gap-2">
            Region / Culture inspired collection
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Related brand cards */}
            {Region.map((product, idx) => (
              <div key={idx} className="flex flex-col gap-3 group p-2 md:p-4">
                {/* Image Container */}
                <div className="relative w-full dark:bg-white aspect-[3/4]  overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm  font-semibold line-clamp-2 group-hover:underline leading-tight">
                    {product.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <Link href="/brand/related" className="flex justify-center mb-8">
            <Button className="border w-fit font-semibold tracking-wider border-gray-700 bg-transparent text-black hover:bg-gray-200 cursor-pointer px-6 md:px-8 py-2 md:py-3 rounded-full text-xs">
              Explore Seasonal collections
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default collectionPage
