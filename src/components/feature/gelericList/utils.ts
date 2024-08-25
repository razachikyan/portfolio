export const formatDate = (date: Date | "Present"): string => {
  return date === "Present"
    ? date
    : date.toDateString().split(" ").slice(1).join(" ");
};
