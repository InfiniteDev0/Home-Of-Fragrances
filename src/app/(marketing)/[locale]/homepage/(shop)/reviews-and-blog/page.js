// "use client";
// import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
// import { communityPosts } from "@/data/constants";
// import {
//   AtSign,
//   Bookmark,
//   BookMarked,
//   Eye,
//   Hash,
//   Heart,
//   ImageIcon,
//   ImagePlay,
//   ImagePlayIcon,
//   MapPin,
//   MessageCircle,
//   PlayCircle,
//   Repeat,
//   Smile,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { FA_logo_dark } from "../../../../../../../public/assets/images/images";

// // Tab options
// const tabs = ["For You", "Following", "Trending", "New", "Video Only"];

// // Example filter fields (for drawer)
// const filterFields = [
//   "Brand",
//   "Collection Line",
//   "Perfume",
//   "Perfumer",
//   "Notes",
//   "Mood",
//   "Seasonality",
//   "Occasion",
//   "Gender Vibe",
//   "Price Bracket",
//   "Sort By",
// ];

// const reviews = [
//   {
//     vid: "Jeremy Fragrance",
//     caption: "The king of modern freshness",
//     link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Favorite%20Louis%20Vuitton%20Fragrance%20%23jeremyfragrance%20%23fragrance%20%23cologne%20%23parfum%20%23perfume.mp4",
//   },
//   {
//     vid: "Cal Cologne",
//     caption: "Unboxing LV’s creative elegance",
//     link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/If%20i%20could%20only%20have%20two%20fragrances%20for%20life.%20And%20they%20had%20to%20come%20from%20the%20house%20of%20Louis%20Vuitton.mp4",
//   },
//   {
//     vid: "Cologne Boy",
//     caption: "Soft leather & iris magic",
//     link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Mixing%20%243000%20worth%20of%20LV%20Fragrances%21%20%23LV%20%23thecologneboy.mp4",
//   },
//   {
//     vid: "Fragrance Flan",
//     caption: "Luxury wrapped in travel spirit",
//     link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Louis%20Vuitton%20new%20vanilla%20fragrance_%20Fantasmagory.mp4",
//   },
//   {
//     vid: "Noels Smells",
//     caption: "Is Louis Vuitton worth it?",
//     link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Sun%20Song%20by%20Louis%20Vuitton%2C%20most%20anticipated%20LV%20release%2C%20but%20is%20it%20worth%20it_%20%23fragrance%20%23cologne.mp4",
//   },
//   {
//     vid: "Aromatix",
//     caption: "Signature scent of confidence",
//     link: "https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Best%20Louis%20Vuitton%20Fragrances%20%28Ranked%29.mp4",
//   },
// ];

// const ReviewsAndBlogpage = () => {
//   // Animated placeholder list for composer
//   const composerPlaceholders = [
//     "What's happening?",
//     "Share your fragrance of the day...",
//     "Add a review, photo, or video!",
//     "Tag a brand, perfumer, or note...",
//     "Drop a hashtag or emoji to join the convo!",
//   ];

//   // Composer input state
//   const [composerValue, setComposerValue] = useState("");
//   const handleComposerChange = (e) => setComposerValue(e.target.value);
//   const handleComposerSubmit = (e) => {
//     e.preventDefault();
//     // Optionally: append new post to rightPosts or log
//     setComposerValue("");
//   };
//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [showFilters, setShowFilters] = useState(false);
//   const [search, setSearch] = useState("");
//   const rightRef = useRef(null);
//   const [rightPosts, setRightPosts] = useState(() =>
//     communityPosts.slice(0, 6)
//   );
//   const [isLoadingMore, setIsLoadingMore] = useState(false);
//   const [hasMore, setHasMore] = useState(true);

//   // helper to append more posts (simulate network)
//   const loadMoreRightPosts = useCallback(() => {
//     if (isLoadingMore || !hasMore) return;
//     setIsLoadingMore(true);
//     // simulate async load
//     setTimeout(() => {
//       setRightPosts((prev) => {
//         const currentCount = prev.length;
//         // take next slice from communityPosts; if exhausted, repeat items to simulate more content
//         const nextSlice = communityPosts.slice(currentCount, currentCount + 6);
//         const toAppend = nextSlice.length
//           ? nextSlice
//           : communityPosts.slice(0, 6);
//         const newArr = [...prev, ...toAppend];
//         // prevent unbounded growth in dev environment — keep max 60 items
//         return newArr.slice(0, 60);
//       });
//       setIsLoadingMore(false);
//     }, 700);
//   }, [isLoadingMore, hasMore]);

//   // scroll handler for right panel
//   useEffect(() => {
//     const el = rightRef.current;
//     if (!el) return;
//     const onScroll = () => {
//       const threshold = 300; // px from bottom
//       if (el.scrollHeight - el.scrollTop - el.clientHeight < threshold) {
//         loadMoreRightPosts();
//       }
//     };
//     el.addEventListener("scroll", onScroll, { passive: true });
//     return () => el.removeEventListener("scroll", onScroll);
//   }, [loadMoreRightPosts]);

//   // Placeholder feed data

//   return (
//     <div className="flex flex-col gap-5 !py-20 w-full !px-6 overflow-hidden">
//       <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 flex flex-col  gap-2 justify-between px-8 pt-5">
//         {/* Top Header */}
//         <header className="w-full  flex  items-center justify-between gap-2">
//           <Link
//             href="/eng-e1/homepage"
//             className="flex items-center justify-center"
//           >
//             <Image
//               className="w-6"
//               width={24}
//               height={24}
//               src={FA_logo_dark}
//               alt="Brand_logo"
//               priority
//             />
//           </Link>
//           <h1 className="font-semibold text-lg text-[#15132b]">
//             Community Reviews & Media Hub
//           </h1>
//         </header>
//         {/* Tabs */}
//         <nav className="flex gap-4 justify-between  border-gray-200 mb-2">
//           <div className="flex gap-4">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 className={`py-2 mr-5 text-sm font-semibold rounded-t-md transition-all ${
//                   activeTab === tab
//                     ? "bg-white border-b-2 border-[#15132b] text-black font-semibold"
//                     : "text-gray-500  border-b-2 border-white hover:text-[#15132b]"
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           <div className="flex gap-2 mt-2">
//             <input
//               type="text"
//               className="flex-1 border border-gray-200 w-[385px] rounded-md px-3 py-2 text-xs font-semibold"
//               placeholder="Search Brand, Perfume, Reviewer, Note, Collection..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <button
//               className="px-4 py-2 rounded-md bg-[#15132b] text-xs tracking-wider text-white font-semibold hover:bg-[#201c3e]"
//               onClick={() => setShowFilters(true)}
//             >
//               Filters
//             </button>
//           </div>
//         </nav>
//       </div>
//       {/* blog and review section */}
//       <div className="grid grid-cols-2 mt-14 w-full min-h-screen">
//         {/* Left feed: independently scrollable */}
//         <div className="overflow-y-scroll min-h-screen">
//           {/* New Releases  */}
//           <div className="flex flex-col gap-8">
//             <h1 className="font-semibold flex items-center gap-2">
//               New Releases{" "}
//               <svg
//                 viewBox="0 0 12 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 role="img"
//                 aria-hidden="true"
//                 title="New &amp; Featured"
//                 width="12"
//                 height="17"
//                 color="currentColor"
//                 strokeWidth="0.9375"
//               >
//                 <title>New &amp; Featured</title>
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M0.750062 7.04568C0.0651263 8.82697 -0.289323 10.179 0.293623 12.0693C0.876569 13.9597 2.42936 15.1048 4.08738 15.6738C5.7454 16.2428 7.43047 15.9772 8.49415 15.5619C9.55782 15.1466 11.2349 13.7584 11.709 12.0693C12.1832 10.3802 12.1832 8.39947 10.9041 7.35547C10.6619 7.15782 10.9617 9.4819 9.78181 9.31435C8.60197 9.14679 8.90158 7.45297 9.31687 5.4207C9.5911 4.07867 8.96681 1.88026 5.62753 0.00860789C5.42611 -0.104288 5.85919 0.904153 5.4779 2.39646C5.0966 3.88877 4.45143 4.84198 4.41493 4.53318C4.29457 3.51482 3.32677 3.01747 3.26727 2.92843C3.05124 2.60517 3.28005 3.40364 3.05124 4.2493C2.82243 5.09497 2.18333 6.02801 2.43133 7.53838C2.67932 9.04875 3.7435 9.31435 3.41795 9.31435C3.09241 9.31435 2.92513 9.19139 2.43133 8.90049C1.93752 8.60959 1.42812 7.68413 1.34435 7.27493C1.26058 6.86574 1.26058 5.71799 0.750062 7.04568Z"
//                   fill="#FE9000"
//                 ></path>
//               </svg>
//             </h1>
//             {/* news about new realease */}
//             <div className="pr-[8%]">
//               {communityPosts.map((item, index) => {
//                 return (
//                   <div key={index} className="">
//                     {/* user */}
//                     <div className="flex items-center gap-2">
//                       <img
//                         src={item.user.avatar}
//                         className="rounded-full h-12 w-12"
//                         alt=""
//                       />
//                       <div className="flex items-center justify-between w-full">
//                         <div>
//                           <h1 className="font-semibold text-sm">
//                             {item.user.name}
//                           </h1>
//                           <p className="text-xs font-semibold text-gray-500">
//                             {item.user.handle}
//                           </p>
//                         </div>
//                         <p className="font-semibold text-sm text-gray-500">
//                           {item.timestamp}
//                         </p>
//                       </div>
//                     </div>
//                     {/* content / post */}
//                     <div className="border-b border-gray-500  !p-3 flex flex-col gap-4 my-3 ">
//                       <div className="flex">
//                         {item.type === "text" ? (
//                           // Render text content
//                           <div>
//                             <p className="text-sm font-semibold">
//                               {item.content}
//                             </p>
//                           </div>
//                         ) : item.type === "video" ? (
//                           // Render video content
//                           <div>
//                             <p className="text-sm font-semibold">
//                               {item.content}
//                             </p>
//                           </div>
//                         ) : item.type === "image" ? (
//                           // Render image content
//                           <div className="flex flex-col gap-3">
//                             <p className="text-sm font-semibold">
//                               {item.content}
//                             </p>
//                             <img
//                               src={item.image}
//                               className="w-full rounded-lg"
//                               alt=""
//                             />
//                           </div>
//                         ) : null}
//                       </div>
//                       <div className="flex items-center gap-[2rem]">
//                         <div className="flex items-center gap-1">
//                           <MessageCircle className="w-4 h-4 text-gray-600" />
//                           <p className="font-semibold text-xs">
//                             {item.comments}
//                           </p>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Repeat className="w-4 h-4 text-gray-600" />
//                           <p className="font-semibold text-xs">{item.repost}</p>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Heart className="w-4 h-4 text-gray-600" />
//                           <p className="font-semibold text-xs">{item.likes}</p>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Bookmark className="w-4 h-4 text-gray-600" />
//                           <p className="font-semibold text-xs">{item.saved}</p>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Eye className="w-4 h-4 text-gray-600" />
//                           <p className="font-semibold text-xs">{item.views}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Right panel: composer + infinite scrollable posts (independent) */}
//         <div
//           ref={rightRef}
//           className="w-full !p-5 border-l-[1.5px] border-gray-200 overflow-y-scroll min-h-screen"
//         >
//           {/* Composer (fixed at top of right scroll area) */}
//           <div className="mb-4 sticky top-0 bg-white py-3 z-10">
//             <div className="flex items-start gap-3">
//               <img
//                 src="https://i.pravatar.cc/150?img=12"
//                 className="rounded-full w-14 h-14"
//                 alt=""
//               />
//               <div className="flex-1">
//                 <PlaceholdersAndVanishInput
//                   placeholders={composerPlaceholders}
//                   onChange={handleComposerChange}
//                   onSubmit={handleComposerSubmit}
//                   value={composerValue}
//                 />
//                 {/* Action icons row */}
//                 <div className="flex items-center gap-5 mt-2 mb-2">
//                   {/* Image */}
//                   <button
//                     type="button"
//                     className="hover:bg-gray-100 rounded-full p-2"
//                     title="Add image"
//                   >
//                     <ImageIcon
//                       width="18"
//                       height="18"
//                       fill="none"
//                       stroke="currentColor"
//                       className="text-black"
//                     ></ImageIcon>
//                   </button>
//                   {/* GIF */}
//                   <button
//                     type="button"
//                     className="hover:bg-gray-100 rounded-full p-2"
//                     title="Add GIF"
//                   >
//                     <ImagePlayIcon
//                       width="18"
//                       height="18"
//                       fill="none"
//                       stroke="currentColor"
//                       className="text-black"
//                     />
//                   </button>
//                   {/* Emoji */}
//                   <button
//                     type="button"
//                     className="hover:bg-gray-100 rounded-full p-2"
//                     title="Add emoji"
//                   >
//                     <Smile
//                       width="18"
//                       height="18"
//                       fill="none"
//                       stroke="currentColor"
//                       className="text-black"
//                     />
//                   </button>
//                   {/* Mention */}
//                   <button
//                     type="button"
//                     className="hover:bg-gray-100 rounded-full p-2"
//                     title="Mention someone"
//                   >
//                     <AtSign
//                       width="18"
//                       height="18"
//                       fill="none"
//                       stroke="currentColor"
//                       className="text-black"
//                     />
//                   </button>
//                   {/* Hashtag */}
//                   <button
//                     type="button"
//                     className="hover:bg-gray-100 rounded-full p-2"
//                     title="Add hashtag"
//                   >
//                     <Hash
//                       width="18"
//                       height="18"
//                       fill="none"
//                       stroke="currentColor"
//                       className="text-black"
//                     />
//                   </button>
//                   {/* Location */}
//                   <button
//                     type="button"
//                     className="hover:bg-gray-100 rounded-full p-2"
//                     title="Add location"
//                   >
//                     <MapPin
//                       width="18"
//                       height="18"
//                       fill="none"
//                       stroke="currentColor"
//                       className="text-black"
//                     />
//                   </button>
//                   <div className="flex-1"></div>
//                   {/* Post button (animated SVG) */}
//                   <button
//                     type="submit"
//                     disabled={!composerValue}
//                     className="px-8 py-2 rounded-full bg-black text-white cursor-pointer font-semibold text-xs tracking-wider hover:bg-gray-900 transition flex items-center gap-2"
//                   >
//                     Post
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Twitter/X style sidebar sections */}
//           <div className="flex flex-col gap-5">
//             {/* Today&apos;s News */}
//             <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 mb-2">
//               <div className="flex items-center justify-between mb-3">
//                 <h2 className="font-bold text-lg">Today&apos;s News</h2>
//                 <button className="text-gray-400 hover:text-gray-600 text-xl font-bold">
//                   ×
//                 </button>
//               </div>
//               <div className="flex flex-col gap-4">
//                 {/* News Item 1 */}
//                 <div>
//                   <a
//                     href="#"
//                     className="font-semibold text-base hover:underline"
//                   >
//                     Nairobi County Directs Health Facilities to Switch to Sidian
//                     Bank Amid Criticism
//                   </a>
//                   <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
//                     <img
//                       src="https://i.pravatar.cc/32?img=1"
//                       alt="avatar"
//                       width={20}
//                       height={20}
//                       className="rounded-full"
//                     />
//                     Trending now · News · 600 posts
//                   </div>
//                 </div>
//                 {/* News Item 2 */}
//                 <div>
//                   <a
//                     href="#"
//                     className="font-semibold text-base hover:underline"
//                   >
//                     Masked Kenyan ATPU Officers Stop Bus Near Malindi, Defy High
//                     Court Visibility ...
//                   </a>
//                   <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
//                     <img
//                       src="https://i.pravatar.cc/32?img=2"
//                       alt="avatar"
//                       width={20}
//                       height={20}
//                       className="rounded-full"
//                     />
//                     2 hours ago · News · 1,813 posts
//                   </div>
//                 </div>
//                 {/* News Item 3 */}
//                 <div>
//                   <a
//                     href="#"
//                     className="font-semibold text-base hover:underline"
//                   >
//                     Tanzania&apos;s President Samia Suluhu Hassan Faces Deadly
//                     Post-Election Crackdown
//                   </a>
//                   <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
//                     <span className="w-5 h-5 rounded-full bg-yellow-300 flex items-center justify-center text-xs">
//                       &#x1F4B0;
//                     </span>
//                     13 hours ago · News · 6,172 posts
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* What&apos;s happening */}
//             <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 mb-2">
//               <h2 className="font-bold text-lg mb-3">What&apos;s happening</h2>
//               <div className="flex flex-col gap-3">
//                 <div>
//                   <div className="text-xs text-gray-500">Trending in Kenya</div>
//                   <div className="font-semibold">Obinna</div>
//                   <div className="text-xs text-gray-500">3,242 posts</div>
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Trending in Kenya</div>
//                   <div className="font-semibold">JM Kariuki</div>
//                   <div className="text-xs text-gray-500">1,937 posts</div>
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Trending in Kenya</div>
//                   <div className="font-semibold">Gaitho</div>
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Trending in Kenya</div>
//                   <div className="font-semibold">Harambee Stars</div>
//                 </div>
//               </div>
//               <button className="text-blue-500 hover:underline mt-3 text-sm">
//                 Show more
//               </button>
//             </div>

//             {/* Who to follow */}
//             <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 mb-2">
//               <h2 className="font-bold text-lg mb-3">Who to follow</h2>
//               <div className="flex flex-col gap-4">
//                 {/* User 1 */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <img
//                       src="https://i.pravatar.cc/32?img=3"
//                       alt="Elorm"
//                       width={32}
//                       height={32}
//                       className="rounded-full"
//                     />
//                     <div>
//                       <div className="font-semibold">
//                         Elorm <span className="text-xs">🥷🏿</span>
//                       </div>
//                       <div className="text-xs text-gray-500">@Elorm_Hood</div>
//                     </div>
//                   </div>
//                   <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
//                     Follow
//                   </button>
//                 </div>
//                 {/* User 2 */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <img
//                       src="https://i.pravatar.cc/32?img=4"
//                       alt="TouchlineX"
//                       width={32}
//                       height={32}
//                       className="rounded-full"
//                     />
//                     <div>
//                       <div className="font-semibold">The Touchline | 𝐓</div>
//                       <div className="text-xs text-gray-500">@TouchlineX</div>
//                     </div>
//                   </div>
//                   <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
//                     Follow
//                   </button>
//                 </div>
//                 {/* User 3 */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <img
//                       src="https://i.pravatar.cc/32?img=5"
//                       alt="basheertk_"
//                       width={32}
//                       height={32}
//                       className="rounded-full"
//                     />
//                     <div>
//                       <div className="font-semibold">basheer…</div>
//                       <div className="text-xs text-gray-500">@basheertk_</div>
//                     </div>
//                   </div>
//                   <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
//                     Follow
//                   </button>
//                 </div>
//               </div>
//               <button className="text-blue-500 hover:underline mt-3 text-sm">
//                 Show more
//               </button>
//             </div>

//             {/* Footer */}
//             <div className="text-xs text-gray-400 mt-2">
//               Terms of Service | Privacy Policy | Cookie Policy | Accessibility
//               | Ads info | More © 2025 X Corp.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewsAndBlogpage;
