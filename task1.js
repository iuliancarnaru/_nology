/*

- nested functions are hard to test
- we modify original data (which is a bad practice)
- we don't use new JS features like map, filter, reduce
- we don't use ES6 import / export
- nested if's are hard to follow

*/

import brandStore from "./brand-store";
import Color from "color";

const defaultColours = [
  { name: "primary", value: "#333" },
  { name: "secondary", value: "#222" },
  { name: "tertiary", value: "#555" },
];

const defaultBodyFont = "Lato";
const allowedFonts = ["lato", "arial", "helvetica", "courier"];

const convertToRgb = (hexColorCode) => Color(hexColorCode).rgb().string();

const convertAllColors = (arr) =>
  arr.map((item) => ({ name: item.name, value: convertToRgb(item.value) }));

const validateBodyFont = (fontsArr, font) =>
  fontsArr.includes(font.toLowerCase());

const buildTheme = (colours = defaultColours, bodyFont = defaultBodyFont) => ({
  colours: convertAllColors(colours),
  bodyFont: validateBodyFont(bodyFont, allowedFonts),
});

export const getBranding = ({ brandId }) => {
  if (brandId) const brands = brandStore.getAll();

  let brandDetails = brands
    .filter((brand) => brand.id === brandId)
    .map((brand) => brand);

  return !brands.length || !brandDetails
    ? buildTheme(defaultColours, defaultBodyFont)
    : buildTheme(brandDetails.colours, brandDetails.bodyFont);
};
