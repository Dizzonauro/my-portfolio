const primary = {
  primary100: "#ccc",
  primary300: "#999",
  primary500: "#555",
};

const secondary = {
  primary100: "#a9f04d",
  primary300: "#3ddb8f",
  primary500: "#2cb8b2",
};

const lightTheme = {
  mode: "light",
  colors: {
    background: "#F00",
    ...primary,
    ...secondary,
  },
};

export default lightTheme;
