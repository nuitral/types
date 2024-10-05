import { NuitralClass } from '../shared'

/**
 * Defines the standard properties for a nuitral Box component.
 *
 * Properties:
 * - `title`: The title displayed within the Box.
 * - `description`: A brief description or content related to the Box.
 * - `classes` (optional): Custom CSS classes to be applied to the Box component. Can be a single class name as a string or multiple class names as an array of strings.
 * - `[key: string]: any` (optional): Allows any additional custom attributes or properties to be passed, extending the base interface with more flexibility.
 */
export interface NuitralBoxProps {
	title: string
	description: string
	classes?: NuitralClass
	[key: string]: any
}
