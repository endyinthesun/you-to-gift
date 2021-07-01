import { scaleFont } from "./mixins";

// FONT FAMILY
export const FONT_FAMILY_REGULAR = "SFUIDisplayRegular";
export const FONT_FAMILY_MEDIUM = "SFUIDisplayMedium";
export const FONT_FAMILY_SEMIBOLD = "SFUIDisplaySemibold";
export const FONT_FAMILY_BOLD = "SFUIDisplayBold";

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = "400";
export const FONT_WEIGHT_BOLD = "700";

// FONT SIZE
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_13 = scaleFont(13);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};
