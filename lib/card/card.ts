import { NuitralClass } from '../shared'

/**
 * Defines the standard properties for a nuitral Card component.
 *
 * Properties:
 * - `classes` (optional): Custom CSS classes to be applied to the Box component. Can be a single class name as a string or multiple class names as an array of strings.
 * - `hasShadow` (optional): If `true`, the Card will display a shadow (box-shadow), and the border will be removed (set to none). If `false` or not provided, the Card will render a border. If no specific `border-*` color is provided, the default border color will be used (`border-primary`).
 * - `[key: string]: any` (optional): Allows any additional custom attributes or properties to be passed, extending the base interface with more flexibility.
 */
export interface NuitralCardProps {
	classes?: NuitralClass
	hasShadow?: boolean
	[key: string]: any
}
