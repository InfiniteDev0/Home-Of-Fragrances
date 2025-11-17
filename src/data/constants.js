export const products = [
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

export const seasonalTopPicks = [
  // Most Liked fragrances by season (structure mirrors seasonalTopPicks, fill with placeholders or real data as needed)
  // ☀️ SUMMER
  {
    season: "Summer",
    perfumes: [
      {
        name: "Louis Vuitton Pacific Chill",
        brand: "Louis Vuitton",
        type: "Designer",
        notes: ["Citrus", "Mint", "Musk"],
        image:
          "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pacific-chill---LP0326_PM2_Front%20view.png",
        year: 2025,
        price: 320,
        description: "A refreshing, vitamin-bright citrus musk for hot days.",
      },
      {
        name: "Parfums de Marly Perseus",
        brand: "Parfums de Marly",
        type: "Niche",
        notes: ["Bergamot", "Vetiver", "Amberwood"],
        image: "https://fimgs.net/mdimg/perfume/375x500.77701.jpg",
        year: 2025,
        price: 410,
        description: "Sparkling and elegant — an energizing summer signature.",
      },
      {
        name: "Lattafa Khamrah Qahwa",
        brand: "Lattafa",
        type: "Middle Eastern",
        notes: ["Coffee", "Cinnamon", "Amber"],
        image: "https://fimgs.net/mdimg/perfume/375x500.77423.jpg",
        year: 2025,
        price: 55,
        description: "Sweet coffee warmth with a tropical summer twist.",
      },
      {
        name: "Zoologist Seahorse",
        brand: "Zoologist",
        type: "Indie",
        notes: ["Ambergris", "Cardamom", "Seaweed"],
        image: "https://fimgs.net/mdimg/perfume/375x500.62383.jpg",
        year: 2025,
        price: 165,
        description:
          "A salty, artistic marine escape for creative summer souls.",
      },
      {
        name: "Dior Les Parfums Privés Eden-Roc",
        brand: "Christian Dior",
        type: "Private / Exclusive Line",
        notes: ["Mineral", "Salt", "White Florals"],
        image: "https://fimgs.net/mdimg/perfume/375x500.64265.jpg",
        year: 2025,
        price: 450,
        description:
          "Luxury resort in a bottle — elegant, solar, and timeless.",
      },
    ],
  },

  // ❄️ WINTER
  {
    season: "Winter",
    perfumes: [
      {
        name: "YSL Tuxedo Intense",
        brand: "Yves Saint Laurent",
        type: "Designer",
        notes: ["Patchouli", "Amber", "Vanilla"],
        image: "https://fimgs.net/mdimg/perfume/375x500.66027.jpg",
        year: 2025,
        description:
          "Warm, smoky, and sophisticated — the winter tuxedo of scents.",
      },
      {
        name: "Initio Oud for Greatness Neo",
        brand: "Initio Parfums Privés",
        type: "Niche",
        notes: ["Oud", "Lavender", "Saffron"],
        image: "https://fimgs.net/mdimg/perfume/375x500.76392.jpg",
        year: 2025,
        description:
          "The legendary oud reborn — richer, smoother, more hypnotic.",
      },
      {
        name: "Rasasi Fattan Intense",
        brand: "Rasasi",
        type: "Middle Eastern",
        notes: ["Incense", "Amber", "Leather"],
        image: "https://fimgs.net/mdimg/perfume/375x500.69022.jpg",
        year: 2025,
        description: "Arabian luxury wrapped in mystery and warmth.",
      },
      {
        name: "Imaginary Authors Whispered Myths",
        brand: "Imaginary Authors",
        type: "Indie",
        notes: ["Cedar", "Ambergris", "Fruit"],
        image: "https://fimgs.net/mdimg/perfume/375x500.52021.jpg",
        year: 2025,
        description:
          "Avant-garde warmth and art — perfect for cold creative nights.",
      },
      {
        name: "Maison Francis Kurkdjian Oud Satin Mood Extrait",
        brand: "MFK",
        type: "Private / Exclusive Line",
        notes: ["Oud", "Rose", "Violet"],
        image: "https://fimgs.net/mdimg/perfume/375x500.31968.jpg",
        year: 2025,
        description: "The king of opulent winter nights.",
      },
    ],
  },

  // 🌻 SPRING
  {
    season: "Spring",
    perfumes: [
      {
        name: "Chanel Chance Eau Tendre Eau de Parfum",
        brand: "Chanel",
        type: "Designer",
        notes: ["Grapefruit", "Jasmine", "Musk"],
        image: "https://fimgs.net/mdimg/perfume/375x500.55236.jpg",
        year: 2025,
        description: "Playful and elegant — the scent of new beginnings.",
      },
      {
        name: "Amouage Love Delight",
        brand: "Amouage",
        type: "Niche",
        notes: ["Honey", "Rose", "Tonka"],
        image: "https://fimgs.net/mdimg/perfume/375x500.77359.jpg",
        year: 2025,
        description: "Floral romance with gourmand touches.",
      },
      {
        name: "Lattafa Velvet Oud",
        brand: "Lattafa",
        type: "Middle Eastern",
        notes: ["Oud", "Vanilla", "Amber"],
        image: "https://fimgs.net/mdimg/perfume/375x500.70722.jpg",
        year: 2025,
        description: "A soft floral-oud harmony that blooms with the season.",
      },
      {
        name: "Matière Première French Flower",
        brand: "Matière Première",
        type: "Indie",
        notes: ["Tuberose", "Pear", "Ambrox"],
        image: "https://fimgs.net/mdimg/perfume/375x500.67663.jpg",
        year: 2025,
        description: "A modern take on fresh florals with natural sensuality.",
      },
      {
        name: "Dior Lucky",
        brand: "Christian Dior",
        type: "Private / Exclusive Line",
        notes: ["Lily of the Valley", "White Musk"],
        image: "https://fimgs.net/mdimg/perfume/375x500.49333.jpg",
        year: 2025,
        description: "Delicate, elegant, and filled with optimism.",
      },
    ],
  },

  {
    season: "Autumn",
    perfumes: [
      {
        category: "Designer",
        name: "Yves Saint Laurent Black Opium",
        brand: "YSL",
        image: "",
        link: "",
        type: "Designer",
      },
      {
        category: "Niche",
        name: "Phlur Vanilla Skin",
        brand: "Phlur",
        image: "",
        link: "",
        type: "Niche",
      },
      {
        category: "Middle Eastern",
        name: "Rasasi Fattan Intense",
        brand: "Rasasi",
        image: "",
        link: "",
        type: "Middle Eastern",
      },
      {
        category: "Indie",
        name: "The 7 Virtues Cherry Ambition",
        brand: "The 7 Virtues",
        image: "",
        link: "",
        type: "Indie",
      },
      {
        category: "Private / Exclusive Line",
        name: "Gucci The Alchemist’s Garden A Gloaming Night",
        brand: "Gucci",
        image: "",
        link: "",
        type: "Private / Exclusive Line",
      },
    ],
  },
  {
    season: "All Seasons",
    perfumes: [
      {
        category: "Designer",
        name: "Hermès Terre d’Hermès Eau de Parfum Intense",
        brand: "Hermès",
        image: "",
        link: "",
        type: "Designer",
      },
      {
        category: "Niche",
        name: "Xerjoff Coro",
        brand: "Xerjoff",
        image: "",
        link: "",
        type: "Niche",
      },
      {
        category: "Middle Eastern",
        name: "Afnan Turathi Electric",
        brand: "Afnan",
        image: "",
        link: "",
        type: "Middle Eastern",
      },
      {
        category: "Indie",
        name: "Glossier You Fleur",
        brand: "Glossier",
        image: "",
        link: "",
        type: "Indie",
      },
      {
        category: "Private / Exclusive Line",
        name: "Maison Francis Kurkdjian Oud Satin Mood Extrait",
        brand: "Maison Francis Kurkdjian",
        image: "",
        link: "",
        type: "Private / Exclusive Line",
      },
    ],
  },
];

export const seasonalMostLiked = [
  {
    season: "Summer",
    perfumes: [
      {
        name: "Kayali Vanilla Royale Sugared Patchouli | 64",
        brand: "Kayali",
        type: "Indie",
        notes: ["Vanilla", "Patchouli", "Sugar"],
        image: "", // fill later
        year: 2025,
        description:
          "Sweet gourmand favourite that dominated TikTok and Instagram this summer.",
      },
      {
        name: "Glossier You (Reimagined)",
        brand: "Glossier",
        type: "Indie",
        notes: ["Musk", "Pink Pepper", "Iris"],
        image: "",
        year: 2025,
        description:
          "Minimal ‘skin’ scent that influencers recommended for all-day wear.",
      },
      {
        name: "Afnan Turathi Electric",
        brand: "Afnan",
        type: "Middle Eastern",
        notes: ["Oud", "Leather", "Amber"],
        image: "",
        year: 2025,
        description:
          "Middle Eastern pick with strong social media buzz and lasting power.",
      },
      {
        name: "Dior Sauvage Elixir",
        brand: "Dior",
        type: "Designer",
        notes: ["Nutmeg", "Lavender", "Amber", "Licorice"],
        image: "",
        year: 2025,
        description:
          "Designer fragrance that remained a top liked choice across seasons.",
      },
      {
        name: "Xerjoff Coro",
        brand: "Xerjoff",
        type: "Niche",
        notes: ["Fruits", "Amberwood", "Oud"],
        image: "",
        year: 2025,
        description:
          "Niche luxury favourite cited by influencers for its richness and refinement.",
      },
    ],
  },
  {
    season: "Winter",
    perfumes: [
      {
        name: "YSL Libre Intense",
        brand: "Yves Saint Laurent",
        type: "Designer",
        notes: ["Lavender", "Tonka Bean", "White Musk"],
        image: "",
        year: 2025,
        description:
          "Strong designer scent popular in winter, cited by many reviewers.",
      },
      {
        name: "Phlur Rose Whip",
        brand: "Phlur",
        type: "Niche",
        notes: ["Rose", "Leathery Accord", "Amber"],
        image: "",
        year: 2025,
        description:
          "Niche floral that won acclaim and social media accolades for 2025. :contentReference[oaicite:0]{index=0}",
      },
      {
        name: "Rasasi Fattan Intense",
        brand: "Rasasi",
        type: "Middle Eastern",
        notes: ["Incense", "Amber", "Leather"],
        image: "",
        year: 2025,
        description:
          "Middle Eastern luxury scent frequently praised for winter wear.",
      },
      {
        name: "Imaginary Authors Whispered Myths",
        brand: "Imaginary Authors",
        type: "Indie",
        notes: ["Cedar", "Ambergris", "Fruit"],
        image: "",
        year: 2025,
        description:
          "Indie favourite for colder months, highlighted by reviewers.",
      },
      {
        name: "Maison Francis Kurkdjian Oud Satin Mood Extrait",
        brand: "Maison Francis Kurkdjian",
        type: "Private / Exclusive Line",
        notes: ["Oud", "Rose", "Violet"],
        image: "",
        year: 2025,
        description:
          "High-end exclusive line that continues to dominate top likes.",
      },
    ],
  },
  {
    season: "Spring",
    perfumes: [
      {
        name: "Chanel Coco Mademoiselle",
        brand: "Chanel",
        type: "Designer",
        notes: ["Orange", "Patchouli", "White Florals"],
        image: "",
        year: 2025,
        description:
          "Classic designer scent still majorly liked during spring 2025. :contentReference[oaicite:1]{index=1}",
      },
      {
        name: "Byredo Thé Matcha 26",
        brand: "Byredo",
        type: "Niche",
        notes: ["Matcha", "Fig", "Cedarwood"],
        image: "",
        year: 2025,
        description:
          "Niche fresh scent growing in popularity among influencers. :contentReference[oaicite:2]{index=2}",
      },
      {
        name: "Lattafa Khamrah",
        brand: "Lattafa",
        type: "Middle Eastern",
        notes: ["Cinnamon", "Praline", "Date"],
        image: "",
        year: 2025,
        description:
          "Middle Eastern scent that went viral as a top liked pick. :contentReference[oaicite:3]{index=3}",
      },
      {
        name: "The 7 Virtues Cherry Ambition",
        brand: "The 7 Virtues",
        type: "Indie",
        notes: ["Cherry", "Woody Base", "Red Fruits"],
        image: "",
        year: 2025,
        description: "Indie pick gaining traction for spring and layering.",
      },
      {
        name: "Hermès Terre d’Hermès Eau de Parfum Intense",
        brand: "Hermès",
        type: "Private / Exclusive Line",
        notes: ["Grapefruit", "Woody Notes", "Vetiver"],
        image: "",
        year: 2025,
        description:
          "Premium exclusive line regularly featured in top liked lists all year. :contentReference[oaicite:4]{index=4}",
      },
    ],
  },
  {
    season: "Autumn",
    perfumes: [
      {
        name: "Yves Saint Laurent Black Opium",
        brand: "YSL",
        type: "Designer",
        notes: ["Coffee", "Vanilla", "Patchouli"],
        image: "",
        year: 2025,
        description:
          "Designer scent heavily featured in autumn 2025 like-ability discussions.",
      },
      {
        name: "Phlur Vanilla Skin",
        brand: "Phlur",
        type: "Niche",
        notes: ["Vanilla", "Skin Musk", "Cashmere"],
        image: "",
        year: 2025,
        description: "Niche gourmand trending for cooler months and layering.",
      },
      {
        name: "Rasasi Fattan Intense",
        brand: "Rasasi",
        type: "Middle Eastern",
        notes: ["Incense", "Amber", "Leather"],
        image: "",
        year: 2025,
        description:
          "Middle Eastern luxury fragrance seen in many autumn top liked lists.",
      },
      {
        name: "Sage & Salt Moon Ring",
        brand: "Sage & Salt",
        type: "Indie",
        notes: ["Woody", "Leather", "Amber"],
        image: "",
        year: 2025,
        description:
          "Indie luxury with autumnal warm woods gaining community likes.",
      },
      {
        name: "Gucci The Alchemist’s Garden A Gloaming Night",
        brand: "Gucci",
        type: "Private / Exclusive Line",
        notes: ["Dark Plum", "Oud", "Smoke"],
        image: "",
        year: 2025,
        description:
          "Private line pick for evening layering in autumn, high-like count.",
      },
    ],
  },
  {
    season: "All Seasons",
    perfumes: [
      {
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        type: "Niche",
        notes: ["Jasmine", "Amberwood", "Fir Resin"],
        image: "",
        year: 2025,
        description:
          "One of the most viral & liked fragrances across platforms in 2025. :contentReference[oaicite:5]{index=5}",
      },
      {
        name: "Creed Aventus",
        brand: "Creed",
        type: "Designer",
        notes: ["Pineapple", "Birch", "Musk"],
        image: "",
        year: 2025,
        description:
          "Classic designer favourite still top-liked by community this year.",
      },
      {
        name: "Xerjoff Coro",
        brand: "Xerjoff",
        type: "Niche",
        notes: ["Fruits", "Amberwood", "Oud"],
        image: "",
        year: 2025,
        description:
          "Niche house pick with year-round appeal and strong social presence.",
      },
      {
        name: "Glossier You Fleur",
        brand: "Glossier",
        type: "Indie",
        notes: ["Ambrette", "Pink Pepper", "White Musk"],
        image: "",
        year: 2025,
        description:
          "Indie everyday favourite that transcends seasons; micro-influencer favourite. :contentReference[oaicite:6]{index=6}",
      },
      {
        name: "Afnan Turathi Electric",
        brand: "Afnan",
        type: "Middle Eastern",
        notes: ["Leather", "Amber", "Saffron"],
        image: "",
        year: 2025,
        description:
          "Middle Eastern luxury pick that also had year-round likeability across platforms.",
      },
    ],
  },
];

export const seasonalBestSelling = [
  {
    season: "Summer",
    perfumes: [
      {
        name: "Dior Sauvage Elixir",
        brand: "Dior",
        type: "Designer",
        notes: ["Nutmeg", "Lavender", "Amber", "Licorice"],
        image: "",
        year: 2025,
        description: "The summer's top-selling designer fragrance for men.",
      },
      {
        name: "Parfums de Marly Greenley",
        brand: "Parfums de Marly",
        type: "Niche",
        notes: ["Green Apple", "Cashmeran", "Cedarwood"],
        image: "",
        year: 2025,
        description: "Niche freshie that dominated summer sales.",
      },
      {
        name: "Lattafa Khamrah",
        brand: "Lattafa",
        type: "Middle Eastern",
        notes: ["Cinnamon", "Praline", "Date"],
        image: "",
        year: 2025,
        description: "Middle Eastern bestseller with viral appeal.",
      },
      {
        name: "Glossier You Fleur",
        brand: "Glossier",
        type: "Indie",
        notes: ["Ambrette", "Pink Pepper", "White Musk"],
        image: "",
        year: 2025,
        description: "Indie hit for summer layering and everyday wear.",
      },
      {
        name: "Maison Francis Kurkdjian Aqua Media Cologne Forte",
        brand: "Maison Francis Kurkdjian",
        type: "Private / Exclusive Line",
        notes: ["Verbena", "Hedione", "Musk"],
        image: "",
        year: 2025,
        description: "Exclusive line bestseller for summer freshness.",
      },
    ],
  },
  {
    season: "Winter",
    perfumes: [
      {
        name: "YSL Tuxedo Intense",
        brand: "Yves Saint Laurent",
        type: "Designer",
        notes: ["Patchouli", "Amber", "Vanilla"],
        image: "",
        year: 2025,
        description: "Designer bestseller for winter sophistication.",
      },
      {
        name: "Initio Oud for Greatness Neo",
        brand: "Initio Parfums Privés",
        type: "Niche",
        notes: ["Oud", "Lavender", "Saffron"],
        image: "",
        year: 2025,
        description: "Niche oud that topped winter sales charts.",
      },
      {
        name: "Rasasi Fattan Intense",
        brand: "Rasasi",
        type: "Middle Eastern",
        notes: ["Incense", "Amber", "Leather"],
        image: "",
        year: 2025,
        description: "Middle Eastern classic, a winter bestseller.",
      },
      {
        name: "Imaginary Authors Memoirs of a Trespasser",
        brand: "Imaginary Authors",
        type: "Indie",
        notes: ["Vanilla", "Guaiac Wood", "Oak Barrels"],
        image: "",
        year: 2025,
        description: "Indie bestseller for cozy winter nights.",
      },
      {
        name: "Maison Francis Kurkdjian Grand Soir",
        brand: "Maison Francis Kurkdjian",
        type: "Private / Exclusive Line",
        notes: ["Amber", "Vanilla", "Benzoin"],
        image: "",
        year: 2025,
        description: "Exclusive bestseller for winter evenings.",
      },
    ],
  },
  {
    season: "Spring",
    perfumes: [
      {
        name: "Chanel Coco Mademoiselle",
        brand: "Chanel",
        type: "Designer",
        notes: ["Orange", "Patchouli", "White Florals"],
        image: "",
        year: 2025,
        description: "Designer bestseller for spring freshness.",
      },
      {
        name: "Byredo Blanche",
        brand: "Byredo",
        type: "Niche",
        notes: ["Aldehydes", "Rose", "Sandalwood"],
        image: "",
        year: 2025,
        description: "Niche bestseller for clean spring vibes.",
      },
      {
        name: "Lattafa Velvet Oud",
        brand: "Lattafa",
        type: "Middle Eastern",
        notes: ["Oud", "Vanilla", "Amber"],
        image: "",
        year: 2025,
        description: "Middle Eastern bestseller for spring layering.",
      },
      {
        name: "The 7 Virtues Cherry Ambition",
        brand: "The 7 Virtues",
        type: "Indie",
        notes: ["Cherry", "Woody Base", "Red Fruits"],
        image: "",
        year: 2025,
        description: "Indie bestseller for spring and layering.",
      },
      {
        name: "Dior Lucky",
        brand: "Christian Dior",
        type: "Private / Exclusive Line",
        notes: ["Lily of the Valley", "White Musk"],
        image: "",
        year: 2025,
        description: "Exclusive line bestseller for spring optimism.",
      },
    ],
  },
  {
    season: "Autumn",
    perfumes: [
      {
        name: "Yves Saint Laurent Black Opium",
        brand: "YSL",
        type: "Designer",
        notes: ["Coffee", "Vanilla", "Patchouli"],
        image: "",
        year: 2025,
        description: "Designer bestseller for autumn nights.",
      },
      {
        name: "Phlur Vanilla Skin",
        brand: "Phlur",
        type: "Niche",
        notes: ["Vanilla", "Skin Musk", "Cashmere"],
        image: "",
        year: 2025,
        description: "Niche bestseller for autumn layering.",
      },
      {
        name: "Rasasi Fattan Intense",
        brand: "Rasasi",
        type: "Middle Eastern",
        notes: ["Incense", "Amber", "Leather"],
        image: "",
        year: 2025,
        description: "Middle Eastern bestseller for autumn.",
      },
      {
        name: "Sage & Salt Moon Ring",
        brand: "Sage & Salt",
        type: "Indie",
        notes: ["Woody", "Leather", "Amber"],
        image: "",
        year: 2025,
        description: "Indie bestseller for autumn warmth.",
      },
      {
        name: "Gucci The Alchemist’s Garden A Gloaming Night",
        brand: "Gucci",
        type: "Private / Exclusive Line",
        notes: ["Dark Plum", "Oud", "Smoke"],
        image: "",
        year: 2025,
        description: "Exclusive line bestseller for autumn evenings.",
      },
    ],
  },
  {
    season: "All Seasons",
    perfumes: [
      {
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        type: "Niche",
        notes: ["Jasmine", "Amberwood", "Fir Resin"],
        image: "",
        year: 2025,
        description: "All-year bestseller, viral and in demand.",
      },
      {
        name: "Creed Aventus",
        brand: "Creed",
        type: "Designer",
        notes: ["Pineapple", "Birch", "Musk"],
        image: "",
        year: 2025,
        description: "Designer classic, always a top seller.",
      },
      {
        name: "Afnan Turathi Electric",
        brand: "Afnan",
        type: "Middle Eastern",
        notes: ["Leather", "Amber", "Saffron"],
        image: "",
        year: 2025,
        description: "Middle Eastern bestseller for all seasons.",
      },
      {
        name: "Glossier You Fleur",
        brand: "Glossier",
        type: "Indie",
        notes: ["Ambrette", "Pink Pepper", "White Musk"],
        image: "",
        year: 2025,
        description: "Indie bestseller, year-round favourite.",
      },
      {
        name: "Maison Francis Kurkdjian Oud Satin Mood Extrait",
        brand: "Maison Francis Kurkdjian",
        type: "Private / Exclusive Line",
        notes: ["Oud", "Rose", "Violet"],
        image: "",
        year: 2025,
        description: "Exclusive line bestseller, always in demand.",
      },
    ],
  },
];


export const faQquestion = [
  {
    question: "What is Home of Fragrances?",
    answer:
      "Home of Fragrances is an online platform dedicated to helping users discover perfumes through detailed notes, season guides, brand insights, and curated recommendations.",
  },
  {
    question: "Are your fragrance recommendations accurate?",
    answer:
      "Yes. All recommendations are generated from structured data, fragrance profiles, community preferences, and curated expert analysis.",
  },
  {
    question: "Do you sell perfumes directly?",
    answer:
      "Not yet. We currently provide recommendations, guides, and links to trusted official retailers when available.",
  },
  {
    question: "Where do your perfume images and descriptions come from?",
    answer:
      "We use a mix of brand-provided images, open-licensed images, and custom descriptions written by fragrance experts.",
  },
  {
    question: "Can I trust the prices listed?",
    answer:
      "Prices shown are estimates based on major retailers and can vary depending on region, store, or seasonal discounts.",
  },
  {
    question: "How often is your fragrance database updated?",
    answer:
      "We update our listings weekly with new releases, trending perfumes, and seasonal picks.",
  },
  {
    question: "Do you offer personalized recommendations?",
    answer:
      "Yes. You can browse by season, gender, notes, brand, or our curated “Top Picks” and “Most Liked” categories.",
  },
  {
    question: "Are the fragrances gender-specific?",
    answer:
      "Most perfumes today are unisex. However, we label scents as masculine-leaning, feminine-leaning, or unisex based on their profiles.",
  },
  {
    question: "I’m new to fragrances. Where should I start?",
    answer:
      "Use our categories like Seasonal picks, Best sellers, Note filters, and Designer vs. Niche guides. These help you discover scents that match your personality and climate.",
  },
  {
    question: "Do you store any personal information?",
    answer:
      "We only collect minimal data necessary for site functionality. Full details are in our Privacy Policy.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us through the Contact Form in the Help Center, and we typically respond within 24–48 hours.",
  },
  {
    question: "Do you offer notifications for new releases?",
    answer:
      "Yes. You can enable notifications to get updates on new fragrances, best sellers, limited editions, and seasonal lists.",
  },
  {
    question: "Why are some perfumes not available in my country?",
    answer:
      "Availability depends on the official distributor of each brand. We indicate when certain items are region-restricted.",
  },
  {
    question: "Do you accept user reviews?",
    answer: "Not yet — but this feature is coming soon.",
  },
  {
    question: "Are the perfumes authentic?",
    answer:
      "All external purchase links direct you only to authorized retailers after you scan the qr code on the products package.",
  },
];
