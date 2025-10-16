"use client";
import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input"; // shadcn/ui
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search, SearchIcon, X } from "lucide-react";
import { FA_logo_dark } from "@/app/assets/images/images";

// Sample data remains for demo purposes
const sampleFragrances = [
  /* ...your data... */
];
const trendingSearches = ["oud", "rose", "dior", "lattafa", "creed"];
const recentSearches = [
  "Dior Sauvage",
  "Chanel No. 5",
  "Tom Ford",
  "Creed Aventus",
];
const sampleNotes = ["Oud", "Rose", "Amber", "Vanilla", "Citrus", "Musk"];

const products = [
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

const SearchDropdown = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState([1990, 2025]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);

  // Lock body scroll when SearchDropdown is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      if (inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      return () => {
        document.body.style.overflow = prev || "";
      };
    }
    return;
  }, [isOpen]);

  // Debounced search
  useEffect(() => {
    if (!isOpen) return;
    setLoading(true);
    const timer = setTimeout(() => {
      // Simulate async search
      let filtered = products;
      if (searchQuery) {
        filtered = filtered.filter(
          (f) =>
            f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      setSearchResults(filtered);
      setLoading(false);
    }, 500); // 500ms debounce
    return () => clearTimeout(timer);
  }, [searchQuery, isOpen]);

  // Update suggestions as user types
  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }
    // Find matching product names (and optionally descriptions)
    const matches = products
      .map((p) => p.name)
      .filter((name) => name.toLowerCase().includes(searchQuery.toLowerCase()));
    // Add some demo suggestions (like "imagination parfum", etc.)
    let extra = [];
    if (matches.length) {
      extra = matches
        .map((name) => [name, `${name} parfum`, `${name} eau de parfum`])
        .flat();
    }
    // Only show unique suggestions
    setSuggestions([...new Set([...matches, ...extra])].slice(0, 5));
  }, [searchQuery]);

  // Keyboard navigation for suggestions
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (!suggestions.length) return;
      if (e.key === "ArrowDown") {
        setHighlightedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        e.preventDefault();
      } else if (e.key === "ArrowUp") {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        e.preventDefault();
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        setSearchQuery(suggestions[highlightedIndex]);
        setHighlightedIndex(-1);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [suggestions, highlightedIndex, isOpen]);

  // Reset highlight when suggestions change
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [suggestions]);

  // UI helper functions
  const toggleNote = (note) => {
    setSelectedNotes((prev) =>
      prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note]
    );
  };

  return (
    isOpen && (
      <div>
        {/* Desktop view */}
        <div className="fixed overflow-y-scroll inset-0 bg-white text-black backdrop-blur-3xl z-50 hidden md:flex flex-col !py-25 !px-5 !rounded-none !shadow-none">
          {/* Header */}
          <div className="flex items-center justify-end">
            <p
              className="!rounded-none flex items-center hover:text-gray-500 cursor-pointer gap-2 !pb-2 text-[12px] !shadow-none"
              onClick={onClose}
            >
              Close Search
              <X className="w-4 h-4" />
            </p>
          </div>
          {/* Search bar + trending */}
          <div className="max-w-4xl mx-auto w-full py-10">
            <form className="flex items-center gap-4 relative">
              <Input
                ref={inputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a Fragrances , Notes , Brand"
                className="border outline-none border-gray-600 text-lg font-extrabold tracking-wider px-6 py-4 !rounded-full !shadow-none pr-20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-24 top-1/2 text-sm -translate-y-1/2 text-black  font-extrabold px-2 py-1"
                  tabIndex={-1}
                >
                  Clear
                </button>
              )}
              <Button
                type="submit"
                variant="outline"
                className="!rounded-full w-10 h-10 text-black !shadow-none"
              >
                <Search className="w-5 h-5" />
              </Button>
            </form>
            {/* Live suggestions below input */}
            {searchQuery && suggestions.length > 0 && (
              <div className="bg-white border mt-2">
                {suggestions.map((sugg, idx) => {
                  // Highlight matched part
                  const i = sugg
                    .toLowerCase()
                    .indexOf(searchQuery.toLowerCase());
                  return (
                    <div
                      key={idx}
                      className={`flex items-center px-4 py-2 gap-2 border-b last:border-b-0 cursor-pointer ${
                        highlightedIndex === idx ? "bg-gray-100" : ""
                      }`}
                      onMouseEnter={() => setHighlightedIndex(idx)}
                      onMouseDown={() => {
                        setSearchQuery(sugg);
                        setHighlightedIndex(-1);
                      }}
                    >
                      <SearchIcon className="w-4 h-4 text-sm text-gray-500" />
                      <span className="text-sm">
                        {i >= 0 ? (
                          <>
                            <span className="font-semibold text-sm text-black">
                              {sugg.slice(0, i + searchQuery.length)}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {sugg.slice(i + searchQuery.length)}
                            </span>
                          </>
                        ) : (
                          sugg
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="max-w-7xl flex flex-col gap-4 mx-auto w-full !px-8">
            {/* Header: show number of results */}
            <p className="text-sm font-semibold">
              {searchQuery
                ? `${searchResults.length} search result${
                    searchResults.length !== 1 ? "s" : ""
                  }`
                : "Search results"}
            </p>
            {/* Loader */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-10">
                <Image
                  src={FA_logo_dark}
                  width={13}
                  height={13}
                  alt="Loading"
                  className="animate-spin"
                />
              </div>
            )}
            {/* No results */}
            {!loading && searchQuery && searchResults.length === 0 && (
              <div className="flex flex-col items-center justify-center py-10">
                <span className="text-lg font-semibold">
                  There are no items matching for "{searchQuery}"
                </span>
                <span className="text-sm text-gray-500 mt-2">
                  Try improving your results by double checking your spelling or
                  trying a more general keyword.
                </span>
                <div className="mt-4 flex gap-2 text-xs font-semibold">
                  TRENDING SEARCHES:
                  {trendingSearches.map((term) => (
                    <span key={term} className="px-2">
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Results */}
            {!loading && searchResults.length > 0 && (
              <>
                <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {searchResults.map((product, idx) => (
                    <div key={idx} className="flex flex-col gap-3 p-2 md:p-4">
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
                        <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                          {product.name}
                        </h1>
                        <p className="text-xs">{product.description}</p>
                        <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                          {product.price}$
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Recommended section */}
                <div className="mt-8">
                  <p className="text-sm font-semibold mb-2">Recommended</p>
                  <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {(() => {
                      // Find up to 5 recommended products by brand or notes
                      let recommended = [];
                      if (searchResults.length > 0) {
                        const brands = searchResults.map((p) => p.brand);
                        // If you want to use notes, add notes to product data and use similar logic
                        recommended = products
                          .filter(
                            (p) =>
                              brands.includes(p.brand) &&
                              !searchResults.some((s) => s.id === p.id)
                          )
                          .slice(0, 5);
                      }
                      return recommended.map((product, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col gap-3 p-2 md:p-4"
                        >
                          <div className="relative w-full dark:bg-white aspect-[3/4] overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h1 className="text-xs font-semibold line-clamp-2 leading-tight">
                              {product.name}
                            </h1>
                            <p className="text-xs">{product.description}</p>
                            <p className="flex items-center text-sm justify-between text-gray-700 font-semibold">
                              {product.price}$
                            </p>
                          </div>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Mobile view */}
        <div className="fixed inset-0 bg-black/90 text-white backdrop-blur-3xl z-50 flex flex-col !py-20 !px-4 !rounded-none !shadow-none md:hidden">
          {/* Header */}
          <div className="flex items-center justify-end mb-4">
            <button onClick={onClose} className="p-2">
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Search bar */}
          <form className="flex items-center gap-2 mb-4">
            <Input
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for product"
              className="border bg-white text-black  placeholder:text-black border-gray-300  px-4 py-2  !rounded-md h-[7vh] placeholder:text-[16px] !shadow-none"
            />
            <Button
              type="submit"
              variant="outline"
              className="!rounded-full w-9 h-9 text-black !shadow-none"
            >
              <Search className="w-4 h-4" />
            </Button>
          </form>
          {/* Trending searches */}
          <div className="mb-4">
            <span className="">Trending search</span>
            <ul className="flex flex-col  flex-wrap gap-2 mt-2">
              {trendingSearches.map((term) => (
                <li
                  key={term}
                  className="px-2 py-1 flex items-center gap-4 rounded text-sm "
                >
                  <div className="border border-gray-700 rounded-full p-3">
                    <SearchIcon className="w-4 h-4" />
                  </div>
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default SearchDropdown;
