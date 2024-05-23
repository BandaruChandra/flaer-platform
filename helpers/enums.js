import { MdLogout } from 'react-icons/md';
import { IoPeople, IoPerson } from 'react-icons/io5';
import { GiEarthAsiaOceania } from 'react-icons/gi';
import { HiOutlineQrCode } from 'react-icons/hi2';
import { BUSINESS_PARTNER_ROUTES, DASHBOARD_ROUTES } from './routes';

export const S3_BASE_URL =
  'https://flaer-website-assets.s3.ap-south-1.amazonaws.com';

export const NEXT_PUBLIC_API_ENDPOINT = `https://api.staging.flaerhomes.com`;

export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';

export const CAT_CODES = {
  CORE: 'F01',
  COVERINGS: 'F02',
};

export const MAX_UPI = 99999; //max transferable amount on UPI

// ! Change This
export const MIN_UPI = 1000; //min transferable amount on UPI
export const UPI_EXPIRY_TIME = 10; // 10 mins

export const FOOTER_ITEMS = {
  'CUSTOMER SERVICE': [
    'Help & FAQs',
    'Return & Refund',
    'Shipping Policy',
    'Customs and Taxes',
    'Customers’s Reviews',
  ],
  COMPANY: [
    'About Flaer Homes',
    'Contact Us',
    'Special Deals & Offers',
    'Terms of Service',
    'Privacy Policy',
  ],
  'HELP CENTER': [
    'Order Information',
    'Shipping Options',
    'International Shipping',
    'Payment Options',
  ],
  'RETURN & WARRANTY': [
    'Returns & Exchange Policy',
    'Returns Center',
    'Warranty Policy',
    'Warranty Registration',
  ],
};

export const CUSTOM_STYLES = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    height: 44,
    minHeight: 44,
  }),

  option: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#2A254B',
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#2A254B',
  }),

  singleValue: (provided) => {
    const transition = '300ms';

    return { ...provided, transition };
  },
};

export const OPTIONS_FOR_SORT = [
  { value: 'low_hight', label: ' Price: Low to High' },
  { value: 'high_low', label: ' Price: High to Low' },
  // { value: 'Default', label: 'Default' },
  // { value: 'Newest', label: 'Newest' },
];

export const DASHBOARD_MENU_LIST = [
  {
    name: 'Active Members',
    link: DASHBOARD_ROUTES.ACTIVE_MEMBERSHIPS_LIST,
    icon: <IoPeople />,
    id: 1,
  },

  // {
  //   name: 'Partner Users',
  //   link: DASHBOARD_ROUTES.PARTNER_USERS_LIST,
  //   icon: <HiOutlineBanknotes />,
  //   id: 2,
  // },

  {
    name: 'Business Partners',
    link: DASHBOARD_ROUTES.BUSINESS_PARTNERS,
    icon: <IoPerson />,
    id: 4,
  },

  // {
  //   name: 'Sharable QR',
  //   link: DASHBOARD_ROUTES.ACCOUNT_RECHARGE,
  //   icon: <HiOutlineQrCode />,
  //   id: 3,
  // },

  // {
  //   name: 'Order Level Discount',
  //   link: DASHBOARD_ROUTES.ORDER_LEVEL_DISCOUNTS,
  //   icon: <TbShoppingCartCheck />,
  //   id: 5,
  // },
  // {
  //   name: 'Ledgers',
  //   link: DASHBOARD_ROUTES.LEDGERS,
  //   icon: <TbShoppingCartCheck />,
  //   id: 6,
  // },

  // {
  //   name: 'Cashbacks Levels',
  //   link: DASHBOARD_ROUTES.CASHBACKS_LEVELS,
  //   icon: <TbShoppingCartCheck />,
  //   id: 7,
  // },

  {
    name: 'Projects and Sites',
    link: DASHBOARD_ROUTES.PROJECTS_AND_SITES,
    icon: <GiEarthAsiaOceania />,
    id: 8,
  },

  { name: 'Logout', link: DASHBOARD_ROUTES.LOGOUT, icon: <MdLogout />, id: 9 },
];

export const RESPONSE_STATUS = {
  VERIFIED: 'verified',
  SUCCESS: 'success',
  FAILURE: 'failure',
  PENDING: 'pending',
  INITIATED: 'initiated',
};

export const DELIVERY_STATUS = {
  CONFIRMED: 'confirmed',
  PACKED: 'packed',
  DISPATCHED: 'dispatched',
  DELIVERED: 'delivered',
  ALL: 'all',
};

export const DELIVERY_STATUS_OPTIONS = Object.values(DELIVERY_STATUS)?.map(
  (item) => {
    return { label: item, value: item };
  }
);

export const BUSINESS_PARTNER_MENU = [
  {
    name: 'Users',
    link: BUSINESS_PARTNER_ROUTES.USERS_LIST,
    id: 1,
  },

  {
    name: 'Recharge',
    link: BUSINESS_PARTNER_ROUTES.RECHARGE,
    id: 11,
  },

  {
    name: 'Account Details',
    link: BUSINESS_PARTNER_ROUTES.ACCOUNT_DETAILS,
    id: 2,
  },

  {
    name: 'Site Level Cashback',
    link: BUSINESS_PARTNER_ROUTES.SITE_LEVEL_CASHBACK,
    id: 4,
  },
  {
    name: 'Order Level Discount',
    link: BUSINESS_PARTNER_ROUTES.ORDER_LEVEL_DISCOUNT,
    id: 5,
  },
  {
    name: 'Membership Discount',
    link: BUSINESS_PARTNER_ROUTES.MEMBERSHIP_DISCOUNT,
    id: 6,
  },

  {
    name: 'Periodic Cashback',
    link: BUSINESS_PARTNER_ROUTES.PERIODIC_LEVEL_CASHBACK,
    id: 7,
  },
  {
    name: 'Loyalty Account',
    link: BUSINESS_PARTNER_ROUTES.LOYALTY_ACCOUNT,
    id: 8,
  },
  {
    name: 'Orders',
    link: BUSINESS_PARTNER_ROUTES.ORDERS,
    id: 9,
  },
  {
    name: 'Quotation',
    link: BUSINESS_PARTNER_ROUTES.QUOTATION,
    id: 10,
  },
];
