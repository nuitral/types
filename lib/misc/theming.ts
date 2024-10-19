/**
 * Defines the properties for configuring the theming and light/dark mode.
 *
 * Properties:
 * - `theme` (optional): The name of the theme to be applied. This can be used to set custom themes. The default value is `'nuitral'`.
 * - `darkMode` (optional): A boolean value indicating whether dark mode is enabled by default. If `true`, dark mode will be applied. The default value is `false`.
 * - `lightModeName` (optional): The style sheet class name to be applied when light mode is active. The default is `'nuitral-light-mode'`.
 * - `darkModeName` (optional): The style sheet class name to be applied when dark mode is active. The default is `'nuitral-dark-mode'`.
 * - `rootId` (optional): The ID of the HTML element where the theme and mode will be applied. This element's styles will be dynamically modified according to the selected theme and mode. The default value is `'nuitral-app'`.
 * - `saveSettings` (optional): A boolean indicating whether the theme and dark mode settings should be saved to and loaded from localStorage. If `true`, the settings will persist across page reloads. The default value is `false`.
 */
export interface NuitralThemingOptions {
	theme?: string
	darkMode?: boolean
	lightModeName?: string
	darkModeName?: string
	rootId?: string
	saveSettings?: boolean
}
