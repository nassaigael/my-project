import { useEffect } from 'react';

interface UseThemeReturn {
    isDark: boolean;
    isLight: boolean;
}

export const useTheme = (): UseThemeReturn => {
    useEffect(() => {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
    }, []);

    return {
        isDark: true,
        isLight: false
    };
};