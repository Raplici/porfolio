export const validateString = (value: unknown, maxLength: number) => {
  if (
    !value ||
    typeof value !== "string" ||
    value.length > maxLength ||
    value.trim().length === 0
  ) {
    return false;
  }
  return true;
};
