import { NuitralClass } from '../shared'

/**
 * Defines the properties for the nuitral Tabs component.
 *
 * Properties:
 * - `classes`: Custom CSS classes to be applied to the tabs component. Can be a single class name as a string or an array of class names.
 * - `selected`: The index (zero-based) of the currently selected tab.
 * - `disabled`: Specifies whether the tabs should be rendered in a disabled state, preventing user interaction.
 */
export interface NuitralTabsProps {
	classes: NuitralClass
	selected: number
	disabled: boolean
}