"use client";
import React, { useCallback, useState, forwardRef, useEffect } from "react";

// shadcn
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// utils
import { cn } from "@/lib/utils";

// assets
import { ChevronDown, CheckIcon, Globe } from "lucide-react";
import { CircleFlag } from "react-circle-flags";

// data
import { countries } from "country-data-list";

// Country shape (for documentation):
// {
//   alpha2: string,
//   alpha3: string,
//   countryCallingCodes: string[],
//   currencies: string[],
//   emoji?: string,
//   ioc: string,
//   languages: string[],
//   name: string,
//   status: string
// }

// Dropdown props shape (for documentation):
// {
//   options?: Country[],
//   onChange?: (country) => void,
//   defaultValue?: string,
//   disabled?: boolean,
//   placeholder?: string,
//   slim?: boolean
// }

const CountryDropdownComponent = (
  {
    options = countries.all.filter((country) => {
      // Show all major countries plus your delivery countries (52 total countries)
      const supportedCountries = [
        // Your 4 delivery countries
        "KE",
        "TZ",
        "UG",
        "EG",
        // The 48 countries from your reference list
        "AU",
        "AT",
        "BH",
        "BE",
        "BG",
        "CA",
        "HR",
        "CY",
        "CZ",
        "DK",
        "EE",
        "FI",
        "FR",
        "DE",
        "GR",
        "GG",
        "HK",
        "HU",
        "IN",
        "IE",
        "IT",
        "JP",
        "JE",
        "KW",
        "LA",
        "LV",
        "LT",
        "LU",
        "MT",
        "NL",
        "NZ",
        "NG",
        "NO",
        "OM",
        "PH",
        "PL",
        "PT",
        "RO",
        "SA",
        "SG",
        "SK",
        "SI",
        "SE",
        "CH",
        "TH",
        "AE",
        "GB",
        "US",
      ];
      return (
        supportedCountries.includes(country.alpha2) &&
        country.status !== "deleted"
      );
    }),
    onChange,
    defaultValue,
    disabled = false,
    placeholder = "Select a country",
    slim = false,
    ...props
  },
  ref
) => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  useEffect(() => {
    if (defaultValue) {
      const initialCountry = options.find(
        (country) => country.alpha3 === defaultValue
      );
      if (initialCountry) {
        setSelectedCountry(initialCountry);
      } else {
        // Reset selected country if defaultValue is not found
        setSelectedCountry(undefined);
      }
    } else {
      // Reset selected country if defaultValue is undefined or null
      setSelectedCountry(undefined);
    }
  }, [defaultValue, options]);

  const handleSelect = useCallback(
    (country) => {
      console.log("🌍 CountryDropdown value: ", country);
      setSelectedCountry(country);
      onChange?.(country);
      setOpen(false);
    },
    [onChange]
  );

  const triggerClasses = cn(
    "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md  bg-transparent !px-5 !py-2 text-xs  placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
    slim === true && "w-20"
  );

  return (
    <Popover open={open} className="rounded-none" onOpenChange={setOpen}>
      <PopoverTrigger
        ref={ref}
        className={triggerClasses}
        disabled={disabled}
        {...props}
      >
        {selectedCountry ? (
          <div className="flex items-center poppins flex-grow w-0 gap-2 overflow-hidden">
            <div className="inline-flex items-center justify-center w-4 h-4 shrink-0 overflow-hidden rounded-full">
              <CircleFlag
                countryCode={selectedCountry.alpha2.toLowerCase()}
                height={20}
              />
            </div>
            {slim === false && (
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                {selectedCountry.name}
              </span>
            )}
          </div>
        ) : (
          <span>{slim === false ? placeholder : <Globe className="w-4 h-4" />}</span>
        )}
        <ChevronDown size={16} />
      </PopoverTrigger>
      <PopoverContent
        collisionPadding={10}
        side="bottom"
        className="min-w-[--radix-popper-anchor-width] p-0"
      >
        <Command className="w-full max-h-[200px] sm:max-h-[270px]">
          <CommandList>
            <div className="sticky top-0 z-10 bg-popover">
              <CommandInput placeholder="Search country..." />
            </div>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {options
                .filter((x) => x.name)
                .map((option, key) => (
                  <CommandItem
                    className="flex items-center w-full gap-2"
                    key={key}
                    onSelect={() => handleSelect(option)}
                  >
                    <div className="flex flex-grow w-0 space-x-2 overflow-hidden">
                      <div className="inline-flex items-center justify-center w-4 h-4 shrink-0 overflow-hidden rounded-full">
                        <CircleFlag
                          countryCode={option.alpha2.toLowerCase()}
                          height={10}
                        />
                      </div>
                      <span className="overflow-hidden text-ellipsis text-xs whitespace-nowrap">
                        {option.name}
                      </span>
                    </div>
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4 shrink-0",
                        option.name === selectedCountry?.name
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

CountryDropdownComponent.displayName = "CountryDropdownComponent";

export const CountryDropdown = forwardRef(CountryDropdownComponent);
