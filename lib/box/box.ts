import { NuitralClass } from '../shared';
/**
 * Defines the standard properties for a Nuitral Box component, which includes:
 * - `title`: The title displayed within the Box.
 * - `description`: A brief description or content related to the Box.
 * - `classes`: Custom CSS classes to be applied to the Box component. Can be a single class name as a string or multiple class names as an array of strings.
 * - `[key: string]: any`: Allows any additional custom attributes or properties to be passed.
 */
export interface NuitralBoxProps {
	title: string
	description: string
	classes?: NuitralClass
	[key: string]: any
}