// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   calculateDeliveryFee,
//   qualifiesForFreeShipping,
//   getFreeShippingThreshold,
// } from "@/utils/calcDeliveryFee";
// import { countryRegions } from "@/lib/countries";

// const ShippingCalculator = ({
//   countryCode,
//   orderTotal = 0,
//   weight = 0.5,
//   onShippingCostChange,
// }) => {
//   const [shippingDetails, setShippingDetails] = useState(null);
//   const [isExpressDelivery, setIsExpressDelivery] = useState(false);

//   useEffect(() => {
//     if (!countryCode) return;

//     const details = calculateDeliveryFee(
//       countryCode,
//       weight,
//       isExpressDelivery
//     );
//     setShippingDetails(details);

//     // If free shipping applies, set cost to 0
//     const isFreeShipping = qualifiesForFreeShipping(orderTotal, countryCode);
//     const finalCost = isFreeShipping ? 0 : details.cost;

//     onShippingCostChange?.(finalCost);
//   }, [
//     countryCode,
//     weight,
//     isExpressDelivery,
//     orderTotal,
//     onShippingCostChange,
//   ]);

//   if (!shippingDetails) return null;

//   const freeShippingThreshold = getFreeShippingThreshold(countryCode);
//   const remainingForFree = freeShippingThreshold - orderTotal;

//   return (
//     <div className="space-y-4 p-4 border rounded-lg">
//       <h3 className="font-semibold text-lg">Shipping Details</h3>

//       <div className="space-y-2">
//         <p className="text-sm">Delivery to: {countryCode}</p>
//         <p className="text-sm">
//           Estimated delivery: {shippingDetails.deliveryEstimate}
//         </p>

//         {shippingDetails.expressAvailable && (
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               id="expressDelivery"
//               checked={isExpressDelivery}
//               onChange={(e) => setIsExpressDelivery(e.target.checked)}
//               className="rounded border-gray-300"
//             />
//             <label htmlFor="expressDelivery" className="text-sm">
//               Express Delivery (+50%)
//             </label>
//           </div>
//         )}

//         {remainingForFree > 0 ? (
//           <p className="text-sm text-blue-600">
//             Add ${remainingForFree.toFixed(2)} more to qualify for free
//             shipping!
//           </p>
//         ) : (
//           <p className="text-sm text-green-600">
//             You qualify for free shipping!
//           </p>
//         )}
//       </div>

//       <div className="mt-4">
//         <p className="text-lg font-medium">
//           Shipping Cost: $
//           {qualifiesForFreeShipping(orderTotal, countryCode)
//             ? "0.00"
//             : shippingDetails.cost.toFixed(2)}
//         </p>
//         {shippingDetails.trackingIncluded && (
//           <p className="text-sm text-gray-600">Tracking included</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShippingCalculator;
