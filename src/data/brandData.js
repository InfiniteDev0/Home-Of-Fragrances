// Brand data structure based on requirements
export const brandData = {
  afnan: {
    id: "afnan",
    name: "Afnan",
    slug: "afnan",
    logo: "/images/brands/afnan-logo.png", // Brand logo path
    description: "Luxury Arabian fragrances with modern sophistication",
    country: "🇦🇪 UAE",
    founded: "2007",
    category: "NICHE", // NICHE or DESIGNER
    perfumeCount: 0, // Will be populated from database

    // Brand lines/collections
    lines: [
      {
        id: "aromatix",
        name: "Aromatix",
        description: "Fresh and aromatic collection",
      },
      {
        id: "vulvan",
        name: "Vulvan",
        description: "Bold and mysterious fragrances",
      },
      {
        id: "supremacy",
        name: "Supremacy",
        description: "Premium luxury line",
      },
      {
        id: "signature",
        name: "Signature",
        description: "Classic Afnan fragrances",
      },
      { id: "rare", name: "Rare", description: "Limited edition exclusives" },
    ],

    // Sample perfumes (5 as requested)
    perfumes: [
      {
        id: "supremacy-in-oud",
        name: "Supremacy in Oud",
        description:
          "A masterpiece of oud blending with rose and saffron, creating an opulent and sophisticated fragrance experience.",
        price: 89.99, // Base price, will be adjusted by country
        images: [
          "/images/perfumes/afnan/supremacy-in-oud-1.jpg",
          "/images/perfumes/afnan/supremacy-in-oud-2.jpg",
          "/images/perfumes/afnan/supremacy-in-oud-3.jpg",
        ],
        rating: 4.7,

        // Boolean properties
        isLiked: false,
        isViewed: true,
        isBestseller: true,
        isDiscounted: false,
        inStock: true,
        isGiftable: true,

        // Classification
        gender: "Unisex",
        category: "Oriental",
        line: "supremacy",
        concentration: "EDP", // EDP < EDT < EXTRAIT < ATTAR
        size: 100, // ML

        // Fragrance profile with note images
        notes: {
          top: [
            { name: "Rose", image: "/images/notes/rose.png" },
            { name: "Saffron", image: "/images/notes/saffron.png" },
            { name: "Pink Pepper", image: "/images/notes/pink-pepper.png" }
          ],
          middle: [
            { name: "Oud", image: "/images/notes/oud.png" },
            { name: "Geranium", image: "/images/notes/geranium.png" },
            { name: "Cinnamon", image: "/images/notes/cinnamon.png" }
          ],
          base: [
            { name: "Amber", image: "/images/notes/amber.png" },
            { name: "Musk", image: "/images/notes/musk.png" },
            { name: "Sandalwood", image: "/images/notes/sandalwood.png" }
          ],
        },

        // Usage context
        season: ["Fall", "Winter"],
        occasions: ["Evening", "Special Events", "Date Night"],
        longevity: "8-12 hours",
        projection: "Heavy",

        // Additional details
        launchYear: 2019,
        perfumer: "Afnan House Perfumers",
      },

      {
        id: "9pm",
        name: "9PM",
        description:
          "An evening fragrance that captures the essence of luxury nightlife with its rich and captivating blend.",
        price: 45.99,
        images: [
          "/images/perfumes/afnan/9pm-1.jpg",
          "/images/perfumes/afnan/9pm-2.jpg",
        ],
        rating: 4.5,

        isLiked: true,
        isViewed: false,
        isBestseller: true,
        isDiscounted: true,
        inStock: true,
        isGiftable: true,

        gender: "Men",
        category: "Oriental Spicy",
        line: "signature",
        concentration: "EDP",
        size: 100,

        notes: {
          top: [
            { name: "Apple", image: "/images/notes/apple.png" },
            { name: "Cinnamon", image: "/images/notes/cinnamon.png" },
            { name: "Lavender", image: "/images/notes/lavender.png" }
          ],
          middle: [
            { name: "Orange Blossom", image: "/images/notes/orange-blossom.png" },
            { name: "Vanilla", image: "/images/notes/vanilla.png" },
            { name: "Tonka Bean", image: "/images/notes/tonka-bean.png" }
          ],
          base: [
            { name: "Vanilla", image: "/images/notes/vanilla.png" },
            { name: "Benzoin", image: "/images/notes/benzoin.png" },
            { name: "Amberwood", image: "/images/notes/amberwood.png" }
          ],
        },

        season: ["Fall", "Winter", "Spring"],
        occasions: ["Evening", "Casual", "Date Night"],
        longevity: "6-8 hours",
        projection: "Moderate",

        launchYear: 2020,
        perfumer: "Afnan House Perfumers",
      },

      {
        id: "modest-deux",
        name: "Modest Deux",
        description:
          "A refined and elegant fragrance that embodies sophistication and grace with floral and woody accords.",
        price: 65.99,
        images: [
          "/images/perfumes/afnan/modest-deux-1.jpg",
          "/images/perfumes/afnan/modest-deux-2.jpg",
          "/images/perfumes/afnan/modest-deux-3.jpg",
        ],
        rating: 4.3,

        isLiked: false,
        isViewed: true,
        isBestseller: false,
        isDiscounted: false,
        inStock: true,
        isGiftable: true,

        gender: "Women",
        category: "Floral Woody",
        line: "aromatix",
        concentration: "EDT",
        size: 75,

        notes: {
          top: [
            { name: "Bergamot", image: "/images/notes/bergamot.png" },
            { name: "Blackcurrant", image: "/images/notes/blackcurrant.png" },
            { name: "Pear", image: "/images/notes/pear.png" }
          ],
          middle: [
            { name: "Rose", image: "/images/notes/rose.png" },
            { name: "Jasmine", image: "/images/notes/jasmine.png" },
            { name: "Lily of the Valley", image: "/images/notes/lily-of-the-valley.png" }
          ],
          base: [
            { name: "Cedar", image: "/images/notes/cedar.png" },
            { name: "Musk", image: "/images/notes/musk.png" },
            { name: "Amber", image: "/images/notes/amber.png" }
          ],
        },

        season: ["Spring", "Summer"],
        occasions: ["Daytime", "Office", "Casual"],
        longevity: "4-6 hours",
        projection: "Light",

        launchYear: 2021,
        perfumer: "Afnan House Perfumers",
      },

      {
        id: "precious-heritage",
        name: "Precious Heritage",
        description:
          "A tribute to Arabian perfumery heritage, blending traditional oud with modern sensibilities.",
        price: 120.99,
        images: [
          "/images/perfumes/afnan/precious-heritage-1.jpg",
          "/images/perfumes/afnan/precious-heritage-2.jpg",
        ],
        rating: 4.8,

        isLiked: true,
        isViewed: false,
        isBestseller: true,
        isDiscounted: false,
        inStock: false,
        isGiftable: true,

        gender: "Unisex",
        category: "Oriental Woody",
        line: "rare",
        concentration: "EXTRAIT",
        size: 50,

        notes: {
          top: [
            { name: "Cardamom", image: "/images/notes/cardamom.png" },
            { name: "Nutmeg", image: "/images/notes/nutmeg.png" },
            { name: "Bergamot", image: "/images/notes/bergamot.png" }
          ],
          middle: [
            { name: "Oud", image: "/images/notes/oud.png" },
            { name: "Rose", image: "/images/notes/rose.png" },
            { name: "Patchouli", image: "/images/notes/patchouli.png" }
          ],
          base: [
            { name: "Sandalwood", image: "/images/notes/sandalwood.png" },
            { name: "Vanilla", image: "/images/notes/vanilla.png" },
            { name: "Musk", image: "/images/notes/musk.png" }
          ],
        },

        season: ["Fall", "Winter"],
        occasions: ["Special Events", "Evening", "Luxury"],
        longevity: "12+ hours",
        projection: "Heavy",

        launchYear: 2018,
        perfumer: "Master Perfumer Hassan Al-Rashid",
      },

      {
        id: "vitality-vulvan",
        name: "Vitality Vulvan",
        description:
          "An energetic and vibrant fragrance that ignites the senses with its dynamic and bold composition.",
        price: 55.99,
        images: [
          "/images/perfumes/afnan/vitality-vulvan-1.jpg",
          "/images/perfumes/afnan/vitality-vulvan-2.jpg",
        ],
        rating: 4.4,

        isLiked: false,
        isViewed: true,
        isBestseller: false,
        isDiscounted: true,
        inStock: true,
        isGiftable: false,

        gender: "Men",
        category: "Fresh Spicy",
        line: "vulvan",
        concentration: "EDP",
        size: 90,

        notes: {
          top: [
            { name: "Lemon", image: "/images/notes/lemon.png" },
            { name: "Mint", image: "/images/notes/mint.png" },
            { name: "Ginger", image: "/images/notes/ginger.png" }
          ],
          middle: [
            { name: "Lavender", image: "/images/notes/lavender.png" },
            { name: "Geranium", image: "/images/notes/geranium.png" },
            { name: "Black Pepper", image: "/images/notes/black-pepper.png" }
          ],
          base: [
            { name: "Vetiver", image: "/images/notes/vetiver.png" },
            { name: "Cedar", image: "/images/notes/cedar.png" },
            { name: "Ambergris", image: "/images/notes/ambergris.png" }
          ],
        },

        season: ["Spring", "Summer"],
        occasions: ["Daytime", "Sport", "Casual"],
        longevity: "5-7 hours",
        projection: "Moderate",

        launchYear: 2022,
        perfumer: "Afnan House Perfumers",
      },
    ],
  },
};

// Filter options based on the data
export const filterOptions = {
  gender: ["Men", "Women", "Unisex"],
  category: [
    "Oriental",
    "Oriental Spicy",
    "Floral Woody",
    "Oriental Woody",
    "Fresh Spicy",
  ],
  concentration: ["EDT", "EDP", "EXTRAIT", "ATTAR"],
  size: ["30ml", "50ml", "75ml", "90ml", "100ml", "125ml"],
  season: ["Spring", "Summer", "Fall", "Winter"],
  occasions: [
    "Daytime",
    "Evening",
    "Office",
    "Casual",
    "Date Night",
    "Special Events",
    "Sport",
    "Luxury",
  ],
  longevity: [
    "2-4 hours",
    "4-6 hours",
    "5-7 hours",
    "6-8 hours",
    "8-12 hours",
    "12+ hours",
  ],
  projection: ["Light", "Moderate", "Heavy"],
  priceRange: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $150", min: 100, max: 150 },
    { label: "Above $150", min: 150, max: 1000 },
  ],
};
