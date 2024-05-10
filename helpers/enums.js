import {
  MdOutlinePersonOutline,
  MdLogout,
  MdOutlineShoppingBag,
} from 'react-icons/md';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { RiWallet3Line } from 'react-icons/ri';
import { PiBankDuotone } from 'react-icons/pi';
import { BiQrScan } from 'react-icons/bi';
import { TbShoppingCartCheck } from 'react-icons/tb';
import { DASHBOARD_ROUTES } from './routes';

export const S3_BASE_URL =
  'https://flaer-website-assets.s3.ap-south-1.amazonaws.com';

export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';

export const CAT_CODES = {
  CORE: 'F01',
  COVERINGS: 'F02',
};

export const MAX_UPI = 99999; //max transferable amount on UPI

// ! Change This
export const MIN_UPI = 0; //min transferable amount on UPI
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
    backgroundColor: '#2A254B',
    borderColor: '#000000',
    height: '100px',
  }),

  option: (provided) => ({
    ...provided,
    color: '#2A254B',
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
    icon: <RiWallet3Line />,
    id: 1,
  },

  {
    name: 'Partner & Partner Users',
    link: DASHBOARD_ROUTES.PARTNERS_AND_PARTNER_USERS_LIST,
    icon: <HiOutlineBanknotes />,
    id: 2,
  },

  {
    name: 'Sharable QR',
    link: DASHBOARD_ROUTES.ACCOUNT_RECHARGE,
    icon: <MdOutlinePersonOutline />,
    id: 3,
  },

  {
    name: 'Business Partner',
    link: DASHBOARD_ROUTES.UPDATE_BUSINESS_PARTNER,
    icon: <TbShoppingCartCheck />,
    id: 4,
  },
  {
    name: 'Order Level Discount',
    link: DASHBOARD_ROUTES.ORDER_LEVEL_DISCOUNTS,
    icon: <TbShoppingCartCheck />,
    id: 5,
  },
  {
    name: 'Ledgers',
    link: DASHBOARD_ROUTES.LEDGERS,
    icon: <TbShoppingCartCheck />,
    id: 6,
  },

  {
    name: 'Cashbacks Levels',
    link: DASHBOARD_ROUTES.CASHBACKS_LEVELS,
    icon: <TbShoppingCartCheck />,
    id: 7,
  },

  {
    name: 'Project and Site',
    link: DASHBOARD_ROUTES.PROJECT_AND_SITE,
    icon: <MdOutlineShoppingBag />,
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

// PAYMENT METHODS.

export const PAYMENT_METHODS = [
  {
    id: 2,
    title: 'Pay Using UPI',
    icon: <BiQrScan size={24} />,
    scrollId: '#upi',
  },
  {
    id: 1,
    title: 'Bank Transfer',
    icon: <PiBankDuotone size={28} />,
    scrollId: '#bank_transfer',
  },
];
