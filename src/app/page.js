import Hero from "./components/Hero";
import FeaturedCategories from "./components/FeaturedCategories";
import TrendingProducts from "./components/TrendingProducts";
import MiddleEasternFragrances from "./components/MiddleEasternFragrances";
import BrandSpotlight from "./components/BrandSpotlight";
import NewArrivals from "./components/NewArrivals";
import CollectionsBanner from "./components/CollectionsBanner";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      {/* <FeaturedCategories /> */}
      {/* <TrendingProducts />
      <MiddleEasternFragrances />
      <BrandSpotlight />
      <CollectionsBanner /> */}
      <NewArrivals />
    </div>
  );
}
