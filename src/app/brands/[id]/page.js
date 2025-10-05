"use client";
import { FA_logo } from "@/app/assets/images/images";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { brandData, filterOptions } from "@/data/brandData";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Star, Heart, ShoppingCart } from "lucide-react";

const Brandpage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const brandId = params.id;
  const selectedLine = searchParams.get("line");

  const brand = brandData[brandId];
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    gender: [],
    category: [],
    concentration: [],
    size: [],
    season: [],
    occasions: [],
    longevity: [],
    projection: [],
    priceRange: [0, 200],
    bestsellers: false,
    inStock: false,
    giftable: false,
  });

  const itemsPerPage = 8; // 4 columns x 2 rows

  // Filter perfumes based on selected filters and line
  const filteredPerfumes = useMemo(() => {
    if (!brand) return [];

    return brand.perfumes.filter((perfume) => {
      // Line filter
      if (selectedLine && perfume.line !== selectedLine) return false;

      // Gender filter
      if (filters.gender.length > 0 && !filters.gender.includes(perfume.gender))
        return false;

      // Category filter
      if (
        filters.category.length > 0 &&
        !filters.category.includes(perfume.category)
      )
        return false;

      // Concentration filter
      if (
        filters.concentration.length > 0 &&
        !filters.concentration.includes(perfume.concentration)
      )
        return false;

      // Size filter
      if (filters.size.length > 0) {
        const sizeMatch = filters.size.some((size) => {
          const sizeNum = parseInt(size.replace("ml", ""));
          return perfume.size === sizeNum;
        });
        if (!sizeMatch) return false;
      }

      // Season filter
      if (filters.season.length > 0) {
        const seasonMatch = filters.season.some((season) =>
          perfume.season.includes(season)
        );
        if (!seasonMatch) return false;
      }

      // Occasions filter
      if (filters.occasions.length > 0) {
        const occasionMatch = filters.occasions.some((occasion) =>
          perfume.occasions.includes(occasion)
        );
        if (!occasionMatch) return false;
      }

      // Price range filter
      if (
        perfume.price < filters.priceRange[0] ||
        perfume.price > filters.priceRange[1]
      )
        return false;

      // Boolean filters
      if (filters.bestsellers && !perfume.isBestseller) return false;
      if (filters.inStock && !perfume.inStock) return false;
      if (filters.giftable && !perfume.isGiftable) return false;

      return true;
    });
  }, [brand, selectedLine, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredPerfumes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPerfumes = filteredPerfumes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleFilterChange = (filterType, value, checked = null) => {
    setFilters((prev) => {
      if (filterType === "priceRange") {
        return { ...prev, [filterType]: value };
      } else if (typeof checked === "boolean") {
        if (checked) {
          return { ...prev, [filterType]: [...prev[filterType], value] };
        } else {
          return {
            ...prev,
            [filterType]: prev[filterType].filter((item) => item !== value),
          };
        }
      } else {
        return { ...prev, [filterType]: value };
      }
    });
    setCurrentPage(1);
  };

  if (!brand) {
    return <div className="px-[5%] py-5">Brand not found</div>;
  }

  return (
    <div className="px-[5%] py-5 flex flex-col gap-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/brands">Brands</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{brand.name}</BreadcrumbPage>
          </BreadcrumbItem>
          {selectedLine && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {brand.lines.find((line) => line.id === selectedLine)?.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      {/* Brand Header */}
      <div className="flex items-center gap-4">
        <Image
          className="w-20 h-20 object-contain"
          src={FA_logo}
          alt={`${brand.name} logo`}
        />
        <div>
          <h1 className="text-3xl font-bold">
            {brand.name} {brand.country}
          </h1>
          <p className="text-gray-600">{brand.description}</p>
          <p className="text-sm text-gray-500">Founded: {brand.founded}</p>
        </div>
      </div>

      {/* Brand Lines */}
      <div className="flex flex-wrap gap-3">
        <Link href={`/brands/${brandId}`}>
          <Button
            variant={!selectedLine ? "default" : "outline"}
            className="rounded-full"
          >
            All Collections
          </Button>
        </Link>
        {brand.lines.map((line) => (
          <Link key={line.id} href={`/brands/${brandId}?line=${line.id}`}>
            <Button
              variant={selectedLine === line.id ? "default" : "outline"}
              className="rounded-full"
            >
              {line.name}
            </Button>
          </Link>
        ))}
      </div>

      <div className="flex gap-6">
        {/* Filter Sidebar */}
        <div className="w-72 space-y-6 bg-gray-50 p-4 rounded-lg h-fit">
          <h3 className="font-semibold text-lg">Filters</h3>

          {/* Gender Filter */}
          <div>
            <h4 className="font-medium mb-3">Gender</h4>
            <div className="space-y-2">
              {filterOptions.gender.map((gender) => (
                <div key={gender} className="flex items-center space-x-2">
                  <Checkbox
                    id={`gender-${gender}`}
                    checked={filters.gender.includes(gender)}
                    onCheckedChange={(checked) =>
                      handleFilterChange("gender", gender, checked)
                    }
                  />
                  <label htmlFor={`gender-${gender}`} className="text-sm">
                    {gender}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h4 className="font-medium mb-3">Category</h4>
            <div className="space-y-2">
              {filterOptions.category.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.category.includes(category)}
                    onCheckedChange={(checked) =>
                      handleFilterChange("category", category, checked)
                    }
                  />
                  <label htmlFor={`category-${category}`} className="text-sm">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Concentration Filter */}
          <div>
            <h4 className="font-medium mb-3">Concentration</h4>
            <div className="space-y-2">
              {filterOptions.concentration.map((conc) => (
                <div key={conc} className="flex items-center space-x-2">
                  <Checkbox
                    id={`conc-${conc}`}
                    checked={filters.concentration.includes(conc)}
                    onCheckedChange={(checked) =>
                      handleFilterChange("concentration", conc, checked)
                    }
                  />
                  <label htmlFor={`conc-${conc}`} className="text-sm">
                    {conc}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => handleFilterChange("priceRange", value)}
              max={200}
              min={0}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>

          {/* Boolean Filters */}
          <div>
            <h4 className="font-medium mb-3">Options</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bestsellers"
                  checked={filters.bestsellers}
                  onCheckedChange={(checked) =>
                    handleFilterChange("bestsellers", checked)
                  }
                />
                <label htmlFor="bestsellers" className="text-sm">
                  Bestsellers Only
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="inStock"
                  checked={filters.inStock}
                  onCheckedChange={(checked) =>
                    handleFilterChange("inStock", checked)
                  }
                />
                <label htmlFor="inStock" className="text-sm">
                  In Stock Only
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="giftable"
                  checked={filters.giftable}
                  onCheckedChange={(checked) =>
                    handleFilterChange("giftable", checked)
                  }
                />
                <label htmlFor="giftable" className="text-sm">
                  Giftable
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Results Count */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold">
              {filteredPerfumes.length}{" "}
              {filteredPerfumes.length === 1 ? "Fragrance" : "Fragrances"}
              {selectedLine &&
                ` in ${
                  brand.lines.find((line) => line.id === selectedLine)?.name
                }`}
            </h2>
          </div>

          {/* Perfume Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {paginatedPerfumes.map((perfume) => (
              <Link key={perfume.id} href={`/perfume/${perfume.id}`}>
                <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative mb-3">
                    <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Image</span>
                    </div>
                    {perfume.isBestseller && (
                      <Badge
                        className="absolute top-2 left-2"
                        variant="destructive"
                      >
                        Bestseller
                      </Badge>
                    )}
                    {perfume.isDiscounted && (
                      <Badge
                        className="absolute top-2 right-2"
                        variant="secondary"
                      >
                        Sale
                      </Badge>
                    )}
                    {!perfume.inStock && (
                      <Badge
                        className="absolute bottom-2 left-2"
                        variant="outline"
                      >
                        Out of Stock
                      </Badge>
                    )}
                  </div>

                  <h3 className="font-semibold text-sm mb-1">{perfume.name}</h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                    {perfume.description}
                  </p>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(perfume.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">
                        ({perfume.rating})
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">${perfume.price}</span>
                    <span className="text-xs text-gray-600">
                      {perfume.size}ml
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {perfume.gender}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {perfume.concentration}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button size="sm" className="flex-1 mr-2">
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add to Cart
                    </Button>
                    <Button size="sm" variant="outline">
                      <Heart className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>

                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brandpage;
