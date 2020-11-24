import { theme } from "@chakra-ui/core";

const customIcons = {
  location: {
    path: (
      <g clip-path="url(#clip0)">
        <path
          d="M8.65783 7.50218C9.77179 7.50218 10.678 6.59572 10.678 5.48205C10.678 4.36838 9.77179 3.46191 8.65783 3.46191C7.54387 3.46191 6.6377 4.36838 6.6377 5.48205C6.6377 6.59572 7.54387 7.50218 8.65783 7.50218ZM8.65783 4.0391C9.45347 4.0391 10.1008 4.6864 10.1008 5.48205C10.1008 6.27769 9.45347 6.925 8.65783 6.925C7.86219 6.925 7.21488 6.27769 7.21488 5.48205C7.21488 4.6864 7.86219 4.0391 8.65783 4.0391Z"
          fill="currentColor"
        />
        <path
          d="M8.60707 15.8004L13.0343 9.4061C14.6949 7.19232 14.4548 3.55348 12.5204 1.61935C11.4751 0.573785 10.0852 -0.00195312 8.60707 -0.00195312C7.12891 -0.00195312 5.73905 0.573785 4.69378 1.61906C2.75936 3.55319 2.51925 7.19203 4.17316 9.39715L8.60707 15.8004ZM5.10185 2.02713C6.03832 1.09094 7.28301 0.575228 8.60707 0.575228C9.93112 0.575228 11.1758 1.09094 12.1123 2.02713C13.8583 3.77281 14.0733 7.05928 12.5662 9.06845L8.60707 14.7863L4.64154 9.05979C3.14087 7.05928 3.35616 3.77281 5.10185 2.02713Z"
          fill="currentColor"
        />
        <path
          d="M12.1546 12.4095C11.9958 12.3901 11.8527 12.5038 11.8342 12.6623C11.8158 12.8207 11.9289 12.9642 12.087 12.9826C15.1219 13.3399 16.7383 14.3026 16.7383 14.8605C16.7383 15.6437 13.6642 16.7363 8.65772 16.7363C3.65125 16.7363 0.577181 15.6437 0.577181 14.8605C0.577181 14.3026 2.19358 13.3399 5.2284 12.9826C5.38654 12.9642 5.49967 12.8204 5.4812 12.6623C5.46244 12.5038 5.3193 12.3896 5.16087 12.4095C2.12229 12.7673 0 13.7751 0 14.8605C0 16.0795 2.97393 17.3135 8.65772 17.3135C14.3415 17.3135 17.3154 16.0795 17.3154 14.8605C17.3154 13.7751 15.1931 12.7673 12.1546 12.4095Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 18 18",
  },
  chat: {
    path: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.45 3.57188V11.2219H3.4V12.9219C3.4 13.4319 3.74 13.7719 4.25 13.7719H13.6L17 17.1719V4.42188C17 3.91188 16.66 3.57188 16.15 3.57188H14.45ZM12.75 1.02188C12.75 0.511875 12.41 0.171875 11.9 0.171875H0.85C0.34 0.171875 0 0.511875 0 1.02188V12.9219L3.4 9.52188H11.9C12.41 9.52188 12.75 9.18188 12.75 8.67188V1.02188Z"
        fill="#F7F7F7"
      />
    ),
    viewBox: "0 0 17 18",
  },
};

const customTheme = {
  ...theme,
  fonts: {},
  colors: {
    ...theme.colors,
    wocman: {
      navBtn: "#F96662",
      navOutlineBtn: "#F96662",
      color1: "#C1867C",
      featuredService: "#F7F4F7",
      featuredServiceIconBg: "#E9F0F8",
      typography1: "#552D1E",
      typography2: "#778899",
      typography3: "#363636",
      typography4: "#4D4D4D",
      wocmanCategories: "#E8E2E7",
      team: "#E5E5E5",
      newsLetter: "#778899",
      quotes: "#D8E3FE",
      contact: "#552D1E"
    },
  },
  icons: {
    ...theme.icons,
    ...customIcons,
  },
};

export default customTheme;
