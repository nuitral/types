/**
 * Defines the standard type for button types, which can be one of: 'button', 'submit', 'reset', or undefined.
 */
export enum GeneralButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}
export type NuitralButtonType = GeneralButtonType | undefined;
/**
 * Defines the position of the icon into the button, wich can be one of: 'left' or 'right'
 */
export enum NuitralIconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}
