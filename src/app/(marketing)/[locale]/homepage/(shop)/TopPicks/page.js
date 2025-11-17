// import React from "react";

// // Placeholder PerfumeCard component
// const PerfumeCard = ({ name }) => (
//   <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
//     <div className="w-20 h-20 bg-gray-200 rounded-full mb-2" />
//     <div className="font-semibold text-sm mb-1">{name}</div>
//     <div className="text-xs text-gray-500">$120 · ⭐ 4.8</div>
//     <div className="flex gap-1 mt-1">
//       <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Fresh</span>
//       <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Daytime</span>
//     </div>
//   </div>
// );

// const TopPickspage = () => {
//   return (
//     <div className="flex flex-col gap-10 py-16 w-full min-h-screen px-6 overflow-hidden">
//       {/* 1. Hero / Intro Section */}
//       <section className="w-full text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">Top Picks of the Month</h1>
//         <p className="text-lg text-gray-600 mb-4">
//           Hand-picked selections from across designer, niche, and indie houses.
//         </p>
//         <div className="flex flex-wrap justify-center gap-3 mb-2">
//           <button className="px-4 py-1 rounded-full bg-gray-100 font-semibold">
//             Men
//           </button>
//           <button className="px-4 py-1 rounded-full bg-gray-100 font-semibold">
//             Women
//           </button>
//           <button className="px-4 py-1 rounded-full bg-gray-100 font-semibold">
//             Unisex
//           </button>
//           <button className="px-4 py-1 rounded-full bg-gray-100 font-semibold">
//             Designer
//           </button>
//           <button className="px-4 py-1 rounded-full bg-gray-100 font-semibold">
//             Niche
//           </button>
//           <button className="px-4 py-1 rounded-full bg-gray-100 font-semibold">
//             Arabian
//           </button>
//           <button className="px-4 py-1 rounded-full bg-gray-100 font-semibold">
//             Daytime
//           </button>
//           <button className="px-4 py-1 rounded-full bg-gray-100 font-semibold">
//             Evening
//           </button>
//         </div>
//       </section>

//       {/* 2. Categories of Top Picks */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">🌅 Fresh & Daytime Picks</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           <PerfumeCard name="LV Imagination" />
//           <PerfumeCard name="Dior Homme Cologne" />
//           <PerfumeCard name="Creed Aventus" />
//           <PerfumeCard name="MFK Aqua Universalis" />
//         </div>
//         <h2 className="text-2xl font-bold mb-4">
//           🌙 Evening & Date Night Picks
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           <PerfumeCard name="YSL La Nuit" />
//           <PerfumeCard name="Tom Ford Noir" />
//           <PerfumeCard name="Amouage Interlude" />
//           <PerfumeCard name="Initio Oud for Greatness" />
//         </div>
//         <h2 className="text-2xl font-bold mb-4">
//           💼 Office Safe & Everyday Scents
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           <PerfumeCard name="Prada L'Homme" />
//           <PerfumeCard name="Chanel Allure Homme" />
//           <PerfumeCard name="Hermès H24" />
//           <PerfumeCard name="Montblanc Explorer" />
//         </div>
//         <h2 className="text-2xl font-bold mb-4">🕊 Niche Discoveries</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           <PerfumeCard name="BDK Gris Charnel" />
//           <PerfumeCard name="Zoologist Bee" />
//           <PerfumeCard name="Masque Milano L'Attesa" />
//           <PerfumeCard name="Ormonde Jayne Tolu" />
//         </div>
//         <h2 className="text-2xl font-bold mb-4">💰 Luxury Designer Picks</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           <PerfumeCard name="LV Ombre Nomade" />
//           <PerfumeCard name="Dior Privée Feve" />
//           <PerfumeCard name="Chanel Les Exclusifs" />
//           <PerfumeCard name="Gucci Haute Parfumerie" />
//         </div>
//         <h2 className="text-2xl font-bold mb-4">🧳 Travel Favorites</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           <PerfumeCard name="Mancera Cedrat Boise" />
//           <PerfumeCard name="Diptyque Philosykos" />
//           <PerfumeCard name="Le Labo Santal 33" />
//           <PerfumeCard name="Atelier Cologne Orange Sanguine" />
//         </div>
//       </section>

//       {/* 3. Curator’s Choice / Editor’s Corner */}
//       <section className="bg-white rounded-2xl shadow border border-gray-200 p-8 flex flex-col md:flex-row items-center gap-6 mb-8">
//         <div className="w-24 h-24 bg-gray-300 rounded-full" />
//         <div>
//           <h3 className="font-bold text-xl mb-2">Editor’s Corner</h3>
//           <p className="italic mb-2">
//             “Our editor fell in love with LV Imagination for its oceanic
//             freshness and sophistication.”
//           </p>
//           <div className="flex items-center gap-2 mb-2">
//             <span className="font-semibold">Jane Doe</span>
//             <span className="text-xs text-gray-500">Fragrance Editor</span>
//           </div>
//           <button className="bg-black text-white px-4 py-2 rounded-full font-semibold">
//             View Full Review
//           </button>
//         </div>
//       </section>

//       {/* 4. Top Rated by Community */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Top Rated by Community</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
//           <PerfumeCard name="Most Loved: LV Imagination" />
//           <PerfumeCard name="Highest Rated: Dior Homme" />
//           <PerfumeCard name="Most Commented: Aventus" />
//           <PerfumeCard name="Most Loved: Chanel No.5" />
//         </div>
//         <div className="flex gap-3 mt-2">
//           <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">
//             ⭐ 4.9 Rated
//           </span>
//           <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-bold">
//             ❤️ 1.2k Likes
//           </span>
//         </div>
//       </section>

//       {/* 5. Seasonal Picks */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Seasonal Picks</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
//           <PerfumeCard name="Best for Summer 2025: Aqua Universalis" />
//           <PerfumeCard name="Winter Warmer: Ombre Nomade" />
//           <PerfumeCard name="Spring Floral: Chanel No.19" />
//           <PerfumeCard name="Autumn Spice: Amouage Epic" />
//         </div>
//       </section>

//       {/* 6. Trending on Social */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Trending on Social</h2>
//         <div className="flex flex-col md:flex-row gap-6 mb-4">
//           <div className="bg-gray-100 rounded-xl p-4 flex-1">
//             <div className="mb-2 font-semibold">
//               “Imagination is the cleanest LV scent ever made — @CalCologne”
//             </div>
//             <div className="mb-2">#FreshScents #TopPicks2025</div>
//             <div className="w-full h-32 bg-gray-300 rounded-lg" />
//           </div>
//           <div className="bg-gray-100 rounded-xl p-4 flex-1">
//             <div className="mb-2 font-semibold">
//               “Aventus is still king for compliments — @JeremyFragrance”
//             </div>
//             <div className="mb-2">#ComplimentGetter #Trending</div>
//             <div className="w-full h-32 bg-gray-300 rounded-lg" />
//           </div>
//         </div>
//       </section>

//       {/* 7. Smart Filters / Search */}
//       <section className="bg-white rounded-2xl shadow border border-gray-200 p-8 mb-8">
//         <h2 className="text-xl font-bold mb-4">Smart Filters & Search</h2>
//         <div className="flex flex-wrap gap-3 mb-2">
//           <input
//             className="border px-3 py-2 rounded w-48"
//             placeholder="Search by Brand"
//           />
//           <input
//             className="border px-3 py-2 rounded w-48"
//             placeholder="Note (e.g. Oud, Vanilla)"
//           />
//           <input
//             className="border px-3 py-2 rounded w-48"
//             placeholder="Mood (Fresh, Romantic...)"
//           />
//           <input
//             className="border px-3 py-2 rounded w-48"
//             placeholder="Longevity / Projection"
//           />
//           <input
//             className="border px-3 py-2 rounded w-48"
//             placeholder="Price Range"
//           />
//         </div>
//         <button className="bg-black text-white px-4 py-2 rounded-full font-semibold mt-2">
//           Apply Filters
//         </button>
//       </section>

//       {/* 8. Call to Action / Personalization */}
//       <section className="w-full text-center py-8">
//         <h2 className="text-2xl font-bold mb-2">Personalize Your Experience</h2>
//         <p className="text-gray-600 mb-4">
//           Build your own Top Picks list or get AI recommendations based on your
//           mood.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
//             Build Your Own Top Picks List
//           </button>
//           <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold">
//             Get AI Recommendations
//           </button>
//           <button className="bg-black text-white px-6 py-3 rounded-full font-semibold">
//             Follow Our Editor for Weekly Picks
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TopPickspage;
