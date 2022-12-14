import React from 'react';

const getInitialTheme = () => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('color-theme');
		if (typeof storedPrefs === 'string') {
			return storedPrefs;
		}

		const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
		if (userMedia.matches) {
			return 'dark';
		}
	}

	return 'light'; // light theme as the default;
};
const defaultValue = {
	currentTheme: 'light',
	changeCurrentTheme: (newTheme: 'light' | 'dark') => {},
};

export const ThemeContext = React.createContext(defaultValue);
interface IThemeProvider {
	initialTheme?: string;
	children: React.PropsWithChildren<React.ReactNode>;
}

const ThemeProvider = ({ initialTheme, children }: IThemeProvider) => {
	const [theme, setTheme] = React.useState(getInitialTheme);

	const rawSetTheme = (rawTheme: string) => {
		const root = window.document.documentElement;
		const isDark = rawTheme === 'dark';

		root.classList.remove(isDark ? 'light' : 'dark');
		root.classList.add(rawTheme);

		localStorage.setItem('color-theme', rawTheme);
	};

	if (initialTheme) {
		rawSetTheme(initialTheme);
	}

	React.useEffect(() => {
		rawSetTheme(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{
				currentTheme: theme,
				changeCurrentTheme: setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
