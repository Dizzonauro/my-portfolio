const primary = {
  primary100: "#fff",
  primary200: "#fff",
  primary300: "#28282d",
};

const secondary = {
  secondary100: "#45ADA8",
  secondary200: "#FF8E71",
  secondary300: "#A18CD1",
};

const darkTheme = {
  mode: "dark",
  colors: {
    background: "#294273",
    secondaryBackground: "#3b6db3",
    hover: "#c0d860",
    ...primary,
    ...secondary,
  },
};

export default darkTheme;
