import { z } from 'zod';

const revolutUuidRegex = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i);
const mccRegex = new RegExp(/^[0-9]{4}$/i);
const hexColorRegex = new RegExp(/^#([a-fA-F0-9]{6})$/i);
const lastFourRegex = new RegExp(/^[0-9]{4}$/i);
const revolutStandingOrderIdRegex = new RegExp(/^(EM_|)[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i);
const iso8601DurationRegex = new RegExp(/^P(?!$)(\d+(?:\.\d+)?Y)?(\d+(?:\.\d+)?M)?(\d+(?:\.\d+)?W)?(\d+(?:\.\d+)?D)?(T(?=\d)(\d+(?:\.\d+)?H)?(\d+(?:\.\d+)?M)?(\d+(?:\.\d+)?S)?)?$/i);
const iso8601ShortDate = new RegExp(/^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6]))))/i);
const feeBreakdownIdRegex = new RegExp(/^TXN:[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i);

enum CurrencyCode {
  USD = 'USD',
  CAD = 'CAD',
  EUR = 'EUR',
  AED = 'AED',
  AFN = 'AFN',
  ALL = 'ALL',
  AMD = 'AMD',
  ARS = 'ARS',
  AUD = 'AUD',
  AZN = 'AZN',
  BAM = 'BAM',
  BDT = 'BDT',
  BGN = 'BGN',
  BHD = 'BHD',
  BIF = 'BIF',
  BND = 'BND',
  BOB = 'BOB',
  BRL = 'BRL',
  BWP = 'BWP',
  BYN = 'BYN',
  BZD = 'BZD',
  CDF = 'CDF',
  CHF = 'CHF',
  CLP = 'CLP',
  CNY = 'CNY',
  COP = 'COP',
  CRC = 'CRC',
  CVE = 'CVE',
  CZK = 'CZK',
  DJF = 'DJF',
  DKK = 'DKK',
  DOP = 'DOP',
  DZD = 'DZD',
  EEK = 'EEK',
  EGP = 'EGP',
  ERN = 'ERN',
  ETB = 'ETB',
  GBP = 'GBP',
  GEL = 'GEL',
  GHS = 'GHS',
  GNF = 'GNF',
  GTQ = 'GTQ',
  HKD = 'HKD',
  HNL = 'HNL',
  HRK = 'HRK',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  INR = 'INR',
  IQD = 'IQD',
  IRR = 'IRR',
  ISK = 'ISK',
  JMD = 'JMD',
  JOD = 'JOD',
  JPY = 'JPY',
  KES = 'KES',
  KHR = 'KHR',
  KMF = 'KMF',
  KRW = 'KRW',
  KWD = 'KWD',
  KZT = 'KZT',
  LBP = 'LBP',
  LKR = 'LKR',
  LTL = 'LTL',
  LVL = 'LVL',
  LYD = 'LYD',
  MAD = 'MAD',
  MDL = 'MDL',
  MGA = 'MGA',
  MKD = 'MKD',
  MMK = 'MMK',
  MOP = 'MOP',
  MUR = 'MUR',
  MXN = 'MXN',
  MYR = 'MYR',
  MZN = 'MZN',
  NAD = 'NAD',
  NGN = 'NGN',
  NIO = 'NIO',
  NOK = 'NOK',
  NPR = 'NPR',
  NZD = 'NZD',
  OMR = 'OMR',
  PAB = 'PAB',
  PEN = 'PEN',
  PHP = 'PHP',
  PKR = 'PKR',
  PLN = 'PLN',
  PYG = 'PYG',
  QAR = 'QAR',
  RON = 'RON',
  RSD = 'RSD',
  RUB = 'RUB',
  RWF = 'RWF',
  SAR = 'SAR',
  SDG = 'SDG',
  SEK = 'SEK',
  SGD = 'SGD',
  SOS = 'SOS',
  SYP = 'SYP',
  THB = 'THB',
  TND = 'TND',
  TOP = 'TOP',
  TRY = 'TRY',
  TTD = 'TTD',
  TWD = 'TWD',
  TZS = 'TZS',
  UAH = 'UAH',
  UGX = 'UGX',
  UYU = 'UYU',
  UZS = 'UZS',
  VEF = 'VEF',
  VND = 'VND',
  XAF = 'XAF',
  XOF = 'XOF',
  YER = 'YER',
  ZAR = 'ZAR',
  ZMK = 'ZMK',
  ZWL = 'ZWL'
}
const CurrencyCodeEnum = z.nativeEnum(CurrencyCode);

enum CountryCode {
  Afghanistan = 'AF',
  AlandIslands = 'AX',
  Albania = 'AL',
  Algeria = 'DZ',
  AmericanSamoa = 'AS',
  Andorra = 'AD',
  Angola = 'AO',
  Anguilla = 'AI',
  Antarctica = 'AQ',
  AntiguaAndBarbuda = 'AG',
  Argentina = 'AR',
  Armenia = 'AM',
  Aruba = 'AW',
  Australia = 'AU',
  Austria = 'AT',
  Azerbaijan = 'AZ',
  Bahamas = 'BS',
  Bahrain = 'BH',
  Bangladesh = 'BD',
  Barbados = 'BB',
  Belarus = 'BY',
  Belgium = 'BE',
  Belize = 'BZ',
  Benin = 'BJ',
  Bermuda = 'BM',
  Bhutan = 'BT',
  Bolivia = 'BO',
  BonaireSintEustatiusSaba = 'BQ',
  BosniaAndHerzegovina = 'BA',
  Botswana = 'BW',
  BouvetIsland = 'BV',
  Brazil = 'BR',
  BritishIndianOceanTerritory = 'IO',
  BruneiDarussalam = 'BN',
  Bulgaria = 'BG',
  BurkinaFaso = 'BF',
  Burundi = 'BI',
  Cambodia = 'KH',
  Cameroon = 'CM',
  Canada = 'CA',
  CapeVerde = 'CV',
  CaymanIslands = 'KY',
  CentralAfricanRepublic = 'CF',
  Chad = 'TD',
  Chile = 'CL',
  China = 'CN',
  ChristmasIsland = 'CX',
  CocosKeelingIslands = 'CC',
  Colombia = 'CO',
  Comoros = 'KM',
  Congo = 'CG',
  CongoDemocraticRepublic = 'CD',
  CookIslands = 'CK',
  CostaRica = 'CR',
  CoteDIvoire = 'CI',
  Croatia = 'HR',
  Cuba = 'CU',
  Curaçao = 'CW',
  Cyprus = 'CY',
  CzechRepublic = 'CZ',
  Denmark = 'DK',
  Djibouti = 'DJ',
  Dominica = 'DM',
  DominicanRepublic = 'DO',
  Ecuador = 'EC',
  Egypt = 'EG',
  ElSalvador = 'SV',
  EquatorialGuinea = 'GQ',
  Eritrea = 'ER',
  Estonia = 'EE',
  Ethiopia = 'ET',
  FalklandIslands = 'FK',
  FaroeIslands = 'FO',
  Fiji = 'FJ',
  Finland = 'FI',
  France = 'FR',
  FrenchGuiana = 'GF',
  FrenchPolynesia = 'PF',
  FrenchSouthernTerritories = 'TF',
  Gabon = 'GA',
  Gambia = 'GM',
  Georgia = 'GE',
  Germany = 'DE',
  Ghana = 'GH',
  Gibraltar = 'GI',
  Greece = 'GR',
  Greenland = 'GL',
  Grenada = 'GD',
  Guadeloupe = 'GP',
  Guam = 'GU',
  Guatemala = 'GT',
  Guernsey = 'GG',
  Guinea = 'GN',
  GuineaBissau = 'GW',
  Guyana = 'GY',
  Haiti = 'HT',
  HeardIslandMcdonaldIslands = 'HM',
  HolySeeVaticanCityState = 'VA',
  Honduras = 'HN',
  HongKong = 'HK',
  Hungary = 'HU',
  Iceland = 'IS',
  India = 'IN',
  Indonesia = 'ID',
  Iran = 'IR',
  Iraq = 'IQ',
  Ireland = 'IE',
  IsleOfMan = 'IM',
  Israel = 'IL',
  Italy = 'IT',
  Jamaica = 'JM',
  Japan = 'JP',
  Jersey = 'JE',
  Jordan = 'JO',
  Kazakhstan = 'KZ',
  Kenya = 'KE',
  Kiribati = 'KI',
  Korea = 'KR',
  KoreaDemocraticPeoplesRepublic = 'KP',
  Kuwait = 'KW',
  Kyrgyzstan = 'KG',
  LaoPeoplesDemocraticRepublic = 'LA',
  Latvia = 'LV',
  Lebanon = 'LB',
  Lesotho = 'LS',
  Liberia = 'LR',
  LibyanArabJamahiriya = 'LY',
  Liechtenstein = 'LI',
  Lithuania = 'LT',
  Luxembourg = 'LU',
  Macao = 'MO',
  Macedonia = 'MK',
  Madagascar = 'MG',
  Malawi = 'MW',
  Malaysia = 'MY',
  Maldives = 'MV',
  Mali = 'ML',
  Malta = 'MT',
  MarshallIslands = 'MH',
  Martinique = 'MQ',
  Mauritania = 'MR',
  Mauritius = 'MU',
  Mayotte = 'YT',
  Mexico = 'MX',
  Micronesia = 'FM',
  Moldova = 'MD',
  Monaco = 'MC',
  Mongolia = 'MN',
  Montenegro = 'ME',
  Montserrat = 'MS',
  Morocco = 'MA',
  Mozambique = 'MZ',
  Myanmar = 'MM',
  Namibia = 'NA',
  Nauru = 'NR',
  Nepal = 'NP',
  Netherlands = 'NL',
  NewCaledonia = 'NC',
  NewZealand = 'NZ',
  Nicaragua = 'NI',
  Niger = 'NE',
  Nigeria = 'NG',
  Niue = 'NU',
  NorfolkIsland = 'NF',
  NorthernMarianaIslands = 'MP',
  Norway = 'NO',
  Oman = 'OM',
  Pakistan = 'PK',
  Palau = 'PW',
  PalestinianTerritory = 'PS',
  Panama = 'PA',
  PapuaNewGuinea = 'PG',
  Paraguay = 'PY',
  Peru = 'PE',
  Philippines = 'PH',
  Pitcairn = 'PN',
  Poland = 'PL',
  Portugal = 'PT',
  PuertoRico = 'PR',
  Qatar = 'QA',
  Reunion = 'RE',
  Romania = 'RO',
  RussianFederation = 'RU',
  Rwanda = 'RW',
  SaintBarthelemy = 'BL',
  SaintHelena = 'SH',
  SaintKittsAndNevis = 'KN',
  SaintLucia = 'LC',
  SaintMartin = 'MF',
  SaintPierreAndMiquelon = 'PM',
  SaintVincentAndGrenadines = 'VC',
  Samoa = 'WS',
  SanMarino = 'SM',
  SaoTomeAndPrincipe = 'ST',
  SaudiArabia = 'SA',
  Senegal = 'SN',
  Serbia = 'RS',
  Seychelles = 'SC',
  SierraLeone = 'SL',
  Singapore = 'SG',
  SintMaarten = 'SX',
  Slovakia = 'SK',
  Slovenia = 'SI',
  SolomonIslands = 'SB',
  Somalia = 'SO',
  SouthAfrica = 'ZA',
  SouthGeorgiaAndSandwichIsl = 'GS',
  SouthSudan = 'SS',
  Spain = 'ES',
  SriLanka = 'LK',
  Sudan = 'SD',
  Suriname = 'SR',
  SvalbardAndJanMayen = 'SJ',
  Swaziland = 'SZ',
  Sweden = 'SE',
  Switzerland = 'CH',
  SyrianArabRepublic = 'SY',
  Taiwan = 'TW',
  Tajikistan = 'TJ',
  Tanzania = 'TZ',
  Thailand = 'TH',
  TimorLeste = 'TL',
  Togo = 'TG',
  Tokelau = 'TK',
  Tonga = 'TO',
  TrinidadAndTobago = 'TT',
  Tunisia = 'TN',
  Turkey = 'TR',
  Turkmenistan = 'TM',
  TurksAndCaicosIslands = 'TC',
  Tuvalu = 'TV',
  Uganda = 'UG',
  Ukraine = 'UA',
  UnitedArabEmirates = 'AE',
  UnitedKingdom = 'GB',
  UnitedStates = 'US',
  UnitedStatesOutlyingIslands = 'UM',
  Uruguay = 'UY',
  Uzbekistan = 'UZ',
  Vanuatu = 'VU',
  Venezuela = 'VE',
  Vietnam = 'VN',
  VirginIslandsBritish = 'VG',
  VirginIslandsUS = 'VI',
  WallisAndFutuna = 'WF',
  WesternSahara = 'EH',
  Yemen = 'YE',
  Zambia = 'ZM',
  Zimbabwe = 'ZW',
}
const CountryCodeEnum = z.nativeEnum(CountryCode);

enum RevolutTransactionType {
  Topup = 'TOPUP',
  Transfer = 'TRANSFER',
  RevolutPayment = 'REV_PAYMENT',
  Exchange = 'EXCHANGE',
  Fee = 'FEE',
  Refund = 'REFUND',
  CardPayment = 'CARD_PAYMENT',
  CardRefund = 'CARD_REFUND',
  Atm = 'ATM',
  Reward = 'REWARD',
  Trade = 'TRADE'
}
const RevolutTransactionTypeEnum = z.nativeEnum(RevolutTransactionType);

enum RevolutTransactionState {
  Pending = 'PENDING',
  Completed = 'COMPLETED',
  Declined = 'DECLINED',
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Reverted = 'REVERTED',
  Cancelled = 'CANCELLED',
}
const RevolutTransactionStateEnum = z.nativeEnum(RevolutTransactionState);

enum RevolutTransactionTag {
  Shopping = 'shopping',
  Transfers = 'transfers',
  General = 'general',
  Restaurants = 'restaurants',
  Utilites = 'utilities',
  Travel = 'travel',
  Cash = 'cash',
  Services = 'services',
  Entertainment = 'entertainment',
  Groceries = 'groceries',
  Transport = 'transport',
  Refund = 'refund',
  Loan = 'loan',
  Salary = 'salary',
  Cashback = 'cashback',
  Health = 'health',
  Gift = 'gift',
  Wealth = 'wealth',
  Savings = 'savings',
}
const RevolutTransactionTagEnum = z.nativeEnum(RevolutTransactionTag);

enum RevolutAccountType {
  Current = 'CURRENT',
  Savings = 'SAVINGS',
  Investment = 'INVESTMENT',
}
const RevolutAccountTypeEnum = z.nativeEnum(RevolutAccountType);

const RevolutAccount = z.object({
  id: z.string().regex(revolutUuidRegex),
  type: (RevolutAccountTypeEnum),
});

enum RevolutTransactionSuggestionTypes {
  Faq = 'FAQ',
}
const RevolutTransactionSuggestionTypesEnum = z.nativeEnum(RevolutTransactionSuggestionTypes);

const RevolutTransactionSuggestion = z.object({
  type: RevolutTransactionSuggestionTypesEnum,
  payload: z.object({
    key: z.string()
  }),
});

const RevolutLocalisedDescriptionObject= z.object({
  key: z.string(),
  value: z.string(),
});

const RevolutLocalisedDescription = z.object({
  key: z.string(),
  params: z.array(RevolutLocalisedDescriptionObject),
});

enum TopupMethod {
  ExternalAccount = 'EXTERNAL_ACCOUNT',
  ExternalCard = 'EXTERNAL_CARD',
}
const TopupMethodEnum = z.nativeEnum(TopupMethod);

enum EntryMode {
  Manual = 'MANUAL',
  ApplePay = 'APPLE_PAY',
}
const EntryModeEnum = z.nativeEnum(EntryMode);

const HotelBooking = z.object({
  id: z.string().regex(revolutUuidRegex)
});

enum RevolutMerchantScheme {
  Visa = 'VISA',
  Mastercard = 'MASTERCARD',
}
const RevolutMerchantSchemeEnum = z.nativeEnum(RevolutMerchantScheme);

enum StandingOrderType {
  ExternalMandate = 'EXTERNAL_MANDATE',
  External = 'EXTERNAL',
  Internal = 'INTERNAL',
}
const StandingOrderTypeEnum = z.nativeEnum(StandingOrderType);

enum Direction {
  Sell = 'sell',
  Buy = 'buy',
}
const DirectionEnum = z.nativeEnum(Direction);

const StandingOrder = z.object({
  id: z.string().regex(revolutStandingOrderIdRegex),
  period: z.string().regex(iso8601DurationRegex).optional(),
  startDate: z.string().regex(iso8601ShortDate),
  nextDate: z.string().regex(iso8601ShortDate).optional(),
  type: StandingOrderTypeEnum,
  recurring: z.boolean().optional(),
  estimated: z.boolean().optional(),
});

const BillMoneyBox = z.object({
  id: z.string().regex(revolutUuidRegex),
});

const RevolutMerchant = z.object({
  id: z.string(),
  merchantId: z.string().regex(revolutUuidRegex).optional(),
  scheme: RevolutMerchantSchemeEnum.optional(),
  name: z.string(),
  mcc: z.string().regex(mccRegex),
  category: RevolutTransactionTagEnum,
  address: z.string().optional(),
  city: z.string(),
  state: z.string().optional(),
  postcode: z.string().optional(),
  country: CountryCodeEnum.optional(),
  logo: z.string().optional(),
  bgColor: z.string().regex(hexColorRegex).optional(),
});

const RevolutCounterpart = z.object({
  amount: z.number().int(),
  currency: CurrencyCodeEnum,
});

const RevolutCard = z.object({
  id: z.string().regex(revolutUuidRegex),
  lastFour: z.string().regex(lastFourRegex),
  label: z.string().optional(),
  disposable: z.boolean(),
  credit: z.boolean(),
  pro: z.boolean(),
});

const RevolutRatings = z.object({
  userRating: z.number().int(),
});

const FeesBreakdown = z.union([
  z.object({
    fx: z.number().int(),
  }),
  z.object({
    fxWeekend: z.object({
      fee: z.number().int(),
      percent: z.number().int(),
    }),
  }),
  z.object({
    transfer: z.number().int(),
  }),
]);

const Profusion = z.object({
  holdingId: z.string().regex(revolutUuidRegex),
});

enum FraudState {
  Justified = 'JUSTIFIED'
}
const FraudStateEnum = z.nativeEnum(FraudState);

const AccountHolder = z.object({
  id: z.string().regex(revolutUuidRegex),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  country: CountryCodeEnum.optional(),
  code: z.string().optional(),
  username: z.string().optional(),
  phone: z.string().optional(),
  account: RevolutAccount.optional(),
});

const Beneficiary = z.union([
  z.object({
    id: z.string().regex(revolutUuidRegex),
    country: CountryCodeEnum,
    logo: z.string(),
  }),
  z.object({
    name: z.string(),
    phone: z.string().optional(),
  }),
  z.object({}),
])

const MoneyRequest = z.object({
  id: z.string().regex(revolutUuidRegex),
});

const Vault = z.object({
  id: z.string().regex(revolutUuidRegex),
});

const StopOrder = z.object({
  id: z.string().regex(revolutUuidRegex),
});

enum CardOwnerState {
  Active = 'ACTIVE'
}
const CardOwnerStateEnum = z.nativeEnum(CardOwnerState);

enum CardOwneType {
  Other = 'OTHER'
}
const CardOwneTypeEnum = z.nativeEnum(CardOwneType);

const CardOwnerCard = z.object({
  lastFour: z.string().regex(lastFourRegex),
  billingCurrency: CurrencyCodeEnum,
  scheme: RevolutMerchantSchemeEnum,
  issuerName: z.string(),
  issuerCountry: CountryCodeEnum,
  entryMode: EntryModeEnum,
  token: z.string().regex(revolutUuidRegex),
  city: z.string(),
  logoUrl: z.string(),
});

const CardOwner = z.object({
  id: z.string().regex(revolutUuidRegex),
  firstName: z.string(),
  lastName: z.string(),
  createdDate: z.number().int().positive(),
  state: CardOwnerStateEnum,
  ownerId: z.string().regex(revolutUuidRegex),
  type: CardOwneTypeEnum,
  email: z.string(),
  card: CardOwnerCard,
});

const AmountBreakdown = z.object({
  originalAmount: z.number().int(),
  originalCurrency: CurrencyCodeEnum,
  surchargeAmount: z.number().int(),
  surchargeCurrency: CurrencyCodeEnum,
});

export const RevolutTransactionBase = z.object({
  id: z.string().regex(revolutUuidRegex),
  legId: z.string().regex(revolutUuidRegex),
  type: RevolutTransactionTypeEnum,
  state: RevolutTransactionStateEnum,
  startedDate: z.number().int().positive(),
  updatedDate: z.number().int().positive(),
  createdDate: z.number().int().positive(),
  currency: CurrencyCodeEnum,
  amount: z.number().int(),
  fee: z.number().int(),
  tag: RevolutTransactionTagEnum,
  category: z.string(),
  account: RevolutAccount,
  suggestions: z.array(RevolutTransactionSuggestion),
  localisedDescription: RevolutLocalisedDescription,
  completedDate: z.number().int().positive().optional(), // Not present in a DECLINED transaction
  balance: z.number().int().optional(), // Not present in a DECLINED transaction
});
export type RevolutTransactionBase = z.infer<typeof RevolutTransactionBase>;

export const RevolutTopupTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.Topup),
  description: z.string(),
  comment: z.string().optional(),
  topupMethod: TopupMethodEnum,
  logo: z.string().optional(),
  reason: z.string().optional(),
  entryMode: EntryModeEnum.optional(),
});
export type RevolutTopupTransaction = z.infer<typeof RevolutTopupTransaction>;

export const RevolutTransferTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.Transfer),
  description: z.string().optional(),
  comment: z.string().optional(),
  standingOrder: StandingOrder.optional(),
  billMoneyBox: BillMoneyBox.optional(),
  rate: z.number().positive(),
  recipient: AccountHolder.optional(),
  sender: AccountHolder.optional(),
  countryCode: CountryCodeEnum.optional(),
  beneficiary: Beneficiary.optional(),
  reason: z.string().optional(),
  moneyRequest: MoneyRequest.optional(),
  vault: Vault.optional(),
  logo: z.string().optional(),
  cardOwner: CardOwner.optional(),
  transferLinkId: z.string().optional(),
  gif: z.string().optional(),
  counterpart: RevolutCounterpart.optional(),
  rejectComment: z.string().optional(),
  feesBreakdown: FeesBreakdown.optional(),
  profusion: Profusion.optional(),
  moneyBoxId: z.string().regex(revolutUuidRegex).optional(),
});
export type RevolutTransferTransaction = z.infer<typeof RevolutTransferTransaction>;

export const RevolutRevolutPaymentTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.RevolutPayment),
  description: z.string(),
  rate: z.number().positive(),
  merchant: RevolutMerchant,
  counterpart: RevolutCounterpart,
  ratings: RevolutRatings,
  hotelBooking: HotelBooking.optional(),
  comment: z.string().optional(),
});
export type RevolutRevolutPaymentTransaction = z.infer<typeof RevolutTransferTransaction>;

export const RevolutExchangeTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.Exchange),
  description: z.string(),
  feeBreakdownId: z.string().regex(feeBreakdownIdRegex),
  rate: z.number(),
  direction: DirectionEnum,
  counterpart: RevolutCounterpart,
  stopOrder: StopOrder.optional(),
});
export type RevolutExchangeTransaction = z.infer<typeof RevolutExchangeTransaction>;

export const RevolutFeeTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.Fee),
  description: z.string(),
  countryCode: CountryCodeEnum,
  loungePassIds: z.array(z.string().regex(revolutUuidRegex)).optional(),
});
export type RevolutFeeTransaction = z.infer<typeof RevolutCardPaymentTransaction>;

export const RevolutRefundTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.Refund),
  description: z.string(),
});
export type RevolutRefundTransaction = z.infer<typeof RevolutCardPaymentTransaction>;

export const RevolutCardRefundTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.CardRefund),
  description: z.string(),
  countryCode: CountryCodeEnum.optional(),
  counterpart: RevolutCounterpart,
  relatedTransactionId: z.string().regex(revolutUuidRegex).optional(),
  logo: z.string().optional(),
});
export type RevolutCardRefundTransaction = z.infer<typeof RevolutCardRefundTransaction>;

export const RevolutCardPaymentTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.CardPayment),
  description: z.string(),
  countryCode: CountryCodeEnum.optional(),
  rate: z.number(),
  merchant: RevolutMerchant,
  counterpart: RevolutCounterpart,
  card: RevolutCard,
  ratings: RevolutRatings,
  eCommerce: z.boolean().optional(),
  chargebackEligible: z.boolean(),
  logo: z.string().optional(),
  cardVerification: z.boolean().optional(),
  feesBreakdown: FeesBreakdown.optional(),
  comment: z.string().optional(),
  reason: z.string().optional(),
  fraudState: FraudStateEnum.optional(),
  posTime: z.number().int().positive().optional(),
});
export type RevolutCardPaymentTransaction = z.infer<typeof RevolutCardPaymentTransaction>;

export const RevolutAtmTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.Atm),
  description: z.string(),
  rate: z.number().positive(),
  merchant: RevolutMerchant,
  counterpart: RevolutCounterpart,
  card: RevolutCard,
  ratings: RevolutRatings,
  chargebackEligible: z.boolean(),
  feesBreakdown: FeesBreakdown.optional(),
  amountBreakdown: AmountBreakdown.optional(),
  comment: z.string().optional(),
  reason: z.string().optional(),
  posTime: z.number().int().positive().optional(),
});
export type RevolutAtmTransaction = z.infer<typeof RevolutCardPaymentTransaction>;

export const RevolutRewardTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.Reward),
  description: z.string(),
  relatedTransactionId: z.string().regex(revolutUuidRegex),
  cashbackBoxId: z.string().regex(revolutUuidRegex).optional(),
  hotelBooking: HotelBooking.optional(),
  comment: z.string().optional(),
  userOfferId: z.string().regex(revolutUuidRegex).optional(),
});
export type RevolutRewardTransaction = z.infer<typeof RevolutCardPaymentTransaction>;

export const RevolutTradeTransaction = RevolutTransactionBase.extend({
  type: z.literal(RevolutTransactionType.Trade),
  description: z.string(),
  profusion: Profusion.optional(),
});
export type RevolutTradeTransaction = z.infer<typeof RevolutCardPaymentTransaction>;

export const RevolutTransaction = z.union([
  RevolutTopupTransaction,
  RevolutTransferTransaction,
  RevolutRevolutPaymentTransaction,
  RevolutExchangeTransaction,
  RevolutFeeTransaction,
  RevolutRefundTransaction,
  RevolutCardPaymentTransaction,
  RevolutCardRefundTransaction,
  RevolutAtmTransaction,
  RevolutRewardTransaction,
  RevolutTradeTransaction,
]);
export type RevolutTransaction = z.infer<typeof RevolutTransaction>;

export const RevolutTransactions = z.array(RevolutTransaction);
export type RevolutTransactions = z.infer<typeof RevolutTransactions>;