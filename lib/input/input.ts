import { NuitralClass, NuitralIconPosition } from '../shared';

/**
 * Defines the possible types for an input element.
 *
 * Possible values:
 * - `'text'`: Represents a standard text input field.
 * - `'number'`: Represents an input field for numerical values.
 * - `'password'`: Represents an input field for password entry, where the text is obscured.
 */
export type NuitralInputType = 'text' | 'number' | 'password'

/**
 * Defines the standard properties for a nuitral Input component.
 *
 * Properties:
 * - `type` (optional): Specifies the input field type. Options include 'text', 'number', or 'password'. The default value is `text`.
 * - `placeholder` (optional): Provides a hint to the user regarding the expected input. The placeholder text appears in the input field until the user begins typing.
 * - `iconPosition` (optional): Determines the position of an icon within the input. Options include 'left' or 'right'. The default value is `left`.
 * - `disabled` (optional): Specifies whether the input should be rendered in a disabled state, preventing user interaction. The default value is `false`.
 * - `classes` (optional): Custom CSS classes to be applied to the input. Can be a single class name as a string or an array of class names.
 */
export interface NuitralInputProps {
  type?: NuitralInputType
  placeholder?: string
  iconPosition?: NuitralIconPosition
  disabled?: boolean
  classes?: NuitralClass
}
