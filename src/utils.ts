export const isDevelopmentMode = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";
