import React from "react";
import { useRouter } from "next/navigation";
import { countryRegions } from "@/lib/countries";

const CountryDropdown = () => {
  const router = useRouter();

  const handleCountrySelect = (country) => {
    // Save to cookies
    document.cookie = `userCountry=${JSON.stringify({
      value: country,
      timestamp: new Date().toISOString(),
    })}; path=/; max-age=31536000`; // 1 year expiry

    // Redirect to country-specific homepage
    router.push(
      `/${country.lan.toLowerCase()}-${country.code.toLowerCase()}/homepage?dispatchCountry=${
        country.code
      }`
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Choose Your Country/Region
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {countryRegions.map((region) => (
            <div key={region.name} className="space-y-4">
              <h2 className="text-xl font-semibold">{region.name}</h2>
              <ul className="space-y-2">
                {region.countries.map((country) => (
                  <li key={country.code}>
                    <button
                      onClick={() => handleCountrySelect(country)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {country.name} ({country.lan.toUpperCase()})
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDropdown;
