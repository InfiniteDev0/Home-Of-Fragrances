import axios from "axios";

/**
 * Currency conversion utilities
 */

// Cache for exchange rates (in-memory cache)
const exchangeRateCache = new Map();
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

// Common currency symbols - Enhanced for delivery countries and major markets
export const CURRENCY_SYMBOLS = {
  // Major international currencies
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  CAD: "C$",
  AUD: "A$",
  CHF: "CHF",
  CNY: "¥",

  // Delivery countries (Primary focus)
  KES: "KSh", // Kenya Shilling
  TZS: "TSh", // Tanzanian Shilling
  UGX: "USh", // Ugandan Shilling
  EGP: "E£", // Egyptian Pound

  // Middle East currencies (with Arabic symbols)
  AED: "د.إ", // UAE Dirham
  SAR: "ر.س", // Saudi Riyal
  QAR: "QAR",
  KWD: "KWD",
  BHD: "BHD",
  OMR: "OMR",

  // Other African currencies
  NGN: "₦",
  ZAR: "R",
  MAD: "MAD",
  TND: "TND",

  // Other major currencies
  INR: "₹",
  BRL: "R$",
  MXN: "$",
  RUB: "₽",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  PLN: "zł",
  CZK: "Kč",
  HUF: "Ft",
  RON: "lei",
  BGN: "лв",
  HRK: "kn",
  TRY: "₺",
  ILS: "₪",
  SGD: "S$",
  HKD: "HK$",
  TWD: "NT$",
  KRW: "₩",
  THB: "฿",
  MYR: "RM",
  IDR: "Rp",
  PHP: "₱",
  VND: "₫",
};

/**
 * Get cached exchange rate or fetch from API
 */
const getExchangeRate = async (from, to) => {
  if (from === to) return 1;

  const cacheKey = `${from}-${to}`;
  const cached = exchangeRateCache.get(cacheKey);

  // Check if we have a valid cached rate
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.rate;
  }

  try {
    // Using exchangerate-api.com (free tier: 1500 requests/month)
    const response = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/${from}`
    );

    const rate = response.data.rates[to];
    if (rate) {
      // Cache the rate
      exchangeRateCache.set(cacheKey, {
        rate,
        timestamp: Date.now(),
      });
      return rate;
    }
  } catch (error) {
    console.error("Failed to fetch exchange rate:", error);
  }

  // Fallback: return 1 if conversion fails
  return 1;
};

/**
 * Convert currency amount
 */
export const convertCurrency = async (amount, fromCurrency, toCurrency) => {
  try {
    const rate = await getExchangeRate(fromCurrency, toCurrency);
    return amount * rate;
  } catch (error) {
    console.error("Currency conversion failed:", error);
    return amount; // Return original amount if conversion fails
  }
};

/**
 * Format price with currency symbol
 */
export const formatPrice = (amount, currency, showCode = false) => {
  const symbol = CURRENCY_SYMBOLS[currency] || currency;
  const formattedAmount =
    typeof amount === "number"
      ? amount.toFixed(2)
      : parseFloat(amount).toFixed(2);

  // For currencies that typically show symbol after amount
  const suffixCurrencies = ["SEK", "NOK", "DKK", "PLN", "CZK", "HUF"];

  if (suffixCurrencies.includes(currency)) {
    return showCode
      ? `${formattedAmount} ${currency}`
      : `${formattedAmount} ${symbol}`;
  }

  return showCode
    ? `${currency} ${formattedAmount}`
    : `${symbol}${formattedAmount}`;
};

/**
 * Convert and format price
 */
export const convertAndFormatPrice = async (
  basePrice,
  baseCurrency = "USD",
  targetCurrency = "USD",
  showCode = false
) => {
  try {
    const convertedAmount = await convertCurrency(
      basePrice,
      baseCurrency,
      targetCurrency
    );
    return formatPrice(convertedAmount, targetCurrency, showCode);
  } catch (error) {
    console.error("Price conversion and formatting failed:", error);
    return formatPrice(basePrice, baseCurrency, showCode);
  }
};

/**
 * Get currency info by country code
 */
export const getCurrencyByCountry = (countryCode) => {
  const currencyMap = {
    // Your 4 delivery countries (Primary focus)
    KE: "KES", // Kenya
    TZ: "TZS", // Tanzania
    UG: "UGX", // Uganda
    EG: "EGP", // Egypt

    // The 48 countries from your reference with their currencies
    // USD countries (15 total)
    US: "USD", // United States
    AU: "USD", // Australia
    BH: "USD", // Bahrain
    CA: "USD", // Canada
    HK: "USD", // Hong Kong SAR
    IN: "USD", // India
    JP: "USD", // Japan
    KW: "USD", // Kuwait
    LA: "USD", // Laos
    NZ: "USD", // New Zealand
    NG: "USD", // Nigeria
    OM: "USD", // Oman
    PH: "USD", // Philippines
    SG: "USD", // Singapore
    TH: "USD", // Thailand

    // EUR countries (28 total)
    AT: "EUR", // Austria
    BE: "EUR", // Belgium
    BG: "EUR", // Bulgaria
    HR: "EUR", // Croatia
    CY: "EUR", // Cyprus
    CZ: "EUR", // Czechia
    DK: "EUR", // Denmark
    EE: "EUR", // Estonia
    FI: "EUR", // Finland
    FR: "EUR", // France
    DE: "EUR", // Germany
    GR: "EUR", // Greece
    HU: "EUR", // Hungary
    IE: "EUR", // Ireland
    IT: "EUR", // Italy
    LV: "EUR", // Latvia
    LT: "EUR", // Lithuania
    LU: "EUR", // Luxembourg
    MT: "EUR", // Malta
    NL: "EUR", // Netherlands
    NO: "EUR", // Norway
    PL: "EUR", // Poland
    PT: "EUR", // Portugal
    RO: "EUR", // Romania
    SK: "EUR", // Slovakia
    SI: "EUR", // Slovenia
    SE: "EUR", // Sweden
    CH: "EUR", // Switzerland

    // GBP countries (3 total)
    GB: "GBP", // United Kingdom
    GG: "GBP", // Guernsey
    JE: "GBP", // Jersey

    // Middle East currencies
    SA: "SAR", // Saudi Arabia (ر.س)
    AE: "AED", // UAE (د.إ)
    SA: "SAR",
    QA: "QAR",
    KW: "KWD",
    BH: "BHD",
    OM: "OMR",
    SG: "SGD",
    HK: "HKD",
    TW: "TWD",
    KR: "KRW",
    TH: "THB",
    MY: "MYR",
    ID: "IDR",
    PH: "PHP",
    VN: "VND",
  };

  return currencyMap[countryCode] || "KES"; // Default to Kenya Shilling
};

/**
 * Clear exchange rate cache
 */
export const clearExchangeRateCache = () => {
  exchangeRateCache.clear();
};

/**
 * Get popular currencies list
 */
/**
 * Get delivery countries currencies list (Primary focus)
 */
export const getDeliveryCountriesCurrencies = () => [
  { code: "KES", name: "Kenyan Shilling", symbol: "KSh", country: "Kenya" },
  {
    code: "TZS",
    name: "Tanzanian Shilling",
    symbol: "TSh",
    country: "Tanzania",
  },
  { code: "UGX", name: "Ugandan Shilling", symbol: "USh", country: "Uganda" },
  { code: "EGP", name: "Egyptian Pound", symbol: "E£", country: "Egypt" },
];

/**
 * Get popular international currencies list
 */
export const getPopularCurrencies = () => [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
  { code: "SAR", name: "Saudi Riyal", symbol: "ر.س" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
];

/**
 * Enhanced price conversion for delivery countries with proper rounding
 */
export const convertPriceForDeliveryCountry = async (
  basePrice,
  baseCurrency = "USD",
  targetCurrency = "KES"
) => {
  try {
    const deliveryCurrencies = ["KES", "TZS", "UGX", "EGP"];
    const convertedAmount = await convertCurrency(
      basePrice,
      baseCurrency,
      targetCurrency
    );

    // Apply proper rounding for delivery country currencies
    let roundedAmount;
    if (deliveryCurrencies.includes(targetCurrency)) {
      // Round to nearest 5 for African currencies (common pricing practice)
      roundedAmount = Math.ceil(convertedAmount / 5) * 5;
    } else {
      // Standard rounding for other currencies
      roundedAmount = Math.round(convertedAmount * 100) / 100;
    }

    return formatPrice(roundedAmount, targetCurrency);
  } catch (error) {
    console.error("Delivery country price conversion failed:", error);
    return formatPrice(basePrice, baseCurrency);
  }
};
