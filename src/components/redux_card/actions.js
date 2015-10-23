export const SHOW_CARD='SHOW_CARD';
export const HIDE_CARD='HIDE_CARD';
export const TOGGLE_CARD='TOGGLE_CARD';

export function showCard() {
  return { type: SHOW_CARD };
} 

export function hideCard(pid) {
  return { type: HIDE_CARD,id:pid };
}

export function toggleCard() {
  return { type: TOGGLE_CARD };
}  