import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export function maskifyCreditCard(value: string, placeholder: string = "*") {
  const length = value.length;
  if (length <= 8) {
    return value; // Not enough digits to mask
  }
  const firstFour = value.slice(0, 4);
  const lastFour = value.slice(-4);
  const maskedSection = `${placeholder.repeat(4)} ${placeholder.repeat(4)}`;
  return `${firstFour} ${maskedSection} ${lastFour}`;
}
