// "use client";
// import React, { useState, useEffect } from "react";
// import { useShop } from "../../app/context/ShopContext";

// const ConvertedPrice = ({
//   basePrice,
//   originalPrice = null,
//   className = "",
// }) => {
//   const { convertPrice, userCurrency } = useShop();
//   const [convertedPrice, setConvertedPrice] = useState(null);
//   const [convertedOriginalPrice, setConvertedOriginalPrice] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const convertPrices = async () => {
//       setLoading(true);
//       try {
//         // Convert main price
//         const converted = await convertPrice(basePrice, "USD");
//         setConvertedPrice(converted);

//         // Convert original price if it exists
//         if (originalPrice) {
//           const convertedOriginal = await convertPrice(originalPrice, "USD");
//           setConvertedOriginalPrice(convertedOriginal);
//         }
//       } catch (error) {
//         console.error("Price conversion failed:", error);
//         // Fallback to USD prices
//         setConvertedPrice(`$${basePrice.toFixed(2)}`);
//         if (originalPrice) {
//           setConvertedOriginalPrice(`$${originalPrice.toFixed(2)}`);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     convertPrices();
//   }, [basePrice, originalPrice, convertPrice, userCurrency]);

//   if (loading) {
//     return (
//       <div className={`animate-pulse ${className}`}>
//         <div className="h-6 bg-gray-200 rounded w-16"></div>
//       </div>
//     );
//   }

//   return (
//     <div className={className}>
//       <div className="flex items-center space-x-2">
//         <span className="text-lg font-bold text-green-600">
//           {convertedPrice}
//         </span>
//         {convertedOriginalPrice && (
//           <span className="text-sm text-gray-500 line-through">
//             {convertedOriginalPrice}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ConvertedPrice;
