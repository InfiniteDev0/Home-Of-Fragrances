// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { getCookie } from "@/lib/cookies";
// import { getCountryFromLocale } from "@/lib/countries";

// export default function RegionalRedirect() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const country = getCookie("country");

//     if (!country) {
//       router.push("/dispatch?noDRP=true");
//       return;
//     }

//     // Get current locale from URL (first path segment)
//     const urlParts = pathname.split("/");
//     const currentLocale = urlParts[1];

//     // Check if the locale matches the country
//     const countryData = getCountryFromLocale(currentLocale);

//     if (countryData?.code !== country) {
//       // Need to redirect to correct locale path
//       const newLocale = `${
//         countryData.defaultLanguage
//       }-${country.toLowerCase()}`;
//       const newPath = `/${newLocale}/homepage`;
//       router.push(newPath);
//     } else {
//       setIsLoading(false);
//     }
//   }, [pathname, router]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return null;
// }
