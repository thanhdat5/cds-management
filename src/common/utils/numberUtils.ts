/**
 * Formats a number using locale-specific formatting.
 * If the input is a valid number, it will be formatted according to the system's locale.
 * If the input is a string or an invalid number, it will be returned as is.
 * 
 * @param value - The number or string to format
 * @returns The formatted number as a string if input is a valid number, otherwise returns the input value unchanged
 */
export function formatNumber(value: string | number): string | number {
  if (typeof value === "number" && !Number.isNaN(value)) {
    return value.toLocaleString();
  }
  return value;
}
