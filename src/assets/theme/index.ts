const colors = {
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#fef7ff",
  background_dark: "#292729",
  primary: "#221202",
  primary_bubble: "#755377",
  green: "green",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
  lighterShade: '#8a6898',
  darkerShade: '#5e2f60',
  primaryGradient: `linear-gradient(45deg, #875F8B, #B493B8)`, 
  violeto: "#875F8B",
}



const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
}

const letterSpacing = {
  title: "0.1px",
  button: "1px",
}


const fonts = {
  size: {
    XXXS: "8px",
    XXS: "10px",
    XS: "12px",
    P0: "15px",
    P1: "18px",
    P2: "20px",
    P3: "24px",
    P4: "36px",
    P5: "48px",
    P6: "60px",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heavy: 800,
  },
}

const gridUnit = 8
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
}
const shadows = {
  title : "1px 1px 0px rgb(255, 255, 255)"
}

const border = {
  light: `1px solid ${colors.greyLight}`,
  medium: `1px solid ${colors.greyMedium}`,
  dark: `1px solid ${colors.greyDark}`,
  white : `2px solid ${colors.white}`
}

export const theme = {
  border,
  borderRadius,
  colors,
  fonts,
  gridUnit,
  letterSpacing,
  shadows,
  spacing,
}
