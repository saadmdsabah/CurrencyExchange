const currencyCodes = {
  USD: "Dollar",
  AED: "Dirham",
  AFN: "Afghani",
  ALL: "Lek",
  AMD: "Dram",
  ANG: "Guilder",
  AOA: "Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Florin",
  AZN: "Azerbaijanian Manat",
  BAM: "Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Ngultrum",
  BWP: "Pula",
  BYN: "Belarusian Ruble",
  BZD: "Belize Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLP: "Chilean Peso",
  CNY: "Yuan",
  COP: "Colombian Peso",
  CRC: "Costa Rican Colón",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  FOK: "Faroese Króna",
  GBP: "Pound Sterling",
  GEL: "Lari",
  GGP: "Guernsey Pound",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel",
  IMP: "Isle of Man Pound",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Króna",
  JEP: "Jersey Pound",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KID: "Kiribati Dollar",
  KMF: "Comorian Franc",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Cayman Islands Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Lesotho Loti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanmar Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRU: "Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NIO: "Nicaraguan Córdoba",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Riyal",
  SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLE: "Sierra Leonean Leone",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SSP: "South Sudanese Pound",
  STN: "São Tomé and Príncipe Dobra",
  SYP: "Syrian Pound",
  SZL: "Swazi Lilangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Paʻanga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TVD: "Tuvaluan Dollar",
  TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistani Som",
  VES: "Venezuelan Bolívar",
  VND: "Vietnamese Dong",
  VUV: "Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "Central African CFA Franc",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "West African CFA Franc",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
  ZWL: "Zimbabwean Dollar",
};

// Function to populate dropdowns
function populateDropdowns() {
  const fromSelect = document.getElementById("from");
  const toSelect = document.getElementById("to");
  const baseCurrSelect = document.getElementById("baseCurr");

  Object.entries(currencyCodes).forEach(([code, name]) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = `${code} - ${name}`;

    fromSelect.appendChild(option.cloneNode(true));
    toSelect.appendChild(option.cloneNode(true));
    baseCurrSelect.appendChild(option.cloneNode(true));
  });
}

// Initialize dropdowns
document.addEventListener("DOMContentLoaded", populateDropdowns);

//Getting main form element
const button = document.getElementById("submitButton");
const amountInput = document.getElementById("amount");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");

//Getting two main buttons
const exchangeButtonEl = document.getElementById("exchangeRateButton");
const convertButtonEl = document.getElementById("convertButton");

//Getting the main div's
const convertMainDiv = document.getElementById("converterMainDiv");
const exchangeRateDiv = document.getElementById("exchangeRatedDiv");

//Getting exchange rate elements
const baseCurrEl = document.getElementById("baseCurr");
const getExchangeRatesEl = document.getElementById("getExchangeRates");

//Getting result Div for exchange
const exchangeResultDivEl = document.getElementById("exchangeResultDiv");
const exchangeResEl = document.getElementById("exchangeRes");

const url =
  "https://v6.exchangerate-api.com/v6/3939b40eeff1f58d34bbd92f/latest/USD";
const fetchData = async () => {
  try {
    let result = await axios.get(url);
    const currencyObject = result.data.conversion_rates;
    return currencyObject;
  } catch (error) {
    console.log(error.message);
  }
};

amountInput.addEventListener("blur", () => {
  const value = amountInput.value;
  if (isNaN(value) || value === "") {
    amountInput.classList.toggle("redBorder", true);
  } else {
    amountInput.classList.toggle("redBorder", false);
  }
});

convertButtonEl.addEventListener("click", () => {
  convertMainDiv.style.display = "block";
  exchangeRateDiv.style.display = "none";
});

exchangeButtonEl.addEventListener("click", () => {
  exchangeRateDiv.style.display = "block";
  convertMainDiv.style.display = "none";
});

getExchangeRatesEl.addEventListener("click", async () => {
  exchangeResEl.innerHTML = "";
  const value = baseCurrEl.value;
  const data = await fetchData();
  const baseValue = data[value];
  exchangeResEl.innerHTML = "";
  Object.keys(data).forEach((key) => {
    const conValue = data[key] / baseValue;
    const temp = document.createTextNode(`${key} : ${conValue.toFixed(4)}`);
    exchangeResEl.appendChild(temp);
    exchangeResEl.appendChild(document.createElement("br"));
  });
});

button.addEventListener("click", async () => {
  const amountToConvert = amountInput.value;
  const fromInputCl = fromInput.value;
  const toInputCl = toInput.value;
  const data = await fetchData();
  
  exchangeResultDivEl.innerHTML = "";
  const fromCurrencyValue = data[fromInputCl];
  const toCurrencyValue = data[toInputCl];

  const result = (
    (amountToConvert / fromCurrencyValue) *
    toCurrencyValue
  ).toFixed(3);
  const h2Element = document.createElement("h2");
  h2Element.textContent = "The Result is " + result + " " + toInputCl;
  exchangeResultDivEl.appendChild(h2Element);
});
