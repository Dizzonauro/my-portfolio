import backgroundLight from "../assets/imgs/backgroundLight.svg";

const primary = {
  primary100: "#fff",
  primary200: "#2c2c31",
  primary300: "#28282d",
};

const secondary = {
  secondary100: "#45ADA8",
  secondary200: "#1D7B6B",
  secondary300: "#FFD166",
};

const lightTheme = {
  mode: "light",
  colors: {
    background: "#50a1d9",
    secondaryBackground: "#3c6eb4",
    svg: `url(${backgroundLight})`,
    ...primary,
    ...secondary,
  },
};

export default lightTheme;
