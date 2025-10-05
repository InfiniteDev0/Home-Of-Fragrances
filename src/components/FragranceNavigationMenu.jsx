"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const FragranceNavigationMenu = () => {
  // Navigation data organized like Nike's structure
  const navigationData = {
    "National Day": {
      categories: [
        { name: "All National Day Offers", href: "/national-day" },
        { name: "Saudi Heritage Collection", href: "/national-day/heritage" },
        { name: "Limited Edition Sets", href: "/national-day/limited-edition" },
        { name: "Gift Bundles", href: "/national-day/gift-bundles" },
      ],
      highlights: [
        { name: "Up to 50% Off", href: "/national-day/sale" },
        { name: "Oud Masters Collection", href: "/national-day/oud-masters" },
        {
          name: "Arabic Signature Scents",
          href: "/national-day/arabic-scents",
        },
        { name: "Buy 2 Get 1 Free", href: "/national-day/buy2get1" },
      ],
      trending: [
        { name: "Osma Royal Oud", href: "/fragrances/osma-royal-oud" },
        { name: "Ibraq Reefs Oceanic", href: "/fragrances/ibraq-oceanic" },
        { name: "Ahmed Al Maqribi Saffron", href: "/fragrances/ahmed-saffron" },
        { name: "Riffs Amber Nights", href: "/fragrances/riffs-amber-nights" },
      ],
    },
    New: {
      categories: [
        { name: "Shop All New Arrivals", href: "/new" },
        { name: "Best Sellers", href: "/new/best-sellers" },
        { name: "Limited Edition", href: "/new/limited-edition" },
        { name: "Pre-Orders", href: "/new/pre-orders" },
      ],
      highlights: [
        { name: "Oud Collections", href: "/collections/oud" },
        { name: "Summer Scents 2025", href: "/collections/summer-2025" },
        { name: "Celebrity Fragrances", href: "/collections/celebrity" },
        { name: "Gift Sets", href: "/collections/gift-sets" },
      ],
      trending: [
        { name: "Lattafa Khamrah", href: "/fragrances/lattafa-khamrah" },
        { name: "Armaf Club De Nuit", href: "/fragrances/armaf-club-de-nuit" },
        { name: "Creed Aventus", href: "/fragrances/creed-aventus" },
        {
          name: "Tom Ford Black Orchid",
          href: "/fragrances/tom-ford-black-orchid",
        },
      ],
    },
    Men: {
      categories: [
        { name: "Shop All Men's", href: "/men" },
        { name: "Fresh & Citrus", href: "/men/fresh-citrus" },
        { name: "Woody & Oud", href: "/men/woody-oud" },
        { name: "Spicy & Oriental", href: "/men/spicy-oriental" },
        { name: "Sport & Aquatic", href: "/men/sport-aquatic" },
      ],
      highlights: [
        { name: "Designer Classics", href: "/men/designer" },
        { name: "Middle Eastern", href: "/men/middle-eastern" },
        { name: "Office Appropriate", href: "/men/office" },
        { name: "Date Night", href: "/men/date-night" },
      ],
      trending: [
        { name: "Sauvage by Dior", href: "/fragrances/dior-sauvage" },
        { name: "Bleu de Chanel", href: "/fragrances/chanel-bleu" },
        { name: "Oud for Glory", href: "/fragrances/lattafa-oud-for-glory" },
        { name: "Acqua di Gio", href: "/fragrances/armani-acqua-di-gio" },
      ],
    },
    Women: {
      categories: [
        { name: "Shop All Women's", href: "/women" },
        { name: "Floral & Fresh", href: "/women/floral-fresh" },
        { name: "Sweet & Gourmand", href: "/women/sweet-gourmand" },
        { name: "Oriental & Spicy", href: "/women/oriental-spicy" },
        { name: "Light & Airy", href: "/women/light-airy" },
      ],
      highlights: [
        { name: "Luxury Collection", href: "/women/luxury" },
        { name: "Arabic Perfumes", href: "/women/arabic" },
        { name: "Day Wear", href: "/women/day-wear" },
        { name: "Evening Wear", href: "/women/evening" },
      ],
      trending: [
        { name: "Miss Dior", href: "/fragrances/dior-miss-dior" },
        { name: "Flowerbomb", href: "/fragrances/viktor-rolf-flowerbomb" },
        { name: "Kayali Vanilla", href: "/fragrances/kayali-vanilla-28" },
        { name: "Good Girl", href: "/fragrances/carolina-herrera-good-girl" },
      ],
    },
    Brands: {
      categories: [
        { name: "Shop All Brands", href: "/brands" },
        { name: "Middle Eastern", href: "/brands/middle-eastern" },
        { name: "European Luxury", href: "/brands/european" },
        { name: "American Classics", href: "/brands/american" },
      ],
      highlights: [
        { name: "Creed", href: "/brands/creed" },
        { name: "Tom Ford", href: "/brands/tom-ford" },
        { name: "Maison Francis Kurkdjian", href: "/brands/mfk" },
        { name: "Byredo", href: "/brands/byredo" },
      ],
      trending: [
        { name: "Lattafa", href: "/brands/lattafa" },
        { name: "Armaf", href: "/brands/armaf" },
        { name: "Montale", href: "/brands/montale" },
        { name: "Nasomatto", href: "/brands/nasomatto" },
      ],
    },
    Collections: {
      categories: [
        { name: "Shop All Collections", href: "/collections" },
        { name: "Seasonal Collections", href: "/collections/seasonal" },
        { name: "Limited Editions", href: "/collections/limited" },
        { name: "Gift Collections", href: "/collections/gifts" },
      ],
      highlights: [
        { name: "Oud Masters", href: "/collections/oud-masters" },
        { name: "Fresh Starts", href: "/collections/fresh-starts" },
        { name: "Evening Elegance", href: "/collections/evening-elegance" },
        { name: "Travel Size", href: "/collections/travel-size" },
      ],
      trending: [
        { name: "Best of 2025", href: "/collections/best-of-2025" },
        { name: "Customer Favorites", href: "/collections/favorites" },
        { name: "Most Gifted", href: "/collections/most-gifted" },
        { name: "Rising Stars", href: "/collections/rising-stars" },
      ],
    },
  };

  // Niche Houses organized like Nike's clean sections - alphabetically ordered
  const nicheBrands = {
    "Middle Eastern": [
      // Alphabetically organized A-Z
      {
        name: "Abdul Samad Al Qurashi",
        description: "Musk, Oud Muattar, Royal Blend",
        href: "/brands/asaq",
        country: "��",
      },
      {
        name: "Afnan",
        description: "Supremacy in Oud, 9PM",
        href: "/brands/afnan",
        country: "🇦🇪",
      },
      {
        name: "Ajmal",
        description: "Amber Wood, Evoke, Dahn Al Oudh",
        href: "/brands/ajmal",
        country: "🇦🇪",
      },
      {
        name: "Al Haramain",
        description: "Amber Oud Gold, Detour Noir",
        href: "/brands/al-haramain",
        country: "🇦🇪",
      },
      {
        name: "Al-Rehab",
        description: "Silver, Choco Musk",
        href: "/brands/al-rehab",
        country: "��",
      },
      {
        name: "Amouage",
        description: "Interlude Man, Reflection Man, Honour Woman",
        href: "/brands/amouage",
        country: "��",
      },
      {
        name: "Anfasic Dokhoon",
        description: "Ishq, Tharwah",
        href: "/brands/anfasic-dokhoon",
        country: "🇦🇪",
      },
      {
        name: "Arabian Oud",
        description: "Kalemat, Madawi, Resala",
        href: "/brands/arabian-oud",
        country: "🇸🇦",
      },
      {
        name: "Armaf",
        description: "Club de Nuit Intense Man, Milestone",
        href: "/brands/armaf",
        country: "🇦🇪",
      },
      {
        name: "Asgharali",
        description: "Classic Arabian Oud & Rose blends",
        href: "/brands/asgharali",
        country: "🇧🇭",
      },
      {
        name: "Atyab Al Marshoud",
        description: "Oud Marshoud",
        href: "/brands/atyab-al-marshoud",
        country: "🇰🇼",
      },
      {
        name: "Dar Hamad",
        description: "Luxury niche positioning",
        href: "/brands/dar-hamad",
        country: "🇰🇼",
      },
      {
        name: "Ghawali",
        description: "Oud Al Majlis",
        href: "/brands/ghawali",
        country: "🇦🇪",
      },
      {
        name: "Gissah",
        description: "Ghala, Arba Wardat",
        href: "/brands/gissah",
        country: "🇰🇼",
      },
      {
        name: "Hind Al Oud",
        description: "Pure Oud, Mukhalat Oud",
        href: "/brands/hind-al-oud",
        country: "🇦🇪",
      },
      {
        name: "Ibraq",
        description: "Signature Ouds",
        href: "/brands/ibraq",
        country: "🇸🇦",
      },
      {
        name: "Kayali",
        description: "Vanilla 28, Elixir 11, Eden Juicy Apple",
        href: "/brands/kayali",
        country: "🇦🇪",
      },
      {
        name: "Lattafa",
        description: "Oud for Glory, Khamrah, Qaed Al Fursan",
        href: "/brands/lattafa",
        country: "🇦🇪",
      },
      {
        name: "Nabeel",
        description: "Arab Tradition, Touch Me",
        href: "/brands/nabeel",
        country: "🇦🇪",
      },
      {
        name: "Ojar",
        description: "Infusion Velours, Ciel d'Orage",
        href: "/brands/ojar",
        country: "🇴🇲",
      },
      {
        name: "Osma",
        description: "Rich Arabian blends, modern niche",
        href: "/brands/osma",
        country: "🇦🇪",
      },
      {
        name: "Rasasi",
        description: "La Yuqawam, Hawas, Shuhrah",
        href: "/brands/rasasi",
        country: "🇦🇪",
      },
      {
        name: "Reef",
        description: "Reef Oud - Rising hype house",
        href: "/brands/reef",
        country: "🇦🇪",
      },
      {
        name: "Riff",
        description: "Oud & Amber blends, niche style",
        href: "/brands/riff",
        country: "🇦🇪",
      },
      {
        name: "Swiss Arabian",
        description: "Shaghaf Oud, Casablanca, Layali",
        href: "/brands/swiss-arabian",
        country: "🇦🇪",
      },
    ],
    European: [
      // Alphabetically organized A-Z
      {
        name: "Acqua di Parma",
        description: "Colonia, Essenza",
        href: "/brands/acqua-di-parma",
        country: "🇮🇹",
      },
      {
        name: "BDK Parfums",
        description: "Gris Charnel, Rouge Smoking",
        href: "/brands/bdk-parfums",
        country: "🇫🇷",
      },
      {
        name: "Clive Christian",
        description: "No.1, X for Men",
        href: "/brands/clive-christian",
        country: "��",
      },
      {
        name: "Creed",
        description: "Aventus, Green Irish Tweed, Silver Mountain Water",
        href: "/brands/creed",
        country: "��",
      },
      {
        name: "Escentric Molecules",
        description: "Molecule 01",
        href: "/brands/escentric-molecules",
        country: "��",
      },
      {
        name: "Ex Nihilo",
        description: "Fleur Narcotique",
        href: "/brands/ex-nihilo",
        country: "🇫🇷",
      },
      {
        name: "Floris London",
        description: "No.89, Honey Oud",
        href: "/brands/floris-london",
        country: "🇬🇧",
      },
      {
        name: "Histoires de Parfums",
        description: "1740 Marquis de Sade",
        href: "/brands/histoires-de-parfums",
        country: "🇫🇷",
      },
      {
        name: "J.F. Schwarzlose Berlin",
        description: "Altruist, Leder 6",
        href: "/brands/jf-schwarzlose",
        country: "��",
      },
      {
        name: "Jovoy Paris",
        description: "Private Label, Ambre Premier",
        href: "/brands/jovoy-paris",
        country: "🇫🇷",
      },
      {
        name: "Maison Crivelli",
        description: "Iris Malikhân, Hibiscus Mahajád",
        href: "/brands/maison-crivelli",
        country: "🇫🇷",
      },
      {
        name: "Maison Francis Kurkdjian",
        description: "Baccarat Rouge 540, Grand Soir",
        href: "/brands/mfk",
        country: "��",
      },
      {
        name: "Maison Martin Margiela",
        description: "By the Fireplace, Jazz Club",
        href: "/brands/maison-martin-margiela",
        country: "��",
      },
      {
        name: "Masque Milano",
        description: "L'Attesa, Russian Tea",
        href: "/brands/masque-milano",
        country: "🇮🇹",
      },
      {
        name: "Miller Harris",
        description: "Tea Tonique, La Fumée",
        href: "/brands/miller-harris",
        country: "��",
      },
      {
        name: "Nasomatto",
        description: "Black Afgano, Baraonda",
        href: "/brands/nasomatto",
        country: "��",
      },
      {
        name: "Parfums de Marly",
        description: "Layton, Herod, Pegasus",
        href: "/brands/parfums-de-marly",
        country: "��",
      },
      {
        name: "Penhaligon's",
        description: "Halfeti, Sartorial, Lord George",
        href: "/brands/penhaligons",
        country: "🇬🇧",
      },
      {
        name: "Profumum Roma",
        description: "Ambra Aurea, Acqua di Sale",
        href: "/brands/profumum-roma",
        country: "🇮🇹",
      },
      {
        name: "Roja Parfums",
        description: "Elysium, Enigma, Amber Aoud",
        href: "/brands/roja-parfums",
        country: "🇬🇧",
      },
      {
        name: "Serge Lutens",
        description: "Chergui, Ambre Sultan",
        href: "/brands/serge-lutens",
        country: "🇫🇷",
      },
      {
        name: "The House of Oud",
        description: "Almond Harmony, The Time",
        href: "/brands/the-house-of-oud",
        country: "🇳🇱",
      },
      {
        name: "Tiziana Terenzi",
        description: "Orion, Kirke, Cassiopea",
        href: "/brands/tiziana-terenzi",
        country: "🇮🇹",
      },
      {
        name: "Xerjoff",
        description: "Naxos, Erba Pura, Alexandria II",
        href: "/brands/xerjoff",
        country: "🇮🇹",
      },
    ],
    American: [
      // Alphabetically organized A-Z
      {
        name: "Byredo",
        description: "Gypsy Water, Bal d'Afrique",
        href: "/brands/byredo",
        country: "🇺🇸",
      },
      {
        name: "Le Labo",
        description: "Santal 33, Another 13",
        href: "/brands/le-labo",
        country: "🇺🇸",
      },
      {
        name: "Tom Ford",
        description: "Private Blend Collection",
        href: "/brands/tom-ford",
        country: "🇺🇸",
      },
    ],
  };

  const designerBrands = {
    "Middle Eastern": [
      // Middle Eastern designers typically overlap with niche in this market
      {
        name: "Arabian Luxury",
        description: "Premium oud collections",
        href: "/collections/arabian-luxury",
        country: "🇸🇦",
      },
      {
        name: "Gulf Heritage",
        description: "Traditional Middle Eastern scents",
        href: "/collections/gulf-heritage",
        country: "🇦🇪",
      },
      {
        name: "Oud Masters",
        description: "Curated oud selections",
        href: "/collections/oud-masters",
        country: "🇴🇲",
      },
    ],
    European: [
      // Alphabetically organized A-Z
      {
        name: "Bvlgari",
        description: "Aqva, Man in Black",
        href: "/brands/bvlgari",
        country: "🇮🇹",
      },
      {
        name: "Carolina Herrera",
        description: "CH Men Prive, Bad Boy, Good Girl",
        href: "/brands/carolina-herrera",
        country: "��",
      },
      {
        name: "Chanel",
        description: "Bleu de Chanel, No.5, Allure Homme Sport",
        href: "/brands/chanel",
        country: "🇫🇷",
      },
      {
        name: "Dior",
        description: "Sauvage, Homme Intense, Fahrenheit",
        href: "/brands/dior",
        country: "🇫🇷",
      },
      {
        name: "Dolce & Gabbana",
        description: "The One, Light Blue",
        href: "/brands/dolce-gabbana",
        country: "🇮🇹",
      },
      {
        name: "Giorgio Armani",
        description: "Acqua di Giò Profumo, Armani Code",
        href: "/brands/giorgio-armani",
        country: "🇮🇹",
      },
      {
        name: "Givenchy",
        description: "Gentleman, Pi",
        href: "/brands/givenchy",
        country: "🇫🇷",
      },
      {
        name: "Gucci",
        description: "Guilty, Envy, Mémoire d'une Odeur",
        href: "/brands/gucci",
        country: "��",
      },
      {
        name: "Guerlain",
        description: "Shalimar, Vetiver, L'Homme Idéal",
        href: "/brands/guerlain",
        country: "🇫🇷",
      },
      {
        name: "Hermès",
        description: "Terre d'Hermès, H24",
        href: "/brands/hermes",
        country: "🇫🇷",
      },
      {
        name: "Hugo Boss",
        description: "Boss Bottled, The Scent",
        href: "/brands/hugo-boss",
        country: "��",
      },
      {
        name: "Jean Paul Gaultier",
        description: "Le Male, Scandal",
        href: "/brands/jean-paul-gaultier",
        country: "🇫🇷",
      },
      {
        name: "Loewe",
        description: "Esencia, Solo Loewe",
        href: "/brands/loewe",
        country: "��",
      },
      {
        name: "Mugler",
        description: "A*Men, Angel, Alien",
        href: "/brands/mugler",
        country: "🇫🇷",
      },
      {
        name: "Paco Rabanne",
        description: "1 Million, Invictus, Phantom",
        href: "/brands/paco-rabanne",
        country: "��",
      },
      {
        name: "Prada",
        description: "L'Homme, Luna Rossa Carbon",
        href: "/brands/prada",
        country: "🇮🇹",
      },
      {
        name: "Valentino",
        description: "Uomo, Donna Born in Roma",
        href: "/brands/valentino",
        country: "🇮🇹",
      },
      {
        name: "Versace",
        description: "Eros, Dylan Blue, Pour Homme",
        href: "/brands/versace",
        country: "🇮🇹",
      },
      {
        name: "Yves Saint Laurent",
        description: "La Nuit de L'Homme, Kouros, Tuxedo",
        href: "/brands/ysl",
        country: "��",
      },
    ],
    American: [
      // Alphabetically organized A-Z
      {
        name: "Calvin Klein",
        description: "CK One, Eternity, Obsession",
        href: "/brands/calvin-klein",
        country: "🇺🇸",
      },
      {
        name: "Marc Jacobs",
        description: "Daisy, Perfect",
        href: "/brands/marc-jacobs",
        country: "🇺🇸",
      },
      {
        name: "Michael Kors",
        description: "Wonderlust, Gorgeous",
        href: "/brands/michael-kors",
        country: "🇺🇸",
      },
      {
        name: "Ralph Lauren",
        description: "Polo Blue, Romance",
        href: "/brands/ralph-lauren",
        country: "🇺🇸",
      },
    ],
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Main Navigation Items */}
        {Object.entries(navigationData).map(([mainCategory, sections]) => (
          <NavigationMenuItem
            key={mainCategory}
            className={"bg-transparent hover:bg-transparent"}
          >
            <NavigationMenuTrigger className="text-xs text-white font-medium hover:text-white !bg-transparent !hover:bg-transparent !focus:bg-transparent !active:bg-transparent">
              {mainCategory}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[700px]  p-8 bg-white poppins">
                <div className="grid grid-cols-3 gap-12">
                  {/* Categories Section */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold  font-outfit text-gray-900  mb-6">
                      {mainCategory}
                    </h3>
                    <div className="space-y-3">
                      {sections.categories.map((item) => (
                        <NavigationMenuLink key={item.name} asChild>
                          <Link
                            href={item.href}
                            className="block text-gray-600 hover:text-black text-[12px]  transition-colors py-2"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Section */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-900  font-outfit mb-6">
                      Highlights
                    </h3>
                    <div className="space-y-3">
                      {sections.highlights.map((item) => (
                        <NavigationMenuLink key={item.name} asChild>
                          <Link
                            href={item.href}
                            className="block text-gray-600 hover:text-black text-[12px]  transition-colors py-2"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>

                  {/* Trending Section */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold  font-outfit text-gray-900 mb-6">
                      Trending
                    </h3>
                    <div className="space-y-3">
                      {sections.trending.map((item) => (
                        <NavigationMenuLink key={item.name} asChild>
                          <Link
                            href={item.href}
                            className="block text-gray-600 hover:text-black text-[12px]  transition-colors py-2"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        {/* Sale Item */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/sale"
              className="text-xs font-medium text-white hover:text-white focus:text-white active:text-white !bg-transparent !hover:bg-transparent !focus:bg-transparent !active:bg-transparent px-4 py-2"
            >
              Sale
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default FragranceNavigationMenu;
