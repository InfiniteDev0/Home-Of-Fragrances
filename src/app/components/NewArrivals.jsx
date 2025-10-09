"use client";
import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { Bell, Check, FlameIcon, Heart, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const NewArrivals = () => {
  const [activeBtn, setActivate] = useState(0);

  // reminderState maps productId -> 'idle' | 'animating' | 'done' | 'unsetting'
  const [reminderState, setReminderState] = useState({});

  const filterButtons = [
    { icon: "🌶️", name: "Coming Soon" },
    { icon: "💖", name: "Everyone's Favorite" },
    { icon: "🕌", name: "Best MiddleEastern" },
    { icon: "☝️", name: "Top 10 Brands" },
    { icon: "👉", name: "Top 10 Perfumes" },
  ];

  // Coming Soon products
  const products = [
    {
      id: 1,
      name: "Ahmed Al Maqribi Nisswah",
      brand: "Dr Ruqayya Abba Tofa",
      image:
        "https://ae.ahmedalmaghribi.com/_next/image?url=https%3A%2F%2Fadmin.ahmedalmaghribi.com%2Fpublic%2Fstorage%2Fcollections%2Fniswah-1.jpg&w=2048&q=75",
      price: "259",
      rating: 5,
      description: "Harmonious Lily Magic / 100ml",
      brandDescription:
        "Premium Arabic perfumes with traditional craftsmanship and modern elegance",
      brandLogo:
        "https://ae.ahmedalmaghribi.com/_next/image?url=https%3A%2F%2Fadmin.ahmedalmaghribi.com%2Fpublic%2Fstorage%2Flogos%2Flogo.png&w=256&q=75",
    },
    {
      id: 2,
      name: "Louis Vuitton's Afternoon Swim",
      brand: "Louis Vuitton",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-afternoon-swim--LP0313_PM2_Front%20view.png?wid=490&hei=490",
      price: "850",
      rating: 4.8,
      description: "Fresh Aquatic Escape / 100ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 3,
      name: "Louis Vuitton's Sun Song",
      brand: "Louis Vuitton",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sun-song--LP0427_PM1_Interior%20view.png?wid=490&hei=490",
      price: "920",
      rating: 4.9,
      description: "Radiant Solar Fragrance / 100ml",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo:
        "https://logoeps.com/wp-content/uploads/2013/03/louis-vuitton-vector-logo.png",
    },
    {
      id: 4,
      name: "Louis vuitton's Pacific Chill",
      brand: "Fragrance World",
      image:
        "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pacific-chill---LP0326_PM2_Front%20view.png?wid=1090&hei=1090",
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
        "https://armaf.com/cdn/shop/files/GS-OdysseyLimoni_PhotoGrid.pngDisplayingGS-OdysseyLimoni_PhotoGrid.png._10.png?v=1757027475&width=533",
      price: "120",
      rating: 4.6,
      description: "Rich Gourmand Delight / 100ml",
      brandDescription:
        "UAE-based fragrance house creating affordable luxury scents with exceptional performance",
      brandLogo: "https://armaf.com/cdn/shop/files/armaf-logo.png",
    },
  ];

  // Everyone's Favorite products
  const Favoriteproducts = [
    {
      id: 11,
      name: "louis Vuitton Imagination",
      brand: "Louis Vuitton",
      image:
        "https://my.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination--LP0219_PM2_Front%20view.jpg?impolicy=bgcolor&bgcolor=%23f8f8f8",
      price: "340",
      rating: 4.9,
      description: "Iconic Amber Floral / 70ml",
    },
    {
      id: 12,
      name: "Stronger with You",
      brand: "Armani",
      image:
        "https://assets-cf.armani.com/image/upload/f_auto,q_auto:best,ar_4:5,w_1350,c_fill/LC601900_NLP_100ML_F_FW2025.jpg",
      price: "650",
      rating: 4.8,
      description: "Luxurious Oriental / 50ml",
    },
    {
      id: 13,
      name: "Creed Aventus",
      brand: "Creed",
      image:
        "https://www.creedfragrance.com/images?url=https://static.thcdn.com/productimg/original/12852836-1335225305181175.jpg&format=webp&auto=avif&width=1000&height=1000&fit=cover",
      price: "1200",
      rating: 4.7,
      description: "Fruity Chypre / 120ml",
    },
    {
      id: 14,
      name: "Chanel N°5",
      brand: "Chanel",
      image:
        "https://en.bloomingdales.com.kw/dw/image/v2/BLJM_PRD/on/demandware.static/-/Sites-bloomingdales-master-catalog/default/dw2d78c8ec/sfcc-new-blm-production/2/0/4/7/7/204779464_IN.jpg?sw=435&sh=650&q=100",
      price: "180",
      rating: 4.6,
      description: "Sweet Gourmand / 100ml",
    },
    {
      id: 15,
      name: "Dior Sauvage",
      brand: "Dior",
      image:
        "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw5d83aa9c/Y0998025/Y0998025_C099800170_E01_RHC.jpg?sw=1024",
      rating: 4.5,
      description: "Fresh Spicy / 100ml",
    },
  ];

  // Best Giftables
  const MiddleEastern = [
    {
      id: 21,
      name: "Vulcan fue",
      brand: "French Avenue",
      image:
        "https://elarab.my/cdn/shop/files/VxK9mpJW68520bfa54528_1750207482.jpg?v=1750207511&width=1920",
      price: "39",
      rating: 4.9,
      description: "Classic Aldehyde Floral Set",
    },
    {
      id: 22,
      name: "Reef Coral",
      brand: "Reef",
      image:
        "https://reefperfumesna.com/cdn/shop/files/CoralNew.png?v=1751912467",
      rating: 4.7,
      description: "5 Miniatures Discovery / 5x10ml",
    },
    {
      id: 23,
      name: "Ibraq , Emarati Scents",
      brand: "Viktor & Rolf",
      image:
        "https://emaratiscents.com/cdn/shop/files/e9d97865-c899-4f11-b31e-c46b7d17bc01-1000x1000-fEvBUWbCvWxJZeJkPDVr72JceBTTpckhPcQn5JS4.webp?v=1751226300&width=1000",
      price: "520",
      rating: 4.8,
      description: "Floral Explosion Set / 100ml + 20ml",
    },
    {
      id: 24,
      name: "ESSENCE OF CASABLANCA",
      brand: "Swiss Arabian",
      image:
        "https://swissarabian.com/cdn/shop/products/Casablanca-Bottle-_-UB_3412d7ea-b69a-48a0-93ba-86a3233b7bd2_720x.png?v=1689138095",
      price: "299",
      rating: 4.6,
      description: "Oriental Collection / 3x50ml",
    },
    {
      id: 25,
      name: "Rasasi Hawas fire",
      brand: "Rasasi",
      image:
        "https://belvish.com/cdn/shop/files/rasasihawasedpformen_1.jpg?v=1735911836",
      price: "159",
      rating: 4.5,
      description: "Travel Size Collection / 4x25ml",
    },
  ];

  // Top 10 Brands
  const Top10Brands = [
    {
      id: 1,
      brandName: "Louis Vuitton",
      brandDescription:
        "Luxury French fashion house renowned for exceptional craftsmanship and timeless elegance",
      brandLogo: "https://icon2.cleanpng.com/20180712/qcy/aawzygg7c.webp",
      ShopLink: "https://me.louisvuitton.com/",
      image:
        "https://media.cntravellerme.com/photos/680b49cb0383eb83826831bd/16:9/w_2560%2Cc_limit/Ocean%2520BLVD%2520-%2520Louis%2520Vuitton%2520Cologne%2520Perfumes.jpg",
    },
    {
      id: 2,
      brandName: "Armani",
      brandDescription:
        "Premium Arabic perfumes with traditional craftsmanship and modern elegance",
      brandLogo:
        "https://ae.ahmedalmaghribi.com/_next/image?url=https%3A%2F%2Fadmin.ahmedalmaghribi.com%2Fpublic%2Fstorage%2Flogos%2Flogo.png&w=256&q=75",
      ShopLink: "https://ae.ahmedalmaghribi.com/",
      image:
        "https://www.giorgioarmanibeauty-usa.com/on/demandware.static/-/Sites-armani-us-Library/default/dwe277309d/images/pdp/RITM5808091_THUMBNAIL_1.jpg",
    },
    {
      id: 3,
      brandName: "Maison Francis Kurkdjian",
      brandDescription:
        "Luxury French perfume brand celebrated for artistic and timeless fragrances",
      brandLogo: "https://www.franciskurkdjian.com/media/logo.svg",
      ShopLink: "https://www.franciskurkdjian.com/",
      image:
        "https://i0.wp.com/chaileedo.com/wp-content/uploads/2025/09/9.10-1.jpg?fit=1280%2C720&ssl=1",
    },
    {
      id: 4,
      brandName: "Fragrance World",
      brandDescription:
        "Affordable luxury fragrances inspired by premium designer scents",
      brandLogo:
        "https://fragranceworld.ae/wp-content/uploads/2021/03/fw-logo.png",
      ShopLink: "https://fragranceworld.ae/",
      image:
        "https://www.smella.es/cdn/shop/files/Untitleddesign-2025-03-28T113411.087.png?v=1755186774",
    },
    {
      id: 5,
      brandName: "Armaf",
      brandDescription:
        "UAE-based fragrance house creating affordable luxury scents with exceptional performance",
      brandLogo: "https://armaf.com/cdn/shop/files/armaf-logo.png",
      ShopLink: "https://armaf.com/",
      image:
        "https://armaf.com/cdn/shop/collections/10_1536x864_d97bb4ce-2b3d-4aeb-970c-18a1679c91ce.webp?v=1722597378",
    },
    {
      id: 6,
      brandName: "Lattafa",
      brandDescription:
        "Leading Middle Eastern fragrance brand offering bold, long-lasting perfumes",
      brandLogo: "https://lattafa.com/cdn/shop/files/lattafa-logo.png",
      ShopLink: "https://lattafa.com/",
      image:
        "https://perfumepure.net/wp-content/uploads/2025/05/lattafa-melhores-perfumes-verao-2025-banner.png",
    },
    {
      id: 7,
      brandName: "Rasasi",
      brandDescription:
        "Dubai-based perfume house blending oriental and occidental scents with finesse",
      brandLogo: "https://www.rasasi.com/cdn/shop/files/rasasi-logo.png",
      ShopLink: "https://www.rasasi.com/",
      image:
        "https://preview.redd.it/theory-rasasis-quick-releases-how-it-could-be-tied-to-their-v0-u3gif7sv71gf1.jpg?width=640&crop=smart&auto=webp&s=f2ea73f93e373cbbed42071036d9712cea338eb9",
    },
    {
      id: 8,
      brandName: "Jean Paul Gaultier",
      brandDescription:
        "One of the oldest perfume houses in the Middle East known for opulent fragrances",
      brandLogo: "https://ajmalperfume.com/cdn/shop/files/ajmal-logo.png",
      ShopLink: "https://ajmalperfume.com/",
      image:
        "https://media.theperfumeshop.com/medias/sys_master/root/hcd/h9c/10063045656606/JPG-LE-MALE-RE-2025_SJP-40021_ETAIL-STILL-LIFE-LME-ABSOLU-LES-MALES-NO-LP/JPG-LE-MALE-RE-2025-SJP-40021-ETAIL-STILL-LIFE-LME-ABSOLU-LES-MALES-NO-LP.jpg",
    },
    {
      id: 9,
      brandName: "Swiss Arabian",
      brandDescription:
        "Pioneers of Arabian perfumery blending heritage and innovation",
      brandLogo:
        "https://swissarabian.com/cdn/shop/files/swiss-arabian-logo.png",
      ShopLink: "https://swissarabian.com/",
      image:
        "https://www.duneperfumes.com.au/cdn/shop/files/Untitleddesign_79.png?v=1750943876",
    },
    {
      id: 10,
      brandName: "Tom Ford",
      brandDescription:
        "American luxury brand known for sophisticated and bold fragrances",
      brandLogo:
        "https://www.tomford.com/media/logo/stores/1/tom_ford_logo.svg",
      ShopLink: "https://www.tomford.com/",
      image:
        "https://perfumegallery.ae/cdn/shop/collections/TOMFORD.jpg?v=1658587858",
    },
  ];

  // Top 10 Perfumes
  const Top10Perfumes = [
    {
      id: 31,
      name: "Baccarat Rouge 540",
      brand: "Maison Francis Kurkdjian",
      image:
        "https://www.franciskurkdjian.com/media/catalog/product/b/a/baccarat_rouge_540_edp_70ml_1.jpg",
      price: "1350",
      rating: 4.9,
      description: "Iconic Amber Floral / 70ml",
    },
    {
      id: 32,
      name: "Creed Aventus",
      brand: "Creed",
      image:
        "https://creedboutique.com/media/catalog/product/a/v/aventus_120ml_1.jpg",
      price: "1200",
      rating: 4.8,
      description: "Fruity Chypre / 120ml",
    },
    {
      id: 33,
      name: "Tom Ford Black Orchid",
      brand: "Tom Ford",
      image:
        "https://www.tomford.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-tomford-master-catalog/default/dw123456/images/large/T0XV01_BLK_ORD_EDP_50ML.jpg",
      price: "650",
      rating: 4.7,
      description: "Luxurious Oriental / 50ml",
    },
    {
      id: 34,
      name: "Dior Sauvage",
      brand: "Dior",
      image:
        "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/90/0/packshots%2FPDG_Y0996225_F009600000_E01_GHC.jpg",
      price: "420",
      rating: 4.6,
      description: "Fresh Spicy / 100ml",
    },
    {
      id: 35,
      name: "Chanel Bleu de Chanel",
      brand: "Chanel",
      image:
        "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1240/bleu-de-chanel-eau-de-parfum-spray-100ml-3145891073409-8847106686750.jpg",
      price: "580",
      rating: 4.5,
      description: "Woody Aromatic / 100ml",
    },
    {
      id: 36,
      name: "Lattafa Khamrah",
      brand: "Lattafa",
      image: "https://lattafa.com/media/catalog/product/k/h/khamrah_100ml.jpg",
      price: "180",
      rating: 4.8,
      description: "Sweet Gourmand / 100ml",
    },
    {
      id: 37,
      name: "Armaf Club de Nuit Intense",
      brand: "Armaf",
      image:
        "https://armaf.com/media/catalog/product/c/l/club_de_nuit_intense_man_105ml.jpg",
      price: "120",
      rating: 4.7,
      description: "Fruity Smoky / 105ml",
    },
    {
      id: 38,
      name: "Amouage Interlude Man",
      brand: "Amouage",
      image:
        "https://www.amouage.com/media/catalog/product/i/n/interlude_man_edp_100ml_1.jpg",
      price: "890",
      rating: 4.6,
      description: "Spicy Oriental / 100ml",
    },
    {
      id: 39,
      name: "Rasasi Hawas",
      brand: "Rasasi",
      image:
        "https://www.rasasi.com/media/catalog/product/h/a/hawas_100ml_1.jpg",
      price: "220",
      rating: 4.5,
      description: "Fresh Aquatic / 100ml",
    },
    {
      id: 40,
      name: "Swiss Arabian Shaghaf Oud",
      brand: "Swiss Arabian",
      image:
        "https://swissarabian.com/media/catalog/product/s/h/shaghaf_oud_100ml.jpg",
      price: "299",
      rating: 4.4,
      description: "Oriental Woody / 100ml",
    },
  ];

  // Get current data based on active filter
  const getCurrentData = () => {
    switch (activeBtn) {
      case 0:
        return products; // Coming Soon
      case 1:
        return Favoriteproducts; // Everyone's Favorite
      case 2:
        return MiddleEastern; // Best Giftables
      case 3:
        return Top10Brands; // Top 10 Brands
      case 4:
        return Top10Perfumes; // Top 10 Perfumes
      default:
        return products;
    }
  };

  const getState = (id) => {
    return reminderState[id] || "idle";
  };

  const fireConfetti = () => {
    // a couple of bursts for a nice effect
    confetti({
      particleCount: 40,
      spread: 70,
      startVelocity: 45,
      origin: { y: 0.4 },
    });
    confetti({
      particleCount: 30,
      spread: 120,
      startVelocity: 30,
      scalar: 0.8,
      origin: { y: 0.6 },
    });
  };

  const handleRemindClick = (productId) => {
    const state = getState(productId);
    if (state === "idle") {
      // set animating state (setting reminder)
      setReminderState((prev) => ({ ...prev, [productId]: "animating" }));

      // fire confetti for setting reminder
      fireConfetti();

      // fallback: if animationend doesn't fire, ensure we set to done after buffer
      setTimeout(() => {
        setReminderState((prev) => {
          if (prev[productId] === "animating") {
            return { ...prev, [productId]: "done" };
          }
          return prev;
        });
      }, 1400); // equals 3 * 0.36s + buffer
    } else if (state === "done") {
      // user wants to unset reminder: no confetti, play a short bell-ring animation
      setReminderState((prev) => ({ ...prev, [productId]: "unsetting" }));
      // onAnimationEnd for 'bell-ring' will set it back to 'idle'
    }
    // if state === 'animating' or 'unsetting' ignore clicks
  };

  const handleAnimationEnd = (productId, e) => {
    // Determine which animation ended by name
    const animName =
      e?.animationName || (e?.nativeEvent && e.nativeEvent.animationName);
    if (animName === "bell-shake") {
      // finishing the set-reminder animation -> done
      setReminderState((prev) => ({ ...prev, [productId]: "done" }));
    } else if (animName === "bell-ring") {
      // finishing the unset animation -> idle
      setReminderState((prev) => ({ ...prev, [productId]: "idle" }));
    }
  };

  // Render different layouts based on active filter
  const renderProduct = (product, index) => {
    const state = getState(product.id);

    // Coming Soon (0)
    if (activeBtn === 0) {
      return (
        <div key={product.id} className="flex flex-col gap-3 p-2 md:p-4">
          {/* Inline styles for animations */}
          <style>{`
            @keyframes bell-shake {
              0% { transform: translateX(0) rotate(0deg); }
              15% { transform: translateX(-6px) rotate(-6deg); }
              30% { transform: translateX(6px) rotate(6deg); }
              45% { transform: translateX(-4px) rotate(-4deg); }
              60% { transform: translateX(4px) rotate(4deg); }
              75% { transform: translateX(-2px) rotate(-2deg); }
              100% { transform: translateX(0) rotate(0deg); }
            }
            .bell-shake {
              display: inline-flex;
              animation: bell-shake 0.36s ease-in-out 3;
              will-change: transform;
            }

            @keyframes bell-ring {
              0% { transform: rotate(0deg); }
              15% { transform: rotate(-8deg); }
              30% { transform: rotate(8deg); }
              45% { transform: rotate(-6deg); }
              60% { transform: rotate(6deg); }
              75% { transform: rotate(-3deg); }
              100% { transform: rotate(0deg); }
            }
            .bell-ring {
              display: inline-flex;
              transform-origin: 50% 8%;
              animation: bell-ring 0.48s ease-in-out 1;
              will-change: transform;
            }

            .remind-icon-wrapper {
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>

          {/* Image Container */}
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xs sm:text-sm font-semibold line-clamp-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-xs font-medium text-gray-300">
              By:{" "}
              <span className="underline font-semibold tracking-wider">
                {product.brand}
              </span>
            </p>

            {/* Button */}
            <Button
              className="text-xs md:text-sm mt-2  cursor-pointer rounded-sm font-semibold h-8 md:h-10 w-full flex items-center justify-center gap-2"
              onClick={() => handleRemindClick(product.id)}
              aria-pressed={state !== "idle"}
            >
              {/* Icon wrapper: apply shake class only while animating, ring class while unsetting */}
              <span
                className={`remind-icon-wrapper ${
                  state === "animating" ? "bell-shake" : ""
                } ${state === "unsetting" ? "bell-ring" : ""}`}
                // animationEnd happens after the full animation
                onAnimationEnd={(e) => handleAnimationEnd(product.id, e)}
                aria-hidden="true"
                style={{ width: 18, height: 18 }}
              >
                {state === "done" ? (
                  <Check className="w-3 h-3 md:w-4 md:h-4" />
                ) : (
                  <Bell className="w-3 h-3 md:w-4 md:h-4" />
                )}
              </span>

              <span className="hidden sm:inline">
                {state === "idle" && "Remind Me"}
                {state === "animating" && "Reminder Set..."}
                {state === "done" && "Reminder Set"}
                {state === "unsetting" && "Removing..."}
              </span>
              <span className="sm:hidden">
                {state === "idle" && "Remind"}
                {state === "animating" && "Set..."}
                {state === "done" && "Set"}
                {state === "unsetting" && "..."}
              </span>
            </Button>
          </div>
        </div>
      );
    }

    // Everyone's Favorite (1) & Best Giftables (2)
    if (activeBtn === 1 || activeBtn === 2) {
      return (
        <div key={product.id} className="flex flex-col gap-3 p-2 md:p-4">
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
            <h1 className="text-xs sm:text-sm font-semibold line-clamp-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-xs">{product.description}</p>
            <p className="flex items-center justify-between font-semibold">
              {product.price}$
              <span className="flex items-center text-[12px] gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                {product.rating}
              </span>
            </p>
            <Button
              className={"font-semibold tracking-wider text-xs rounded-none"}
            >
              View item
            </Button>
          </div>
        </div>
      );
    }

    // Top 10 Brands (3)
    if (activeBtn === 3) {
      return (
        <div
          key={index}
          className="relative min-h-[400px] flex-shrink-0 w-[280px]"
        >
          <h1 className="relative z-10">
            <span className="text-8xl font-bold ">{index < 9  ? "0" : ""}</span>
            <span className="text-8xl font-bold">{index + 1}</span>
          </h1>
          <div className="absolute top-16 left-0 right-0">
            <div className="overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.brandName}
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Brand name */}
            <p className="text-lg font-bold mb-2">{product.brandName}</p>
            {/* Brand description */}
            <p className="text-xs text-gray-300 mb-4 line-clamp-3">
              {product.brandDescription}
            </p>
            <div className="flex items-center gap-2">
              <Button className="flex font-semibold items-center gap-2  px-3 py-2 rounded text-sm">
                <Heart className="w-4 h-4" /> Like
              </Button>
              <Button className="flex font-semibold items-center gap-2  px-3 py-2 rounded text-sm">
                <Plus className="w-4 h-4" /> My list
              </Button>
            </div>
          </div>
        </div>
      );
    }

    // Top 10 Perfumes (4)
    if (activeBtn === 4) {
      return (
        <div
          key={index}
          className="relative min-h-[500px] flex-shrink-0 w-[280px]"
        >
          <h1 className="relative z-10">
            <span className="text-8xl font-bold ">{index < 9  ? " 0"  : ""}</span>
            <span className="text-8xl font-bold ">{index + 1}</span>
          </h1>
          <div className="absolute top-16 left-0 right-0">
            <div className=" overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Product Info */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xs sm:text-sm font-semibold line-clamp-2 leading-tight">
                {product.name}
              </h1>
              <p className="text-xs">{product.description}</p>
              <p className="flex items-center justify-between font-semibold">
                {product.price}$
                <span className="flex items-center text-[12px] gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  {product.rating}
                </span>
              </p>
              <Button
                className={"font-semibold tracking-wider text-xs rounded-none"}
              >
                View item
              </Button>
            </div>
          </div>
        </div>
      );
    }
  };

  const currentData = getCurrentData();

  return (
    <div className="min-h-screen font-outfit w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-6 md:py-10 px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <h1 className="md:text-base underline font-semibold flex items-center gap-2">
          New & Hot
        </h1>

        {/* Filter Buttons - Horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto">
          <ul className="flex items-center gap-3 md:gap-6 min-w-max md:min-w-0 pb-2">
            {filterButtons.map((item, index) => (
              <li
                key={index}
                onClick={() => setActivate(index)}
                className={`${
                  activeBtn === index
                    ? "bg-gray-200 text-black hover:bg-zinc-900 hover:text-white"
                    : "text-white bg-gray-950 border border-gray-500"
                } poppins tracking-wider cursor-pointer transition-all duration-300 
                  px-3 
                  h-9 md:h-8
                  flex items-center justify-center 
                  rounded-full 
                  text-xs md:text-[12px]  
                  w-[220px]
                  flex-shrink-0`}
              >
                <span className="mr-1 md:mr-2">{item.icon}</span>
                <span className="hidden sm:inline">{item.name}</span>
                <span className="sm:hidden">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Container - Responsive */}
        {activeBtn === 3 || activeBtn === 4 ? (
          // Horizontal scroll for Top 10 sections
          <div className="mt-6 md:mt-10">
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 md:gap-6">
                {currentData.map((product, index) =>
                  renderProduct(product, index)
                )}
              </div>
            </div>
          </div>
        ) : (
          // Regular grid for other sections
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-6 md:mt-10">
            {currentData.map((product, index) => renderProduct(product, index))}
          </div>
        )}

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <Button className="border font-semibold tracking-wider border-gray-700 hover:bg-gray-200 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm">
            View All {filterButtons[activeBtn].name}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
