export type TButtonVariant =
  | "primary"
  | "danger"
  | "neutral"
  | "success"
  | "warning"

  | "accent-primary"
  | "accent-danger"
  | "accent-neutral"
  | "accent-success"
  | "accent-warning"

  | "outline-primary"
  | "outline-danger"
  | "outline-neutral"
  | "outline-success"
  | "outline-warning"

  | "link-primary"
  | "link-danger"
  | "link-neutral"
  | "link-success"
  | "link-warning";

export type TButtonSizes = "sm" | "md" | "lg" | "xl";

export interface IButtonStyling {
  [key: string]: {
    default: string;
    hover: string;
    pressed: string;
    disabled: string;
  };
}

enum buttonSizeStyling {
  sm = `px-3 py-1.5 font-medium text-xs rounded flex items-center gap-1.5 whitespace-nowrap transition-all justify-center`,
  md = `px-4 py-1.5 font-medium text-sm rounded flex items-center gap-1.5 whitespace-nowrap transition-all justify-center`,
  lg = `px-5 py-2 font-medium text-sm rounded flex items-center gap-1.5 whitespace-nowrap transition-all justify-center`,
  xl = `px-5 py-3.5 font-medium text-sm rounded flex items-center gap-1.5 whitespace-nowrap transition-all justify-center`,
}

enum buttonIconStyling {
  sm = "h-3 w-3 flex justify-center items-center overflow-hidden my-0.5 flex-shrink-0",
  md = "h-3.5 w-3.5 flex justify-center items-center overflow-hidden my-0.5 flex-shrink-0",
  lg = "h-4 w-4 flex justify-center items-center overflow-hidden my-0.5 flex-shrink-0",
  xl = "h-4 w-4 flex justify-center items-center overflow-hidden my-0.5 flex-shrink-0",
}

export const buttonStyling: IButtonStyling = {
  primary: {
    default: `text-white bg-custom-primary-100`,
    hover: `hover:bg-custom-primary-200`,
    pressed: `active:text-custom-brand-40 active:bg-custom-primary-200`,
    disabled: `cursor-not-allowed !bg-custom-primary-60 active:bg-custom-primary-60`,
  },
  danger: {
    default: `text-white bg-red-500`,
    hover: ` hover:bg-red-600`,
    pressed: `active:text-red-200 active:bg-red-600`,
    disabled: `cursor-not-allowed !bg-red-300`,
  },
  neutral: {
    default: `text-white bg-black shadow-sm`,
    hover: `hover:bg-gray-900`,
    pressed: `active:text-gray-100 active:shadow-none`,
    disabled: `cursor-not-allowed bg-gray-400 text-gray-600`,
  },
  success: {
    default: `text-white bg-[#1F7A1F]`,
    hover: `hover:bg-[#136C13] hover:text-gray-100`,
    pressed: `active:text-custom-brand-40 active:bg-custom-primary-200`,
    disabled: `cursor-not-allowed !bg-custom-primary-60 active:bg-custom-primary-60`,
  },
  warning: {
    default: `text-white bg-orange-500`,
    hover: `hover:bg-orange-600`,
    pressed: `active:text-gray-100 active:shadow-md`,
    disabled: `cursor-not-allowed bg-orange-300`,
  },

  "accent-primary": {
    default: `bg-custom-primary-100/10 text-custom-primary-100`,
    hover: `hover:bg-custom-primary-100/20 hover:text-custom-primary-200`,
    pressed: `active:bg-custom-primary-100/10`,
    disabled: `cursor-not-allowed !text-custom-primary-60`,
  },
  "accent-danger": {
    default: `text-red-500 bg-red-50`,
    hover: `hover:text-red-600 hover:bg-red-100`,
    pressed: `active:text-red-500 active:bg-red-100`,
    disabled: `cursor-not-allowed text-red-300`,
  },
  "accent-warning": {
    default: `bg-orange-100 text-orange-500`,
    hover: `hover:bg-orange-200 hover:text-orange-600`,
    pressed: `active:text-orange-500 shadow-sm`,
    disabled: `cursor-not-allowed bg-orange-50 text-orange-300`,
  },
  "accent-neutral": {
    default: `bg-gray-100 text-gray-600`,
    hover: `hover:bg-gray-200`,
    pressed: `active:text-gray-700`,
    disabled: `cursor-not-allowed text-gray-400 bg-gray-100`,
  },
  "accent-success": {
    default: `bg-green-100 text-green-600`,
    hover: `hover:bg-green-200 text-green-700`,
    pressed: `active:text-green-600`,
    disabled: `cursor-not-allowed text-green-400  bg-green-100`,
  },

  "outline-primary": {
    default: `text-blue-500 bg-transparent border border-blue-300`,
    hover: `hover:bg-blue-50 hover:border-blue-300`,
    pressed: `active:text-custom-primary-100 active:bg-blue-100`,
    disabled: `cursor-not-allowed text-blue-300 bg-blue-50`,
  },

  "outline-warning": {
    default: `text-orange-500 bg-transparent border border-orange-200`,
    hover: `hover:bg-orange-50 hover:border-orange-300`,
    pressed: ` active:text-orange-400`,
    disabled: `cursor-not-allowed text-orange-300 `,
  },
  "outline-danger": {
    default: `text-red-500 bg-custom-background-100 border border-red-200`,
    hover: `hover:bg-red-50 hover:border-red-300`,
    pressed: `active:text-red-400`,
    disabled: `cursor-not-allowed text-red-300`,
  },
  "outline-neutral": {
    default: `text-gray-800 border border-[#e4e4e7] bg-[#ffffff]`,
    hover: `hover:bg-gray-200`,
    pressed: `active:text-gray-700`,
    disabled: `cursor-not-allowed bg-[#f4f4f4] text-[#808080] `,
  },
  "outline-success": {
    default: `text-gray-800 border border-[#e4e4e7] bg-[#fff]`,
    hover: `hover:bg-gray-200`,
    pressed: `active:text-gray-700`,
    disabled: `cursor-not-allowed bg-[#f4f4f4] text-[#808080] `,
  },
  "link-primary": {
    default: `text-custom-primary-100 bg-custom-background-100`,
    hover: `hover:text-custom-primary-200  hover:underline`,
    pressed: `active:text-custom-primary-80 `,
    disabled: `cursor-not-allowed !text-custom-primary-60`,
  },

  "link-warning": {
    default: `text-custom-primary-100 bg-custom-background-100`,
    hover: `hover:text-custom-primary-200  hover:underline`,
    pressed: `active:text-custom-primary-80 `,
    disabled: `cursor-not-allowed !text-custom-primary-60`,
  },


  "link-danger": {
    default: `text-red-500 bg-custom-background-100`,
    hover: `hover:text-red-400  hover:underline`,
    pressed: `active:text-red-400`,
    disabled: `cursor-not-allowed !text-red-300`,
  },

  "link-neutral": {
    default: `text-custom-text-300`,
    hover: `hover:text-blue-500 hover:underline`,
    pressed: `active:text-blue-600`,
    disabled: `cursor-not-allowed !text-blue-400`,
  },


};

export const getButtonStyling = (variant: TButtonVariant, size: TButtonSizes, disabled: boolean = false): string => {
  let tempVariant: string = ``;
  const currentVariant = buttonStyling[variant];

  tempVariant = `${currentVariant.default} ${disabled ? currentVariant.disabled : currentVariant.hover} ${currentVariant.pressed
    }`;

  let tempSize: string = ``;
  if (size) tempSize = buttonSizeStyling[size];
  return `${tempVariant} ${tempSize}`;
};

export const getIconStyling = (size: TButtonSizes): string => {
  let icon: string = ``;
  if (size) icon = buttonIconStyling[size];
  return icon;
};
