import { NuitralClass, NuitralIconPosition } from '../shared'

/**
 * Defines the properties for a single tab within the nuitral Tabs component.
 *
 * Properties:
 * - `label`: The text displayed on the tab.
 * - `iconPosition`: Determines the position of an icon within the tab. Options include `'left'` or `'right'`.
 * - `classes`: Custom CSS classes to be applied to the tab. Can be a single class name as a string or an array of class names.
 * - `disabled`: Specifies whether the tab is in a disabled state, preventing user interaction.
 * - `[key: string]: any`: Allows any additional custom attributes or properties to be passed.
 */
export interface NuitralTabProps {
	label: string
	iconPosition: NuitralIconPosition
	classes: NuitralClass
	disabled: boolean
	[key: string]: any
}