export const SHOW_CARD='SHOW_CARD';
export const HIDE_CARD='HIDE_CARD';

export function showCard() {
  return { type: SHOW_CARD };
} 

export function hideCard() {
  return { type: HIDE_CARD };
} 