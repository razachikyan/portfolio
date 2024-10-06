export const formatDate = (date: Date | "Present"): string => {
  return date === "Present"
    ? date
    : date.toLocaleString("en-US", { year: "numeric", month: "long" });
};
