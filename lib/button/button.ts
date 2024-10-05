import { NuitralClass } from '../shared'

/**
 * Defines the standard type for button actions, which can be:
 * - `'button'`: Represents a standard button that does not submit form data.
 * - `'submit'`: Represents a button that submits form data.
 * - `'reset'`: Represents a button that resets the form fields.
 * - `undefined`: Allows the type to be optional, resulting in no explicit type attribute being set.
 */
export type GeneralButtonType = 'button' | 'submit' | 'reset'

/**
 * Extends the general button type with an optional state.
 * - `NuitralButtonType` can be a standard button type or undefined.
 */
export type NuitralButtonType = GeneralButtonType | undefined

/**
 * Defines the position of the icon within the button, which can be one of the following:
 * - `'left'`: The icon is placed to the left of the button content.
 * - `'right'`: The icon is placed to the right of the button content.
 */
export type NuitralIconPosition = 'left' | 'right'

/**
 * Defines the standard properties for a nuitral Button component.
 *
 * Properties:
 * - `classes` (optional): Custom CSS classes to be applied to the button. Can be a single class name as a string or an array of class names.
 * - `type` (optional): Specifies the button's type attribute. Options include 'button', 'submit', or 'reset'. If not provided, the default is `undefined`.
 * - `iconPosition` (optional): Determines the position of the icon within the button. Possible values are 'left' or 'right'.
 * - `disabled` (optional): Specifies whether the button should be rendered in a disabled state, preventing user interaction.
 * - `[key: string]: any` (optional): Allows any additional custom attributes or properties to be passed.
 */
export interface NuitralButtonProps {
	classes?: NuitralClass
	type?: NuitralButtonType
	iconPosition?: NuitralIconPosition
	disabled?: boolean
	[key: string]: any
}
