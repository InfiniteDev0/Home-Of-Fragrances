import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FA_logo_dark } from "../assets/images/images";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-black font-outfit text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Help */}
        <div>
          <h3 className="uppercase font-semibold mb-4 text-xs tracking-wide">
            Help
          </h3>
          <p className="mb-2">
            Our Client Advisors are available to assist you by phone at{" "}
            <a href="tel:+9718008848866" className="underline">
              +971 800 884 8866
            </a>
            ,<br />
            <a href="mailto:info@fragranceworld.ae" className="underline">
              email
            </a>{" "}
            or{" "}
            <a href="https://wa.me/9718008848866" className="underline">
              Whatsapp
            </a>
          </p>
          <ul className="space-y-2">
            <li>
              <a href="/help#FAQ" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/help#ProductCare" className="hover:underline">
                Product Care
              </a>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="uppercase font-semibold mb-4 text-xs tracking-wide">
            Services
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Shipment
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Personalization
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Art of Gifting
              </a>
            </li>
          </ul>
        </div>
        {/* About */}
        <div>
          <h3 className="uppercase font-semibold mb-4 text-xs tracking-wide">
            About Home of fragrances
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Our Values
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Arts & Culture
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Foundation History
              </a>
            </li>
          </ul>
        </div>
        {/* Connect */}
        <div>
          <h3 className="uppercase font-semibold mb-4 text-xs tracking-wide">
            Payment method
          </h3>
          <div className="mb-2">
            <ul className="flex items-center gap-2">
              <li className="border w-fit !px-2 rounded-sm border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill={"#000000"}
                  viewBox="0 0 24 24"
                >
                  {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                  <path d="M16.539 9.186a4.2 4.2 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.34.34 0 0 0-.149-.199 7 7 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69z"></path>
                </svg>
              </li>
              <li className="border w-fit !px-2 rounded-sm border-black">
                <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#000000"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M19.554 9.488q.18.844-.04 2.051-.873 4.467-5.683 4.466h-.442a.67.67 0 0 0-.444.166.72.72 0 0 0-.239.427l-.041.189-.553 3.479-.021.151a.7.7 0 0 1-.247.426.67.67 0 0 1-.447.166H8.874a.4.4 0 0 1-.331-.15.46.46 0 0 1-.09-.363q.09-.561.267-1.689.175-1.126.267-1.689c.092-.563.15-.938.272-1.685q.182-1.122.271-1.685.05-.371.433-.371h1.316q1.338.02 2.375-.211 1.758-.392 2.886-1.449 1.026-.956 1.56-2.473.241-.706.352-1.338.009-.062.025-.074.014-.016.035-.011a.4.4 0 0 1 .062.035c.524.398.854.941.98 1.632m-1.728-2.836q0 1.075-.465 2.374-.804 2.343-3.037 3.168-1.136.401-2.535.425 0 .008-.904.007l-.903-.007q-1.008-.001-1.187.964-.02.08-.855 5.329-.012.1-.121.102H4.854a.47.47 0 0 1-.369-.165.47.47 0 0 1-.115-.39L6.702 3.664a.78.78 0 0 1 .276-.483.79.79 0 0 1 .519-.19h6.014q.342 0 .979.131c.428.084.801.194 1.123.321q1.077.412 1.645 1.237t.568 1.972"></path></svg>
              </li>
              <li className="border w-fit !px-2 rounded-sm border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill={"#000000"}
                  viewBox="0 0 24 24"
                >
                  {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                  <path d="M16.539 9.186a4.2 4.2 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.34.34 0 0 0-.149-.199 7 7 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69z"></path>
                </svg>
              </li>
              <li className="border w-fit !px-2 rounded-sm border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill={"#000000"}
                  viewBox="0 0 24 24"
                >
                  {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                  <path d="M16.539 9.186a4.2 4.2 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.34.34 0 0 0-.149-.199 7 7 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69z"></path>
                </svg>
              </li>
              <li className="border w-fit !px-2 rounded-sm border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill={"#000000"}
                  viewBox="0 0 24 24"
                >
                  {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                  <path d="M16.539 9.186a4.2 4.2 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.34.34 0 0 0-.149-.199 7 7 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69z"></path>
                </svg>
              </li>
              <li className="border w-fit !px-2 rounded-sm border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill={"#000000"}
                  viewBox="0 0 24 24"
                >
                  {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                  <path d="M16.539 9.186a4.2 4.2 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.34.34 0 0 0-.149-.199 7 7 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69z"></path>
                </svg>
              </li>
            </ul>
          </div>
          <ul className="space-y-2">
            <li className="flex flex-col mt-5">
              <a
                href="#"
                className="uppercase font-semibold mb-4 text-xs tracking-wide"
              >
                Follow Us
              </a>
              <div className="flex items-center gap-2">
                <Link href={"/tiktok"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill={"#000000"}
                    viewBox="0 0 24 24"
                  >
                    {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 3 3 0 0 1 .88.13V9.4a7 7 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5 5 0 0 1-1-.1z"></path>
                  </svg>
                </Link>
                <Link href={"/insta"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill={"#000000"}
                    viewBox="0 0 24 24"
                  >
                    {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008M16.806 6.129a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156"></path>
                    <path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.61 4.61 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 2.99 2.99 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 2.99 2.99 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"></path>
                  </svg>
                </Link>
                <Link href={"/twitter"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill={"#000000"}
                    viewBox="0 0 24 24"
                  >
                    {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                    <path d="M13.68 10.62 20.24 3h-1.55L13 9.62 8.45 3H3.19l6.88 10.01L3.19 21h1.55l6.01-6.99 4.8 6.99h5.24l-7.13-10.38Zm-2.13 2.47-.7-1-5.54-7.93H7.7l4.47 6.4.7 1 5.82 8.32H16.3z"></path>
                  </svg>
                </Link>
                <Link href={"/facebook"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill={"#000000"}
                    viewBox="0 0 24 24"
                  >
                    {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22 22 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z"></path>
                  </svg>
                </Link>
                <Link href={"/Youtube"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill={"#000000"}
                    viewBox="0 0 24 24"
                  >
                    {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                    <path d="M21.593 7.203a2.5 2.5 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.52 2.52 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.996 15.005l.005-6 5.207 3.005z"></path>
                  </svg>
                </Link>
                <Link href={"/telegram"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill={"#000000"}
                    viewBox="0 0 24 24"
                  >
                    {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434"></path>
                  </svg>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Shipping & Language Bar */}
      <div className="border-t border-gray-200 py-4 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-xs">
        <div className="flex items-center gap-2">
          <span>Ship to :</span>
          <img
            src="https://www.svgrepo.com/show/242287/united-arab-emirates.svg"
            alt="UAE"
            className="w-5 h-5 inline-block"
          />
          <a href="#" className="underline ml-1">
            United Arab Emirates
          </a>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="#" className="underline">
            التبديل إلى اللغة العربية
          </a>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="border-t border-gray-200 py-6 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8 text-xs">
          <a href="#" className="hover:underline">
            Sitemap
          </a>
          <a href="#" className="hover:underline">
            Legal & privacy
          </a>
        </div>
        <div className="uppercase flex items-center gap-3 mt-4 md:mt-0 text-lg font-bold tracking-wide">
        <Image src={FA_logo_dark} className="w-8 h-10" alt="" />
          Home of fragrances
        </div>
      </div>
    </footer>
  );
};

export default Footer;
