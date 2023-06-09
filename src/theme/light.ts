const primary = {
  primary100: "#56565a",
  primary300: "#2c2c31",
  primary500: "#28282d",
};

const secondary = {
  secondary100: "#45ADA8",
  secondary200: "#1D7B6B",
  secondary300: "#FFD166",
};

const lightTheme = {
  mode: "light",
  colors: {
    background: "#d8cbf7",
    hover: "#0ccaba",
    ...primary,
    ...secondary,
  },
};

export default lightTheme;
